import "../styles/capabilities.css";

export default function renderCapabilities() {
    return {
        // ... (Keep the exact same HTML from the previous step)
        html: `
            <section class="tech-ledger-section" id="capabilities">
                <div class="ledger-container">

                    <div class="ledger-left">
                        <div class="sticky-header fade-up">
                            <div class="system-status">
                                <span class="status-dot pulsing"></span>
                                <span class="status-text">SYSTEM CAPABILITIES</span>
                            </div>
                            <h2 class="ledger-title">Technical<br/>Arsenal.</h2>
                            <p class="ledger-subtitle">We don't just build websites; we engineer scalable digital infrastructure tailored for absolute performance.</p>
                        </div>
                    </div>

                    <div class="ledger-right" id="cards-container">

                        <div class="system-card" data-index="0">
                            <div class="card-inner">
                                <div class="card-header-flex">
                                    <span class="mono-tag">SYS.01 // FRONTEND</span>
                                    <div class="live-icon-container">
                                        <div class="ring ring-1"></div>
                                        <div class="ring ring-2"></div>
                                        <div class="core-dot"></div>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <h3>Custom Web Applications</h3>
                                    <p>Zero-bloat, high-performance web applications built from the ground up. We prioritize instant load times and semantic precision over heavy, pre-packaged frameworks.</p>
                                    <div class="tech-stack">
                                        <span class="tech-badge">Vanilla JS</span>
                                        <span class="tech-badge">React.js</span>
                                        <span class="tech-badge">Node.js</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="system-card" data-index="1">
                            <div class="card-inner">
                                <div class="card-header-flex">
                                    <span class="mono-tag">SYS.02 // COMMUNICATION</span>
                                    <div class="live-icon-container scanner-icon">
                                        <div class="scanner-line"></div>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <h3>Responsive Email Engineering</h3>
                                    <p>Bulletproof, production-ready email templates designed to render flawlessly across all major clients. We build layout engines ensuring brand consistency and high deliverability.</p>
                                    <div class="tech-stack">
                                        <span class="tech-badge">HTML/CSS Tables</span>
                                        <span class="tech-badge">Liquid Engine</span>
                                        <span class="tech-badge">Litmus Tested</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="system-card" data-index="2">
                            <div class="card-inner">
                                <div class="card-header-flex">
                                    <span class="mono-tag">SYS.03 // AUTOMATION</span>
                                    <div class="live-icon-container pulse-icon">
                                        <div class="node node-1"></div>
                                        <div class="node node-2"></div>
                                        <div class="node node-3"></div>
                                        <div class="connection-line"></div>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <h3>Marketing Automation</h3>
                                    <p>Seamless integration with top-tier marketing platforms. We construct automated data flows and segmented campaigns that convert, acting as the technical bridge to your growth.</p>
                                    <div class="tech-stack">
                                        <span class="tech-badge">Klaviyo</span>
                                        <span class="tech-badge">HubSpot</span>
                                        <span class="tech-badge">Mailchimp</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        `,
        mount: () => {
            const container = document.getElementById('cards-container');
            const cards = container.querySelectorAll('.system-card');

            // 1. Global Proximity Tracking
            const handleMouseMove = (e) => {
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    // Calculate exact pixel position of cursor inside each card
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    // Pass coordinates to CSS
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            };

            // 2. 3D Tilt Math (Applied individually on hover)
            const handleCardMove = (e, card, inner) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                // Max tilt is 4 degrees for a subtle, heavy, premium feel
                const rotateX = ((y - centerY) / centerY) * -4;
                const rotateY = ((x - centerX) / centerX) * 4;

                inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            };

            container.addEventListener('mousemove', handleMouseMove);

            cards.forEach(card => {
                const inner = card.querySelector('.card-inner');

                card.addEventListener('mousemove', (e) => handleCardMove(e, card, inner));
                card.addEventListener('mouseleave', () => {
                    inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
                });
            });

            return () => {
                container.removeEventListener('mousemove', handleMouseMove);
            };
        }
    };
}
