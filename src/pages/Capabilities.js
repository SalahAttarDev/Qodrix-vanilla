import "../styles/capabilities.css";

export default function renderCapabilities() {
    return {
        html: `
            <section class="tech-bento-section page-section" id="capabilities">
                <div class="bento-container">

                    <div class="bento-header fade-up">
                        <h2 class="bento-title">System Architecture.</h2>
                        <p class="bento-subtitle">We engineer scalable digital infrastructure tailored for absolute performance. No bloat, just precision.</p>
                    </div>

                    <div class="bento-grid" id="bento-grid">

                        <div class="bento-card col-span-2 fade-up" style="--animation-order: 1;">
                            <div class="card-glow-layer"></div>
                            <div class="card-inner flex-row">
                                <div class="bento-text">
                                    <span class="mono-tag">SYS.01 // WEB_ENGINEERING</span>
                                    <h3>Custom Web Applications</h3>
                                    <p>Zero-bloat, high-performance web apps built on our custom vanilla JS architectures. We engineer for perfect SEO, instantaneous loaders, and flawless Core Web Vitals.</p>
                                    <div class="tech-stack">
                                        <span class="tech-badge">Vanilla JS</span>
                                        <span class="tech-badge">SEO Optimization</span>
                                        <span class="tech-badge">Sub-second LCP</span>
                                    </div>
                                </div>
                                <div class="bento-visual">
                                    <div class="performance-widget">
                                        <div class="mock-browser">
                                            <div class="skeleton-nav"></div>
                                            <div class="skeleton-hero"></div>
                                        </div>
                                        <div class="metrics-container">
                                            <div class="lighthouse-score">
                                                <svg class="perf-ring" viewBox="0 0 100 100">
                                                    <circle class="ring-bg" cx="50" cy="50" r="40"></circle>
                                                    <circle class="ring-progress" cx="50" cy="50" r="40"></circle>
                                                </svg>
                                                <div class="perf-score">
                                                    <span class="score-number perf-num">0</span>
                                                    <span class="score-label">PERF</span>
                                                </div>
                                            </div>
                                            <div class="lighthouse-score">
                                                <svg class="perf-ring" viewBox="0 0 100 100">
                                                    <circle class="ring-bg" cx="50" cy="50" r="40"></circle>
                                                    <circle class="ring-progress" cx="50" cy="50" r="40"></circle>
                                                </svg>
                                                <div class="perf-score">
                                                    <span class="score-number seo-num">0</span>
                                                    <span class="score-label">SEO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bento-card col-span-1 fade-up" style="--animation-order: 2;">
                            <div class="card-glow-layer"></div>
                            <div class="card-inner flex-col">
                                <div class="bento-text">
                                    <span class="mono-tag">SYS.02 // APP_DEV</span>
                                    <h3>Mobile Engineering</h3>
                                    <p>Native-feeling iOS and Android applications designed for fluid, high-fps user experiences.</p>
                                </div>
                                <div class="bento-visual visual-small">
                                    <div class="app-widget">
                                        <div class="mobile-frame">
                                            <div class="mobile-notch"></div>
                                            <div class="mobile-screen"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bento-card col-span-1 fade-up" style="--animation-order: 3;">
                            <div class="card-glow-layer"></div>
                            <div class="card-inner flex-col">
                                <div class="bento-text">
                                    <span class="mono-tag">SYS.03 // EMAIL</span>
                                    <h3>Responsive Email</h3>
                                    <p>Bulletproof email layouts engineered to render flawlessly across all major clients.</p>
                                    <div class="tech-stack">
                                        <span class="tech-badge">Liquid</span>
                                        <span class="tech-badge">HTML Tables</span>
                                    </div>
                                </div>
                                <div class="bento-visual visual-small">
                                    <div class="responsive-email-widget">
                                        <div class="email-window">
                                            <div class="email-header"></div>
                                            <div class="email-body">
                                                <div class="email-block main"></div>
                                                <div class="email-block side"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bento-card col-span-2 fade-up" style="--animation-order: 4;">
                            <div class="card-glow-layer"></div>
                            <div class="card-inner flex-row">
                                <div class="bento-text">
                                    <span class="mono-tag">SYS.04 // AI_AUTO</span>
                                    <h3>AI & Data Automation</h3>
                                    <p>Constructing intelligent data bridges and autonomous workflows that act as the technical engine for your daily operations.</p>
                                    <div class="tech-stack">
                                        <span class="tech-badge">n8n</span>
                                        <span class="tech-badge">OpenAI API</span>
                                        <span class="tech-badge">Webhooks</span>
                                    </div>
                                </div>
                                <div class="bento-visual">
                                    <div class="automation-widget">
                                        <div class="node-system">
                                            <div class="data-node node-a">Event</div>
                                            <div class="data-path"><div class="data-packet"></div></div>
                                            <div class="data-node node-b" style="border-color: #10b981; color: #10b981;">n8n</div>
                                            <div class="data-path"><div class="data-packet delay"></div></div>
                                            <div class="data-node node-c">OpenAI</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        `,
        mount: () => {
            // --- 1. Flashlight Mouse Tracking ---
            const grid = document.getElementById('bento-grid');
            const cards = document.querySelectorAll('.bento-card');

            const handleMouseMove = (e) => {
                for (const card of cards) {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                }
            };
            if (grid) grid.addEventListener('mousemove', handleMouseMove);

            // --- 2. High-Speed Web Dev Animation (Loader + Double 100 Scores) ---
            // --- 2. Dynamic Web Dev Animation (Colors, Offset Timing, Different Scores) ---
            const perfCard = cards[0];
            if (perfCard) {
                const perfNum = perfCard.querySelector('.perf-num');
                const seoNum = perfCard.querySelector('.seo-num');
                const rings = perfCard.querySelectorAll('.ring-progress');
                const mockBrowser = perfCard.querySelector('.mock-browser');

                // Store animation frames so we can cancel them if user hovers mid-animation
                let perfAnimId = null;
                let seoAnimId = null;
                let hasAutoPlayed = false;

                const animateMetric = (targetValue, duration, numEl, ringEl, setAnimId) => {
                    let startTimestamp = null;
                    const circumference = 251.2;

                    const step = (timestamp) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

                        // Cubic ease-out for a natural slow-down at the end
                        const ease = 1 - Math.pow(1 - progress, 3);
                        const currentVal = Math.floor(ease * targetValue);

                        // Update number text
                        numEl.innerText = currentVal;

                        // Determine Color (Red -> Orange -> Green)
                        let color = '#ef4444'; // Red
                        if (currentVal >= 50) color = '#f59e0b'; // Orange
                        if (currentVal >= 90) color = '#10b981'; // Green

                        // Apply colors
                        numEl.style.color = color;
                        ringEl.style.stroke = color;

                        // Add glow only when hitting the green zone
                        if (currentVal >= 90) {
                            numEl.style.textShadow = `0 0 15px ${color}80`;
                        } else {
                            numEl.style.textShadow = 'none';
                        }

                        // Update SVG Ring Progress
                        ringEl.style.strokeDashoffset = circumference - (circumference * (currentVal / 100));

                        if (progress < 1) {
                            setAnimId(requestAnimationFrame(step));
                        }
                    };
                    setAnimId(requestAnimationFrame(step));
                };

                const playAnimations = () => {
                    // Cancel any currently running animations to prevent glitches
                    if (perfAnimId) cancelAnimationFrame(perfAnimId);
                    if (seoAnimId) cancelAnimationFrame(seoAnimId);

                    // Reset to 0 visually before starting
                    rings.forEach(ring => {
                        ring.style.strokeDashoffset = '251.2';
                        ring.style.stroke = '#ef4444';
                    });
                    perfNum.style.color = '#ef4444';
                    seoNum.style.color = '#ef4444';
                    perfNum.style.textShadow = "none";
                    seoNum.style.textShadow = "none";

                    mockBrowser.classList.add('loaded');

                    // Run the animations with offset timings
                    animateMetric(98, 1200, perfNum, rings[0], (id) => perfAnimId = id);
                    animateMetric(100, 1600, seoNum, rings[1], (id) => seoAnimId = id);
                };

                // Trigger 1: Auto-play when scrolling into view
                const perfObserver = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting && !hasAutoPlayed) {
                        hasAutoPlayed = true;
                        // Add a tiny 300ms delay so it happens right as the box fades up
                        setTimeout(playAnimations, 300);
                    }
                }, { threshold: 0.5 }); // Triggers when 50% of the card is visible on screen

                perfObserver.observe(perfCard);

                // Trigger 2: Re-play when user hovers
                perfCard.addEventListener('mouseenter', () => {
                    // Temporarily remove 'loaded' class to re-trigger the shimmer loader effect
                    mockBrowser.classList.remove('loaded');
                    // Small delay to let the shimmer reset before blasting to 100 again
                    setTimeout(playAnimations, 50);
                });

                // (Note: We removed the 'mouseleave' event so the numbers proudly stay at 98/100!)
            }

            return () => {
                if (grid) grid.removeEventListener('mousemove', handleMouseMove);
            };
        }
    };
}
