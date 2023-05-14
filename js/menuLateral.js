let activeElement = null;
let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
  listElement.addEventListener('click', () => {
    let menu = listElement.nextElementSibling;

    // Ocultar el menú del elemento previamente activo
    if (activeElement && activeElement != listElement) {
      activeElement.classList.remove('arrow');
      activeElement.nextElementSibling.style.height = '0px';
    }

    // Mostrar u ocultar el menú del elemento actual
    listElement.classList.toggle('arrow');
    let height = 0;
    if (menu.clientHeight == "0") {
      height = menu.scrollHeight;
    }
    menu.style.height = `${height}px`;

    // Actualizar el elemento activo
    activeElement = listElement;
  });
});
