// lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

export type Testimoni = {
  id: number;
  nama: string;
  lokasi: string;
  layanan: string;
  ulasan: string;
  created_at: string;
  approved: boolean;
};

// Lazy getter — tidak throw saat build time, hanya saat runtime API dipanggil
function getSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be set."
    );
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}

// Singleton — dibuat sekali saat pertama kali dipakai
let _supabase: ReturnType<typeof getSupabase> | null = null;

export function getSupabaseClient() {
  if (!_supabase) {
    _supabase = getSupabase();
  }
  return _supabase;
}

// Backward-compat: export `supabase` sebagai getter property
// Digunakan di route.ts sebagai `supabase.from(...)`
export const supabase = new Proxy({} as ReturnType<typeof createClient>, {
  get(_target, prop) {
    return getSupabaseClient()[prop as keyof ReturnType<typeof createClient>];
  },
});
