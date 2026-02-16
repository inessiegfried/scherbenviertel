<script>
    import { onMount } from "svelte";

    let detail;
    let { open = false, summary, content } = $props();

    onMount(() => {
        const summary = detail.firstElementChild;
        const content = summary.nextElementSibling;
        let isAnimating = false;

        summary.onclick = (ev) => {
            ev.preventDefault();
            if (isAnimating) return;

            const contentHeight = content.getBoundingClientRect().height;
            isAnimating = true;

            if (detail.open) {
                return content
                    .animate(
                        { height: [`${contentHeight}px`, "0px"] },
                        { duration: 300 },
                    )
                    .finished.then(() => {
                        detail.open = isAnimating = false;
                    });
            }

            detail.open = true;
            content
                .animate(
                    { height: ["0px", `${contentHeight}px`] },
                    { duration: 300 },
                )
                .finished.then(() => (isAnimating = false));
        };
    });
</script>

<details bind:this={detail} {open}>
    {@render summary?.()}
    {@render content?.()}
</details>

<style>
    details {
        width: 100%;
        box-shadow: var(--shadow-teal);
        transition: box-shadow 400ms ease;
    }

    details:hover {
        box-shadow: 6px 3px 18px var(--teal);
    }

    :global(summary) {
        font-size: 1.5em;
        font-weight: bold;
        color: var(--yellow);
        background-color: hsl(from var(--teal) h s l / 0.2);
        width: 100%;
        padding-left: var(--space-sm);
    }

    :global(summary::marker) {
        color: var(--teal);
    }

    :global(details > section) {
        padding: var(--space-sm);
    }
</style>
