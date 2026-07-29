<script>
    import Detail from "@components/Details.svelte";

    let { open = false, show = false } = $props();
</script>

{#if show}
  <Detail {open}>
    {#snippet summary()}
      <summary>Arielle</summary>
    {/snippet}
    {#snippet content()}
      <section>
        <p>
          Gestern fiel mein Handy ins Klo. Ich machte einen Sprung in die
          Schüssel und tauchte danach. Seither höre ich beim Telefonieren immer
          dieses Blubbern, fühle mich wie Arielle, die Meerjungfrau. Ich wohne
          in einem Schloss mit Mauern aus Korallen, Fenstern aus Bernsteinglas
          und einem Dach aus Muschelschalen, in denen glänzende Perlen ruhen.
          Aus den Wänden wachsen üppige Blumen. Werden die
          Bernsteinfenstergeöffnet, schwimmen Fische hinein und fressen mir aus
          der Hand. Draussen liegt ein großer Garten mit wundersamen Pflanzen
          und farbig bunten Bäumen, die violette Schatten werfen. Deren Früchte
          glänzen wie Gold und deren Blumenpracht lodert wie brennendes Feuer.
          Der Boden aus feinem rosarotem Sand bildet die samtene Oberfläche für
          meine Spaziergänge. Und alles umgibt ein novalisblaues Wasser, so
          klar und tief. 
        </p>
        <p>
          Ich habe diesen Garten verlassen, bin hinausgegangen zum brausenden
          Malstrom, hinter dem die Meerhexe wohnt. Hier wachsen keine Blumen,
          hier gibt es nur den nackten, grauen Sandboden und man muss höllisch
          aufpassen, dass einem die zermalmenden Wirbel des Wassers nicht in
          die endlose Tiefe ziehen. Ich habe das Hexenhaus im seltsamen Walde
          gefunden, umgeben von Pflanzen, die wie vielarmige Polypen, nach mir
          greifen wollten. In meiner Not habe ich mich einfangen, habe ich mich
          verwandeln lassen, bin selbst zur Hexe geworden, einer bösen dazu. 
        </p>
        <p>
          Und dich habe ich hinausgeworfen, weggejagt aus dem Hexenhaus.
          Fertig mit Knusperhäuschen und Knusperknäuschen.
        </p>
        <p>
          Wann ich das Parfum der anderen zum ersten Mal roch, weiss ich nicht
          mehr. Zuerst habe ich es wahrgenommen, ohne es mir zu merken. Bald
          war seine Penetranz nicht mehr zu verdrängen. Aber ich tat so, als
          wäre es nicht präsent. Hielt mein Schweigen wie ein Schutzschild,
          registrierte gleichzeitig jede Veränderung.
        </p>
        <p>
          Vor dem Einschlafen drehtest du mir neuerdings den Rücken zu, warst
          lieber in einen Science- Fiction-Roman vertieft als in mich und zogst
          dich in andere Galaxien zurück. Warst du mir zugewandt, fühlte sich
          deine Nähe an, als könnte sie mir gleich wieder entzogen werden.
        </p>
        <p>
          Alles, was früher leicht und selbstverständlich war, war jetzt
          brüchig geworden. Du warst äusserlich bei mir, innerlich hieltest du
          Abstand. Du schienst mir zuzuhören, wirktest aber völlig
          desinteressiert. Für unsere Zukunft hattest du keine Träume mehr. 
        </p>
        <p>
          Ich habe es ausgehalten, habe gehofft, es ginge vorbei. 
        </p>
        <p>
          Aber diese Metze hat dich nicht losgelassen. Hat sich an dir
          festgekrallt, dich nicht mehr aus ihren Klauen gelassen. Und dir sind
          die Ausreden ausgegangen für deine vielen Abwesenheiten. Alles war so
          offensichtlich, dass ich nicht mehr so tun konnte, als wüsste ich es
          nicht. 
        </p>
        <p>
          Meine schönen Weingläser sind draufgegangen, die teuren, bauchigen.
          Mit so viel wütender Lust habe ich sie auf den Boden geknallt. Du
          hast mir nicht geholfen, die Scherben zusammenzulesen, du hast mich
          in diesem Scherbenhaufen sitzen gelassen. Ich habe mich entblösst und
          der Lächerlichkeit preisgegeben. Habe mein Innerstes nach aussen
          gekehrt und dich gleich mit. Ich habe dir keine Träne nachgeweint,
          aber manchen Fluch hinterhergejagt, habe dir den Stinkfinger gezeigt
          und vor Wut nach mir selbst getreten.
        </p>
        <p>
          Ich habe das Haus abgesucht und die letzten Spuren deiner Anwesenheit
          getilgt. Habe jedes einzelne Haar von dir aus dem Abfluss gefischt.
          Habe gesaugt, geschrubbt und die Zimmer ausgeräuchert. Nichts mehr,
          wirklich nichts mehr, sollte mich an dich erinnern.
        </p>
        <p>
          Und jetzt verkrieche ich mich zu Hause, eingesperrt im Aquarium.
        </p>
        <p>
          Ich möchte meine Schwanzflosse zurück, mit der ich auf den Boden
          schlagen kann, um allem Einhalt zu gebieten, mit der ich losschwimmen
          kann in die weiten Meere, um dich zurückzuholen. Aber ich habe nur
          zwei dumme Beine mit schmerzenden Füssen an ihren Enden. Meine Stimme
          ist mir beraubt, du hörst mich nicht mehr und tanzt mit der anderen
          Samba. Nach meinem Liebestod steige ich zu keiner rosaroten Wolke auf
          wie die kleine Meerjungfrau, sondern liege erstickt auf dem
          Meeresgrund.
        </p>
        <p>
          Die Meerhexe in mir, die geholfen hat, die kleine Meerjungfrau ins
          Unglück zu stürzen, hat ihre magischen Kräfte verloren. Sie kann
          nicht mehr laut und scheusslich lachen, das schwarze Blut aus ihrer
          Brust hat keine Wirkung mehr. Ich stecke zwar im heisssprudelnden
          Schlamm, umgeben von hundertköpfigen Schlangen, die ihre hässlichen
          weissgelben Bäuche zeigen. Aber auch deren schleimige Arme können
          dich weder umschnüren noch festhalten.
        </p>
        <p>
          Ich vermisse das Zusammenleben mit dir nicht, aber du fehlst mir. Ich
          sehne mich danach, dass du meine Hand nimmst und sie küsst, dass du
          mich mit dieser unglaublichen Begeisterung anschaust, dass du mir
          Luftküsse schickst, mitten in der Nacht, und mir sagst, dass du mit
          mir alt werden möchtest. 
        </p>
      </section>
    {/snippet}
  </Detail>
{/if}
