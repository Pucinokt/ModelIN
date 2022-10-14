const navigation = document.querySelector('#navbar');

navigation.innerHTML += `
<header id='nav'>
<div class='nav-container'>
  <a href='index.html'><img class='Logo' src='../../assets/logo/logo-modelin.svg' alt='logo ModelIN'></a>
  <nav id='menu'>
    <ul>
    
    <li><a href='/html/index.html'>Home</a></li>
    <li><a href='/html/portfolio.html'>Portfolio</a></li>
    <li><a href='/html/aboutUs.html'>About Me</a></li>
    <li><a href='/html/contact.html'>Contact</a></li>
    <a href="https://www.instagram.com/"><i class='fa-brands icon fa-instagram'></i></a>

    </ul>
  </nav>
  <div onclick='menuShow()' id='burger'>
  <svg onclick='burgercolor()' id='burgermenu' viewBox='0 0 448 512' title='bars'>
    <path d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z' />
  </svg>
</div>
  
</div>
<hr class='nav-hr'>
</header>
`