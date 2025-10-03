<script>
    import Detail from "@components/Details.svelte";

    let { open = false, show = false } = $props();
</script>

{#if show}
    <Detail {open}>
        {#snippet summary()}
            <summary>Im Viereck</summary>
        {/snippet}
        {#snippet content()}
            <section>
                <p>
                    „He, Petra, Lust auf ein Eis?“. Juri lachte verschmitzt zu
                    ihr rüber. „Hab grad keine Zeit. Muss ins Training.
                    Tschüüüüsss.“ Petra schwang sich auf ihr Fahrrad und radelte
                    los. „Hübsch sieht sie aus“, dachte Juri, „viel zu schade
                    für Schröder.“ Er stand etwas unschlüssig vor dem Schulhaus
                    und blickte dem kleiner werdenden Rad sehnsüchtig hinterher.
                    „Hej, Alter, lass die Flanken nicht hängen. Wir gehen was
                    saufen.“ Vor ihm hatte sich Bingo aus der 4f aufgebaut, der
                    heute seinen freien Nachmittag hatte, und hauchte ihm seine
                    Bierfahne ins Gesicht. Juri machte eine abwehrende
                    Handbewegung. „Mensch, Bingo, ich hab keine Lust auf deine
                    Hopfentröstung. Die Frau will einfach nicht, ich habe meine
                    Angel ausgeworfen, doch sie beisst einfach nicht an.“
                    „Vielleicht liegts an der Angel.“ Bingo lachte frivol. Juri
                    trat einen Schritt zurück. „Also, ich geh dann mal, muss
                    meinen Deutschvortrag fertig vorbereiten. Ich kann die Huber
                    morgen nicht enttäuschen. Schliesslich bin ich die Stütze
                    ihres Unterrichts.“
                </p>
                <p>
                    Als er nochmals zurückschaute, sah er gerade, wie Schröder
                    und die Neue das Schulhaus verliessen. Die Martha war seine
                    Chance. Sie hatte die letzten drei Jahre mit ihren Eltern in
                    Spanien gelebt. Der Schröder stand auf die, konnte hier
                    seinen Helfertrip so richtig durchziehen. Betonte immer,
                    dass es ihm auch so ergangen sei, als er damals nach seinem
                    Amerikaaufenthalt repetieren musste. Die Petra war viel zu
                    selbständig und um einiges gescheiter als der Schröder. Doch
                    bei der Martha, da war Sozialhelfer Schröder in seinem
                    Element. Dumm war nur, dass die Petra enorm eifersüchtig war
                    und die etwas angefaulte Liebe zwischen ihr und Schröder
                    gerade dadurch einen neuen Frühling erlebte.
                </p>
                <p>
                    Die beiden holten zu ihm auf. „Das war wieder ein
                    Nachmittag! Noch ein Jahr den Henz in Geschichte und ich
                    schnappe über.“ Juri wusste nicht, ob er angesprochen war
                    oder ob der Schröder seine historische Unpässlichkeit der
                    Martha anvertraute. „Mensch, Juri, lauf doch nicht so
                    schnell.“ Schröder hetzte ihm hinterher mit Martha im
                    Schlepptau. „Könnte ich deine Geschichtsnotizen haben, um
                    die Probe vorzubereiten? Ich werd aus dem Gelabber vom Henz
                    einfach nicht schlau.“ „Türlich, mach dir morgen eine Kopie
                    davon.“ Schröder war ein As in Mathe, aber sonst war nicht
                    viel mit ihm, aber Juri wollte es mit ihm auch nicht
                    verderben. „Kann ich dann auch eine Kopie bekommen. Ich
                    schnall diese ganze 48er-Revolution einfach nicht“, ertönte
                    nun Marthas warme Stimme. „Joachim hilft mir, wo er kann.
                    Aber in Geschichte, du weisst ja..“ Juri lächelte gnädig.
                    „Kein Problem.“ „Oh, unser Bus kommt. Bis morgen.“ Und weg
                    waren sie. Sie nannte ihn ‚Joachim‘, ein gutes Zeichen. Dann
                    waren sie sich also schon näher gekommen. Mit federndem
                    Schritt machte sich Juri auf den Heimweg.
                </p>
            </section>
        {/snippet}
    </Detail>
{/if}
