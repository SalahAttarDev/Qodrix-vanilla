import "../styles/hero.css";

export default function renderHome() {
    return {
        html: `

            <section class="hero-section" id="hero">

                <div class="hero-container">
                    <div class="hero-content">

                        <div class="trust-badge fade-up">
                            <div class="trust-badge-dot"></div>
                            Enterprise Digital Solutions
                        </div>

                        <div class="hero-logo-wrapper fade-up">
                            <h2 style="font-size: 28px; font-weight: 700; margin-bottom: 1.5rem; letter-spacing: -1px;">Qodix</h2>
                        </div>

                        <h1 class="hero-headline fade-up">
                            Digital presence, <br/>
                            <span class="highlight-text">redefined.</span>
                        </h1>

                        <div class="hero-subheading fade-up">
                            <p class="subtitle-main">We engineer high-performance platforms that merge cutting-edge design with unparalleled technical precision.</p>
                        </div>

                        <div class="hero-buttons fade-up">
                            <button class="btn-glass primary">
                                <span class="btn-text">Start a Project</span>
                                <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <button class="btn-glass">
                                <span class="btn-text">Our Capabilities</span>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        `,
        mount: () => {
            // 1. Mouse Tracking Spotlight Logic
            const heroSection = document.getElementById('hero');
            const spotlight = document.getElementById('spotlight');



            // 2. Intersection Observer (Fade up animations)
            const elements = document.querySelectorAll('.fade-up');

            if (!('IntersectionObserver' in window)) {
                elements.forEach(el => el.classList.add('is-visible'));
            } else {
                const observer = new IntersectionObserver((entries, obs) => {
                    entries.forEach((entry, index) => {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                entry.target.classList.add('is-visible');
                            }, index * 120);
                            obs.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });

                elements.forEach(el => observer.observe(el));
            }


        }
    };
}
