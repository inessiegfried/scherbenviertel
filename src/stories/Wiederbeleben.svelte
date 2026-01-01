<script>
    import Detail from "@components/Details.svelte";

    let { open = true, show = true } = $props();
</script>

{#if show}
    <Detail {open}>
        {#snippet summary()}
            <summary>Wiederbeleben</summary>
        {/snippet}
        {#snippet content()}
            <section>
                <p>
                    Das Zimmer war kahl. Ein Tisch, ein Stuhl, ein Schrank, ein
                    Bett. Sonst nichts. Auf dem Rost des Gitterbettes lag eine
                    Matratze in einem gestreiften Blau. Dahinter löste sich die
                    Tapete von der Wand. Von der Decke hing ein Kabel mit einer
                    Glühbirne, deren Licht die ganze Hässlichkeit des Zimmers
                    preisgab. „Da sind wir“, sagte die Alte. Ihr zahnloser Mund
                    lächelte mir blöde entgegen. „Gefällt es Ihnen?“ Ja, es war
                    genau das, was ich gesucht hatte.
                </p>
                <p>
                    Ich stellte meine Tasche aufs Bett und begann auszupacken.
                    Viel hatte ich nicht dabei, etwas Wäsche zum Wechseln, einen
                    warmen Pullover, die notwendigsten Toilettenartikel. Keine
                    Ablenkung, das war das Wichtigste.
                </p>
                <p>
                    Nachdem ich meine wenigen Habseligkeiten in den Schrank
                    geräumt hatte, legte ich mich auf die Matratze, die Schuhe
                    behielt ich an. Ich starrte auf den Wasserflecken an der
                    Decke, auf die Fliege, die die Lampe umkreiste, spürte das
                    unbequeme Bett, setzte mich auf, legte mich wieder hin.
                    Irgendwann schlief ich ein und schreckte dann jäh auf aus
                    einem Traum, an den ich mich schon beim Aufwachen nicht mehr
                    erinnern konnte. Jetzt war es stickig heiss, die Lampe
                    brannte immer noch, die Fliege kreiste immer noch. Ich
                    verliess das Zimmer, ging den dunklen Korridor entlang, fand
                    die Tür zur Toilette, kehrte wieder zurück und schlief
                    wieder ein.
                </p>
                <p>
                    Am Morgen wartete ich, bis die Alte mir das Frühstück
                    gebracht hatte. Dann setzte ich mich an den Tisch, ass zwei
                    Stück Brot, trank den scheusslichen Kaffee und legte mich
                    wieder aufs Bett. Die Lampe brannte nicht mehr und die
                    Fliege sass am Rand der Kaffeetasse und putzte sich ihre
                    Flügel. Von draussen drang das Tageslicht durch die
                    ungeputzten Scheiben. Viel gab es nicht her, das Zimmer lag
                    hofseitig. Zwischendurch setzte ich mich auf, legte mich
                    dann wieder hin, nickte ein, wachte auf, stand auf und
                    machte mich auf den Weg zur Toilette.
                </p>
                <p>
                    Irgendwann brachte mir die Alte das Mittagessen. Ich setzte
                    mich an den Tisch, ass das Brot, schlürfte die Suppe und
                    legte mich dann wieder aufs Bett.
                </p>
                <p>
                    Vielleicht war es doch keine so gute Idee gewesen, hierher
                    zu kommen. Natürlich hatte ich wissen wollen, wie sich mein
                    Vater gefühlt hatte, hatte nachempfinden wollen, was er
                    durchgemacht hatte. Jetzt, wo ich die Wahrheit über ihn
                    kannte.
                </p>
                <p>
                    Im Zimmer war es wieder dunkel. Die Alte klopfte, zündete
                    die Lampe an, stellte das Abendessen auf den Tisch und
                    schlurfte wortlos wieder hinaus. Keine Gespräche, so hatten
                    wir es vereinbart. Ich setzte mich an den Tisch, ass das
                    Brot, liess den unappetitlichen Käse links liegen, schlürfte
                    den Kaffee, an den ich mich fast nicht gewöhnen konnte und
                    legte mich wieder aufs Bett. Die Fliege drehte ihre Runden.
                </p>
                <p>
                    Wie lange würde ich das aushalten? 12 Jahre wie er?
                    Irgendwann schlief ich ein, wachte auf, ging auf die
                    Toilette, legte mich wieder hin, schlief ein, wachte gegen
                    Morgen auf und wartete auf mein Frühstück. Die Fliege surrte
                    am Fenster.
                </p>
                <p>
                    Ein schöner Mann soll er gewesen sein, als sie sich kennen
                    lernten, doch als er zurückkam, hatte sie ihn nicht mehr
                    erkannt. Bald darauf war er gestorben und sie war schwanger
                    zurückgeblieben, war dann zurückgekehrt in ihr Dorf und
                    hatte die Schande eines unehelichen Kindes wortlos ertragen.
                    Was hätte sie ihnen sagen sollen, was mir? Dass sie sich
                    verliebt hatte in einen Kommunisten? Die waren nach dem
                    Krieg noch verhasster geworden. Dass sie auf ihn gewartete
                    hatte, zu ihm gehalten, geschwiegen hatte?
                </p>
                <p>
                    Was hätte sie mir sagen sollen? Alles, ja, wirklich alles,
                    wie sie ihn kennen gelernt hatte, wie sich Grübchen
                    bildeten, wenn er lächelte, wie seine Augen strahlten, wenn
                    er sie ansah, wie sie sich geliebt hatten. Wie sie gehofft
                    hatte, dass er sie nicht vergessen würde. Wie sie sich
                    ängstigte Tag und Nacht. Wie sie auch in den Bombennächten
                    mehr um sein als um ihr Leben bangte. Wie glücklich und
                    unendlich traurig sie war, als er wiederkam. Wie er sich an
                    sie geklammert hatte in der ersten Nacht, in der sie wieder
                    beisammen lagen. Was er ihr erzählt hatte von der
                    Gefangenschaft. Wie er immer schwächer geworden war. Wie sie
                    an seinem Sterbebett gewacht hatte bis zum letzten Atemzug.
                </p>
                <p>
                    Ich stand auf, packte meine Sachen und ging ohne Frühstück.
                    Ich hatte begriffen. Die Geschichte meiner Eltern war auch
                    meine Geschichte. Sie strömte durch mein Blut, pulsierte in
                    meinen Adern, alles Erzählen und Nachempfinden machte sie
                    zur Fiktion.
                </p>
            </section>
        {/snippet}
    </Detail>
{/if}
