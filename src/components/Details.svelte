<script>
    import {onMount} from 'svelte';
    
    let detail;

    onMount(() => {

    const summary = detail.firstElementChild;
    const content = summary.nextElementSibling;
    let isAnimating = false;

    summary.onclick = (ev) => {
        ev.preventDefault();
        if (isAnimating) return;

        const contentHeight = content.getBoundingClientRect().height
        isAnimating = true

        if (detail.open) {
            return content.animate(
                { height: [`${contentHeight}px`, '0px'] },
                { duration: 300 }
            ).finished.then(() => {
                    detail.open = isAnimating = false
                })
        }

        detail.open = true
        content.animate(
            { height: ['0px', `${contentHeight}px`]},
            { duration: 300 }
        ).finished.then(() => isAnimating = false)
    }
    })
</script>


<details bind:this={detail}>
  <slot name="summary" />
  <slot name="content" />
</details>

<style>
details :global([slot="summary"]) {
  font-size: 1.5em;
  font-weight: bold;
  position: sticky;
  top: 0;
}

details :global([slot="content"]) {
  height: var(--body-height);
  overflow-y: scroll;
}

</style>
