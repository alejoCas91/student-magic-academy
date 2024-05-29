document.addEventListener("DOMContentLoaded", function () {
  // const $userProfile = document.querySelector(".item_nav_main");
  // const $username = document.querySelector(".item_nav_main p");
  // $username.addEventListener("click", function () {
  //   // console.log("click")
  //   const $existsBtnLogOut = document.querySelector(".item_nav_main button");
  //   if ($existsBtnLogOut) {
  //     $existsBtnLogOut.remove();
  //     //   $userProfile.removeChild($userProfile.children[2]);
  //     return;
  //   }
  //   const $btnLogOut = document.createElement("button");
  //   $btnLogOut.classList.add("btn-log-out");
  //   $btnLogOut.textContent = "Cerrar sesion";
  //   // console.log($btnLogOut);
  //   $userProfile.appendChild($btnLogOut);
  //   setTimeout(() => {
  //     $btnLogOut.classList.add("btn-show");
  //   }, 10);
  // });
  // // codigo para detectar reaccionar a la posicion del scroll
  // let scrollTop = 0;
  // window.onscroll = () => {
  //   scrollTop = window.scrollY;
  //   console.log(scrollTop);
  //   const $header = document.querySelector("header");
  //   ($divPrueba = document.getElementById("prueba")),
  //     ($divDistanceOfTop = $divPrueba.offsetTop);
  //   console.log($divDistanceOfTop);
  //   if (scrollTop >= $divDistanceOfTop) {
  //     $header.classList.add("header_fixed");
  //   } else {
  //     $header.classList.remove("header_fixed");
  //   }
  // };

  const $sidebar = document.querySelector("aside");
  // console.log($sidebar);
  const $btnHamburguer = document.getElementById("icon_hamburguer");
  // console.log($btnHamburguer);
  const $btnClose = document.getElementById("icon_close");
  // console.log($btnClose);
  const $headdressAside = document.querySelectorAll(".aside_headdress");

  $btnHamburguer.addEventListener("click", () => {
    $sidebar.classList.add("show_menu_complete");
    $btnHamburguer.classList.remove("show_element");
    $btnClose.classList.add("show_element");
    $headdressAside.forEach((element) => {
      element.classList.add("full_opacity");
    });
  });

  $btnClose.addEventListener("click", () => {
    $sidebar.classList.remove("show_menu_complete");
    $btnHamburguer.classList.add("show_element");
    $btnClose.classList.remove("show_element");
    $headdressAside.forEach((element) => {
      element.classList.remove("full_opacity");
    });
  });
});

// SEARCH BAR MODAL SCRIPT

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('searchModal');
  const openButton = document.getElementById('openModal');
  const searchInput = document.getElementById('searchInput');

  openButton.addEventListener('click', () => {
    modal.style.display = 'block';
    searchInput.focus();
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// END OF THE SEARCH BAR MODAL SCRIPT