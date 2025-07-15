<script>
  export let currentPageName;
  export let toggleMenu;
</script>

<nav>{currentPageName}</nav>
<button id="menu-button" on:click={toggleMenu}></button>
<style>
  nav {
    height: var(--header-height);
    background-color: var(--purple);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2em;
    z-index: 1002;
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

  a {
    color: var(--white);
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: var(--purple-light);
  }
</style>
