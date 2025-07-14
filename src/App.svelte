<script>
  import Router, { link, push } from "svelte-spa-router";
  import { location } from "svelte-spa-router";

  import Home from "./pages/Home.svelte";
  import Scherbenviertel from "./pages/Scherbenviertel.svelte";
  import Lesungen from "./pages/Lesungen.svelte";
  import Gedanken from "./pages/Gedanken.svelte";
  import Vita from "./pages/Vita.svelte";
  import Kontakt from "./pages/Kontakt.svelte";

  const routes = {
    "/": Home,
    "/scherbenviertel": Scherbenviertel,
    "/lesungen": Lesungen,
    "/gedanken": Gedanken,
    "/vita": Vita,
    "/kontakt": Kontakt,
  };

  const pageNames = {
    "/": "Startseite",
    "/scherbenviertel": "Scherbenviertel",
    "/lesungen": "Lesungen",
    "/gedanken": "Gedanken & Geschichten",
    "/vita": "Vita",
    "/kontakt": "Kontakt",
  };

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  $: currentPageName = pageNames[$location] || "Startseite";
</script>

<div id="layout">
  <nav>{currentPageName}</nav>
  <button id="menu-button" on:click={toggleMenu}></button>
  <aside id="side-menu" class:open={isMenuOpen}>
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

  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    --header-height: 60px;
    --footer-height: 46px;
    --purple-darker: #231c45;
    --purple-dark: #753268;
    --purple: #8f0e52;
    --purple-light: #a91060;
    --white: #ebebeb;
    --black: #000000;
    --font-size: 16pt;
  }

  #layout {
    color: var(--white);
    font-size: var(--font-size);
    background: radial-gradient(
      circle at center,
      var(--purple-dark),
      var(--purple-darker)
    );
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "navbar"
      "main"
      "footer";
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
    z-index: 1002;
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
    content: "";
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

  #menu-button {
    display: block;
    position: fixed;
    width: 60px;
    height: 60px;
    background-color: var(--purple);
    top: var(--header-height);
    right: 5%;
    border: none;
    cursor: pointer;
    z-index: 1001;
  }

  #menu-button::before {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 30px solid var(--purple);
    border-right: 30px solid var(--purple);
    border-bottom: 20px solid transparent;
  }

  aside {
    position: fixed;
    display: none;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: var(--purple-darker);
    z-index: 1000;
    transition: transform 0.3s ease;
    transform: translateX(100%);
    padding: 1rem;
  }

  aside.open {
    display: block;
    transform: translateX(0);
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
      position: absolute;
      height: 100%;
      width: 60px;
      background-color: var(--purple-light);
      top: 0;
      left: 0;
    }

    #menu-button {
      top: 0;
    }
  }
</style>
