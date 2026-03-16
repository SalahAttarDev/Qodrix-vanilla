// components/GlobalCursor.js

export default function renderGlobalCursor() {
    return {
        html: `
            <div id="global-cursor-container">
                <div class="cursor-h" id="cursor-h"></div>
                <div class="cursor-v" id="cursor-v"></div>
            </div>
        `,
        mount: () => {
            const hLine = document.getElementById('cursor-h');
            const vLine = document.getElementById('cursor-v');

            const handleMouseMove = (e) => {
                const x = e.clientX;
                const y = e.clientY;

                requestAnimationFrame(() => {
                    // 1. Move the crosshair lines
                    hLine.style.transform = `translateY(${y}px)`;
                    vLine.style.transform = `translateX(${x}px)`;

                    // 2. Update the Global Grid spotlight in CSS
                    document.body.style.setProperty('--mouse-x', `${x}px`);
                    document.body.style.setProperty('--mouse-y', `${y}px`);
                });
            };

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }
    };
}
