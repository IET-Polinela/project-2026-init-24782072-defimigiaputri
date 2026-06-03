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

let editingReportId = null;

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

        loadSummaryStats();

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

    const container =
        document.getElementById(
            'listContainer'
        );

    container.innerHTML = '';

    allReports.forEach(
        report => {

            container.innerHTML += `

                <div class="card mb-3 p-3">

                    <h5>
                        ${report.title}
                    </h5>

                    <p>
                        ${report.location}
                    </p>

                    <p>
                        Status:
                        ${report.status}
                    </p>

                    ${
                        report.status === 'DRAFT'
                        ?
                        `
                        <button
                            class="btn btn-warning"
                            onclick="editDraft(${report.id})">

                            Edit Draft

                        </button>
                        `
                        :
                        ''
                    }

                </div>

            `;
        }
    );
}

function renderPagination() {

    console.log(
        'Total Pages:',
        totalPages
    );

}

async function loadSummaryStats() {

    const response =
        await requestAPI(
            '/api/reports/?tab=my_reports&page_size=1000',
            'GET'
        );

    if (
        response &&
        response.status === 200
    ) {

        const reports =
            response.data.results || [];

        const totalDraft =
            reports.filter(
                report =>
                    report.status === 'DRAFT'
            ).length;

        const totalReported =
            reports.filter(
                report =>
                    report.status === 'REPORTED'
            ).length;

        const totalVerified =
            reports.filter(
                report =>
                    report.status === 'VERIFIED'
            ).length;

        const totalProgress =
            reports.filter(
                report =>
                    report.status === 'IN_PROGRESS'
            ).length;

        const totalResolved =
            reports.filter(
                report =>
                    report.status === 'RESOLVED'
            ).length;

        console.log(
            'Summary Stats'
        );

        console.log(
            'Draft:',
            totalDraft
        );

        console.log(
            'Reported:',
            totalReported
        );

        console.log(
            'Verified:',
            totalVerified
        );

        console.log(
            'In Progress:',
            totalProgress
        );

        console.log(
            'Resolved:',
            totalResolved
        );

        document.getElementById(
            'totalDraft'
        ).textContent =
            totalDraft;

        document.getElementById(
            'totalReported'
        ).textContent =
            totalReported;

        document.getElementById(
            'totalVerified'
        ).textContent =
            totalVerified;

        document.getElementById(
            'totalProgress'
        ).textContent =
            totalProgress;

        document.getElementById(
            'totalResolved'
        ).textContent =
            totalResolved;

    }

}

async function editDraft(id) {

    const response =
        await requestAPI(
            `/api/reports/${id}/`,
            'GET'
        );

    if (
        response &&
        response.status === 200
    ) {

        const report =
            await response.json();

        document.getElementById(
            'reportTitle'
        ).value =
            report.title;

        document.getElementById(
            'reportCategory'
        ).value =
            report.category;

        document.getElementById(
            'reportLocation'
        ).value =
            report.location;

        document.getElementById(
            'reportDescription'
        ).value =
            report.description;

        editingReportId = id;

        document.getElementById(
            'reportModalLabel'
        ).textContent =
            'Edit Draft';

        const modal =
            new bootstrap.Modal(
                document.getElementById(
                    'reportModal'
                )
            );

        modal.show();

    }

}

async function submitReport() {

    const reportData = {

        title:
            document.getElementById(
                'reportTitle'
            ).value,

        category:
            document.getElementById(
                'reportCategory'
            ).value,

        location:
            document.getElementById(
                'reportLocation'
            ).value,

        description:
            document.getElementById(
                'reportDescription'
            ).value

    };

    let response;

    if (
        editingReportId === null
    ) {

        response =
            await requestAPI(
                '/api/reports/',
                'POST',
                reportData
            );

    } else {

        response =
            await requestAPI(
                `/api/reports/${editingReportId}/`,
                'PUT',
                reportData
            );

    }

    if (
        response &&
        (
            response.status === 201 ||
            response.status === 200
        )
    ) {

        const modalElement =
            document.getElementById(
                'reportModal'
            );

        const modal =
            bootstrap.Modal.getInstance(
                modalElement
            );

        modal.hide();

        document.getElementById(
            'reportForm'
        ).reset();

        editingReportId = null;

        loadDashboardData();

    }

}