# Portfolio IT Professional

HTML5 + CSS3 + JavaScript Vanilla, tanpa framework dan tanpa build step.

## 1. Struktur folder
```
portfolio/
├── index.html          # struktur & SEO
├── css/style.css       # tema, layout, responsive
├── js/script.js        # DATA (konten) + semua interaksi
├── assets/images/      # profile.jpg
├── assets/icons/
├── assets/documents/   # CV.pdf
└── README.md
```

## 2. Menjalankan
Buka `index.html` di browser, atau pakai VS Code "Live Server" / Laragon / XAMPP (`htdocs/portfolio`).

## 3. Yang harus diganti
Cari (Ctrl+Shift+F) placeholder berikut di `index.html` dan `js/script.js`:
`[NAMA ANDA]` `[PROFESI]` `[EMAIL]` `[NOMOR TELEPON]` `[ALAMAT]` `[GITHUB]` `[LINKEDIN]` `[INSTAGRAM]` `[NAMA SEKOLAH/UNIVERSITAS]` `[NAMA PERUSAHAAN]` `[LIVE DEMO URL]` `[ISI ...]`.
Angka statistik, level skill, pengalaman, dan sertifikat ada di objek `DATA` pada `js/script.js`. Sesuaikan agar jujur dan realistis.

## 4. Foto profil
Simpan foto persegi (min. 600x600 px, ringan, < 200 KB) sebagai `assets/images/profile.jpg`.

## 5. Menambah project
Di `js/script.js`, tambahkan objek baru di `DATA.projects` (`cat` = web / database / network / system / it support). Kartu dan modal terbentuk otomatis.

## 6. Link GitHub / LinkedIn
Ganti `[GITHUB]`, `[LINKEDIN]`, `[INSTAGRAM]` dengan URL lengkap (`https://github.com/username`). Di modal project, link ada di fungsi `initProjects` pada `script.js`.

## 7. Mengganti CV
Timpa `assets/documents/CV.pdf` dengan CV Anda (nama file sama).

## 8. Deploy
- **GitHub Pages**: push folder ke repo, Settings > Pages > branch `main`.
- **Netlify / Vercel / Cloudflare Pages**: drag-and-drop folder `portfolio`.
- **Hosting cPanel**: upload isi folder ke `public_html` via File Manager/FTP.

## Catatan
- Form kontak masih **simulasi** (tidak mengirim email). Sambungkan ke Formspree atau skrip PHP `mail()` jika ingin aktif.
- Tema (dark/light) tersimpan di localStorage.
