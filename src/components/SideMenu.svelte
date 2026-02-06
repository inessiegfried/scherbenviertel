<script>
    import { onMount, onDestroy } from "svelte";

    let menu;

    let { isMenuOpen, closeMenu } = $props();

    onMount(() => {
        function handleClickOutsideEvent(e) {
            const menuButton = document.getElementById("menu-button");
            if (
                menu &&
                !menu.contains(e.target) &&
                !menuButton.contains(e.target) &&
                isMenuOpen
            ) {
                closeMenu();
            }
        }

        document.addEventListener("click", handleClickOutsideEvent);
        onDestroy(() => {
            document.removeEventListener("click", handleClickOutsideEvent);
        });
    });
</script>

<aside id="side-menu" bind:this={menu}>
    <ul id="menu">
        <li><a href="/#home" on:click={closeMenu}>Startseite</a></li>
        <li><a href="/#aktuell" on:click={closeMenu}>Aktuell</a></li>
        <li>
            <a href="/#scherbenviertel" on:click={closeMenu}>Scherbenviertel</a>
        </li>
        <li><a href="/#lesungen" on:click={closeMenu}>Lesungen</a></li>
        <li><a href="/#stimmen" on:click={closeMenu}>Stimmen</a></li>
        <li><a href="/#gedanken" on:click={closeMenu}>Geschichten</a></li>
        <li><a href="/#vita" on:click={closeMenu}>Vita</a></li>
        <li><a href="/#kontakt" on:click={closeMenu}>Kontakt</a></li>
    </ul>
</aside>

<style>
    aside {
        background-color: var(--base-color-darker);
        padding: 1rem 2rem 1rem 1rem;
        container-name: sidemenu;
        container-type: inline-size;
        height: 100%;
    }

    #menu {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 100%;
        gap: 0.5rem;
        list-style: none;
        padding: 0;
    }

    #menu > li > a {
        color: var(--white);
        text-decoration: none;
        transition: color 0.3s;
    }

    #menu > li > a:hover {
        color: var(--base-color-light);
    }

    #menu > li:hover::before,
    #menu > li:focus::before {
        border-left-width: 12px;
        border-top-width: 9px;
        border-bottom-width: 9px;
        transform: translateY(50%);
    }
</style>
