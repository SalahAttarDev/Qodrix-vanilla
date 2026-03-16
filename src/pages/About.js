import "../styles/about.css";

export default function renderAbout() {
    return {
        html: `
            <section class="about-editorial" id="about">
                <div class="editorial-container">
                    <div class="editorial-grid">

                        <div class="editorial-image-wrapper fade-up">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Engineering Workspace" class="editorial-img" />
                        </div>

                        <div class="editorial-content fade-up" style="transition-delay: 0.1s;">
                            <h2 class="editorial-title">Built by engineers, <br/>for the web.</h2>

                            <div class="editorial-text">
                                <p>Most platforms are assembled. We prefer to build.</p>
                                <p>We focus on writing clean, semantic code from the ground up. No bloated site-builders, no messy dependencies, and no templates. Just modern web standards applied with precision.</p>
                                <p>By keeping our architecture custom and our codebase lean, we deliver digital experiences that load instantly, scale naturally, and feel completely native to your brand. We don't just design interfaces; we engineer the foundation they stand on.</p>
                            </div>

                            <div class="editorial-signature">
                                <span>Established in code.</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        `,
        mount: () => {
            const aboutSection = document.getElementById('about');
            const elements = aboutSection.querySelectorAll('.fade-up');
            let observer;

            if (!('IntersectionObserver' in window)) {
                elements.forEach(el => el.classList.add('is-visible'));
            } else {
                observer = new IntersectionObserver((entries, obs) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                entry.target.classList.add('is-visible');
                            }, 50);
                            obs.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.15 });

                elements.forEach(el => observer.observe(el));
            }

            return () => {
                if (observer) observer.disconnect();
            };
        }
    };
}
