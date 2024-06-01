document.querySelector('.hamburger-menu').addEventListener('click', () => {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
});