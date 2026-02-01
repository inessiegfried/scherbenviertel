<script>
    import Detail from "@components/Details.svelte";

    let { open = false, show = false } = $props();
</script>

{#if show}
    <Detail {open}>
        {#snippet summary()}
            <summary>Der Unfall</summary>
        {/snippet}
        {#snippet content()}
            <section>
        <p>
          Ada hat ihn gesehen. Zumindest das, was von ihm übriggeblieben ist. Vielleicht hätte ich auch hingehen sollen. Seit letzten Donnerstag kann ich an fast nichts mehr anderes denken. Aber ich kann mich nicht regen, bleibe gefangen in diesem Spiel mit Ada. 
        </p>
        <p>
          Das war schon immer so.
        </p>
        <p>
          Wenn ich an Weihnachten meine Geschenke auspacken wollte, drückte mich eine Schulter weg, war da plötzlich eine Hand, die sich meiner Gaben bemächtigen wollte. Natürlich habe ich mich gewehrt, habe ich, Ada, ich hasse dich!, geschrien, habe ich auf sie eingeschlagen. Doch sie liess mein Toben einfach über sich ergehen, packte genüsslich meine Geschenke aus, als ich das Zimmer bereits verlassen und mich schmollend in meinem Bett verkrochen hatte. 
        </p>
        <p>
          Als ich mich zum ersten Mal verliebte und darauf hoffte, dass Urs aus der 4b sich auch für mich interessierte, ging es nicht lange, bis ich Ada und Urs händchenhaltend hinter der Turnhalle erwischte. Ich war so perplex, dass ich zunächst erstarrte, dann ein wütendes Ada, ich hasse dich! schrie und hilflos davonstolperte. 
        </p>
        <p>
          Ada hat das nichts ausgemacht. 
        </p>
        <p>
          All meine Wutanfälle, in denen ich sie so tief beleidigt habe, wie ich nur konnte, prallten an ihr ab. Wie wenn ich gar nicht existent wäre. 
        </p>
        <p>
          Neben Ada verblasste ich immer. Sie, die ältere Schwester beherrschte den Raum, den sie die ersten Jahre ungeteilt einnehmen konnte. 
        </p>
        <p>
          So war sie auch ständig daran, Stefans Aufmerksamkeit auf sich zu ziehen. Aber er mochte sie nicht. Mochte es nicht, wie sie sich immer in den Vordergrund spielte, ständig das Wort an sich riss und bei allen nach Anerkennung hechelte, und liess Ada abblitzen.
        </p>
        <p>
          Doch jetzt konnte er sie nicht mehr abwehren.  Sie hat einfach die Leichenhalle betreten und ihn sich angeschaut. „Er sieht ziemlich zerquetscht aus“, meinte Ada am Telefon. „Der Aufprall muss massiv gewesen sein. Sie haben ihn aus dem Auto…“ 
        </p>
        <p>
          Ich habe mein Handy in eine Ecke geschmissen, um Ada nicht mehr hören zu müssen, habe mich in mein Bett verkrochen und – nein, geheult habe ich nicht. 
        </p>
        <p>
          Ich bin nicht schuld an Stefans Tod. Ich bin weder das Auto, das er gefahren hat, noch der Baum, mit dem er konfrontiert wurde, als er vom Weg abgekommen ist. Sicher war er betrunken, wie so oft in letzter Zeit. Doch das geht mich gar nichts an, er ist nicht mehr mein Mann. Gut, ist der Unfall nicht passiert, als wir noch glücklich waren. Was denke ich da? Versuche ich da gerade, die Katastrophe auf eine praktische Art zu bewältigen?
        </p>
        <p>
          Wenn ich nur mit Ada so umgehen könnte. Sie einfach in einem Ordner ablegen unter der Rubrik „Schwestern, die einem nichts mehr angehen“.
        </p>
            </section>
        {/snippet}
    </Detail>
{/if}
