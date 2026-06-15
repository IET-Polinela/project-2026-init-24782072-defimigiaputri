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

    if (!username) {

        navbar.innerHTML = `

            <li class="nav-item">

                <a
                    class="nav-link"
                    href="#home">

                    Home

                </a>

            </li>

            <li class="nav-item">

                <a
                    class="nav-link"
                    href="#login">

                    Login

                </a>

            </li>

        `;

        return;

    }

    const role =
        username === 'defii'
            ? 'Admin'
            : 'Citizen';

    navbar.innerHTML = `

            <li class="nav-item">

                <a
                    id="navDashboard"
                    class="nav-link"
                    href="#dashboard">

                    <i class="bi bi-house-fill"></i>

                    Dashboard

                </a>

            </li>

            <li class="nav-item">

                <div class="dropdown">

                    <a
                        id="navUser"
                        class="nav-link dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown">

                        <i class="bi bi-person-circle"></i>

                        ${username}

                        (${role})

                    </a>

                    <ul class="dropdown-menu">

                        <li>

                            <button
                                class="dropdown-item"
                                onclick="logout()">

                                Logout

                            </button>

                        </li>

                    </ul>

                </div>

            </li>

        `;

    }

function setActiveNavbar() {

    const hash = window.location.hash;

    document
        .getElementById('navDashboard')
        ?.classList.remove('active');

    document
        .getElementById('navUser')
        ?.classList.remove('active');

    if (hash === '#dashboard') {

        document
            .getElementById('navDashboard')
            ?.classList.add('active');

    }

    if (hash === '#login') {

        document
            .getElementById('navUser')
            ?.classList.add('active');

    }

}

window.addEventListener(
    'DOMContentLoaded',
    updateNavbar
);

let myReportsPage = 1;

let myReportsTotalPages = 1;

let myReports = [];

let feedReports = [];

let feedPage = 1;

let feedTotalPages = 1;

let currentTab = 'my_reports';
let currentPage = 1;

let allReports = [];
let totalPages = 0;

let editingReportId = null;

async function loadDashboardData(
    tab = currentTab,
    page = currentPage
) {

    currentTab = tab;

    const btnMyReports =
        document.getElementById(
            'btnMyReports'
        );

    const btnFeed =
        document.getElementById(
            'btnFeed'
        );

    if (
        btnMyReports &&
        btnFeed
    ) {

        btnMyReports.classList.remove(
            'active-tab'
        );

        btnFeed.classList.remove(
            'active-tab'
        );

        if (
            tab === 'my_reports'
        ) {

            btnMyReports.classList.add(
                'active-tab'
            );

        } else {

            btnFeed.classList.add(
                'active-tab'
            );

        }

    }

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

        const data =
            await response.json();

        allReports =
            (data.results || []).sort(
                (
                    a,
                    b
                ) =>
                    new Date(
                        b.created_at
                    ) -
                    new Date(
                        a.created_at
                    )
            );

        const totalData =
            data.count || 0;

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

            <div
                class="card border-0 shadow-sm p-4 mb-3 soft-card">

                <h5 class="dashboard-title">

                    ${report.title}

                </h5>

                <p class="soft-text">

                    <strong>Kategori:</strong>

                    ${report.category}

                </p>

                <p class="soft-text">

                    <strong>Lokasi:</strong>

                    ${report.location}

                </p>

                <p class="soft-text">

                    <strong>Deskripsi:</strong>

                    ${report.description}

                </p>

                <p class="soft-text">

                    <strong>Pelapor:</strong>

                    ${report.reporter}

                </p>

                <p class="soft-text">

                    <strong>Dibuat:</strong>

                    ${
                        new Date(
                            report.created_at
                        ).toLocaleString(
                            'id-ID'
                        )
                    }

                </p>

                <p class="soft-text">

                    <strong>Terakhir Update:</strong>

                    ${
                        new Date(
                            report.updated_at
                        ).toLocaleString(
                            'id-ID'
                        )
                    }

                </p>

                <div class="mt-3">

                    <span
                        class="badge px-3 py-2
                        ${
                            report.status === 'DRAFT'
                                ? 'badge-draft'
                            : report.status === 'REPORTED'
                                ? 'badge-reported'
                            : report.status === 'VERIFIED'
                                ? 'badge-verified'
                            : report.status === 'IN_PROGRESS'
                                ? 'badge-progress'
                            : 'badge-resolved'
                        }">

                        ${report.status}

                    </span>

                </div>

                <div class="mt-3">

                    ${
                        report.status === 'DRAFT'
                        ?
                        `
                        <button
                            class="btn btn-pink btn-sm"
                            onclick="editDraft(${report.id})">

                            Edit Draft

                        </button>
                        `
                        :
                        ''
                    }

                </div>

            </div>

            `;

        }
    );
}

function renderPagination() {

    const container =
        document.getElementById(
            'paginationContainer'
        );

    if (!container) {
        return;
    }

    container.innerHTML = `

        <button
            class="btn btn-soft me-2"
            ${
                currentPage === 1
                ? 'disabled'
                : ''
            }
            onclick="
                loadDashboardData(
                    '${currentTab}',
                    ${currentPage - 1}
                )
            ">

            Previous

        </button>

        <span>

            Halaman
            ${currentPage}
            dari
            ${totalPages}

        </span>

        <button
            class="btn btn-soft ms-2"
            ${
                currentPage === totalPages
                ? 'disabled'
                : ''
            }
            onclick="
                loadDashboardData(
                    '${currentTab}',
                    ${currentPage + 1}
                )
            ">

            Next

        </button>

    `;

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

        const data =
            await response.json();

        const reports =
            data.results || [];

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

async function deleteDraft(id) {

    const confirmDelete =
        confirm(
            'Yakin ingin menghapus draft ini?'
        );

    if (!confirmDelete) {
        return;
    }

    const response =
        await requestAPI(
            `/api/reports/${id}/`,
            'DELETE'
        );

    if (
        response &&
        (
            response.status === 204 ||
            response.status === 200
        )
    ) {

        alert(
            'Draft berhasil dihapus.'
        );

        loadMyReports();

        loadFeedReports();

        loadSummaryStats();

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

        loadMyReports();

        loadFeedReports();

        loadSummaryStats();

    }

}

function logout() {

    localStorage.removeItem(
        'access_token'
    );

    localStorage.removeItem(
        'refresh_token'
    );

    localStorage.removeItem(
        'username'
    );

    updateNavbar();

    window.location.hash =
        '#home';

}

async function loadMyReports(page = 1) {

    myReportsPage = page;

    const response =
        await requestAPI(
            `/api/reports/?tab=my_reports&page=${page}`,
            'GET'
        );

    if (
        response &&
        response.status === 200
    ) {

        const data =
            await response.json();

        myReports =
            data.results || [];

        myReportsTotalPages =
            Math.ceil(
                data.count / 10
            );

        renderMyReports();

        renderMyReportsPagination();

    }

}

async function loadFeedReports(page = 1) {

    feedPage = page;

    const response =
        await requestAPI(
            `/api/reports/?tab=feed&page=${page}`,
            'GET'
        );

    if (
        response &&
        response.status === 200
    ) {

        const data =
            await response.json();

        feedReports =
            (data.results || []).sort(
                (a, b) =>
                    new Date(b.updated_at) -
                    new Date(a.updated_at)
            );  

        feedTotalPages =
            Math.ceil(
                data.count / 10
            );

        renderFeedReports();

        renderFeedPagination();

    }

}

function renderFeedPagination() {

    const container =
        document.getElementById(
            'feedPaginationContainer'
        );

    if (!container) {
        return;
    }

    container.innerHTML = `

        <button
            class="btn btn-soft me-2"
            ${
                feedPage === 1
                    ? 'disabled'
                    : ''
            }
            onclick="loadFeedReports(${feedPage - 1})">

            Previous

        </button>

        <span>

            Halaman
            ${feedPage}
            dari
            ${feedTotalPages}

        </span>

        <button
            class="btn btn-soft ms-2"
            ${
                feedPage === feedTotalPages
                    ? 'disabled'
                    : ''
            }
            onclick="loadFeedReports(${feedPage + 1})">

            Next

        </button>

    `;
}

function renderMyReports() {

    const container =
        document.getElementById(
            'myReportsContainer'
        );

    if (!container) {
        return;
    }

    container.innerHTML = '';

    myReports.forEach(
        report => {

            container.innerHTML += createCard(
                report,
                true
            );

        }
    );

}

function renderFeedReports() {

    const container =
        document.getElementById(
            'feedContainer'
        );

    if (!container) {
        return;
    }

    container.innerHTML = '';

    feedReports.forEach(
        report => {

            container.innerHTML += createCard(
                report,
                false
            );

        }
    );

}

function createCard(
    report,
    isMyReport
) {

    let progress = 0;
    let progressClass = '';
    let badgeClass = '';

    if (report.status === 'DRAFT') {

        progress = 20;
        progressClass = '#d9d4d4';
        badgeClass = 'badge-draft';

    }
    else if (report.status === 'REPORTED') {

        progress = 40;
        progressClass = '#e8c9c1';
        badgeClass = 'badge-reported';

    }
    else if (report.status === 'VERIFIED') {

        progress = 60;
        progressClass = '#e7b6aa';
        badgeClass = 'badge-verified';

    }
    else if (report.status === 'IN_PROGRESS') {

        progress = 80;
        progressClass = '#efcbbf';
        badgeClass = 'badge-progress';

    }
    else if (report.status === 'RESOLVED') {

        progress = 100;
        progressClass = '#df9bb0';
        badgeClass = 'badge-resolved';

    }

    return `

        <div
            class="card border-0 shadow-sm p-4 mb-3 soft-card">

            <h5 class="dashboard-title">

                ${report.title}

            </h5>

            <p>
                <strong>Kategori:</strong>
                ${report.category}
            </p>

            <p>
                <strong>Lokasi:</strong>
                ${report.location}
            </p>

            <p>
                <strong>Deskripsi:</strong>
                ${report.description}
            </p>

            <p>
                <strong>Pelapor:</strong>
                Warga Anonim
            </p>

            <p>
                <strong>Dibuat:</strong>
                ${
                    new Date(
                        report.created_at
                    ).toLocaleString(
                        'id-ID'
                    )
                }
            </p>

            <p>
                <strong>Terakhir Update:</strong>
                ${
                    new Date(
                        report.updated_at
                    ).toLocaleString(
                        'id-ID'
                    )
                }
            </p>

            <div class="mt-3">

                <span
                    class="${badgeClass} px-3 py-2">

                    ${
                        report.status === 'IN_PROGRESS'
                            ? 'IN PROGRESS'
                            : report.status
                    }

                </span>

            </div>

            <div class="mt-3">

                <small>

                    Progress Status

                </small>

                <div
                    class="progress mt-1"
                    style="height:10px;">

                    <div
                        class="progress-bar"
                        style="
                            width:${progress}%;
                            background-color:${progressClass};
                        ">

                    </div>

                </div>

                <div class="text-end mt-1">

                    <small>

                        ${progress}%

                    </small>

                </div>

            </div>

            ${
                report.status === 'DRAFT'
                ?
                `
                <div class="mt-3">

                    <button
                        class="btn btn-pink btn-sm me-2"
                        onclick="editDraft(${report.id})">

                        Edit Draft

                    </button>

                    <button
                        class="btn btn-pink-outline btn-sm"
                        onclick="deleteDraft(${report.id})">

                        Hapus

                    </button>

                </div>
                `
                :
                ''
            }

        </div>

    `;

}
         
async function saveDraft() {

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
            ).value,

        status: 'DRAFT'

    };

    let response;

    if (editingReportId === null) {

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

        editingReportId = null;

        loadMyReports();

        loadFeedReports();

        loadSummaryStats();

    }

}

function renderMyReportsPagination() {

    const container =
        document.getElementById(
            'myReportsPaginationContainer'
        );

    if (!container) {
        return;
    }

    container.innerHTML = `

        <button
            class="btn btn-soft me-2"
            ${
                myReportsPage === 1
                    ? 'disabled'
                    : ''
            }
            onclick="loadMyReports(${myReportsPage - 1})">

            Previous

        </button>

        <span>

            Halaman
            ${myReportsPage}
            dari
            ${myReportsTotalPages}

        </span>

        <button
            class="btn btn-soft ms-2"
            ${
                myReportsPage === myReportsTotalPages
                    ? 'disabled'
                    : ''
            }
            onclick="loadMyReports(${myReportsPage + 1})">

            Next

        </button>

    `;

}