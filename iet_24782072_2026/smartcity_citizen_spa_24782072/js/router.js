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
                    class="btn btn-pink w-100">

                    <i class="bi bi-plus-circle-fill me-2"></i>

                    Laporan Baru

                </button>

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

                    Smart City Issue Reporting Lampung merupakan
                    portal pelaporan masyarakat yang digunakan
                    untuk menyampaikan berbagai permasalahan
                    publik seperti infrastruktur, fasilitas umum,
                    lingkungan, dan layanan masyarakat agar dapat
                    ditindaklanjuti secara cepat dan terstruktur.

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

                    Portal Citizen Smart City
                    Lampung siap digunakan.

                </p>

            </div>

        </aside>

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