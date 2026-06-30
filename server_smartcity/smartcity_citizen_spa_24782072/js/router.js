const routes = {
    
    '#home': `

    <div class="container py-5">

    <div class="alert alert-light border-0 shadow-sm text-center mb-4 shine-card">

        📢 Selamat datang di Smart City Portal Lampung —
        Laporkan masalah kota secara cepat dan transparan.

    </div>

        <div class="card border-0 shadow-lg soft-card shine-card p-5 text-center">

            <i class="bi bi-buildings-fill dashboard-icon fs-1"></i>

            <h1 class="dashboard-title mt-3">

                Smart City Portal Lampung

            </h1>

            <p class="soft-text fs-5 mt-3">

                Portal Layanan Smart City Issue Reporting Lampung merupakan platform
                pelaporan digital yang dirancang untuk menjembatani
                komunikasi antara masyarakat dan pemerintah daerah.
                Melalui aplikasi ini, warga dapat menyampaikan berbagai
                laporan terkait permasalahan lingkungan, infrastruktur,
                fasilitas umum, keamanan, hingga layanan publik secara
                cepat dan mudah.

            </p>

            <div class="mt-4">

                <a
                    href="#login"
                    class="btn btn-pink btn-lg me-2">

                    <i class="bi bi-box-arrow-in-right me-2"></i>

                    Login Warga

                </a>

                <a
                    href="#login"
                    class="btn btn-soft btn-lg">

                    <i class="bi bi-info-circle me-2"></i>

                    Informasi

                </a>

            </div>

        </div>

        <div class="row mt-5 g-4">

            <div class="col-md-4">

                <div class="card border-0 shadow-sm soft-card shine-card p-4 text-center">

                    <i class="bi bi-file-earmark-text dashboard-icon fs-2"></i>

                    <h3 class="dashboard-title mt-2">

                        1200+

                    </h3>

                    <p class="soft-text">

                        Total Laporan Masuk

                    </p>

                </div>

            </div>

            <div class="col-md-4">

                <div class="card border-0 shadow-sm soft-card p-4 text-center">

                    <i class="bi bi-check-circle dashboard-icon fs-2"></i>

                    <h3 class="dashboard-title mt-2">

                        95%

                    </h3>

                    <p class="soft-text">

                        Tingkat Penyelesaian

                    </p>

                </div>

            </div>

            <div class="col-md-4">

                <div class="card border-0 shadow-sm soft-card p-4 text-center">

                    <i class="bi bi-clock-history dashboard-icon fs-2"></i>

                    <h3 class="dashboard-title mt-2">

                        24/7

                    </h3>

                    <p class="soft-text">

                        Monitoring Layanan

                    </p>

                </div>

            </div>

        </div>

        <div class="mt-5">

            <div class="text-center mb-4">

                <h2 class="dashboard-title">

                    Layanan Unggulan

                </h2>

                <p class="soft-text">

                    Kategori layanan yang dapat dilaporkan
                    oleh masyarakat melalui Smart City Portal.

                </p>

            </div>

            <div class="row g-4">

                <div class="col-md-3">

                    <div class="card border-0 shadow-sm soft-card p-4 text-center h-100">

                        <i class="bi bi-cone-striped feature-icon"></i>

                        <h5 class="dashboard-title mt-3">

                            Infrastruktur

                        </h5>

                        <p class="soft-text">

                            Jalan rusak, trotoar,
                            drainase dan fasilitas kota.

                        </p>

                    </div>

                </div>

                <div class="col-md-3">

                    <div class="card border-0 shadow-sm soft-card p-4 text-center h-100">

                        <i class="bi bi-tree-fill feature-icon"></i>

                        <h5 class="dashboard-title mt-3">

                            Lingkungan

                        </h5>

                        <p class="soft-text">

                            Sampah, pencemaran,
                            kebersihan dan ruang hijau.

                        </p>

                    </div>

                </div>

                <div class="col-md-3">

                    <div class="card border-0 shadow-sm soft-card p-4 text-center h-100">

                        <i class="bi bi-shield-check feature-icon"></i>

                        <h5 class="dashboard-title mt-3">

                            Keamanan

                        </h5>

                        <p class="soft-text">

                            Gangguan keamanan,
                            ketertiban dan keselamatan warga.

                        </p>

                    </div>

                </div>

                <div class="col-md-3">

                    <div class="card border-0 shadow-sm soft-card p-4 text-center h-100">

                        <i class="bi bi-building feature-icon"></i>

                        <h5 class="dashboard-title mt-3">

                            Fasilitas Umum

                        </h5>

                        <p class="soft-text">

                            Lampu jalan,
                            taman kota dan fasilitas publik.

                        </p>

                    </div>

                </div>

            </div>

        </div>

        <div class="mt-5">

            <div class="text-center mb-4">

                <h2 class="dashboard-title">
                    Alur Pelayanan Laporan
                </h2>

                <p class="soft-text">
                    Setiap laporan akan melalui beberapa tahapan
                    hingga selesai ditangani.
                </p>

            </div>

            <div class="row g-3 text-center">

                <div class="col">

                    <div class="soft-card p-4 h-100">

                        <span class="badge-draft">
                            Draft
                        </span>

                        <p class="mt-3 soft-text">

                            Laporan disimpan sementara
                            dan belum dipublikasikan.

                        </p>

                    </div>

                </div>

                <div class="col">

                    <div class="soft-card p-4 h-100">

                        <span class="badge-reported">
                            Reported
                        </span>

                        <p class="mt-3 soft-text">

                            Laporan telah dikirim
                            oleh masyarakat.

                        </p>

                    </div>

                </div>

                <div class="col">

                    <div class="soft-card p-4 h-100">

                        <span class="badge-verified">
                            Verified
                        </span>

                        <p class="mt-3 soft-text">

                            Laporan telah diverifikasi
                            oleh administrator.

                        </p>

                    </div>

                </div>

                <div class="col">

                    <div class="soft-card p-4 h-100">

                        <span class="badge-progress">
                            In Progress
                        </span>

                        <p class="mt-3 soft-text">

                            Laporan sedang dalam
                            proses penanganan.

                        </p>

                    </div>

                </div>

                <div class="col">

                    <div class="soft-card p-4 h-100">

                        <span class="badge-resolved">
                            Resolved
                        </span>

                        <p class="mt-3 soft-text">

                            Permasalahan telah
                            berhasil diselesaikan.

                        </p>

                    </div>

                </div>

            </div>

        </div>

        <div class="row mt-5 g-4">

            <div class="col-lg-7">

                <div class="card soft-card shine-card border-0 p-5 h-100">

                    <div class="text-center mb-4">

                        <i class="bi bi-buildings-fill dashboard-icon fs-1"></i>

                        <h2 class="dashboard-title mt-3">

                            Tentang Smart City Lampung

                        </h2>

                    </div>

                    <p class="soft-text text-center">

                        Smart City Issue Reporting Lampung merupakan platform
                        digital yang membantu masyarakat menyampaikan laporan
                        terkait fasilitas umum, lingkungan, infrastruktur,
                        keamanan, dan pelayanan publik.

                    </p>

                    <p class="soft-text text-center">

                        Melalui sistem pelaporan yang transparan dan
                        terintegrasi, setiap laporan dapat dipantau
                        statusnya mulai dari pelaporan hingga penyelesaian.

                    </p>

                    <div class="row mt-4 text-center">

                        <div class="col-4">

                            <i class="bi bi-lightning-charge-fill feature-icon"></i>

                            <h6>Respons Cepat</h6>

                        </div>

                        <div class="col-4">

                            <i class="bi bi-eye-fill feature-icon"></i>

                            <h6>Transparan</h6>

                        </div>

                        <div class="col-4">

                            <i class="bi bi-people-fill feature-icon"></i>

                            <h6>Kolaboratif</h6>

                        </div>

                    </div>

                </div>

            </div>

            <div class="col-lg-5">

                <div class="card soft-card shine-card border-0 p-4 h-70">

                    <h4 class="dashboard-title">

                        Smart City Goals

                    </h4>

                    <hr>

                    <ul class="soft-text">

                        <li>Pelayanan publik yang responsif.</li>

                        <li>Lingkungan yang aman dan nyaman.</li>

                        <li>Infrastruktur yang terawat.</li>

                        <li>Kolaborasi pemerintah dan masyarakat.</li>

                    </ul>

                </div>

            </div>

        </div>

        <div class="mt-5">

            <div class="text-center mb-4">

                <h2 class="dashboard-title">

                    Berita & Pengumuman

                </h2>

                <p class="soft-text">

                    Informasi terbaru mengenai layanan dan pembangunan kota.

                </p>

            </div>

            <div class="row g-4">

                <div class="col-md-4">

                    <div class="card border-0 shadow-sm h-100 soft-card">

                        <div class="card-body">

                            <span class="badge bg-light text-dark mb-3">

                                Infrastruktur

                            </span>

                            <h5 class="dashboard-title">

                                Perbaikan Jalan Kota

                            </h5>

                            <p class="soft-text">

                                Pemerintah daerah melakukan perbaikan
                                beberapa ruas jalan utama untuk
                                meningkatkan kenyamanan pengguna jalan.

                            </p>

                        </div>

                    </div>

                </div>

                <div class="col-md-4">

                    <div class="card border-0 shadow-sm h-100 soft-card">

                        <div class="card-body">

                            <span class="badge bg-light text-dark mb-3">

                                Lingkungan

                            </span>

                            <h5 class="dashboard-title">

                                Program Lampung Bersih

                            </h5>

                            <p class="soft-text">

                                Gerakan bersama masyarakat dalam
                                menjaga kebersihan lingkungan dan
                                fasilitas umum.

                            </p>

                        </div>

                    </div>

                </div>

                <div class="col-md-4">

                    <div class="card border-0 shadow-sm h-100 soft-card">

                        <div class="card-body">

                            <span class="badge bg-light text-dark mb-3">

                                Pelayanan Publik

                            </span>

                            <h5 class="dashboard-title">

                                Sistem Pelaporan Online

                            </h5>

                            <p class="soft-text">

                                Warga kini dapat memantau progres
                                laporan secara real-time melalui
                                Citizen Portal Smart City.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

        <div class="mt-5">

                    <div class="text-center mb-4">

                        <h2 class="dashboard-title">

                            Nomor Darurat

                        </h2>

                    </div>

                    <div class="row g-4">

                        <div class="col-md-3">

                            <div class="card soft-card shine-card p-4 text-center">

                                🚓

                                <h5>Polisi</h5>

                                <p>110</p>

                            </div>

                        </div>

                        <div class="col-md-3">

                            <div class="card soft-card shine-card p-4 text-center">

                                🚑

                                <h5>Ambulans</h5>

                                <p>119</p>

                            </div>

                        </div>

                        <div class="col-md-3">

                            <div class="card soft-card shine-card p-4 text-center">

                                🚒

                                <h5>Pemadam</h5>

                                <p>113</p>

                            </div>

                        </div>

                        <div class="col-md-3">

                            <div class="card soft-card shine-card p-4 text-center">

                                ☎️

                                <h5>Call Center</h5>

                                <p>1500-111</p>

                            </div>

                        </div>

                    </div>

                </div>

        <div class="mt-5">

            <div class="text-center mb-4">

                <h2 class="dashboard-title">

                    Statistik Smart City

                </h2>

                <p class="soft-text">

                    Gambaran aktivitas pelaporan masyarakat.

                </p>

            </div>

            <div class="row g-4">

                <div class="col-md-3">

                    <div class="card border-0 shadow-sm text-center p-4 stat-card">

                        <h2 class="stat-number">
                            245
                        </h2>

                        <p class="soft-text mb-0">
                            Laporan Masuk
                        </p>

                    </div>

                </div>

                <div class="col-md-3">

                    <div class="card border-0 shadow-sm text-center p-4 stat-card">

                        <h2 class="stat-number">
                            180
                        </h2>

                        <p class="soft-text mb-0">
                            Laporan Selesai
                        </p>

                    </div>

                </div>

                <div class="col-md-3">

                    <div class="card border-0 shadow-sm text-center p-4 stat-card">

                        <h2 class="stat-number">
                            40
                        </h2>

                        <p class="soft-text mb-0">
                            Verifikasi
                        </p>

                    </div>

                </div>

                <div class="col-md-3">

                    <div class="card border-0 shadow-sm text-center p-4 stat-card">

                        <h2 class="stat-number">
                            25
                        </h2>

                        <p class="soft-text mb-0">
                            Diproses
                        </p>

                    </div>

                </div>

            </div>

        </div>

        <div class="mt-5">

            <div class="text-center mb-4">

                <h2 class="dashboard-title">

                    Testimoni Warga

                </h2>

            </div>

            <div class="row g-4">

                <div class="col-md-4">

                    <div class="card soft-card shine-card p-4">

                        ⭐⭐⭐⭐⭐

                        <p class="soft-text mt-3">

                            Laporan lampu jalan saya
                            ditindaklanjuti dalam 2 hari.

                        </p>

                        <b>
                            Andi Saputra
                        </b>

                    </div>

                </div>

                <div class="col-md-4">

                    <div class="card soft-card shine-card p-4">

                        ⭐⭐⭐⭐⭐

                        <p class="soft-text mt-3">

                            Sangat membantu untuk
                            menyampaikan keluhan warga.

                        </p>

                        <b>
                            Rina Putri
                        </b>

                    </div>

                </div>

                <div class="col-md-4">

                    <div class="card soft-card shine-card p-4">

                        ⭐⭐⭐⭐⭐

                        <p class="soft-text mt-3">

                            Transparan dan mudah digunakan.

                        </p>

                        <b>
                            Budi Santoso
                        </b>

                    </div>

                </div>

            </div>

        </div>

        <div class="mt-5">

            <div class="cta-section text-center">

                <h2 class="fw-bold">

                    Siap Melaporkan Masalah Kota?

                </h2>

                <p class="mt-3">

                    Partisipasi Anda membantu menciptakan lingkungan yang lebih
                    aman, nyaman, dan tertata untuk seluruh masyarakat Lampung.

                </p>

                <a
                    href="#login"
                    class="btn btn-light btn-lg mt-3">

                    <i class="bi bi-send-fill me-2"></i>

                    Laporkan Sekarang

                </a>

            </div>

        </div>

    </div>

    `,


    '#login': `

        <div class="row justify-content-center mt-5">

            <div class="col-md-5">

                <div class="card border-0 shadow-sm p-4">

                    <h4 class="text-center fw-bold mb-4 section-title">

                        <i class="bi bi-person-circle me-2"></i>

                        Login Warga

                    </h4>

                    <form id="loginForm">

                        <input
                            type="text"
                            id="loginUsername"
                            class="form-control mb-3"
                            placeholder="Username"
                            required>

                        <input
                            type="password"
                            id="loginPassword"
                            class="form-control mb-3"
                            placeholder="Password"
                            required>

                        <button
                            type="submit"
                            class="btn btn-pink w-100">

                            Masuk

                        </button>

                    </form>

                </div>

            </div>

        </div>

    `,

'#dashboard': `

    <div class="row g-4">

        <aside class="col-12 col-lg-3">

        <div class="card border-0 p-3 shadow-sm soft-card mb-3">

            <button
                id="btnBukaModal"
                class="btn btn-pink w-100"
                data-bs-toggle="modal"
                data-bs-target="#reportModal">

                <i class="bi bi-plus-circle-fill me-2"></i>
                Laporan Baru

            </button>

        </div>

            <div
                id="summaryStats"
                class="card border-0 p-4 shadow-sm soft-card mt-3">

                <div class="text-center mb-3">

                    <h5 class="dashboard-title mb-0">
                        <i class="bi bi-clipboard-data-fill me-2"></i>
                        Status Laporan
                    </h5>

                </div>

                <hr class="mt-2 mb-3">

                <div class="status-simple">

                    <div class="status-progress">

                        <div class="status-title">

                            <strong>
                                Draft
                                (
                                <span
                                    id="totalDraft"
                                    class="badge bg-secondary badge-draft-status">
                                    0
                                </span>
                                )
                            </strong>

                            <span>20%</span>

                        </div>

                        <div class="progress">

                            <div
                                class="progress-bar progress-draft"
                                style="width:20%">
                            </div>

                        </div>

                    </div>

                    <div class="status-progress">

                        <div class="status-title">

                            <strong>
                                Reported
                                (
                                <span
                                    id="totalReported"
                                    class="badge bg-secondary badge-reported-status">
                                    0
                                </span>
                                )
                            </strong>

                            <span>40%</span>

                        </div>

                        <div class="progress">

                            <div
                                class="progress-bar progress-reported"
                                style="width:40%">
                            </div>

                        </div>

                    </div>

                    <div class="status-progress">

                        <div class="status-title">

                            <strong>
                                Verified
                                (
                                <span
                                    id="totalVerified"
                                    class="badge bg-secondary badge-verified-status">
                                    0
                                </span>
                                )
                            </strong>

                            <span>60%</span>

                        </div>

                        <div class="progress">

                            <div
                                class="progress-bar progress-verified"
                                style="width:60%">
                            </div>

                        </div>

                    </div>

                    <div class="status-progress">

                        <div class="status-title">

                            <strong>
                                In Progress
                                (
                                <span
                                    id="totalProgress"
                                    class="badge bg-secondary badge-progress-status">
                                    0
                                </span>
                                )
                            </strong>

                            <span>80%</span>

                        </div>

                        <div class="progress">

                            <div
                                class="progress-bar progress-progress"
                                style="width:80%">
                            </div>

                        </div>

                    </div>

                    <div class="status-progress">

                        <div class="status-title">

                            <strong>
                                Resolved
                                (
                                <span
                                    id="totalResolved"
                                    class="badge bg-secondary badge-resolved-status">
                                    0
                                </span>
                                )
                            </strong>

                            <span>100%</span>

                        </div>

                        <div class="progress">

                            <div
                                class="progress-bar progress-resolved"
                                style="width:100%">
                            </div>

                        </div>

                    </div>

                </div>

        </aside>

        <section class="col-12 col-lg-6">

            <div
                class="card border-0 shadow-sm p-5 text-center soft-card">

                <i
                    class="bi bi-house-heart-fill fs-1 dashboard-icon">
                </i>

                <h4 class="mt-3 dashboard-title">

                    <i class="bi bi-person-heart-fill me-2"></i>

                    Selamat Datang,
                    <span id="welcomeUser"></span>

                </h4>

                <p class="soft-text">

                    Selamat datang di Portal Citizen Smart City Lampung.
                    Platform ini hadir sebagai sarana kolaborasi antara
                    masyarakat dan pemerintah daerah dalam membangun
                    lingkungan yang lebih baik melalui partisipasi aktif
                    warga.

                    <br>

                    Setiap masukan, laporan, dan informasi yang diberikan
                    akan menjadi bagian penting dalam mendukung terciptanya
                    pelayanan publik yang lebih responsif, transparan,
                    dan berorientasi pada kebutuhan masyarakat.

                    <br>

                    Mari bersama-sama menciptakan kota yang aman,
                    nyaman, tertata, dan berkelanjutan untuk semua!

                </p>

            </div>

        </section>

        <aside class="col-12 col-lg-3">

            <div
                class="card border-0 p-3 shadow-sm soft-info">

                <h6 class="info-title">

                    <i class="bi bi-info-circle-fill me-2"></i>

                    Pengumuman

                </h6>

                <p class="soft-text">
                <ul class="soft-text">
                    <li>Gunakan bahasa yang sopan dan jelas saat membuat laporan.</li>
                    <li>Sertakan informasi lokasi yang akurat.</li>
                    <li>Hindari laporan duplikat atau tidak sesuai fakta.</li>
                    <li>Kerahasiaan data pelapor dijamin dan tidak ditampilkan kepada pengguna lain.</li>
                </ul>

                <p class="soft-text">
                    Terima kasih telah berpartisipasi dalam mewujudkan lingkungan yang lebih aman, nyaman, dan tertata.
                </p>

            </div>

        </aside>

        <section class="col-12">

            <div
                class="card border-0 shadow-sm p-4 soft-card">

                <div class="text-center">

                    <h4 class="dashboard-title">

                        Daftar Laporan

                    </h4>

                </div>

                <hr>

                <div class="row g-4">

                <div class="col-12 col-xl-6">

                    <div class="text-center mb-4">

                        <div class="section-header laporan-header">

                            Laporan Saya

                        </div>

                    </div>

                    <div id="myReportsContainer"></div>

                    <div
                        id="myReportsPaginationContainer"
                        class="text-center mt-3">
                    </div>

                </div>

                <div class="col-12 col-xl-6 feed-column">

                    <div class="text-center mb-4">

                        <div class="section-header feed-header">

                            Feed Kota

                        </div>

                    </div>

                    <div id="feedContainer"></div>

                    <div
                        id="feedPaginationContainer"
                        class="mt-4 text-center">

                    </div>

                </div>

            </div>

        </div>

    </section>

    </div>

`,

};


function handleRouting() {

    console.log("HASH =", window.location.hash);

    const hash =
        window.location.hash ||
        '#home';

    document
        .getElementById(
            'app-content'
        )
        .innerHTML =
        routes[hash] ||
        routes['#home'];

    if (
        hash === '#login' &&
        typeof setupLoginForm === 'function'
    ) {
        setupLoginForm();
        setActiveNavbar();
    }

    if (hash === '#dashboard') {

        console.log("MASUK DASHBOARD");

        const token =
            localStorage.getItem(
                'access_token'
            );
        
        console.log('HASH =', hash);
        console.log('TOKEN =', token);
        console.log('LOCALSTORAGE =', localStorage);

        if (!token) {

            console.log("TOKEN KOSONG -> LOGIN");

            window.location.hash =
                '#login';

            return;
        }

        loadMyReports();

        loadFeedReports();

        loadSummaryStats();

        setActiveNavbar();

        const username =
            localStorage.getItem(
                'username'
            );

        const welcomeUser =
            document.getElementById(
                'welcomeUser'
            );

        setupReportForm();

        if (
            welcomeUser &&
            username
        ) {

            welcomeUser.textContent =
                username;

        }

    }
}

window.addEventListener(
    'hashchange',
    handleRouting
);

window.addEventListener(
    'DOMContentLoaded',
    handleRouting
);

window.addEventListener(
    'DOMContentLoaded',
    () => {

        document
            .getElementById('btnSubmit')
            ?.addEventListener(
                'click',
                submitReport
            );

        document
            .getElementById('btnDraft')
            ?.addEventListener(
                'click',
                saveDraft
            );

    }
);