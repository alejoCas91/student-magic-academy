document.addEventListener("DOMContentLoaded", () => {
  // Create header element
  const header = document.createElement('header');

  // Create logo and menu
  const logoMenuDiv = document.createElement('div');
  logoMenuDiv.id = 'logo_menu';

  const imgHamburger = document.createElement('img');
  imgHamburger.id = 'icon_hamburguer';
  imgHamburger.className = 'show_element';
  imgHamburger.src = '../assets/icons/HamburguerMenu.png';
  imgHamburger.alt = 'Logo_MagicAcademy_Short';

  const imgClose = document.createElement('img');
  imgClose.id = 'icon_close';
  imgClose.src = '../assets/icons/close.png';
  imgClose.alt = 'Logo_MagicAcademy_Short';

  const logoLink = document.createElement('a');
  logoLink.id = 'logo_header';
  logoLink.href = 'index.html';

  const logoImg = document.createElement('img');
  logoImg.src = '../assets/imgs/Logo_MagicAcademy.png';
  logoImg.alt = 'Logo_MagicAcademy_Short';

  logoLink.appendChild(logoImg);
  logoMenuDiv.appendChild(imgHamburger);
  logoMenuDiv.appendChild(imgClose);
  logoMenuDiv.appendChild(logoLink);
  header.appendChild(logoMenuDiv);

  // Create search bar
  const searchButton = document.createElement('button');
  searchButton.id = 'openModal';

  const searchImg = document.createElement('img');
  searchImg.src = '../../assets/icons/search.png';
  searchImg.alt = 'search-image';
  searchImg.className = 'search-image';

  searchButton.appendChild(searchImg);
  searchButton.appendChild(document.createTextNode('Buscar curso...'));

  const searchModal = document.createElement('div');
  searchModal.id = 'searchModal';
  searchModal.className = 'modal';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.id = 'searchInput';
  searchInput.placeholder = 'Ingresa el nombre del curso';
  searchInput.autofocus = true;

  modalContent.appendChild(searchInput);
  searchModal.appendChild(modalContent);
  header.appendChild(searchButton);
  header.appendChild(searchModal);

  // Create main navigation
  const navMain = document.createElement('nav');
  navMain.id = 'nav_main';

  const navUl = document.createElement('ul');

  const profileLi = document.createElement('li');

  const profileLink = document.createElement('a');
  profileLink.href = '';
  profileLink.id = 'a_profile';

  const profileImgDiv = document.createElement('div');
  profileImgDiv.className = 'img_profile';

  const UserImage = document.createElement('img');
  UserImage.id = 'UserProfilePicture';

  profileLink.appendChild(profileImgDiv);
  profileLink.appendChild(document.createTextNode('@user'));

  const profileDropdownUl = document.createElement('ul');

  const miPerfilLi = document.createElement('li');
  const miPerfilLink = document.createElement('a');
  miPerfilLink.href = '';
  miPerfilLink.textContent = 'Mi perfil';
  miPerfilLi.appendChild(miPerfilLink);

  const configuracionesLi = document.createElement('li');
  const configuracionesLink = document.createElement('a');
  configuracionesLink.href = '';
  configuracionesLink.textContent = 'Configuraciones';
  configuracionesLi.appendChild(configuracionesLink);

  const cerrarSesionLi = document.createElement('li');
  const cerrarSesionLink = document.createElement('a');
  cerrarSesionLink.href = '';
  cerrarSesionLink.textContent = 'Cerrar sesion';
  cerrarSesionLi.appendChild(cerrarSesionLink);

  profileDropdownUl.appendChild(miPerfilLi);
  profileDropdownUl.appendChild(configuracionesLi);
  profileDropdownUl.appendChild(cerrarSesionLi);

  profileLi.appendChild(profileLink);
  profileLi.appendChild(profileDropdownUl);
  navUl.appendChild(profileLi);
  navMain.appendChild(navUl);
  header.appendChild(navMain);

  document.body.appendChild(header);

  // Create main element
  const main = document.createElement('main');

  // Create aside element
  const aside = document.createElement('aside');

  const asideUl = document.createElement('ul');

  const menuPrincipalH5 = document.createElement('h5');
  menuPrincipalH5.className = 'aside_headdress';
  menuPrincipalH5.textContent = 'Menu Principal';
  asideUl.appendChild(menuPrincipalH5);

  const homeLi = document.createElement('li');
  const homeDiv = document.createElement('div');
  homeDiv.className = 'item_link_aside';

  const homeIconDiv = document.createElement('div');
  homeIconDiv.className = 'link_icon';

  const homeIconImg = document.createElement('img');
  homeIconImg.src = '../assets/icons/homeWhite.png';
  homeIconImg.alt = 'course_icon';
  homeIconDiv.appendChild(homeIconImg);

  const homeLink = document.createElement('a');
  homeLink.href = '#';
  homeLink.textContent = 'Home';

  homeDiv.appendChild(homeIconDiv);
  homeDiv.appendChild(homeLink);
  homeLi.appendChild(homeDiv);

  const cursosLi = document.createElement('li');
  const cursosDiv = document.createElement('div');
  cursosDiv.className = 'item_link_aside';

  const cursosIconDiv = document.createElement('div');
  cursosIconDiv.className = 'link_icon';

  const cursosIconImg = document.createElement('img');
  cursosIconImg.src = '../assets/icons/booksWhite.png';
  cursosIconImg.alt = 'course_icon';
  cursosIconDiv.appendChild(cursosIconImg);

  const cursosLink = document.createElement('a');
  cursosLink.href = '#';
  cursosLink.textContent = 'Mis cursos';

  cursosDiv.appendChild(cursosIconDiv);
  cursosDiv.appendChild(cursosLink);
  cursosLi.appendChild(cursosDiv);

  asideUl.appendChild(homeLi);
  asideUl.appendChild(cursosLi);
  aside.appendChild(asideUl);
  main.appendChild(aside);

  // Create section element
  const section = document.createElement('section');

  const mainContentDiv = document.createElement('div');
  mainContentDiv.className = 'main-content';

  const welcomeDiv = document.createElement('div');

  const welcomeH2 = document.createElement('h2');
  welcomeH2.textContent = 'Bienvenido (id)';

  const welcomeP = document.createElement('p');
  welcomeP.textContent = 'Actualmente no tienes cursos activos';

  const welcomeLink = document.createElement('a');
  welcomeLink.href = '#/mirar-cursos';
  welcomeLink.className = 'btn-primary';
  welcomeLink.textContent = 'Mirar cursos';

  welcomeDiv.appendChild(welcomeH2);
  welcomeDiv.appendChild(welcomeP);
  welcomeDiv.appendChild(welcomeLink);
  mainContentDiv.appendChild(welcomeDiv);

  const coursesDiv = document.createElement('div');

  const coursesH3 = document.createElement('h3');
  coursesH3.textContent = 'Cursos de interés';
  coursesDiv.appendChild(coursesH3);

  const createCourseCard = () => {
    const courseLink = document.createElement('a');
    courseLink.href = '';

    const courseCardDiv = document.createElement('div');
    courseCardDiv.className = 'course-card';

    const courseImg = document.createElement('img');
    courseImg.src = '../assets/imgs/example courses.jpg';
    courseImg.alt = 'Course Logo';

    const courseTitleDiv = document.createElement('div');
    courseTitleDiv.className = 'course-title';
    courseTitleDiv.textContent = 'JavaScript';

    const courseTitleText = document.createElement('div');
    courseTitleText.textContent = 'Título curso';

    const courseInstructorDiv = document.createElement('div');
    courseInstructorDiv.textContent = 'Nombre instructor';

    const courseClassesDiv = document.createElement('div');
    courseClassesDiv.textContent = 'Número de clases';

    courseCardDiv.appendChild(courseImg);
    courseCardDiv.appendChild(courseTitleDiv);
    courseCardDiv.appendChild(courseTitleText);
    courseCardDiv.appendChild(courseInstructorDiv);
    courseCardDiv.appendChild(courseClassesDiv);
    courseLink.appendChild(courseCardDiv);
    return courseLink;
  };

  // Append course cards
  for (let i = 0; i < 3; i++) {
    coursesDiv.appendChild(createCourseCard());
  }

  mainContentDiv.appendChild(coursesDiv);
  section.appendChild(mainContentDiv);
  main.appendChild(section);

  document.body.appendChild(main);

  // Create footer element
  const footer = document.createElement('footer');
  footer.id = 'footer';

  const footerNavsContainer = document.createElement('div');
  footerNavsContainer.id = 'footer_navs_container';
  footerNavsContainer.className = 'container';

  // Footer navigation
  const navFooter = document.createElement('nav');
  navFooter.id = 'nav_footer';

  const navFooterUl = document.createElement('ul');

  const inicioLi = document.createElement('li');
  const inicioLink = document.createElement('a');
  inicioLink.href = 'index.html';
  inicioLink.textContent = 'Inicio';
  inicioLi.appendChild(inicioLink);

  const cursosFooterLi = document.createElement('li');
  const cursosFooterLink = document.createElement('a');
  cursosFooterLink.href = 'cursos.html';
  cursosFooterLink.textContent = 'Cursos';
  cursosFooterLi.appendChild(cursosFooterLink);

  const contactoLi = document.createElement('li');
  const contactoLink = document.createElement('a');
  contactoLink.href = 'contacto.html';
  contactoLink.textContent = 'Contacto';
  contactoLi.appendChild(contactoLink);

  navFooterUl.appendChild(inicioLi);
  navFooterUl.appendChild(cursosFooterLi);
  navFooterUl.appendChild(contactoLi);
  navFooter.appendChild(navFooterUl);

  // Collaborators navigation
  const navCollaborators = document.createElement('nav');
  navCollaborators.id = 'nav_collaborators';

  const navCollaboratorsUl = document.createElement('ul');

  const socialLi = document.createElement('li');
  const socialLink = document.createElement('a');
  socialLink.href = 'https://www.social.com';
  socialLink.textContent = 'Social';
  socialLi.appendChild(socialLink);

  const termsLi = document.createElement('li');
  const termsLink = document.createElement('a');
  termsLink.href = 'terms.html';
  termsLink.textContent = 'Terms';
  termsLi.appendChild(termsLink);

  const privacyLi = document.createElement('li');
  const privacyLink = document.createElement('a');
  privacyLink.href = 'privacy.html';
  privacyLink.textContent = 'Privacy';
  privacyLi.appendChild(privacyLink);

  navCollaboratorsUl.appendChild(socialLi);
  navCollaboratorsUl.appendChild(termsLi);
  navCollaboratorsUl.appendChild(privacyLi);
  navCollaborators.appendChild(navCollaboratorsUl);

  // Append navs to container
  footerNavsContainer.appendChild(navFooter);
  footerNavsContainer.appendChild(navCollaborators);
  footer.appendChild(footerNavsContainer);

  // Footer copyright
  const footerCopyright = document.createElement('div');
  footerCopyright.id = 'footer_copyrigth';

  const copyrightText = document.createElement('span');
  copyrightText.className = 'LogoFooter'

  const LogoFooter = document.createElement('img');
  LogoFooter.src = '../assets/imgs/Logo_MagicAcademy_White.png';

  copyrightText.appendChild(LogoFooter)

  const socialMediaLink = document.createElement('span');
  socialMediaLink.textContent = '© Magic Academy. All rights reserved.';

  footerCopyright.appendChild(copyrightText);
  footerCopyright.appendChild(socialMediaLink);
  footer.appendChild(footerCopyright);

  document.body.appendChild(footer);

  // Add CSS
  const style = document.createElement('style');
  style.innerHTML = `
  /* Reset */
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  :root {
    --clr-primary-700: #05445e;
    --clr-primary-400: #189ab4;
    --clr-primary-300: #75e6da;
    --clr-primary-100: #d4f1f4;
    --clr-body: #000000;
    --ff-body: 'Raleway', sans-serif;

    /* Spaces */
    --space-1: 10px;
    --space-2: 20px;
    --space-3: 30px;
    --space-4: 40px;
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 3.6rem);
  }

  h2 {
    font-size: clamp(2rem, 4vw, 2.8rem);
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }

  h4 {
    font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  }

  h5,
  p {
    font-size: clamp(1rem, 2vw, 1.2rem);
  }

  ul {
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  img {
    width: 100%;
    height: auto;
  }

  button {
    outline: none;
    border: none;
    padding-right: 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .container {
    margin: 0 auto;
    width: 1200px;
    max-width: 90%;
  }

  /* Header */

  header {
    position: fixed;
    z-index: 3;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0px var(--space-2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  header>#logo_menu,
  header>#nav_main {
    flex: 0 0 25%;
  }

  header>#logo_menu {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  #icon_hamburguer,
  #icon_close {
    width: 30px;
    cursor: pointer;
    display: none;
  }

  #icon_hamburguer.show_element,
  #icon_close.show_element {
    display: block;
  }

  header>#logo_menu>#logo_header {
    display: block;
    width: 70%;
  }

  header>#logo_menu>#logo_header>img {
    max-width: 100%;
    min-width: 150px;
    height: 100%;
  }

  button {
    border-radius: 15px;
    width: 10px;
    padding: 10px 20px;
    font-size: 1rem;
  }

  .search-image {
    width: 30px;
    height: 30px;
  }

  #openModal {
    width: 15%;
    display: flex;
    align-items: center;
    gap: var(--space-3);
  }

  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    background-color: var(--clr-primary-700);
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 700px;
    height: 300px;
    display: flex;
    align-items: start;
    border-radius: 10px;
  }

  #searchInput {
    border-radius: 10px;
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: none;
    outline: none;
    background-color: var(--clr-primary-400);
    color: #fff;
  }

  #searchInput::placeholder {
    color: var(--clr-primary-100);
  }


  /* Hover effect for primary button */
  .btn-primary:hover {
    background-color: var(--clr-primary-700);
    /* Dark background color */
  }

  .modal {
    transition: opacity 0.25s ease;
  }

  body.modal-active {
    overflow-x: hidden;
    overflow-y: visible !important;
  }

  .small {
    width: 20px;
    height: 20px;
  }

  header>#nav_main {
    display: flex;
    justify-content: end;
  }

  header>#nav_main ul li {
    position: relative;
    float: left;
  }

  header>#nav_main>ul>li>a>div.img_profile {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-image: url(../assets/imgs/user_profile.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  header #nav_main ul li a {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: var(--clr-primary-700);
    padding: 20px;
    display: block;
  }

  header>#nav_main>ul>li>a#a_profile {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: var(--space-1);
  }

  header #nav_main ul li a:hover {
    background-color: var(--clr-primary-700);
    color: white;
  }

  header>#nav_main>ul>li>ul {
    position: absolute;
    right: 0;
    width: 200px;
    background-color: white;
    display: none;
  }

  header>#nav_main>ul>li>ul>li {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  header>#nav_main>ul>li>ul>li {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  header>#nav_main>ul>li:hover>ul {
    display: initial;
  }

  /*-----------------------*/

  main>section {
    padding-top: 100px;
  }

  /*Aside*/

  main>aside {
    width: 85px;
    height: 70vh;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 100px;
    left: 0px;
    overflow-x: hidden;
    background-color: var(--clr-primary-700);
    padding: var(--space-2);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: all 0.5s ease-in-out;
  }

  main>aside:hover,
  .show_menu_complete {
    width: 250px;
  }

  main>aside>ul>h5 {
    color: white;
    margin: var(--space-1) 10px;
    white-space: nowrap;
    font-weight: 600;
    opacity: 0;
    transition: all 0.3s ease;
  }

  h5.aside_headdress.full_opacity,
  main>aside:hover>ul>h5 {
    opacity: 1;
  }

  main>aside>ul {
    margin-top: 20px;
    height: 80%;
    overflow-y: auto;
    scrollbar-width: none;
  }

  main>aside>ul>li>.item_link_aside {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    gap: 15px;
    padding: 15px 10px;
  }

  main>aside>ul>li>.item_link_aside>.link_icon>img {
    width: 25px;
  }

  main>aside>ul>li>.item_link_aside>a {
    color: #dbd4d4e3;
    white-space: nowrap;
  }

  main>aside>ul>li>.item_link_aside:hover {
    background-color: #00000040;
    border-radius: 5px;
  }

  main>aside>ul>li>.item_link_aside>a:hover {
    color: white;
    text-decoration: underline;
  }

  /* footer */

  #footer {
    padding: var(--space-2);
    background-color: var(--clr-body);
    color: white;
  }

  #footer a {
    color: white;
  }

  #footer a:hover {
    text-decoration: underline;
  }

  #footer>#footer_navs_container {
    display: flex;
    justify-content: space-around;
  }

  #footer>div>nav>ul {
    display: flex;
    flex-direction: column;
  }

  #footer>div>nav>ul>li {
    padding: 3px;
  }

  #footer>div>#nav_collaborators>ul>li {
    width: 30%;
  }

  #footer>#footer_copyrigth {
    margin-top: var(--space-2);
    padding-top: var(--space-1);
    border-top: 1px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #footer>#footer_copyrigth>a {
    display: block;
    width: 40%;
  }

  /* Main content area styling */
  .main-content {
    height: auto;
    scroll-margin-top: 500px;
    margin-left: 250px;
    /* Left margin to accommodate sidebar */
    padding: var(--space-2);
    /* Padding */
  }

  /* Course card styling */
  .course-card {
    display: inline-block;
    /* Inline-block display */
    background-color: var(--clr-primary-300);
    /* Light background color */
    width: 200px;
    /* Width */
    margin: var(--space-1);
    /* Margin */
    padding: var(--space-2);
    /* Padding */
    border-radius: var(--space-1);
    /* Rounded corners */
    text-align: center;
    /* Center text */
  }

  /* Course card image styling */
  .course-card img {
    width: 100px;
    /* Width */
    height: 100px;
    /* Height */
  }

  /* Course title styling */
  .course-title {
    font-weight: bold;
    /* Bold text */
    margin-top: var(--space-1);
    /* Top margin */
  }

  /* Primary button styling */
  .btn-primary {
    display: inline-block;
    /* Inline-block display */
    padding: var(--space-1) var(--space-2);
    /* Padding */
    color: white;
    /* White text color */
    background-color: var(--clr-primary-400);
    /* Medium background color */
    border: none;
    /* No border */
    border-radius: var(--space-1);
    /* Rounded corners */
    text-align: center;
    /* Center text */
    cursor: pointer;
    /* Pointer cursor on hover */
    text-decoration: none;
    /* No underline */
  }

  @media(max-width:900px) {
    header {
      padding: 0px;
      position: relative;
    }

    header>#nav_main>ul>li>ul {
      width: 100vw;
    }

    header>#nav_main>ul>li>ul>li {
      text-align: center;
      width: 100%;
    }

    header>#logo-menu {
      padding: var(--space-1);
    }

    main>aside {
      width: 0px;
      padding: 0px;
    }

    #icon_hamburguer,
    #icon_close {
      width: 30px;
      margin-left: 10px;
    }

  }
  `;
  document.head.appendChild(style);
});

// LOGIC

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