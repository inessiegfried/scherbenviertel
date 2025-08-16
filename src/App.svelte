<script>
  import { location } from "svelte-spa-router";

  import Home from "./pages/Home.svelte";
  import Scherbenviertel from "./pages/Scherbenviertel.svelte";
  import Lesungen from "./pages/Lesungen.svelte";
  import Gedanken from "./pages/Gedanken.svelte";
  import Vita from "./pages/Vita.svelte";
  import Kontakt from "./pages/Kontakt.svelte";

  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import SideMenu from './components/SideMenu.svelte';
  import MainContent from './components/MainContent.svelte';

  const routes = {
    "/": Home,
    "/scherbenviertel": Scherbenviertel,
    "/lesungen": Lesungen,
    "/gedanken": Gedanken,
    "/vita": Vita,
    "/kontakt": Kontakt,
  };

  const pageNames = {
    "/": "Aktuell",
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

  function closeMenu() {
    isMenuOpen = false;
  }

  $: currentPageName = pageNames[$location] || "Startseite";
</script>

<div id="layout">
  <Header {currentPageName} {toggleMenu} />
  <SideMenu {isMenuOpen} {closeMenu} />
  <MainContent {routes} />
  <Footer />
</div>

<style>
  #layout {
    color: var(--white);
    font-size: var(--font-size);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "navbar"
      "main"
      "footer";
    min-height: 100vh;
  }
</style>

