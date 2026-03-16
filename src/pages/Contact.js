import "../styles/contact.css";

export default function renderContact() {
    return {
        html: `
            <section class="contact-section" id="contact">
                <div class="contact-container">

                    <div class="contact-grid">

                        <div class="contact-info fade-up">
                            <div class="system-status">
                                <span class="status-dot pulsing"></span>
                                <span class="status-text">COMMUNICATION CHANNEL OPEN</span>
                            </div>
                            <h2 class="contact-title">Initialize<br/>Deployment.</h2>
                            <p class="contact-subtitle">Looking for an engineering partner for your next web application or responsive email architecture? Let's discuss your technical requirements.</p>

                            <div class="terminal-specs">
                                <div class="spec-line">
                                    <span class="spec-label">STATUS</span>
                                    <span class="spec-value success">Available for Remote Roles</span>
                                </div>
                                <div class="spec-line">
                                    <span class="spec-label">BASE</span>
                                    <span class="spec-value">Kuala Lumpur, MY (UTC+8)</span>
                                </div>
                                <div class="spec-line">
                                    <span class="spec-label">LANGUAGES</span>
                                    <span class="spec-value">English, French, Arabic</span>
                                </div>
                            </div>
                        </div>

                        <div class="contact-form-wrapper fade-up" style="transition-delay: 0.1s;">
                            <form class="glass-form" id="deployment-form">
                                <div class="form-header">
                                    <span class="mono-tag">PROJECT_BRIEFING.sh</span>
                                </div>

                                <div class="input-group">
                                    <label for="name">System Admin (Name)</label>
                                    <input type="text" id="name" placeholder="Enter your name" required autocomplete="off" />
                                </div>

                                <div class="input-group">
                                    <label for="email">Comm Link (Email)</label>
                                    <input type="email" id="email" placeholder="hello@agency.com" required autocomplete="off" />
                                </div>

                                <div class="input-group">
                                    <label for="message">Project Specifications</label>
                                    <textarea id="message" rows="4" placeholder="Detail your architecture or layout requirements..." required></textarea>
                                </div>

                                <button type="submit" class="btn-submit">
                                    <span>Execute Command</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </button>
                            </form>
                        </div>

                    </div>

                    <footer class="tech-footer fade-up" style="transition-delay: 0.2s;">
                        <div class="footer-left">
                            <span class="footer-logo">Qodix</span>
                            <span class="footer-copyright">© 2026. Engineered for the web.</span>
                        </div>
                        <div class="footer-right">
                            <a href="#" class="footer-link">GitHub</a>
                            <a href="#" class="footer-link">LinkedIn</a>
                            <a href="#" class="footer-link">Resume</a>
                        </div>
                    </footer>

                </div>
            </section>
        `,
        mount: () => {
            // 1. Fade up observer
            const elements = document.querySelectorAll('#contact .fade-up');
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            elements.forEach(el => observer.observe(el));

            // 2. Prevent default form submission for the demo
            const form = document.getElementById('deployment-form');
            const handleFormSubmit = (e) => {
                e.preventDefault();
                const btn = form.querySelector('.btn-submit span');
                const originalText = btn.innerText;
                btn.innerText = "Command Executed.";
                setTimeout(() => { btn.innerText = originalText; form.reset(); }, 3000);
            };

            if (form) {
                form.addEventListener('submit', handleFormSubmit);
            }

            return () => {
                observer.disconnect();
                if (form) form.removeEventListener('submit', handleFormSubmit);
            };
        }
    };
}
