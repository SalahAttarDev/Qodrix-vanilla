// utils/GlobalCursor.js

export function initMagneticElements() {
    // Select all elements with the class
    const magneticElements = document.querySelectorAll('.magnetic-elem');

    magneticElements.forEach((elem) => {
        // Prevent attaching multiple listeners if re-rendered
        if (elem.dataset.magneticInit) return;
        elem.dataset.magneticInit = 'true';

        elem.addEventListener('mousemove', (e) => {
            const rect = elem.getBoundingClientRect();

            // Calculate mouse position relative to the center of the element
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Strength multiplier (0.1 to 1). Lower = subtle pull, Higher = wild pull
            const strength = 0.3;

            // Apply the transform
            elem.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        });

        elem.addEventListener('mouseleave', () => {
            // Snap back to the original position when the mouse leaves
            elem.style.transform = 'translate(0px, 0px)';
        });
    });
}
