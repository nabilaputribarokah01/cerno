# Cerno

**Nama Kelompok**  
**LAB 1.2 PERUMUSAN PERMASALAHAN**

**Anggota dan NIM Kelompok**  
1. Galang Swastika Ramadhan - 24/538251/TK/59692
2. Farand Hafiz - 24/538251/TK/59692
3. Nabila Putri Barokah - 24/541890/TK/60132

**Project Senior Project TI**

Departemen Teknik Elektro dan Teknologi Informasi, Fakultas Teknik, Universitas Gadjah Mada

[Modul 1_26.pdf](./Modul%201_26.pdf)
[Modul 2_26.pdf](./Modul%202_26.pdf)

# MODUL 2

### Metodologi SDLC

Metodologi yang digunakan dalam pengembangan Cerno adalah **Agile dengan kerangka kerja Scrumban**. Metodologi ini dipilih karena pengembangan Cerno melibatkan beberapa komponen yang perlu dikembangkan dan diuji secara bertahap, seperti baseline model AI, OCR, analisis risiko, database, serta layanan eksternal.

Scrumban menggabungkan struktur perencanaan dari Scrum dengan fleksibilitas dan visualisasi alur kerja dari Kanban. Pendekatan ini memungkinkan tim untuk membagi pekerjaan dengan jelas, membatasi pekerjaan yang sedang berlangsung, melakukan evaluasi secara berkala, serta menyesuaikan prioritas berdasarkan kebutuhan dan dependensi pekerjaan.

Pemilihan Scrumban juga sesuai dengan kondisi tim yang berukuran kecil. Dengan adanya pembatasan pekerjaan aktif, setiap anggota dapat lebih fokus terhadap tugas yang sedang dikerjakan. Selain itu, hasil pengembangan dapat ditinjau secara berkala sehingga apabila ditemukan kendala pada model AI, OCR, maupun layanan pihak ketiga, tim dapat melakukan penyesuaian dan perbaikan pada tahap berikutnya.

### Tujuan Produk

Cerno merupakan aplikasi web yang ditujukan untuk membantu pengguna dalam menilai tingkat risiko dari sebuah pesan teks, tautan, maupun tangkapan layar percakapan berbahasa Indonesia sebelum pengguna mengeklik tautan atau melakukan transaksi.

Sistem memberikan hasil berupa tingkat risiko, skor risiko terukur, indikator yang ditemukan, serta rekomendasi tindakan yang dapat dilakukan pengguna. Cerno tidak bertujuan memberikan kepastian mutlak bahwa suatu pesan aman atau merupakan penipuan, tetapi membantu pengguna memahami risiko berdasarkan indikator yang ditemukan sebelum mengambil tindakan.

### Pengguna Potensial

Cerno memiliki beberapa kelompok pengguna dengan kebutuhan yang berbeda, yaitu:

**Pengunjung**  
  Pengunjung merupakan pengguna umum yang dapat menganalisis teks pesan, URL, maupun tangkapan layar. Pengunjung juga dapat mengoreksi hasil teks OCR, melihat hasil analisis dan tingkat risiko, mengirimkan laporan komunitas secara anonim, serta memberikan feedback terhadap hasil analisis.

**Pengguna Berakun**  
  Pengguna berakun memiliki seluruh kemampuan pengunjung dan memperoleh fitur tambahan berupa penyimpanan riwayat analisis. Pengguna dapat melihat detail hasil analisis sebelumnya serta menghapus riwayat pribadi yang dimilikinya.

**Moderator**  
  Moderator bertugas melakukan peninjauan terhadap laporan komunitas yang telah dibuat secara anonim dan melalui proses redaksi. Moderator dapat menentukan apakah suatu laporan diterima, ditolak, atau dikategorikan sebagai duplikat, serta meninjau feedback pengguna.

**Admin**  
  Admin bertanggung jawab terhadap pemantauan sistem secara keseluruhan. Admin dapat memantau statistik operasional melalui dashboard, mengevaluasi performa model AI, mengidentifikasi kegagalan layanan OCR atau layanan pihak ketiga, serta melakukan moderasi sistem secara penuh.

### Use Case

Use case Cerno dirancang untuk menggambarkan interaksi antara setiap jenis pengguna dengan sistem berdasarkan fungsi dan kebutuhan masing-masing.

Proses utama sistem berfokus pada analisis risiko. Pengguna dapat memberikan input berupa teks, URL, atau tangkapan layar percakapan. Untuk tangkapan layar, sistem melakukan ekstraksi teks menggunakan OCR yang kemudian harus ditinjau dan dapat dikoreksi oleh pengguna sebelum proses analisis dilakukan.

Setelah input siap dianalisis, sistem memproses data untuk menghasilkan tingkat risiko, skor risiko, indikator yang ditemukan, serta rekomendasi tindakan. Selain proses analisis utama, CERNO juga menyediakan fitur akun, riwayat analisis, laporan komunitas, feedback, moderasi, dan dashboard admin.

### Functional Requirements

Functional requirements yang dirancang untuk Cerno meliputi:

- Sistem dapat mengekstrak teks dari input yang diberikan pengguna.
- Sistem meminta pengguna untuk meninjau atau mengoreksi hasil OCR sebelum analisis akhir dilakukan.
- Sistem menghasilkan indikator risiko, skor, dan tingkat risiko beserta rekomendasi tindakan.
- Sistem dapat terhubung dengan database threat intelligence untuk mencari reputasi URL.
- Sistem menyediakan fitur pembuatan kredensial dan login bagi pengguna berakun.
- Sistem menyediakan penyimpanan, penampilan detail, dan penghapusan riwayat analisis pribadi.
- Sistem menyediakan formulir laporan komunitas secara anonim serta fitur feedback.
- Sistem menyediakan dashboard yang memuat statistik layanan OCR dan informasi yang diperlukan untuk kebutuhan moderasi serta pemantauan sistem.

### Entity Relationship Diagram

Perancangan Entity Relationship Diagram digunakan untuk menggambarkan struktur data dan hubungan antarentitas yang digunakan dalam Cerno.

Database mencakup data yang berkaitan dengan analisis, OCR, model, feedback, riwayat pengguna, laporan komunitas, moderasi, dan audit. Struktur tersebut dirancang untuk mendukung penyimpanan data operasional sekaligus mendukung proses analisis risiko dan penyajian bukti melalui konsep **Explainable Risk Score**.

### Low-Fidelity Wireframe

Low-fidelity wireframe digunakan untuk merancang struktur dan alur antarmuka Cerno sebelum masuk ke tahap implementasi.

Halaman yang dirancang meliputi:

- **Homepage**, sebagai halaman awal dan akses menuju fitur utama.
- **Dashboard**, untuk menampilkan informasi dan statistik sistem.
- **Analisis**, sebagai halaman untuk memasukkan teks, URL, maupun tangkapan layar.
- **Hasil**, untuk menampilkan tingkat risiko, skor, indikator, dan rekomendasi.
- **Laporkan**, untuk mengirimkan laporan komunitas secara anonim.
- **Admin Page**, untuk kebutuhan pemantauan dan moderasi sistem.

Perancangan antarmuka juga memperhatikan adanya proses peninjauan hasil OCR sebelum analisis akhir dilakukan agar pengguna dapat memperbaiki hasil ekstraksi teks apabila terdapat kesalahan.

### Gantt Chart

Perencanaan pengembangan Cerno dilakukan dalam kurun waktu satu semester dengan tahapan yang disesuaikan berdasarkan kebutuhan dan dependensi antarbagian sistem.

Tahapan pengembangan mencakup pengembangan baseline model AI dan rule-based indicator, pembangunan alur URL lexical analysis dan threat-intelligence lookup, perancangan database PostgreSQL, pengembangan frontend dan backend API, integrasi frontend dengan backend, pembangunan infrastruktur cloud, integrasi OCR dan message queue, serta pengujian sistem.

Pada tahap akhir, tim melakukan evaluasi performa sistem, mitigasi keamanan SSRF, pengujian model OCR, bug fixing, dokumentasi hasil, pengujian kesiapan akhir, dan persiapan demonstrasi.
