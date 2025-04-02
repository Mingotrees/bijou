const closeBtn = document.getElementById('close');
const categoriesBtn = document.getElementById('sidebar');
const navSideBtn = document.getElementById('navBtn');
const navCloseBtn = document.getElementById('close2');

if (categoriesBtn) {
  categoriesBtn.addEventListener('click', toggleCategories);
}
if (navSideBtn) {
  navSideBtn.addEventListener('click', toggleSidebar);
}
if (closeBtn) {
  closeBtn.addEventListener('click', closeCategoriesSidebar);
}
if (navCloseBtn) {
  navCloseBtn.addEventListener('click', closeSidebar);
}

function toggleCategories() {
  const categoriesSidebar = document.getElementById('categories-sidebar');
  const darkOverlay = document.getElementById('dark-overlay');
  if (!categoriesSidebar || !darkOverlay) return;

  const isOpen = categoriesSidebar.classList.contains('-translate-x-0');

  if (isOpen) {
    closeCategoriesSidebar();
  } else {
    categoriesSidebar.classList.replace('-translate-x-full', 'translate-x-0');
    categoriesSidebar.classList.add('z-10');
    darkOverlay.classList.remove('hidden');
  }
}

function closeCategoriesSidebar() {
  const categoriesSidebar = document.getElementById('categories-sidebar');
  const darkOverlay = document.getElementById('dark-overlay');
  if (!categoriesSidebar || !darkOverlay) return;

  categoriesSidebar.classList.replace('translate-x-0', '-translate-x-full');
  darkOverlay.classList.add('hidden');
}

function toggleSidebar() {
  const sidebar = document.getElementById('navbarSide');
  const darkOverlay = document.getElementById('dark-overlay2');
  if (!sidebar || !darkOverlay) return;

  const isOpen = sidebar.classList.contains('translate-x-0');

  if (isOpen) {
    closeSidebar();
  } else {
    sidebar.classList.replace('translate-x-full', 'translate-x-0');
    sidebar.classList.add('z-10');
    darkOverlay.classList.remove('hidden');
  }
}

function closeSidebar() {
  const sidebar = document.getElementById('navbarSide');
  const darkOverlay = document.getElementById('dark-overlay2');
  if (!sidebar || !darkOverlay) return;

  sidebar.classList.replace('translate-x-0', 'translate-x-full');
  darkOverlay.classList.add('hidden');
}
