var VONG = {
    timer: 500,
    className: "itsVONG",
    matchList: ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'button', 'a', 'span'],
    VONGliste: [
        { deutsch: "Adolf", vong: "Kevin" },
        { deutsch: "Wacht endlich auf", vong: "Ich mag Verschwörungstheorien" },
        { deutsch: "Wach endlich auf", vong: "Ich mag Verschwörungstheorien" },
        { deutsch: "Ausländer", vong: "Menschen, die wo anders wohnen" },
        { deutsch: "Hitler", vong: "Hytler" },
        { deutsch: "Flüchtling", vong: "Schutzsuchende" },
        { deutsch: "vergasen", vong: "zum Kuchen einladen" },
        { deutsch: "Merkel", vong: "Dr. Evil" },
        { deutsch: "Sozialamt", vong: "MC Donalds" },
        { deutsch: "abgeschoben", vong: "geknuddelt" },
        { deutsch: "abschieben", vong: "knuddeln" },
        { deutsch: "niederbrennen", vong: "knuddeln" },
        { deutsch: "Deutschland", vong: "SCHLAAAAND!!!" },
        { deutsch: "abgeschafft", vong: "vergoldet" },
        { deutsch: "AfD", vong: "Hobby-Nazi-Partei" },
        { deutsch: "Schmarotzer", vong: "sozial Schwache" },
        { deutsch: "Asylkrise", vong: "Mimimi-Grund" },
        { deutsch: "Gutmenschen", vong: "Nicht-Arschlöcher" },
        { deutsch: "Gutmensch", vong: "Nicht-Arschloch" },
        { deutsch: "verteidigen", vong: "beschwatzen" },
        { deutsch: "hetzen", vong: "loben" },
        { deutsch: "Hetze", vong: "Lob" },
        { deutsch: "einem", vong: "1" },
        { deutsch: "einen", vong: "1" },
        { deutsch: "eins", vong: "1" },
        { deutsch: "eine", vong: "1" },
        { deutsch: "ein", vong: "1" },
        { deutsch: "der", vong: "dem" },
        { deutsch: "die", vong: "dis" },
        { deutsch: "das", vong: "des" },
        { deutsch: "was", vong: "watt" },
        { deutsch: "bist", vong: "bimst" },
        { deutsch: "vong", vong: "von" },
        { deutsch: "von", vong: "vong" },
        { deutsch: "vom", vong: "vong" },
        { deutsch: "und", vong: "umd" },
        { deutsch: "bin", vong: "bims" },
        { deutsch: "bist", vong: "bimst" },
        { deutsch: "mein", vong: "meim" },
        { deutsch: "freund", vong: "Freumd" },
        { deutsch: "ist", vong: "isd" },
        { deutsch: "sprache", vong: "sprech" },
        { deutsch: "habe", vong: "han" },
        { deutsch: "haben", vong: "hannen" },
        { deutsch: "hab", vong: "han" },
        { deutsch: "hat", vong: "han" },
        { deutsch: "hast", vong: "hanst" },
        { deutsch: "nicht", vong: "nid" },
        { deutsch: "gut", vong: "fly" },
        { deutsch: "mann", vong: "Boi" },
        { deutsch: "frau", vong: "Gurl" },
        { deutsch: "schön", vong: "nice" },
        { deutsch: "schöne", vong: "nices" },
        { deutsch: "angela", vong: "Angelo" },
        { deutsch: "merkel", vong: "Merte" },
        { deutsch: "geld", vong: "Money" },
        { deutsch: "zeit", vong: "time" },
        { deutsch: "gespräch", vong: "realtalk" },
        { deutsch: "nur", vong: "only" },
        { deutsch: "warum", vong: "why" },
        { deutsch: "wir", vong: "sims" },
        { deutsch: "ihr", vong: "seit" },
        { deutsch: "sie", vong: "sims" },
        { deutsch: "ik", vong: "ick" },
        { deutsch: "ff", vong: "ph" },
        { deutsch: "kom", vong: "kum" },
        { deutsch: "ver", vong: "fer" },
        { deutsch: "ten", vong: "tem" },
        { deutsch: "keit", vong: "keitigen" },
        { deutsch: "tum", vong: "tumm" },
        { deutsch: "flie", vong: "fly" },
        { deutsch: "tion", vong: "zon" },
        { deutsch: "heb", vong: "herb" },
        { deutsch: "ht", vong: "hd" },
        { deutsch: "!", vong: " lol!" },
        { deutsch: "haft", vong: "hanft" },
        { deutsch: "nehm", vong: "nemm" },
        { deutsch: "äu", vong: "oi" },
        { deutsch: "art", vong: "ard" },
        { deutsch: "ter", vong: "tehr" },
        { deutsch: "fällt", vong: "feld" },
        { deutsch: "ei", vong: "ai" },
        { deutsch: "den", vong: "dem" },
        { deutsch: "ig", vong: "ick" },
        { deutsch: "br", vong: "pr" },
        { deutsch: "halb", vong: "semi" },
        { deutsch: "funktioniert", vong: "worked" },
        { deutsch: "leben", vong: "life" },
        { deutsch: "ende", vong: "drop" },
        { deutsch: "teilen", vong: "teilem" },
        { deutsch: "gefällt", vong: "gefellt" },
        { deutsch: "sekunde", vong: "sekumde" },
        { deutsch: "minuten", vong: "minurtem" },
        { deutsch: "rabatt", vong: "rabatz" },
        { deutsch: "echt", vong: "real" },
        { deutsch: "schwer", vong: "real" },
        { deutsch: "zon", vong: "zorn" },
        { deutsch: "display", vong: "dissplay" },
        { deutsch: "gehe", vong: "walk" },
        { deutsch: "gingen", vong: "walkten" },
        { deutsch: "ging", vong: "walkte" },
        { deutsch: "nutzen", vong: "nützen" },
        { deutsch: "nutzen", vong: "nützen" },
        { deutsch: "nächst", vong: "näschd" },
        { deutsch: "lecker", vong: "legger" },
        { deutsch: "gerichte", vong: "geriechte" },
        { deutsch: "folge", vong: "stalke" },
        { deutsch: "twittere", vong: "babbele" },
        { deutsch: "nachricht", vong: "naschrichten" },
        { deutsch: "schlecht", vong: "bad" },
        { deutsch: "hübsch", vong: "nice" },
        { deutsch: "toll", vong: "nice" },
        { deutsch: "perfekt", vong: "nice" }
    ],
    start: function () {
        try {
            // finde 1 inhalt wo nicht vong ist
            for (var matchIndex = 0; matchIndex < VONG.matchList.length; matchIndex++) {
                var elements = document.querySelectorAll(VONG.matchList[matchIndex] + ':not(.' + VONG.className + '):not(#ChatTabsPagelet)')
                // konvertiere einige elemente in besseres deutsch
                for (var elementIndex = 0; elementIndex < elements.length && elementIndex < 3; elementIndex++) {
                    VONG.konversator(elements[elementIndex])
                }
            }
        } catch (e) {
            console.log(e.message)
        }

        // round round baby round round
        setTimeout(VONG.start, VONG.timer)
    },
    konversator: function (element) {
        try {
            if (element) {
                // never touch me again scripty!
                element.classList.add(VONG.className);
                // ganze list vong wichtigkeit hoch
                for (var x = 0; x < VONG.VONGliste.length; x++) {
                    // skywalker ist ein hansel. treewalker ist fly!
                    var walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
                    // danger of endlosschleife im haar
                    while (item = walk.nextNode()) {
                        if (item.nodeName == 'PRE' || item.nodeName == 'TEXTAREA') {
                            // break dance point!
                            // do a flip!
                            break;
                        }
                        if (item.nodeName == '#text') {
                            // text node change me please
                            item.nodeValue = item.nodeValue.split(VONG.firstUpper(VONG.VONGliste[x].deutsch)).join(VONG.firstUpper(VONG.VONGliste[x].vong));
                            item.nodeValue = item.nodeValue.split(' ' + VONG.VONGliste[x].deutsch).join(' ' + VONG.VONGliste[x].vong);
                        }
                    }
                }
            }
        } catch (e) {
            console.log(e.message);
        }
    },
    firstUpper: function (inputString) {
        var outputString = inputString.substring(0, 1).toUpperCase() + inputString.substring(1, inputString.length);
        return outputString;
    }
}
VONG.start()
