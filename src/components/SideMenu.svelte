<script>
  import {link} from "svelte-spa-router"

  export let isMenuOpen;
  export let closeMenu;
</script>

<aside id="side-menu" class:open={isMenuOpen}>
  <ul id="menu">
    <li><a href="/" use:link on:click={closeMenu}>Aktuell</a></li>
    <li><a href="/scherbenviertel" use:link on:click={closeMenu}>Scherbenviertel</a></li>
    <li><a href="/lesungen" use:link on:click={closeMenu}>Lesungen</a></li>
    <li><a href="/gedanken" use:link on:click={closeMenu}>Gedanken und Geschichten</a></li>
    <li><a href="/vita" use:link on:click={closeMenu}>Vita</a></li>
    <li><a href="/kontakt" use:link on:click={closeMenu}>Kontakt</a></li>
  </ul>
</aside>

<style>
  aside {
    position: fixed;
    display: block;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: var(--base-color-darker);
    z-index: 1000;
    transition: transform 0.3s ease;
    transform: translateX(100%);
    padding: 1rem;
  }

  aside.open {
    display: block;
    transform: translateX(0);
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

  #menu > li > a {
    color: var(--white);
    text-decoration: none;
    transition: color 0.3s;
  }

  #menu > li > a:hover {
    color: var(--base-color-light);
  }

  #menu > li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid var(--base-color-light);
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    transition: all 0.3s ease;
  }

  #menu > li:hover::before {
    border-left-width: 12px;
    border-top-width: 9px;
    border-bottom-width: 9px;
  }
</style>
