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

    // Bindings und State
    let twoColsElement = $state(null);
    let contentElement = $state(null);
    let shouldBeSticky = $state(false);

    // Effect für Höhenprüfung mit ResizeObserver und Window Resize
    $effect(() => {
        if (!twoColsElement) return;

        let resizeTimeout;

        function checkHeight() {
            // Header-Höhe aus CSS-Variable auslesen
            const headerHeight = parseInt(
                getComputedStyle(document.documentElement)
                    .getPropertyValue('--header-height')
            ) || 59;

            // Höhe des two-cols Container messen (bestimmt durch scrollenden Content)
            const twoColsHeight = twoColsElement.offsetHeight;
            const availableHeight = window.innerHeight - headerHeight;

            // Wenn two-cols höher ist als verfügbare Höhe, dann sticky aktivieren
            shouldBeSticky = twoColsHeight > availableHeight;
        }

        // Debounced version für Window Resize
        function debouncedCheckHeight() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(checkHeight, 150);
        }

        // ResizeObserver für Content-Größenänderungen (nicht debounced)
        const resizeObserver = new ResizeObserver(() => {
            checkHeight();
        });

        resizeObserver.observe(twoColsElement);

        // Window Resize für Viewport-Änderungen (debounced)
        window.addEventListener('resize', debouncedCheckHeight);

        // Initiale Prüfung
        checkHeight();

        // Initial Delay für nachgeladene Bilder/Fonts
        const delayedCheck = setTimeout(checkHeight, 500);

        // Cleanup
        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', debouncedCheckHeight);
            clearTimeout(resizeTimeout);
            clearTimeout(delayedCheck);
        };
    });
</script>

<div class="two-cols-container">
    <div
        bind:this={twoColsElement}
        {id}
        class={breakout ? "two-cols breakout" : "two-cols"}
        class:full-height={fullHeight}
        data-title={title}
        data-title-main={titleMain}
        data-title-sub={titleSub}
    >
        <div class="first-col">
          <div class="content" class:sticky-col={shouldBeSticky} bind:this={contentElement}>
            {@render first?.()}
          </div>
        </div>
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
        position: relative;
        width: 75%;
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &:has(.sticky-col) {
          justify-content: flex-start;
      }

      & > .content {
        width: 100%;
      }
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


    .first-col > .content.sticky-col {
      position: sticky;
      margin-top: calc((100dvh - var(--header-height)) / 2);
      top: calc((100dvh - var(--header-height)) / 2);
      transform: translateY(-50%);
    }

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
