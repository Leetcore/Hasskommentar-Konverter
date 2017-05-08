var badlist = [
    {bad: "Adolf", better: ["Kevin"]},
    {bad: "Wacht endlich auf", better: ["Ich mag Verschwörungstheorien", "Ich brauche meinen Aluhut"]},
    {bad: "Asylbetrüger", better: ["Betrüger", "fremde Betrüger", "Sozialstaat-Betrüger"]},
    {bad: "Ausländer", better: ["andere Menschen", "Menschen, die wo anders wohnen"]},
    {bad: "Hitler", better: ["Kim Jong Un", "Britney Spears", "Rihanna"]},
    {bad: "Asylbewerber", better: ["Justin Bieber Fans", "Miley Cyrus Fans", "DJ Bobo Fans"]},
    {bad: "Flüchtlinge", better: ["Hilfsbedürftige", "Schutzsuchende", "Kriegsopfer"]},
    {bad: "Flüchtling", better: ["Hilfesuchender", "Schutzsuchender", "Opfer"]},
    {bad: "vergasen",  better: ["zum Kuchen einladen", "unterstützen", "helfen"]},
    {bad: "Merkel", better: ["Dr. Evil", "Endboss"]},
    {bad: "Sozialamt", better: ["IKEA", "MC Donalds", "Country Club"]},
    {bad: "abgeschoben", better: ["belohnt", "befördert", "liebkost"]},
    {bad: "Nordafrika", better: ["Takka-Tukka-Land", "Gummibärenbande"]},
    {bad: "niederbrennen", better: ["verehren", "huldigen", "lieb drücken"]},
    {bad: "Schlepper", better: ["Rosenverkäufer", "Blumenkinder", "Einhörner"]},
    {bad: "Deutschland", better: ["SCHLAAAAND!!!", "Schland", "SCHALALALALAND!"]},
    {bad: "abgeschafft", better: ["eingerahmt", "vergoldet"]},
    {bad: "Eroberungsfeldzuges", better: ["Kaffeekränzchen", "Urlauber", "Kaffeefahrt"]},
    {bad: "NPD", better: ["Nazi"]},
    {bad: "AfD", better: ["Hobby-Nazi"]},
    {bad: "Schmarotzer", better: ["sozial Schwache", "Perspektivlose"]},
    {bad: "Asylanten", better: ["Opfer", "Gäste"]},
    {bad: "Asylkrise", better: ["neuer Mimimi-Grund", "Hobby-Politiker-Drama"]},
    {bad: "Untergang", better: ["übertriebene Scheiß", "unnötige Angsthase", "Panikmacher"]},
    {bad: "Gutmenschen", better: ["hilfsbereite Menschen", "Nicht-Arschlöcher"]},
    {bad: "Verbrecherregierung", better: ["Regierung", "Anderen"]},
    {bad: "verteidigen", better: ["beschwatzen", "lobhudeln", "wichtig machen"]},
    {bad: "Depp", better: ["Typ wie ich"]},
    {bad: "Idioten", better: ["Freunde", "Verwandte"]},
    {bad: "Idiot", better: ["Mensch"]},
    {bad: "illegal", better: ["anziehend", "athletisch", "beeindruckend"]},
    {bad: "Sklaven", better: ["Angestellte", "Mitarbeiter", "Buddys", "Kumpel"]},
    {bad: "unkultiviert", better: ["freundlich", "nett"]},
    {bad: "verbrennen", better: ["lieb knuddeln", "drücken", "heiraten", "einladen", "helfen"]},
    {bad: "schäbig", better: ["arm"]},
    {bad: "Genossen", better: ["Sturmtruppler", "Gangster"]},
    {bad: "Hetzerei", better: ["unfreundliche Äußerungen", "Hobby-Haterei"]},
    {bad: "anzünden", better: ["neu streichen", "besser einrichten", "einweihen", "segnen", "fördern"]},
    {bad: "FPÖ", better: ["Deppen vom Dienst", "Herrjö"]},
    {bad: "Strache", better: ["Bumsti", "Zahntechniker", "Häuptling Weisszahn"]},
    {bad: "HC", better:["Hildegard-Christine", "Han Colon", "Auweh"]}
    {bad: "Lügenpresse", better: ["Comic", "Augenarzttest", "Lügenpresse (hm... dabei kann ich dieses lesen doch gar nich!!!!)"]},
    {bad: "Lucke", better:["Hoden", "Spucke"]},
    {bad: "!!!", better: ["(mami ich schreie im internetz)"]}
]
// get all comments -> .UFICommentBody
// get all posts -> .userContent

function FUNGENERATOR(element) {
    for (var x = 0; x < badlist.length; x++) {
      if (typeof(element) != "undefined") {
          elements.innerHTML = elements[0].innerHTML.split(badlist[x].bad).join("<strike>" + badlist[x].bad.substring(0, badlist[x].bad.length - 3) + "...</strike> " + badlist[x].better[Math.floor(Math.random() * (badlist[x].better.length))])
          elements.classList.add('FBHKC')
      }
    }
}

function start() {
    comment = document.querySelector(".UFICommentBody span:not(.FBHKC)")
    post = document.querySelector(".userContent p:not(.FBHKC)")
    
    // change one post -> performance
    FUNGENERATOR(comment)
    FUNGENERATOR(post)
}

window.setInterval(start, 100);
