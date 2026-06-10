const routes = {

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

            <div
                class="card border-0 p-3 shadow-sm soft-card">

                <button
                    id="btnNewReport"
                    class="btn btn-pink w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#reportModal">

                    <i class="bi bi-plus-circle-fill me-2"></i>

                    Laporan Baru

                </button>

            </div>

             <div
                class="card border-0 p-3 shadow-sm soft-card mt-3">

                <h6 class="fw-bold info-title">
                    Status Laporan
                </h6>

                <hr>

                <p class="soft-text">
                    Draft :
                    <span id="totalDraft">0</span>
                </p>

                <p class="soft-text">
                    Reported :
                    <span id="totalReported">0</span>
                </p>

                <p class="soft-text">
                    Verified :
                    <span id="totalVerified">0</span>
                </p>

                <p class="soft-text">
                    In Progress :
                    <span id="totalProgress">0</span>
                </p>

                <p class="soft-text">
                    Resolved :
                    <span id="totalResolved">0</span>
                </p>

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

                    Selamat Datang!

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

            <div
            class="modal fade"
            id="reportModal"
            tabindex="-1">

            <div class="modal-dialog">

                <div class="modal-content">

                    <div class="modal-header">

                        <h5
                            class="modal-title"
                            id="reportModalLabel">

                            Tambah Laporan

                        </h5>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal">
                        </button>

                    </div>

                    <div class="modal-body">

                        <form id="reportForm">

                            <input
                                type="text"
                                id="reportTitle"
                                class="form-control mb-2"
                                placeholder="Judul">

                            <input
                                type="text"
                                id="reportCategory"
                                class="form-control mb-2"
                                placeholder="Kategori">

                            <input
                                type="text"
                                id="reportLocation"
                                class="form-control mb-2"
                                placeholder="Lokasi">

                            <textarea
                                id="reportDescription"
                                class="form-control mb-2"
                                placeholder="Deskripsi"></textarea>

                        </form>

                    </div>

                    <div class="modal-footer">

                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal">

                            Batal

                        </button>

                        <button
                            type="button"
                            id="btnDraft"
                            class="btn btn-outline-secondary">

                            Simpan Draft

                        </button>

                        <button
                            type="button"
                            id="btnSubmit"
                            class="btn btn-pink">

                            Ajukan

                        </button>

                    </div>

                </div>

            </div>

        </div>

    </div>

    `
};


function handleRouting() {

    const hash =
        window.location.hash ||
        '#login';

    document
        .getElementById(
            'app-content'
        )
        .innerHTML =
        routes[hash] ||
        routes['#login'];

    if (
        hash === '#login' &&
        typeof setupLoginForm === 'function'
    ) {
        setupLoginForm();
        setActiveNavbar();
    }

    if (hash === '#dashboard') {

        loadMyReports();

        loadFeedReports();

        loadSummaryStats();

        setActiveNavbar();

        const submitButton =
            document.getElementById(
                'btnSubmit'
            );

        if (submitButton) {

            submitButton.onclick =
                submitReport;

        }

        if (submitButton) {

            submitButton.onclick =
                submitReport;

        }

        const draftButton =
            document.getElementById(
                'btnDraft'
            );

        if (draftButton) {

            draftButton.onclick =
                saveDraft;

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