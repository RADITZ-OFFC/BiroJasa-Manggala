-- ============================================================
-- Tabel: testimoni
-- Jalankan query ini di Supabase SQL Editor
-- Dashboard → SQL Editor → New Query → paste → Run
-- ============================================================

create table if not exists public.testimoni (
  id          bigserial primary key,
  nama        text        not null check (char_length(nama)    between 2 and 80),
  lokasi      text        not null check (char_length(lokasi)  between 2 and 100),
  layanan     text        not null check (char_length(layanan) between 2 and 120),
  ulasan      text        not null check (char_length(ulasan)  between 3 and 1000),
  approved    boolean     not null default false,
  created_at  timestamptz not null default now()
);

-- Index untuk query yang sering dipakai (filter approved + sort by date)
create index if not exists testimoni_approved_created_idx
  on public.testimoni (approved, created_at desc);

-- ── Row Level Security ──────────────────────────────────────
alter table public.testimoni enable row level security;

-- Siapa saja (anon) boleh INSERT (kirim ulasan baru)
create policy "Pelanggan bisa kirim ulasan"
  on public.testimoni
  for insert
  to anon
  with check (true);

-- Siapa saja boleh SELECT tapi hanya yang approved = true
create policy "Publik hanya lihat ulasan yang disetujui"
  on public.testimoni
  for select
  to anon
  using (approved = true);

-- ── Catatan untuk admin ─────────────────────────────────────
-- Untuk approve ulasan, jalankan di SQL Editor:
--   update public.testimoni set approved = true where id = <id>;
--
-- Atau buka Table Editor di dashboard Supabase,
-- klik baris yang ingin disetujui, ubah kolom approved ke true.
-- ============================================================
