document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('button.lg\\:hidden');
    const navLinks = document.querySelector('nav div.hidden.lg\\:flex');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('hidden');
            navLinks.classList.toggle('flex');
            navLinks.classList.toggle('flex-col');
            navLinks.classList.toggle('absolute');
            navLinks.classList.toggle('top-full');
            navLinks.classList.toggle('left-0');
            navLinks.classList.toggle('w-full');
            navLinks.classList.toggle('bg-white');
            navLinks.classList.toggle('p-4');
            navLinks.classList.toggle('border-b');
            navLinks.classList.toggle('border-slate-200');
            navLinks.classList.toggle('z-50');
            navLinks.classList.toggle('shadow-lg');
        });
    }
});
