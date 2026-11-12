# Portofolio Razi Syahriful Zanah

Website portofolio pribadi Razi Syahriful Zanah, Full-Stack Developer dengan minat pada UI/UX, Linux, jaringan, dan IT Support. Situs ini menampilkan profil, keahlian, pengalaman, proyek, pendidikan, sertifikasi, dan informasi kontak.

**Website:** [razilibra.github.io/portofolio.co.io](https://razilibra.github.io/portofolio.co.io/)

## Daftar Isi

- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Struktur Proyek](#struktur-proyek)
- [Menjalankan Secara Lokal](#menjalankan-secara-lokal)
- [Publikasi ke GitHub Pages](#publikasi-ke-github-pages)
- [Kustomisasi Konten](#kustomisasi-konten)
- [Aset](#aset)
- [Kontak](#kontak)

## Fitur

- Halaman profil dengan foto, ringkasan, dan tombol unduh CV.
- Bagian tentang, keahlian, pengalaman, pendidikan, sertifikasi, dan kontak.
- Linimasa proyek, termasuk sistem verifikasi sertifikat digital berbasis blockchain dan pengalaman di Inovansa.
- Galeri tiga gambar produk Inovansa: situs Inovansa, Inventory, dan NgajarBeres.
- Tata letak responsif untuk desktop dan perangkat seluler.
- Animasi saat konten masuk ke layar, dengan dukungan preferensi pengurangan gerakan.
- Navigasi responsif menggunakan Bootstrap.
- Metadata dasar untuk judul halaman, deskripsi, dan warna tema.

## Teknologi

- HTML5 untuk struktur halaman.
- CSS3 untuk tema, tata letak, dan animasi.
- JavaScript untuk interaksi navigasi, animasi reveal, dan tahun footer.
- [Bootstrap 5.3.3](https://getbootstrap.com/) dan [Bootstrap Icons 1.11.3](https://icons.getbootstrap.com/) melalui CDN.
- Google Fonts: Manrope, DM Sans, dan DM Mono.
- GitHub Actions dan GitHub Pages untuk publikasi otomatis.

Proyek ini berupa situs statis dan tidak memerlukan framework JavaScript, server aplikasi, atau proses build.

## Struktur Proyek

```text
.
├── .github/
│   └── workflows/
│       └── static.yml
├── CV_Razi_Syahriful_Zanah_FullStack_UIUX_Linux_ITSupport.pdf
├── Inovansa.png
├── foto-razi animasi.jpeg
├── index.html
├── inovansa 3.png
├── inovansa inventory.png
├── script.js
├── styles.css
└── README.md
```

| File/folder | Keterangan |
| --- | --- |
| `index.html` | Konten dan struktur semua bagian portofolio. |
| `styles.css` | Gaya visual, tata letak responsif, dan animasi. |
| `script.js` | Tahun footer, animasi reveal, dan perilaku menu seluler. |
| `CV_Razi_Syahriful_Zanah_FullStack_UIUX_Linux_ITSupport.pdf` | CV yang ditautkan pada tombol unduh. |
| `foto-razi animasi.jpeg` | Foto profil di bagian hero. |
| `Inovansa.png` | Gambar situs Inovansa pada galeri pengalaman. |
| `inovansa inventory.png` | Gambar produk Inventory pada galeri pengalaman. |
| `inovansa 3.png` | Gambar produk NgajarBeres pada galeri pengalaman. |
| `.github/workflows/static.yml` | Workflow deployment ke GitHub Pages. |

## Menjalankan Secara Lokal

1. Clone repositori:

   ```bash
   git clone https://github.com/Razilibra/portofolio.co.io.git
   cd portofolio.co.io
   ```

2. Buka `index.html` langsung di browser, atau buka folder proyek di VS Code dan gunakan ekstensi server lokal statis jika tersedia.

Tidak ada langkah instalasi dependensi atau kompilasi. Bootstrap, ikon, dan font dimuat dari CDN, sehingga koneksi internet diperlukan agar semua aset eksternal tampil.

## Publikasi ke GitHub Pages

Workflow pada `.github/workflows/static.yml` menjalankan deployment setiap ada perubahan yang di-push ke branch `main`. Workflow juga dapat dijalankan secara manual dari tab **Actions** di GitHub.

Untuk menerbitkan perubahan:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Setelah push, buka tab **Actions** pada repositori untuk melihat status workflow **Deploy static content to Pages**. Situs akan diperbarui setelah proses deployment berhasil. Pastikan GitHub Pages pada pengaturan repositori menggunakan sumber **GitHub Actions**.

## Kustomisasi Konten

- **Profil, pengalaman, proyek, pendidikan, dan kontak:** edit bagian terkait di `index.html`.
- **Foto profil atau gambar galeri:** ganti file aset atau perbarui atribut `src` pada elemen gambar di `index.html`. Pertahankan ejaan nama file dan kapitalisasi yang sesuai.
- **CV:** ganti PDF atau perbarui tautan unduhan di `index.html`.
- **Warna, ukuran, dan tata letak:** ubah variabel CSS di bagian `:root` dan aturan terkait di `styles.css`.
- **Interaksi dan animasi:** ubah kode di `script.js`; pastikan animasi tetap menghormati preferensi `prefers-reduced-motion`.
- **Metadata halaman:** perbarui elemen `description`, `theme-color`, dan `title` di bagian `<head>` pada `index.html`.

Gunakan jalur relatif untuk file lokal agar aset tetap dapat dimuat saat situs di-host di GitHub Pages.

## Aset

Foto profil, tangkapan layar proyek, dan CV disimpan di repositori dan dimuat dengan jalur relatif. Bootstrap, Bootstrap Icons, dan Google Fonts dimuat melalui layanan CDN masing-masing.

## Kontak

- Email: [razizanah@gmail.com](mailto:razizanah@gmail.com)
- LinkedIn: [Razi Syahriful Zanah](https://linkedin.com/in/razi-syahriful-zanah-6aba362a3)
- GitHub: [razilibra](https://github.com/razilibra)
