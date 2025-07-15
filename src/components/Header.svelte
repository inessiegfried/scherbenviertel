<script>
  export let currentPageName;
  export let toggleMenu;
</script>

<nav>{currentPageName}</nav>
<button id="menu-button" on:click={toggleMenu}></button>
<style>
  /* Add styles specific to Header here */
</style>
