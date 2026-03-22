// utils/GlobalCursor.js

export default function renderGlobalCursor() {
    return {
        html: `
            <div class="ambient-canvas" id="ambient-canvas">
                <div class="glow-orb orb-1"></div>
                <div class="glow-orb orb-2"></div>
                <div class="glow-orb orb-mouse" id="cursor-orb"></div>
            </div>
            <canvas id="magnetic-grid-canvas"></canvas>
        `,
        mount: () => {
            // --- 1. Shared Mouse State ---
            let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
            let orbPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
            let animationFrameId;

            const handleGlobalMouseMove = (e) => {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
            };
            window.addEventListener('mousemove', handleGlobalMouseMove);

            // --- 2. Canvas Kinetic Grid Setup ---
            const canvas = document.getElementById('magnetic-grid-canvas');
            const ctx = canvas.getContext('2d');
            let dots = [];
            const spacing = 35; // Distance between dots
            const radius = 1.5; // Size of dots
            const mouseInteractRadius = 150; // How far the magnetic push reaches

            // Make it retina-ready so it isn't blurry on high-end screens
            const resizeCanvas = () => {
                const pixelRatio = window.devicePixelRatio || 1;
                canvas.width = window.innerWidth * pixelRatio;
                canvas.height = window.innerHeight * pixelRatio;
                canvas.style.width = `${window.innerWidth}px`;
                canvas.style.height = `${window.innerHeight}px`;
                ctx.scale(pixelRatio, pixelRatio);
                initGrid();
            };

            const initGrid = () => {
                dots = [];
                const cols = Math.floor(window.innerWidth / spacing);
                const rows = Math.floor(window.innerHeight / spacing);

                // Center the grid perfectly
                const offsetX = (window.innerWidth - cols * spacing) / 2;
                const offsetY = (window.innerHeight - rows * spacing) / 2;

                for (let i = 0; i <= cols; i++) {
                    for (let j = 0; j <= rows; j++) {
                        dots.push({
                            ox: i * spacing + offsetX, // Original X
                            oy: j * spacing + offsetY, // Original Y
                            x: i * spacing + offsetX,  // Current X
                            y: j * spacing + offsetY,  // Current Y
                            vx: 0,                     // Velocity X
                            vy: 0                      // Velocity Y
                        });
                    }
                }
            };

            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();

            // --- 3. The Master Animation Loop ---
            const cursorOrb = document.getElementById('cursor-orb');

            const animate = () => {
                // Clear the canvas for the next frame
                ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

                // A. Smooth LERP for the background glowing orb
                orbPos.x += (mouse.x - orbPos.x) * 0.05;
                orbPos.y += (mouse.y - orbPos.y) * 0.05;
                if (cursorOrb) {
                    cursorOrb.style.transform = `translate(${orbPos.x}px, ${orbPos.y}px) translate(-50%, -50%)`;
                }

                // B. Spring Physics for the Canvas Grid
                ctx.fillStyle = 'rgba(255, 255, 255, 0.25)'; // Dot color

                for (let i = 0; i < dots.length; i++) {
                    let dot = dots[i];

                    // Calculate distance from mouse
                    let dx = mouse.x - dot.ox;
                    let dy = mouse.y - dot.oy;
                    let dist = Math.sqrt(dx * dx + dy * dy);

                    let targetX = dot.ox;
                    let targetY = dot.oy;

                    // If mouse is close, push the dot away
                    if (dist < mouseInteractRadius) {
                        let force = (mouseInteractRadius - dist) / mouseInteractRadius;
                        let pushForce = force * 40; // Max distance dots get pushed
                        let angle = Math.atan2(dy, dx);

                        targetX -= Math.cos(angle) * pushForce;
                        targetY -= Math.sin(angle) * pushForce;
                    }

                    // Apply Spring Physics (Pull back to original position)
                    dot.vx += (targetX - dot.x) * 0.05; // Spring strength
                    dot.vx *= 0.75; // Friction (lower = more bouncy)
                    dot.x += dot.vx;

                    dot.vy += (targetY - dot.y) * 0.05;
                    dot.vy *= 0.75;
                    dot.y += dot.vy;

                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
                    ctx.fill();
                }

                animationFrameId = requestAnimationFrame(animate);
            };

            animate();

            const magneticElements = document.querySelectorAll('.magnetic-elem');

            const handleMagneticMove = (e) => {
                const elem = e.currentTarget;
                const rect = elem.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                elem.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            };

            const handleMagneticLeave = (e) => {
                e.currentTarget.style.transform = 'translate(0px, 0px)';
            };

            magneticElements.forEach((elem) => {
                elem.addEventListener('mousemove', handleMagneticMove);
                elem.addEventListener('mouseleave', handleMagneticLeave);
            });

            return () => {
                window.removeEventListener('mousemove', handleGlobalMouseMove);
                window.removeEventListener('resize', resizeCanvas);
                cancelAnimationFrame(animationFrameId);

                magneticElements.forEach((elem) => {
                    elem.removeEventListener('mousemove', handleMagneticMove);
                    elem.removeEventListener('mouseleave', handleMagneticLeave);
                });
            };
        }
    };
}
