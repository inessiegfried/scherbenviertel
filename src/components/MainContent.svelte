<script>
    import Home from "@pages/Home.svelte";
    import Aktuell from "@pages/Aktuell.svelte";
    import Scherbenviertel from "@pages/Scherbenviertel.svelte";
    import Lesungen from "@pages/Lesungen.svelte";
    import Gedanken from "@pages/Gedanken.svelte";
    import Vita from "@pages/Vita.svelte";
    import Kontakt from "@pages/Kontakt.svelte";
    import { onMount } from "svelte";
    import { headerState } from "../sharedStates/headerState.svelte";

    function changeTitle(newTitle) {
        headerState.title = newTitle;
    }

    onMount(() => {
        const mainContainer = document.querySelectorAll(".two-cols");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        changeTitle(entry.target.getAttribute("data-title"));
                    }
                });
            },
            { rootMargin: "0px 0px -200px 0px" },
        );
        mainContainer.forEach((entry) => observer.observe(entry));

        return () => {
            mainContainer.forEach((entry) => observer.unobserve(entry));
        };
    });
</script>

<main id="main-container" class="main-container">
    <Home />
    <Aktuell />
    <Scherbenviertel />
    <Lesungen />
    <Vita />
    <Kontakt />
    <Gedanken />
</main>

<style>
    .main-container {
        overflow-y: scroll;
        height: var(--body-height);
        padding-top: var(--header-height);
        padding-inline: 0.5em;
        margin-top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        scroll-snap-type: y mandatory;
    }
</style>
