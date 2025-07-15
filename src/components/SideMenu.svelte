<script>
  export let isMenuOpen;
  export let closeMenu;
</script>

<aside id="side-menu" class:open={isMenuOpen}>
  <ul id="menu">
    <li><a href="/scherbenviertel" use:link on:click={closeMenu}>Scherbenviertel</a></li>
    <li><a href="/lesungen" use:link on:click={closeMenu}>Lesungen</a></li>
    <li><a href="/gedanken" use:link on:click={closeMenu}>Gedanken und Geschichten</a></li>
    <li><a href="/vita" use:link on:click={closeMenu}>Vita</a></li>
    <li><a href="/kontakt" use:link on:click={closeMenu}>Kontakt</a></li>
  </ul>
</aside>
<style>
  /* Add styles specific to SideMenu here */
</style>
