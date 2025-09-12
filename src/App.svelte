<script>
  import { location } from "svelte-spa-router";

  import Home from "./pages/Home.svelte";
  import Aktuell from "./pages/Aktuell.svelte";
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
    "/aktuell": Aktuell,
    "/scherbenviertel": Scherbenviertel,
    "/lesungen": Lesungen,
    "/gedanken": Gedanken,
    "/vita": Vita,
    "/kontakt": Kontakt,
  };

  const pageNames = {
    "/": "Home",
    "/aktuell": "Aktuell",
    "/scherbenviertel": "Scherbenviertel",
    "/lesungen": "Lesungen",
    "/gedanken": "Geschichten",
    "/vita": "Vita",
    "/kontakt": "Kontakt",
  };

  let isMenuOpen = window.innerWidth < (800 + 240) ? false : true;

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
    display: flex;
    flex-direction: column;
    min-height: 100dvh; /* We need this to fill up all the space.*/
  }
</style>

