<script>
    let { first, second, id, title } = $props();
</script>

<div {id} class="two-cols" data-title={title}>
    <div class="first-col">{@render first?.()}</div>
    <div class="second-col">{@render second?.()}</div>
</div>

<style>
    .two-cols {
        display: flex;
        scroll-snap-align: start;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10%;
        width: 100%;
    }

    .first-col {
        width: min(300px, 100%);
        flex-shrink: 0;
        align-self: flex-start;

        position: sticky;
        top: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .second-col {
        flex-grow: 1;
    }

    :global(.first-col img) {
        width: 100%;
    }

    @media (min-width: 601px) {
        .two-cols {
            min-height: var(--body-height);
        }
        .first-col {
            min-height: var(--body-height);
        }
    }
    @media (max-width: 600px) {
        .two-cols {
            flex-direction: column;
            margin-top: 30px;
            gap: 0;
        }

        .first-col {
            position: relative; /* Damit position: sticky; aufgehoben ist. */
            width: 100%;
        }

        .second-col {
            width: 100%;
        }
    }
</style>
