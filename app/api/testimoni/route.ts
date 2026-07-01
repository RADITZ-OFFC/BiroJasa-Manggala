// app/api/testimoni/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/* ── GET — ambil semua testimoni yang sudah approved ── */
export async function GET() {
  const { data, error } = await supabase
    .from("testimoni")
    .select("id, nama, lokasi, layanan, ulasan, created_at")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, {
    headers: {
      // cache 60 detik di browser, revalidate di background
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
    },
  });
}

/* ── POST — simpan testimoni baru dari pelanggan ── */
export async function POST(req: NextRequest) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body tidak valid." }, { status: 400 });
  }

  const { nama, lokasi, layanan, ulasan } = body as Record<string, unknown>;

  // Validasi sederhana
  if (
    typeof nama !== "string" || nama.trim().length < 2 ||
    typeof lokasi !== "string" || lokasi.trim().length < 2 ||
    typeof layanan !== "string" || layanan.trim().length < 2 ||
    typeof ulasan !== "string" || ulasan.trim().length < 3
  ) {
    return NextResponse.json(
      { error: "Semua kolom wajib diisi dengan benar." },
      { status: 422 }
    );
  }

  // Batasi panjang untuk mencegah spam
  if (nama.trim().length > 80 || lokasi.trim().length > 100 || layanan.trim().length > 120 || ulasan.trim().length > 1000) {
    return NextResponse.json(
      { error: "Input melebihi batas karakter yang diizinkan." },
      { status: 422 }
    );
  }

  const { error } = await supabase.from("testimoni").insert({
    nama: nama.trim(),
    lokasi: lokasi.trim(),
    layanan: layanan.trim(),
    ulasan: ulasan.trim(),
    approved: true, // langsung tampil tanpa perlu approve manual
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(
    { message: "Terima kasih! Ulasan kamu sedang kami tinjau." },
    { status: 201 }
  );
}
