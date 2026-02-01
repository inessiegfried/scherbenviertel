<script>
    let { first, second, id, title, titleMain = null, titleSub = null, breakout = false } = $props();
</script>

<div
    {id}
    class={breakout ? "two-cols breakout" : "two-cols"}
    data-title={title}
    data-title-main={titleMain}
    data-title-sub={titleSub}
>
    <div class="first-col">{@render first?.()}</div>
    <div class="second-col">{@render second?.()}</div>
</div>

<style>
    .two-cols {
        display: flex;
        scroll-snap-align: start;
        width: 100%;
        min-height: 100dvh;
    }

    :global(.first-col:has(div.wide)) {
        width: min(550px, 100%);
    }

    .first-col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .second-col {
        display: flex;
        flex-direction: column;
    }

    :global(.first-col img) {
        width: 100%;
    }

    /* Desktop Layout */
    @media (min-width: 601px) {
        .two-cols {
            flex-direction: row;
            gap: 5%;
            align-items: center;
            min-height: 100dvh;
        }

        .first-col {
            position: sticky;
            top: var(--header-height);
            width: min(300px, 100%);
            flex-shrink: 0;
            align-self: center;
        }

        .second-col {
            flex: 1;
            min-height: 100dvh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }

    /* Mobile Layout */
    @media (max-width: 600px) {
        .two-cols {
            flex-direction: column;
            padding: 2rem 0;
        }

        .first-col {
            position: relative;
            width: 100%;
            margin-bottom: 2rem;
        }

        .second-col {
            width: 100%;
        }
    }
</style>
