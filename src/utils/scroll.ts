export const smoothScrollTo = (targetY: number, duration = 1200) => {
    const startY = window.scrollY;
    const difference = targetY - startY;
    const startTime = performance.now();

    const ease = (t: number) =>
        t < 0.5
            ? 2 * t * t
            : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const step = (currentTime: number) => {
        const time = Math.min(1, (currentTime - startTime) / duration);
        const eased = ease(time);

        window.scrollTo(0, startY + difference * eased);

        if (time < 1) {
            requestAnimationFrame(step);
        }
    };

    requestAnimationFrame(step);
}; 