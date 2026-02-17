<script>
    let { images = [] } = $props();
    
    // Bilder duplizieren für nahtlosen Loop
    let extendedImages = $derived([...images, images[0]]);
    let imageCount = $derived(images.length);
    
    // Feste Zeitwerte in ms
    const swipeTime = 500; // 500ms für jeden Swipe
    const holdTime = 2500; // 2500ms Pause pro Bild
    const totalDuration = $derived(imageCount * (swipeTime + holdTime));
    
    // State-Variablen für Bild-Loading
    let imagesLoaded = $state(false);
    let firstImageLoaded = $state(false);
    let containerAspectRatio = $state(null);
    
    // Keyframe-Schritte berechnen
    function generateKeyframes() {
        if (imageCount === 0) return '';
        
        let keyframes = '@keyframes swipe {\n';
        const timePerImage = swipeTime + holdTime;
        
        for (let i = 0; i <= imageCount; i++) {
            const holdStartTime = i * timePerImage;
            const holdEndTime = holdStartTime + holdTime;
            const translateX = -100 * i;
            
            // Prozente basierend auf festen Zeitwerten
            const holdStartPercent = (holdStartTime / totalDuration) * 100;
            const holdEndPercent = (holdEndTime / totalDuration) * 100;
            
            if (i < imageCount) {
                // Alle Bilder außer dem letzten duplizierten: Halten, dann Swipe zum nächsten
                keyframes += `  ${holdStartPercent.toFixed(2)}%, ${holdEndPercent.toFixed(2)}% { transform: translateX(${translateX}%); }\n`;
            } else {
                // Letztes Bild (dupliziertes erstes): halten bis zum Ende
                keyframes += `  ${holdStartPercent.toFixed(2)}%, 100% { transform: translateX(${translateX}%); }\n`;
            }
        }
        
        keyframes += '}';
        return keyframes;
    }
    
    // Effect für Bild-Preloading
    $effect(() => {
        if (images.length === 0) return;
        
        // Erstes Bild sofort laden
        const firstImg = new Image();
        firstImg.onload = () => {
            firstImageLoaded = true;
            containerAspectRatio = firstImg.width / firstImg.height;
        };
        firstImg.onerror = () => {
            console.warn('ImageSwitcher: Erstes Bild konnte nicht geladen werden');
            firstImageLoaded = true; // Trotzdem anzeigen
        };
        firstImg.src = images[0];
        
        // Alle Bilder im Hintergrund laden
        Promise.all(
            images.map(src => new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = () => {
                    console.warn(`ImageSwitcher: Bild konnte nicht geladen werden: ${src}`);
                    reject(new Error(`Failed to load ${src}`));
                };
                img.src = src;
            }))
        ).then(() => {
            imagesLoaded = true;
        }).catch(err => {
            console.warn('ImageSwitcher: Einige Bilder konnten nicht geladen werden', err);
            imagesLoaded = true; // Trotzdem Animation starten
        });
    });
</script>

<div class="image-switcher-container">
    <div class="image-switcher" style:aspect-ratio={containerAspectRatio}>
        {#if firstImageLoaded}
            <div 
                class="image-container" 
                class:loaded={imagesLoaded}
                style="--total-duration: {totalDuration}ms"
            >
                {#each extendedImages as imgSrc}
                    <img src={imgSrc} alt="Bild in einem Bilderkarousel" />
                {/each}
            </div>
        {/if}
    </div>
</div>

{@html `<style>${generateKeyframes()}</style>`}

<style>
    .image-switcher-container {
        container-name: image-switcher;
        container-type: inline-size;
        width: 100%;
    }

    .image-switcher {
        overflow: hidden;
        margin: 0 auto;
        min-height: 200px;
        background: var(--color-background, #f5f5f5);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .image-container {
        display: flex;
        width: 100%;
        opacity: 0;
        transition: opacity 0.5s ease-in;
    }
    
    .image-container.loaded {
        opacity: 1;
        animation-name: swipe;
        animation-duration: var(--total-duration);
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }
    
    .image-container > img {
        flex: 0 0 100%;
        width: 100%;
        height: auto;
        object-fit: contain;
        display: block;
    }

    /* Responsive Image Width */
    @container image-switcher (max-width: 640px) {
        .image-switcher {
            max-width: 100%;
        }
    }
</style>
