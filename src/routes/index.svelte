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
        // Der scrollContainer ist das main-Element aus App.svelte
        const scrollContainer = document.querySelector("main");
        
        if (!scrollContainer) {
            console.error("Scroll container (main) not found");
            return;
        }
        
        if (sections.length === 0) {
            console.error("No .two-cols sections found");
            return;
        }
        
        // Berechne die rootMargin basierend auf der Container-Höhe
        const containerHeight = scrollContainer.clientHeight;
        const bottomMargin = Math.floor(containerHeight * 0.8); // 80% vom unteren Bereich abziehen
        
        console.log(`Found ${sections.length} sections, observing with root margin: -50px 0px -${bottomMargin}px 0px`);
        
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
                            console.log("Section visible, updating title:", title);
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
    <section><Home /></section>
    <section><Aktuell /></section>
    <section><Scherbenviertel /></section>
    <section><Lesungen /></section>
    <section><Stimmen /></section>
    <section><Gedanken /></section>
    <section><Vita /></section>
    <section><Kontakt /></section>
</main>

<style>
    .main-container {
        height: 100%;
        align-items: center;
        scroll-snap-type: y proximity;
        scroll-padding-top: 0;
    }

    section:nth-child(odd) {
        background: radial-gradient(
            circle at center,
            var(--base-color),
            var(--base-color-darker)
        );
    }



</style>
