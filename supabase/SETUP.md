# Setup Supabase untuk Fitur Testimoni

## 1. Buat project Supabase

1. Buka [supabase.com](https://supabase.com) → **New Project**
2. Isi nama project, password database, pilih region terdekat (Singapore)
3. Tunggu project selesai dibuat (~1 menit)

---

## 2. Jalankan SQL schema

1. Di dashboard Supabase → **SQL Editor** → **New Query**
2. Copy-paste isi file `supabase/schema.sql`
3. Klik **Run**

---

## 3. Ambil API keys

1. Di dashboard → **Project Settings** → **API**
2. Copy dua nilai ini:
   - **Project URL** → `https://xxxx.supabase.co`
   - **anon public key** → string panjang

---

## 4. Isi file `.env.local`

Buka file `.env.local` di root project, isi dengan nilai tadi:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Restart dev server setelah mengubah `.env.local`.

---

## 5. Cara approve ulasan pelanggan

Ulasan yang masuk **tidak langsung tampil** — perlu disetujui admin dulu.

**Cara approve:**
- Buka Supabase dashboard → **Table Editor** → tabel `testimoni`
- Klik baris ulasan yang ingin ditampilkan
- Ubah kolom `approved` dari `false` → `true`
- Simpan

Atau via SQL Editor:
```sql
update public.testimoni set approved = true where id = 1;
```

---

## Struktur tabel

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | bigserial | Primary key otomatis |
| nama | text | Nama pelanggan |
| lokasi | text | Kota / kecamatan |
| layanan | text | Layanan yang diurus |
| ulasan | text | Isi ulasan |
| approved | boolean | Default false, ubah ke true untuk tampilkan |
| created_at | timestamptz | Waktu submit otomatis |
