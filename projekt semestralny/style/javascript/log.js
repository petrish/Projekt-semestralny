const openMenu = () => {
    console.log("Menu otwarte!");
    menuOpen.style.display = "block";
  };
  
  const closeMenu = () => {
    console.log("Menu zamknięte!");
    menuOpen.style.display = "none";
  };
  
  menu.addEventListener("click", () => {
    openMenu();
  });
  
  menuClose.addEventListener("click", () => {
    closeMenu();
  });