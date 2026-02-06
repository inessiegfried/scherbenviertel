<script>
    import { headerState } from "../sharedStates/headerState.svelte";

    let { toggleMenu } = $props();
</script>

<header>
    <nav>
        <h1>
            {#if headerState.titleMain && headerState.titleSub}
                <span class="title-main">{headerState.titleMain}</span>
                <span class="title-sub">{headerState.titleSub}</span>
            {:else}
                {headerState.title}
            {/if}
        </h1>
    </nav>
    <button id="menu-button" on:click={toggleMenu}></button>
</header>

<style>
    header {
        container-name: header;
        container-type: inline-size;
        position: relative;
        grid-area: header;
    }

    nav {
        background-color: var(--base-color);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.2em;
        padding: 0.5rem;
        min-height: 59px;
    }

    h1 {
        margin: 0;
        padding: 0;
        text-align: center;
    }

    .title-main,
    .title-sub {
        display: inline;
    }

    /* Container Query statt Media Query */
    @container header (max-width: 640px) {
        nav {
            padding: 0.5rem;
        }

        h1 {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
            line-height: 1.2;
        }

        .title-main {
            font-size: 1em;
        }

        .title-sub {
            font-size: 0.65em;
            opacity: 0.9;
            font-weight: normal;
        }
    }

    /* Menu Button */
    #menu-button {
        display: block;
        position: absolute;
        width: var(--bookmark-width);
        height: var(--bookmark-height);
        background-color: var(--base-color);
        top: 0;
        right: var(--bookmark-right);
        border: none;
        cursor: pointer;
        z-index: 10;
        animation: wiggle 5s linear 10s infinite;
    }

    #menu-button::before {
        content: "";
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 30px solid var(--base-color);
        border-right: 30px solid var(--base-color);
        border-bottom: 20px solid transparent;
    }

    @keyframes wiggle {
        0% {
            rotate: 0deg;
        }
        2% {
            rotate: 5deg;
        }
        6% {
            rotate: -5deg;
        }
        8% {
            rotate: 0deg;
        }
        100% {
            rotate: 0deg;
        }
    }
</style>
