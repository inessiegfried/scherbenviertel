<script>
    import Detail from "@components/Details.svelte";

    let { open = false, show = false } = $props();
</script>

{#if show}
    <Detail {open}>
        {#snippet summary()}
            <summary>Gleis 12</summary>
        {/snippet}
        {#snippet content()}
            <section>
                <p>
                    Ich stand am Bahnhof und wartete auf die Einfahrt des Zuges
                    nach Bern. Ich war zu früh dran, was mir missfiel. Der ICE
                    aus Berlin hatte wie üblich Verspätung, die
                    Menschenansammlung auf dem Bahnsteig wuchs. Ich fühlte mich
                    matt und lustlos, wie immer, wenn ich nichts zu tun hatte.
                    Vor mir stand eine ältere Frau mit einem Mädchen an der
                    Hand. Die Frau sprach zu dem Kind, tätschelte zwischendurch
                    seinen Kopf oder wühlte mit den Fingern in seinen blonden
                    Locken. Das Mädchen stand starr da, bewegte sich nicht, was
                    aussergewöhnlich war. Meistens nerven mich die Kinder mit
                    ihrem Gezappel und Gequietsche. Dieses nicht, dieses
                    ängstigte mich.
                </p>
                <p>
                    Endlich wurde der Zug von weitem sichtbar. Es kam Bewegung
                    in die Menge, Taschen wurden geschultert, Standorte
                    gewechselt. Nur das kleine Mädchen blieb stehen, unbeweglich
                    wie zuvor Jetzt kam der Zug näher. Als die Frau die Hand des
                    Mädchens für einen Moment losliess und nach ihrem Koffer
                    griff, löste sich das Kind aus seiner Starrheit und rannte
                    los. Ich hechtete hinterher, holte das Kind am Rand des
                    Bahnsteigs ein und umfasste es mit aller Kraft. „Lass mich
                    los, du Dumme, lass mich los!“ Der Zug rollte an uns vorbei.
                    Das Kind zappelte mit den Beinen, schlug um sich, versuchte
                    sich meiner Umklammerung zu entwinden. Doch ich hielt das
                    Kind fest an mich gepresst, spürte sein ungestümes
                    klopfendes Herz, seine Schläge und schloss für einen Moment
                    die Augen.
                </p>
                <p>
                    „Jasmin!“ Die Stimme holte mich zurück auf den Bahnsteig.
                    „Um Gottes Willen, Jasmin!“ Fassungslos stand die Frau da,
                    Tränen rannen über ihr Gesicht. Das Kind hing schlaff in
                    meinen Armen.
                </p>
                <p>
                    Ich musste los, hatte in Bern einen wichtigen Termin und
                    stand jetzt da mit einem fremden Kind und einer älteren
                    Frau, die Unterstützung brauchten. Na ja, meine Anwältin
                    würde mir die 250.- berechnen und wir würden einen anderen
                    Termin vereinbaren. Das Datum der Verhandlung musste
                    womöglich verschoben werden… „Kommen Sie, wir müssen hier
                    raus!“, hörte ich mich sagen.
                </p>
                <p>
                    Ich trug das Kind, dessen Gewicht mir bereits zusetzte, auf
                    meinem Arm, die Frau folgte mir. Wir nahmen die Rolltreppe,
                    bewegten uns über die Passerelle und verliessen den Bahnhof.
                    Automatisch hatte ich den Hinterausgang angesteuert, wusste
                    aber nicht recht, wohin. Da fiel mir Claudias WG ein in
                    einer Strasse unmittelbar hier in der Nähe. Auf mein
                    Klingeln wurde die Türe geöffnet und nach wenigen Worten der
                    Erklärung wurde uns das Wohnzimmer überlassen. Claudia
                    machte Tee, brachte ein paar Kekse und zog sich dann zurück.
                </p>
                <p>
                    Ich bat die Frau, Platz zu nehmen, wollte das Kind aufs Sofa
                    setzen, doch es klammerte sich an mir fest. Die Frau wischte
                    umständlich die Tränen aus ihrem Gesicht und rang nach
                    Fassung. „Warum hast du das getan, Jasmin?“, schluchzte sie
                    hilflos, „deiner Omama solche Angst einzujagen. Haben wir
                    nicht schon Sorgen genug, muss ich mit der Tochter auch
                    gleich noch die Enkeltochter verlieren?“ Jasmins Finger
                    krallten sich in meinen Arm.
                </p>
                <p>
                    Ich begann meinen humanen Schritt zu bereuen, das hier würde
                    dauern. Wir sassen einfach da, das zitternde Kind, das sich
                    an mich drückte, die verzweifelte Frau, die in ihrem Sessel
                    immer kleiner wurde. Ich spürte mein Kreuz, die
                    Verspannungen im Nacken, wagte es nicht, mich bequemer
                    hinzusetzen. Zwischendurch nickte ich ein. Die Zeit
                    verstrich, ich begann mich zu langweilen, Jasmin war
                    eingeschlafen, die Grossmutter schwieg.
                </p>
                <p>
                    „Ich will doch Mamas Engel sein.“, kam es plötzlich vom Sofa
                    her. Ich kniete mich vor sie hin. „Und deshalb wolltest du
                    sterben?“, fragte ich besorgt. „Mama hat gesagt, dass im
                    Himmel die Engel auf die Mamis aufpassen.“
                </p>
                <p>
                    „Meine Tochter ist ein wunderbarer Mensch“, meldete sich nun
                    die Frau und erzählte mir von ihrer Tochter. Wie lebendig
                    sie gewesen war, wie fröhlich, wie unproblematisch. Wie
                    mutig sie jeden Baum erkletterte, wie leicht ihr das Lernen
                    fiel. Sie beschrieb, wie stolz sie gewesen sei auf diese
                    Tochter, die studiert und einen guten Mann gefunden habe.
                    Wie glücklich sie bei der Geburt des Grosskinds gewesen sei.
                    Und dann kam plötzlich Blut, wenn sie auf die Toilette
                    musste. Der Blasentumor wurde operiert, ein neuer folgte.
                    Wieder Blut. Eine zweite Operation, eine dritte. Dann hatte
                    die Tochter genug, genug von diesem Stuhl, auf den sie sich
                    setzen und die Beine spreizen musste, genug von diesem Arzt,
                    der jedes Mal etwas gefunden hatte, und sie ignorierte die
                    erneuten Blutungen. Der Krebs breitete sich sehr schnell im
                    Körper aus. Metastasen überall. „Sie liegt auf der
                    Palliativstation. Sie wird nicht mehr lange leben.“
                </p>
                <p>
                    „Aber Jasmin!“, wandte ich mich dem Kind zu. „Es ist doch
                    genau umgekehrt. Deine Mami wird ein Engel und sie wird dich
                    beschützen. Sie wird im Himmel wohnen und auf dich
                    aufpassen, damit dir nichts Böses geschieht.“ „Meinst du
                    wirklich?“, fragte mich das Kind und schaute mich mit
                    treuherzigen Augen an. „Ja, da bin ich ganz sicher. Und
                    immer, wenn du in den Himmel schaust, wenn die Sonne
                    scheint, wenn die Wolken vorüberziehen oder wenn Sterne am
                    Himmel stehen, wird sie dir zulächeln.“
                </p>
            </section>
        {/snippet}
    </Detail>
{/if}
