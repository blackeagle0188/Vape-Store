function addHoverClass() {
  const listItems = document.querySelectorAll('li.list-menu-sub-item');
  listItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      listItems.forEach(item => {
        item.classList.remove('tab-active');
      });
      item.classList.add('tab-active');
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initializeScrollAnimationTrigger();
  initializeScrollZoomAnimationTrigger();
  addHoverClass(); // Call the new function
});