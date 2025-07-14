<script>
  import Router, { link, push } from 'svelte-spa-router';
  import { location } from 'svelte-spa-router';
  
  import Home from './pages/Home.svelte';
  import Scherbenviertel from './pages/Scherbenviertel.svelte';
  import Lesungen from './pages/Lesungen.svelte';
  import Gedanken from './pages/Gedanken.svelte';
  import Vita from './pages/Vita.svelte';
  import Kontakt from './pages/Kontakt.svelte';
  
  const routes = {
    '/': Home,
    '/scherbenviertel': Scherbenviertel,
    '/lesungen': Lesungen,
    '/gedanken': Gedanken,
    '/vita': Vita,
    '/kontakt': Kontakt
  };
  
  const pageNames = {
    '/': 'Startseite',
    '/scherbenviertel': 'Scherbenviertel',
    '/lesungen': 'Lesungen',
    '/gedanken': 'Gedanken & Geschichten',
    '/vita': 'Vita',
    '/kontakt': 'Kontakt'
  };

  function toggleMenu() {
    console.log("Toogle Menu")
    const sideMenu = document.getElementById("side-menu")
  }
  
  $: currentPageName = pageNames[$location] || 'Startseite';
</script>

<div id="layout">
  <nav>{currentPageName}</nav>
  <button id="menu-button" on:click={toggleMenu}></button>
  <aside id="side-menu">
    <ul id="menu">
      <li><a href="/scherbenviertel" use:link>Scherbenviertel</a></li>
      <li><a href="/lesungen" use:link>Lesungen</a></li>
      <li><a href="/gedanken" use:link>Gedanken und Geschichten</a></li>
      <li><a href="/vita" use:link>Vita</a></li>
      <li><a href="/kontakt" use:link>Kontakt</a></li>
    </ul>
  </aside>
  <main>
    <Router {routes} />
  </main>
  <footer>Scherbenviertel - Ines Siegfried</footer>
</div>

<style>
  :root{
    --header-height: 60px;
    --footer-height: 30px;
    --purple-darker: #231C45;
    --purple-dark: #753268;
    --purple: #8F0E52;
    --purple-light: #A91060;
    --white: #EBEBEB;
    --black: #000000;
    --font-size: 16pt;
  }
  
  #layout {
    color: var(--white);
    font-size: var(--font-size);
    background: radial-gradient(circle at center, var(--purple-dark), var(--purple-darker));
    display: grid;
    grid-template-columns: 1fr 240px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
    "navbar navbar"
    "main aside"
    "footer footer";
    min-height: 100vh;
  }

  main {
    grid-area: main;
    overflow-y: scroll;
    /* Hier muss ich die Höhe berechnen lassen damit das Scolling richtig funktioniert. */
    max-height: calc(100vh - var(--header-height) - var(--footer-height));
    padding: 2rem;
  }

  nav {
    height: var(--header-height);
    grid-area: navbar;
    background-color: var(--purple);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2em;
  }
  
  aside {
    grid-area: aside;
  }
  
  footer {
    height: var(--footer-height);
    grid-area: footer;
    background-color: var(--purple);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  #menu {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    height: 100%;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
  }

  #menu > li {
    position: relative;
    padding-left: 1.5rem;
  }

  #menu > li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid var(--purple-light);
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    transition: all 0.3s ease;
  }

  #menu > li:hover::before {
    border-left-width: 12px;
    border-top-width: 9px;
    border-bottom-width: 9px;
  }

  #menu > li > a {
    color: inherit;
    text-decoration: none;
  }

  @media (min-width: 800px) {
    #layout {
      grid-template-columns: 1fr 2fr;
      grid-template-areas: 
        "navbar main"
        "footer footer";
      grid-template-rows: 1fr auto;
    }

    nav {
      height: 100%;
    }

    nav::before {
      content: "";
      display: block;
      position: relative;
      height: 100%;
      width: 60px;
      background-color: var(--purple-light);
    }

    aside {
      position: fixed;
      display: none;
    }

    #menu-button {
      display: block;
      position: fixed;
      width: 60px;
      height: 100px;
      background-color: var(--purple-light);
      top: 0;
      right: 10%;
      border: none;
    }


  }


</style>
