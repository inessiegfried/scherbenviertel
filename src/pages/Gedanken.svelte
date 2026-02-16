<script>
    import TwoCols from "@components/TwoCols.svelte";
    import CardContainer from "@components/CardContainer.svelte";
    import ImViereck from "../stories/ImViereck.svelte";
    import Praepositionen from "../stories/Praepositionen.svelte";
    import Gleis12 from "../stories/Gleis12.svelte";
    import Wiederbeleben from "../stories/Wiederbeleben.svelte";
    import DerUnfall from "../stories/DerUnfall.svelte";


    import imgUrl from "@img/Aussicht.jpg?url";
</script>

<TwoCols id="gedanken" title="Geschichten">
    {#snippet first()}
            <img src={imgUrl} alt="Bild mit Aussicht" />
    {/snippet}
    {#snippet second()}
        <CardContainer gap="md" marginBlock="2xl">
            <ImViereck open={false} show={true} />
            <!-- TODO: Ändere show und open um andere Geschichten zu zeigen. -->
            <Praepositionen open={false} show={true} />
            <Gleis12 open={false} show={true} />
            <Wiederbeleben open={false} show={true} />
            <DerUnfall open={true} show={true} />
        </CardContainer>
    {/snippet}
</TwoCols>

<style>
    .fancy-bottom {
        margin-top: var(--space-lg);
        margin-bottom: var(--space-lg);
    }
</style>
