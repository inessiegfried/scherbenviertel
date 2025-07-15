<script>
  import Router, { link, push } from "svelte-spa-router";
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
  /* Add styles specific to App here */
</style>
