<script>
    let { 
        first, 
        second, 
        id, 
        title, 
        titleMain = null, 
        titleSub = null, 
        breakout = false,
        fullHeight = false
    } = $props();
</script>

<div class="two-cols-container">
    <div
        {id}
        class={breakout ? "two-cols breakout" : "two-cols"}
        class:full-height={fullHeight}
        data-title={title}
        data-title-main={titleMain}
        data-title-sub={titleSub}
    >
        <div class="first-col">{@render first?.()}</div>
        <div class="second-col">{@render second?.()}</div>
    </div>
</div>

<style>
    .two-cols-container {
        container-name: two-cols;
        container-type: inline-size;
        width: 100%;
    }

    .two-cols {
        display: grid;
        scroll-snap-align: start;
        width: 100%;
      grid-template-columns: 1fr 2fr;
        min-height: calc(100dvh - var(--header-height));
    }

    .first-col {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        /* TODO: Fix this line!!! */
        margin-top: calc((100dvh - var(--header-height)) / 2 - 200px);
        align-items: center;
        width: 75%;
        margin-inline: auto;
    }

    .second-col {
        display: flex;
        flex-direction: column;
      justify-content: center;
      align-items: center;
        width: 66%;
      margin-inline: auto;
    }
    

    :global(.first-col img) {
        width: 100%;
        object-fit: cover;
    }

    @container two-cols (min-width: 768px) {

      :global(section:nth-child(even)) .two-cols {
        grid-template-columns: 2fr 1fr;

        & .second-col {
          grid-column: 1;
          grid-row: 1;
        }
      }
    }

    /* Mobile Layout - Container Query */
    @container two-cols (max-width: 768px) {
      .two-cols {
        grid-template-columns: 1fr;
        padding: 2rem 50px;
      }

      .first-col {
        position: relative;
        width: 100%;
        margin-bottom: 3rem;
      }

      .second-col {
        width: 100%;
        padding-top: 1rem;
      }
    }

    /* Smaller mobile - reduce padding */
    @container two-cols (max-width: 640px) {
      .two-cols {
        grid-template-columns: 1fr;
        padding-inline: 20px;
      }

      .second-col {
        width: 90%;
      }
    }
</style>
