document.addEventListener('DOMContentLoaded', () => {
    const sidebarContainer = document.getElementById('sidebar-container');
    const sidebarBackdrop = document.getElementById('sidebar-backdrop');
    const sidebarContent = document.getElementById('sidebar-content');
    const menuOpenBtn = document.getElementById('menu-open-btn');
    const menuCloseBtn = document.getElementById('menu-close-btn');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    function openSidebar() {
        sidebarContainer.setAttribute('data-open', 'true');
        sidebarBackdrop.classList.remove('opacity-0', 'pointer-events-none');
        sidebarBackdrop.classList.add('opacity-100', 'pointer-events-auto');
        sidebarContent.classList.remove('translate-x-[110%]');
        sidebarContent.classList.add('translate-x-0');
    }

    function closeSidebar() {
        sidebarContainer.setAttribute('data-open', 'false');
        sidebarBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
        sidebarBackdrop.classList.add('opacity-0', 'pointer-events-none');
        sidebarContent.classList.remove('translate-x-0');
        sidebarContent.classList.add('translate-x-[110%]');
    }

    if (menuOpenBtn) menuOpenBtn.addEventListener('click', openSidebar);
    if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeSidebar);
    if (sidebarBackdrop) sidebarBackdrop.addEventListener('click', closeSidebar);

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                closeSidebar();
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    setTimeout(() => {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 400);
                }
            }
        });
    });
});
