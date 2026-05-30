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