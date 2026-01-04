<script>
    import TwoCols from "@components/TwoCols.svelte";
    import ImViereck from "../stories/ImViereck.svelte";
    import Praepositionen from "../stories/Praepositionen.svelte";
    import Gleis12 from "../stories/Gleis12.svelte";
    import Wiederbeleben from "../stories/Wiederbeleben.svelte";
</script>

<TwoCols id="gedanken" title="Geschichten">
    {#snippet first()}
        <div class="fancy-bottom">Jeden Monat eine neue Geschichte.</div>
    {/snippet}
    {#snippet second()}
        <div class="story-container">
            <ImViereck open={false} show={true} />
            <!-- TODO: Ändere show und open um andere Geschichten zu zeigen. -->
            <Praepositionen open={false} show={true} />
            <Gleis12 open={false} show={true} />
            <Wiederbeleben open={true} show={true} />
        </div>
    {/snippet}
</TwoCols>

<style>
    .story-container {
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin-block: 3em;
    }

    .fancy-bottom {
        margin-top: 2em;
        margin-bottom: 2em;
    }
</style>
