<script>
    import Detail from "@components/Details.svelte";

    let { open = false, show = false } = $props();
</script>

{#if show}
    <Detail {open}>
        {#snippet summary()}
            <summary>Präpositionen</summary>
        {/snippet}
        {#snippet content()}
            <section>
                <p>
                    Will denn der nicht endlich aufhören zu schwatzen? Und ich
                    bin so müde. War wohl doch zu viel Rotwein gestern, ich
                    vertrage einfach nicht mehr so viel wie früher. Ja, das
                    Alter. Jetzt muss ich wohl reagieren. Doch dann meint er
                    wieder, ich sei männerfeindlich. Wie auch immer: „Lukas,
                    konzentrieren Sie sich jetzt auf Ihre Arbeit.“ So, das hält
                    wohl die nächsten zehn Minuten. Collin gähnt schon wieder,
                    hatte wohl ein heftiges Wochenende. „Angela, nehmen Sie
                    jetzt endlich das Grammatikbuch hervor und beginnen Sie Ihre
                    Arbeit! Ja, die Seiten 57 bis 59.“ Meine Nägel sind schön
                    geworden. Super, diese French Manicure! „Paula, wenn Sie
                    eine Frage haben, kommen Sie nach vorne.“ Ich hätte etwas
                    zum Arbeiten mitnehmen sollen. „Lukas, jetzt hören Sie auf,
                    mit dem Handy zu spielen und vertiefen Sie sich in das
                    Thema.“ Vielleicht könnte ich den Decklack noch eine Spur
                    dunkler wählen. „Angela, die Seiten 57 bis 59, legen Sie das
                    Handy weg!“ Ich achte auf die Wahl der richtigen Präposition
                    und auf den Kasus, den diese Präposition verlangt. Eine
                    klare Aufgabenstellung, die Übungen sind machbar. „Nein,
                    Mischa, Sie dürfen jetzt nicht auf die Toilette.“ Alles
                    Ausweichmanöver, nur, um nicht arbeiten zu müssen. Ah, jetzt
                    kommt Paula doch noch, um etwas zu fragen. Nein, sie wäscht
                    sich nur die Hände und trinkt Wasser. Die sind ja dauernd am
                    Verdursten, sagen an den Fläschchen wie Kleinkinder. Wenn es
                    doch endlich klingeln würde! „Lukas, es reicht jetzt! Setzen
                    Sie sich da nach vorne, nehmen Sie Ihr Buch und arbeiten Sie
                    ENDLICH!“ Und für den Tai-Curry brauche ich diesen
                    Basmati-Beutel-Reis, 250g Pouletbrust und chinesisches
                    Gemüse. Kokosmich und Curry-Paste habe ich noch. Ah, jetzt
                    hat es Collin doch noch gerafft, dass es etwas zu tun gibt.
                    „Ja, Nora, Sie müssen den Satz mit der Präposition und dem
                    Artikel im richtigen Kasus ergänzen.“ Ich kaufe im Globus
                    noch diese roten Stäbchen, die würden gut aussehen zum
                    schwarzen Geschirr. Da hinten schwatzt es schon wieder.
                    Dieses Zischen tut meinen Ohren weh. „Aaangelaaa!“ Ich
                    erkläre gerade dem Remo, wie er die Aufgaben lösen soll.
                    Immer diese Ausreden. Dabei reden sie übers Wochenende,
                    geben an mit ihren Saufgelagen. Diese Stille plötzlich,
                    jetzt arbeiten sie doch noch konzentriert. Jetzt darf
                    einfach niemand mehr etwas fragen, sonst geht das Geraune
                    gleich wieder los.
                </p>
            </section>
        {/snippet}
    </Detail>
{/if}
