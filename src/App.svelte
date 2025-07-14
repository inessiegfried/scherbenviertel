<div id="layout">
  <nav>Navbar</nav>
  <aside>
    <ul id="menu">
      <li><a href="#">Scherbenviertel</a></li>
      <li><a href="#">Lesungen</a></li>
      <li><a href="#">Gedanken und Geschichten</a></li>
      <li><a href="#">Vita</a></li>
      <li><a href="#">Kontakt</a></li>
    </ul>
  </aside>
  <main>
    <h1>Svelte Playground</h1>
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
    grid-template-columns: 1fr 300px;
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
  }

  nav {
    height: var(--header-height);
    grid-area: navbar;
    background-color: green;
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
  }

  #menu > li > a {
    color: inherit;
    text-decoration: none;
  }


</style>
