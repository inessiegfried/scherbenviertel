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

<main id="main-container" class="main-container content-grid">
    <Home />
    <div class="full-width content-grid"><Aktuell /></div>
    <Scherbenviertel />
    <div class="full-width content-grid"><Lesungen /></div>
    <Vita />
    <div class="full-width content-grid"><Kontakt /></div>
    <div class="breakout"><Gedanken /></div>
</main>

<style>
    .main-container {
        overflow: overlay;
        height: var(--body-height);
        padding-top: var(--header-height);
        padding: 0;
        align-items: center;
        scroll-snap-type: y mandatory;
    }

    .content-grid {
        display: grid;
        grid-template-columns: [full-width-start] 100px [breakout-start] 100px [content-start] 1fr [content-end] 100px [breakout-end] 100px [full-width-end];
    }

    :global(.content-grid > *) {
        grid-column: content;
    }

    .breakout {
        grid-column: breakout;
    }

    .full-width {
        grid-column: full-width;
        background: radial-gradient(
            circle at center,
            var(--base-color),
            var(--base-color-darker)
        );
    }

    @media (width < 900px) {
        .content-grid {
            grid-template-columns: [full-width-start] 10px [breakout-start] 50px [content-start] 1fr [content-end] 50px [breakout-end] 10px [full-width-end];
        }
    }
</style>
