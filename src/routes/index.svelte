<script>
    import Home from "@pages/Home.svelte";
    import Aktuell from "@pages/Aktuell.svelte";
    import Scherbenviertel from "@pages/Scherbenviertel.svelte";
    import Lesungen from "@pages/Lesungen.svelte";
    import Gedanken from "@pages/Gedanken.svelte";
    import Vita from "@pages/Vita.svelte";
    import Kontakt from "@pages/Kontakt.svelte";
    import Stimmen from "@pages/Stimmen.svelte";
    import { onMount } from "svelte";
    import { headerState } from "../sharedStates/headerState.svelte";

    function changeTitle(newTitle, titleMain = null, titleSub = null) {
        headerState.title = newTitle;
        headerState.titleMain = titleMain;
        headerState.titleSub = titleSub;
    }

    onMount(() => {
        const sections = document.querySelectorAll(".two-cols");
        const scrollContainer = document.querySelector("#main-container");
        
        // Berechne die rootMargin basierend auf der Container-Höhe
        const containerHeight = scrollContainer.clientHeight;
        const bottomMargin = Math.floor(containerHeight * 0.8); // 80% vom unteren Bereich abziehen
        
        // Beobachte jede Section separat
        sections.forEach((section) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        // Wenn der obere Teil der Section im oberen Bereich sichtbar ist, ändere den Titel
                        if (entry.isIntersecting) {
                            const title = entry.target.getAttribute("data-title");
                            const titleMain = entry.target.getAttribute("data-title-main");
                            const titleSub = entry.target.getAttribute("data-title-sub");
                            changeTitle(title, titleMain, titleSub);
                        }
                    });
                },
                {
                    root: scrollContainer,
                    rootMargin: `-50px 0px -${bottomMargin}px 0px`,
                    threshold: 0
                }
            );
            
            observer.observe(section);
        });
    });
</script>

<main id="main-container" class="main-container content-grid">
    <div><Home /></div>
    <div class="full-width content-grid"><Aktuell /></div>
    <div><Scherbenviertel /></div>
    <div class="full-width content-grid"><Lesungen /></div>
    <div class="breakout"><Stimmen /></div>
    <div class="full-width content-grid"><Gedanken /></div>
    <div><Vita /></div>
    <div class="full-width content-grid"><Kontakt /></div>
</main>

<style>
    .main-container {
        overflow: overlay;
        height: 100dvh;
        align-items: center;
        scroll-snap-type: y proximity;
        scroll-padding-top: var(--header-height);
    }

    .content-grid {
        display: grid;
        grid-template-columns: [full-width-start] 100px [breakout-start] 100px [content-start] 1fr [content-end] 100px [breakout-end] 100px [full-width-end];
    }

    :global(.content-grid > *) {
        grid-column: content;
    }

    :global(.breakout) {
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

    @media (width <= 1024px) {
        .content-grid {
            grid-template-columns: [full-width-start] 10px [breakout-start] 50px [content-start] 1fr [content-end] 50px [breakout-end] 10px [full-width-end];
        }
    }
</style>
