<script>
    let { first, second, id, title } = $props();
</script>

<div {id} class="two-cols" data-title={title}>
    <div class="first-col">{@render first?.()}</div>
    <div class="second-col">{@render second?.()}</div>
</div>

<style>
    .two-cols {
        scroll-snap-align: start;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        gap: 10%;
        width: 100%;
        max-width: calc(800px + 240px);
        padding-bottom: 2rem;
    }

    .two-cols:nth-child(2n) {
        background: radial-gradient(
            circle at center,
            var(--base-color),
            var(--base-color-darker)
        );
    }

    .first-col {
        width: min(300px, 100%);
        text-align: center;
        flex-shrink: 0;
        min-height: var(--body-height);

        position: sticky;
        top: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > h2 {
            padding: 0;
            margin: 0;
        }
    }

    .second-col {
        flex-grow: 1;
        margin-block: auto;
    }

    :global(.first-col img) {
        width: 100%;
    }

    @media (max-width: 600px) {
        .first-col {
            position: relative;
            width: 100%;
        }

        .second-col {
            width: 100%;
        }

        .hide-sm {
            display: none;
        }

        .two-cols {
            flex-direction: column;
            margin-top: 30px;
        }

        :global([slot="first"]) {
            text-align: center;

            > img {
                width: 80%;
            }
        }
    }
</style>
