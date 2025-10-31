const btn = document.querySelector('#menu-toggle-btn');
const nav = document.querySelector('#top-level-nav');

btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('max-h-[40rem]'); // max-height is set to the size that is large enough to be able to accomodate serveral more navigation items
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !nav.hidden) {
        btn.setAttribute('aria-expanded', 'false');
        nav.hidden = true;
    }
});


