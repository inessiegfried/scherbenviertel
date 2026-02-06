<script>
    import { Router, createRouter } from "@roxi/routify";
    import routes from "../.routify/routes.default.js";

    import Header from "./components/Header.svelte";
    import SideMenu from "./components/SideMenu.svelte";

    let isMenuOpen = $state(false);

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu() {
        isMenuOpen = false;
    }

    export const router = createRouter({ routes });
</script>

<div id="layout" class:menu-open={isMenuOpen}>
    <Header {toggleMenu} />
    <main>
        <Router {router} />
    </main>
    <SideMenu {isMenuOpen} {closeMenu} />
</div>

<style>
    #layout {
        display: grid;
        grid-template-areas:
            "header header"
            "main   main";
        grid-template-rows: auto 1fr;
        grid-template-columns: 1fr 0;
        height: 100dvh;
        overflow: hidden;
        transition: grid-template-columns 0.3s ease;
    }
    
    /* Wenn Menu offen ist, ändert sich das Grid */
    #layout.menu-open {
        grid-template-columns: 1fr var(--nav-width);
    }
    
    /* Main Content scrollt */
    main {
        grid-area: main;
        overflow-y: auto;
        overflow-x: hidden;
        container-name: main;
        container-type: size;
    }
    
    /* Nav ist rechts neben main */
    #layout > :global(aside) {
        grid-row: 2;
        grid-column: 2;
        overflow-y: auto;
    }
</style>
