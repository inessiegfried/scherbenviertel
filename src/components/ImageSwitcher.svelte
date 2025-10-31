<script>
    let { images = [] } = $props();
</script>

<div class="image-switcher">
    {#each images as imgSrc}
        <img src={imgSrc} alt="Bild in einem Bilderkarousel" />
    {/each}
</div>

<style>
    .image-switcher {
        display: flex;
        width: 300px;
        overflow: hidden;
    }
    .image-switcher > img {
        flex: 0 0 300px;
        animation-name: swipe;
        animation-duration: 5400ms;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    @keyframes swipe {
        0%,
        20% {
            transform: translateX(0%);
        }
        40% {
            transform: translateX(-100%);
        }
        45%,
        100% {
            transform: translateX(-100%);
        }
    }
</style>
