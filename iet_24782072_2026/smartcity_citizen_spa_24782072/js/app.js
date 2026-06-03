console.log(
    'app.js berhasil dimuat'
);

function updateNavbar() {

    const username =
        localStorage.getItem(
            'username'
        );

    const navbar =
        document.getElementById(
            'navbarMenuItems'
        );

    if (!navbar) {
        return;
    }

    if (username) {

        const role =
            username === 'admin'
                ? 'Admin'
                : 'Citizen';

        navbar.innerHTML = `

            <li class="nav-item">

                <a class="nav-link" href="#dashboard">

                    <i class="bi bi-house-fill"></i>

                    Dashboard

                </a>

            </li>

            <li class="nav-item">

                <a class="nav-link" href="#">

                    <i class="bi bi-file-earmark-text-fill"></i>

                    Reports

                </a>

            </li>

            <li class="nav-item">

                <span class="nav-link">

                    <i class="bi bi-person-circle"></i>

                    ${username}

                    (${role})

                </span>

            </li>

        `;

    }

}

window.addEventListener(
    'DOMContentLoaded',
    updateNavbar
);

let currentTab = 'feed';
let currentPage = 1;

let allReports = [];
let totalPages = 0;

async function loadDashboardData(
    tab = currentTab,
    page = currentPage
) {

    currentTab = tab;
    currentPage = page;

    const response =
        await requestAPI(
            `/api/reports/?tab=${tab}&page=${page}`,
            'GET'
        );

console.log(response);

    if (
        response &&
        response.status === 200
    ) {

        allReports =
            response.data.results || [];

        const totalData =
            response.data.count || 0;

        totalPages =
            Math.ceil(
                totalData / 10
            );

        renderList();

        renderPagination();

    } else {

        const listContainer =
            document.getElementById(
                'listContainer'
            );

        if (listContainer) {

            listContainer.innerHTML = `

                <div class="col-12 text-center text-muted p-3">

                    <i class="bi bi-exclamation-triangle fs-1"></i>

                    <p>Gagal memuat data laporan.</p>

                </div>

            `;
        }

        const paginationContainer =
            document.getElementById(
                'paginationContainer'
            );

        if (paginationContainer) {

            paginationContainer.innerHTML = '';

        }
    }
}

function renderList() {

    console.log(
        'Render List',
        allReports
    );

}

function renderPagination() {

    console.log(
        'Total Pages:',
        totalPages
    );

}