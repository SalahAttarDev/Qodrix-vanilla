import "../styles/navigation.css";

export default function renderNavigation() {
    return {
        html: `
            <nav class="nav-pill" id="main-nav">
                <a href="#home" class="nav-logo magnetic-elem">Qodrix</a>
                <div class="nav-separator"></div>

                <div class="nav-active-indicator" id="nav-indicator"></div>

                <a href="#home" class="nav-link magnetic-elem active">Home</a>
                <a href="#about" class="nav-link magnetic-elem">About</a>
                <a href="#projects" class="nav-link magnetic-elem">Projects</a>
                <a href="#capabilities" class="nav-link magnetic-elem">Capabilities</a>
                <a href="#contact" class="nav-link magnetic-elem">Contact</a>
            </nav>
        `,
        mount: () => {
            const nav = document.getElementById('main-nav');
            const indicator = document.getElementById('nav-indicator');
            const links = nav.querySelectorAll('.nav-link');

            function updateIndicator(activeLink) {
                const width = activeLink.offsetWidth;
                const left = activeLink.offsetLeft;
                indicator.style.width = `${width}px`;
                indicator.style.transform = `translateX(${left}px)`;
            }

            setTimeout(() => {
                const activeLink = nav.querySelector('.nav-link.active');
                if (activeLink) updateIndicator(activeLink);
            }, 50);

            const handleNavClick = (e) => {
                links.forEach(l => l.classList.remove('active'));
                e.currentTarget.classList.add('active');
                updateIndicator(e.currentTarget);
            };

            links.forEach(link => {
                link.addEventListener('click', handleNavClick);
            });

            return () => {
                links.forEach(link => {
                    link.removeEventListener('click', handleNavClick);
                });
            };
        }
    };
}
