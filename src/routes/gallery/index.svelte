<script>
    // Import all images from the specified directory
    const imageImports = import.meta.glob("/public/gallery/*.jpg", {
        eager: true,
    });

    const images = Object.entries(imageImports).map(([path, resolver]) => ({
        name: path.split("/").pop(),
        src: resolver.default,
    }));
</script>

<div class="gallery">
    {#each images as img}
        <div class="img-wrapper">
            <img src={img.src} alt={img.name} />
        </div>
    {/each}
</div>

<style>
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: scale 400ms ease;
    }
    .gallery {
        margin-block: 2rem;
        width: 100%;
        justify-content: center;
        display: grid;
        grid-template-columns: repeat(3, 200px);
        /*grid-auto-rows: 250px;*/
        gap: 1rem;
    }

    .img-wrapper {
        overflow: hidden;
        border-radius: 1rem;
        aspect-ratio: 1 / 1;
    }

    .img-wrapper:hover img {
        scale: 1.2;
    }

    .img-wrapper:first-child {
        grid-column: span 2;
        grid-row: span 2;
    }
</style>
