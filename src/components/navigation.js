import "../styles/navigation.css";

export default function renderNavigation() {
    return {
        html: `
            <header class="tech-header" id="main-nav">
                <div class="header-container">

                    <div class="header-left">
                        <a href="/" class="brand-logo" data-link>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="12 2 2 22 22 22"></polygon>
                            </svg>
                            <span>Qodix</span>
                        </a>
                    </div>

                    <nav class="header-center">
                        <ul id="primary-menu" class="nav-links">
                            <li><a href="/" class="nav-item active" data-link>Overview</a></li>
                            <li><a href="/about" class="nav-item" data-link>Architecture</a></li>
                            <li><a href="/capabilities" class="nav-item" data-link>Capabilities</a></li>
                            <li><a href="/projects" class="nav-item" data-link>Projects</a></li>
                            </li>
                        </ul>
                    </nav>

                    <div class="header-right">
                        <a href="/contact" class="btn-micro" data-link>Deploy Project</a>

                        <button class="mobile-menu-btn" id="mobile-toggle" aria-label="Menu">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="4" y1="12" x2="20" y2="12"></line>
                                <line x1="4" y1="6" x2="20" y2="6"></line>
                                <line x1="4" y1="18" x2="20" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                </div>
            </header>
        `,
        mount: () => {
            const navbar = document.getElementById('main-nav');
            const mobileToggle = document.getElementById('mobile-toggle');
            const navLinks = document.querySelector('.header-center');

            const toggleMenu = () => {
                navLinks.classList.toggle('show');
            };

            const handleToggleClick = (e) => {
                e.stopPropagation();
                toggleMenu();
            };

            const handleOutsideClick = (e) => {
                if (navLinks.classList.contains('show') && !navbar.contains(e.target)) {
                    navLinks.classList.remove('show');
                }
            };

            mobileToggle.addEventListener('click', handleToggleClick);
            document.addEventListener('click', handleOutsideClick);

            return () => {
                mobileToggle.removeEventListener('click', handleToggleClick);
                document.removeEventListener('click', handleOutsideClick);
            };
        }
    };
}
