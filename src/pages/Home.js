import "../styles/hero.css";

export default function renderHome() {
    return {
        html: `
            <section class="hero-section" id="hero">
                <div class="hero-container">
                    <div class="hero-content">

                        <div class="trust-badge blur-in" style="--animation-order: 1;">
                            <div class="trust-badge-dot pulsing"></div>
                            Enterprise Digital Solutions
                        </div>

                        <div class="hero-logo-wrapper blur-in" style="--animation-order: 2;">
                            <h2 class="sleek-logo">Qodix</h2>
                        </div>

                        <div class="ambient-text-glow"></div>

                   <h1 class="hero-headline blur-in" style="--animation-order: 3;">
    Digital presence,<br/>
    <span class="text-glow-sweep">redefined.</span>
</h1>

                        <div class="hero-subheading blur-in" style="--animation-order: 4;">
                            <p class="subtitle-main">We engineer high-performance platforms that merge cutting-edge design with unparalleled technical precision.</p>
                        </div>

                        <div class="hero-buttons blur-in" style="--animation-order: 5;">
                            <button class="btn-glass primary magnetic-elem">
                                <span class="btn-text">Start a Project</span>
                                <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <button class="btn-glass magnetic-elem">
                                <span class="btn-text">Our Capabilities</span>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        `,
        mount: () => {
            // Trigger the blur-in animations when the DOM is ready
            setTimeout(() => {
                const elements = document.querySelectorAll('.blur-in');
                elements.forEach(el => el.classList.add('is-visible'));
            }, 100);
        }
    };
}
