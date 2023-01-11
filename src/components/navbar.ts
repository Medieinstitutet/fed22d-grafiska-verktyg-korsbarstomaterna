const toggleOverlay = (open: boolean) => {
  const menuOverlayEl = document.querySelector('#mobileNav') as HTMLDivElement;
  if (!open) {
    menuOverlayEl.classList.remove('burger-menu-nav-open');
  } else {
    menuOverlayEl.classList.add('burger-menu-nav-open');
  }
};

const toggleMenu = () => {
  const element = document.querySelector('.burger-menu-button');
  if (element) {
    const innerButtonEl = element.querySelector('.burger-menu-button-inner') as HTMLDivElement;
    const outerButtonEl = element.querySelector('.burger-menu-button-outer') as HTMLDivElement;

    if (element.ariaExpanded === 'true') {
      // Menu is currently open
      outerButtonEl.classList.remove('display-none');
      innerButtonEl.classList.add('display-none');
      element.ariaExpanded = 'false';
      toggleOverlay(false);
    } else if (element.ariaExpanded === 'false' || element.ariaExpanded === 'undefined') {
      // Menu is currently closed
      innerButtonEl.classList.remove('display-none');
      outerButtonEl.classList.add('display-none');
      element.ariaExpanded = 'true';
      toggleOverlay(true);
    }
  }
};

export default toggleMenu;
