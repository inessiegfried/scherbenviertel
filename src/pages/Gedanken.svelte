<script>
    import TwoCols from "@components/TwoCols.svelte";
    import ImViereck from "../stories/ImViereck.svelte";
    import Praepositionen from "../stories/Praepositionen.svelte";
    import Wiederbeleben from "../stories/Wiederbeleben.svelte";
</script>

<TwoCols id="gedanken" title="Geschichten">
    {#snippet first()}
        <div class="fancy-bottom">Jeden Monat eine neue Geschichte.</div>
    {/snippet}
    {#snippet second()}
        <div class="story-container">
            <ImViereck open={true} show={true} />
            <!-- TODO: Ändere show und open um andere Geschichten zu zeigen. -->
            <Praepositionen open={false} show={false} />
            <Wiederbeleben open={false} show={false} />
        </div>
    {/snippet}
</TwoCols>

<style>
    .story-container {
        display: flex;
        flex-direction: column;
        gap: 1em;
        width: min(720px, 100%);
        margin-block: 3em;
    }

    .fancy-bottom {
        padding-bottom: 2em;
        margin-bottom: 2em;
    }
</style>
