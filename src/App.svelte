<div id="layout">
  <nav>Navbar</nav>
  <aside>Side Nav</aside>
  <main>
    <h1>Svelte Playground</h1>
  </main>
  <footer>Footer</footer>
</div>

<style>
  :root{
    --header-height: 60px;
    --footer-height: 30px;
  }

  #layout {
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
      "navbar navbar"
      "aside main"
      "footer footer";
    min-height: 100vh;
  }
  main {
    grid-area: main;
    overflow-y: scroll;
    /* Hier muss ich die Höhe berechnen lassen damit das Scolling richtig funktioniert. */
    max-height: calc(100vh - var(--header-height) - var(--footer-height));
  }

  nav {
    height: var(--header-height);
    grid-area: navbar;
    background-color: green;
  }
  
  aside {
    grid-area: aside;
    background-color: yellow;
  }
  
  footer {
    height: var(--footer-height);
    grid-area: footer;
    background-color: magenta;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
