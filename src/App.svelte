<script>
    import { Router, createRouter } from "@roxi/routify";
    import routes from "../.routify/routes.default.js";

    import Header from "./components/Header.svelte";
    import SideMenu from "./components/SideMenu.svelte";

    let isMenuOpen = false;
    export let currentPageName = "Aktuell";

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu() {
        isMenuOpen = false;
    }

    export const router = createRouter({ routes });
</script>

<div id="layout">
    <Header {toggleMenu} />
    <SideMenu {isMenuOpen} {closeMenu} />
    <Router {router} />
</div>

<style>
    #layout {
        display: flex;
        flex-direction: column;
        min-height: 100dvh; /* We need this to fill up all the space.*/
    }
</style>
