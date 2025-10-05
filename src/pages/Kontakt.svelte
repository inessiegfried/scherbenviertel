<script>
    import imgUrl from "@img/ines3.jpg?url";
    import TwoCols from "@components/TwoCols.svelte";
</script>

<TwoCols id="kontakt" title="Kontakt">
    {#snippet first()}
        <img src={imgUrl} alt="Bild der Authorin" />
    {/snippet}
    {#snippet second()}
        <ul>
            <li>
                <a href="mailto:contact@inessiegfried.ch">
                    contact@inessiegfried.ch
                </a>
            </li>
            <li>
                <a href="https://www.efefverlag.ch/"> efefverlag.ch </a>
            </li>
            <li>
                <a href="mailto:info@efefvarlag.ch"> info@efefverlag.ch </a>
            </li>
        </ul>
    {/snippet}
</TwoCols>
