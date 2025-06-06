# Template Open Source Next.js

Proyek ini adalah template restoran berbasis [Next.js](https://nextjs.org/) yang siap dikembangkan lebih lanjut untuk kebutuhan open source. Template ini sudah terintegrasi dengan berbagai alat modern seperti TypeScript, Tailwind CSS, Zustand, dan lain-lain.

## Fitur Utama

- **Next.js 14**: Framework React modern untuk SSR/SSG.
- **TypeScript**: Penulisan kode lebih aman dan terstruktur.
- **Tailwind CSS**: Utility-first CSS framework untuk styling cepat.
- **Zustand**: State management sederhana dan efisien.
- **Framer Motion**: Animasi React yang powerful.
- **Struktur Modular**: Komponen dan modul terorganisir rapi.
- **Siap untuk Open Source**: Mudah dikembangkan dan dikontribusi.

---

## Persyaratan Instalasi

Pastikan Anda sudah menginstal:

- [Node.js](https://nodejs.org/) (disarankan versi 18+)
- [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/) (pilih salah satu)

---

## Langkah Instalasi

1. **Clone repository:**
   ```bash
   git clone https://github.com/Ryansaja/open-source.git
   cd open-source
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # atau
   yarn
   # atau
   pnpm install
   ```

3. **Jalankan server development:**
   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

## Struktur Folder

```
src/
  app/         # Routing & halaman utama (Next.js App Router)
  components/  # Komponen UI & modul (modular)
  hooks/       # Custom React hooks
  stores/      # State management (Zustand)
  styles/      # File styling (SCSS & Tailwind)
  utils/       # Utility/helper functions
public/        # File statis (gambar, favicon, dll)
```

### Penjelasan Modul

- **app/**: Entry point aplikasi, layout, dan halaman (page.tsx, layout.tsx, dll).
- **components/modules/**: Komponen modular seperti `CardFeature`, `CardTestimonial`, dan modul produk (`Product.tsx`, `TabsProduct.tsx`).
- **stores/**: Contoh penggunaan Zustand untuk state tab menu.
- **hooks/**: Custom hook seperti `useMediaQuery`.
- **styles/**: Struktur SCSS dan konfigurasi Tailwind untuk styling.
- **utils/**: Utility kecil, misal props helper.

---

## Konfigurasi Penting

- **TypeScript**: Lihat `tsconfig.json` untuk path alias dan strict mode.
- **Tailwind CSS**: Lihat `tailwind.config.js` untuk custom color dan konfigurasi content.
- **Next.js**: Lihat `next.config.js` untuk pengaturan domain gambar.

---

## Cara Kontribusi

1. Fork repo ini.
2. Buat branch baru untuk fitur/bugfix Anda.
3. Commit perubahan dan push ke branch Anda.
4. Buat Pull Request ke repo utama.

---

## Lisensi

Proyek ini open source dengan lisensi [MIT](LICENSE).

---

## Kontak & Dukungan

Silakan buat issue di GitHub untuk pertanyaan, bug, atau saran fitur.
