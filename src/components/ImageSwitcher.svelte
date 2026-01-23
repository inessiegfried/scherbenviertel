<script>
    let { images = [] } = $props();
    
    // Bilder duplizieren für nahtlosen Loop
    let extendedImages = $derived([...images, images[0]]);
    let imageCount = $derived(images.length);
    
    // Feste Zeitwerte in ms
    const swipeTime = 500; // 500ms für jeden Swipe
    const holdTime = 2500; // 2500ms Pause pro Bild
    const totalDuration = $derived(imageCount * (swipeTime + holdTime));
    
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
</script>

<div class="image-switcher">
    <div class="image-container" style="--total-duration: {totalDuration}ms">
        {#each extendedImages as imgSrc}
            <img src={imgSrc} alt="Bild in einem Bilderkarousel" />
        {/each}
    </div>
</div>

{@html `<style>${generateKeyframes()}</style>`}

<style>
    .image-switcher {
        width: 300px;
        overflow: hidden;
    }
    
    .image-container {
        display: flex;
        animation-name: swipe;
        animation-duration: var(--total-duration);
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    
    .image-container > img {
        flex: 0 0 300px;
    }
</style>
