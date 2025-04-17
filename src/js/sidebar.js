const closeBtn2 = document.getElementById('close2');
const categoriesBtn = document.getElementById('sidebar');
categoriesBtn.addEventListener('click', toggleCategories);
closeBtn2.addEventListener('click', closeCategoriesSidebar);

function toggleCategories() {
  const categoriesSidebar = document.getElementById('categories-sidebar');
  const darkOverlay = document.getElementById('dark-overlay');
  const isOpen = categoriesSidebar.classList.contains('-translate-x-0');

  if (isOpen) {
    closeCategoriesSidebar();
  } else {
    categoriesSidebar.classList.replace('-translate-x-full', 'translate-x-0');
    categoriesSidebar.classList.add('z-40');
    darkOverlay.classList.remove('hidden');
  }
}

function closeCategoriesSidebar() {
  const categoriesSidebar = document.getElementById('categories-sidebar');
  const darkOverlay = document.getElementById('dark-overlay');

  categoriesSidebar.classList.replace('translate-x-0', '-translate-x-full');
  darkOverlay.classList.add('hidden');
}
