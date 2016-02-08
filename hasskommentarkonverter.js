var badlist = [
    {bad: "Ausländer", better: ["Sonnenblumen", "Gummistiefel", "Freunde", "Kumpel"]},
    {bad: "Adolf", better: ["Kevin"]},
    {bad: "Hitler", better: ["Kim Jong Un", "Britney Spears", "Rihanna"]},
    {bad: "Asylbewerber", better: ["Zeugen Jehovas", "Justin Bieber Fans", "Miley Cyrus Fans"]},
    {bad: "Flüchtlinge", better: ["Hilfsbedürftige", "Schutzsuchende", "Kriegsopfer"]},
    {bad: "Flüchtling", better: ["Groupie", "Schachspieler", "Künstler", "Fan", "Rapper", "Eisverkäufer"]},
    {bad: "vergasen",  better: ["zum Kuchen einladen", "unterstützen", "helfen"]},
    {bad: "Merkel", better: ["Schweiger", "Böhmermann", "Schulz", "Werner"]},
    {bad: "Sozialamt", better: ["IKEA", "MC Donalds", "Country Club"]},
    {bad: "Abschaum", better: ["Karnevalsverein", "Bücherkreis", "Golf-Club"]},
    {bad: "abgeschoben", better: ["belohnt", "befördert", "liebkost"]},
    {bad: "Nordafrika", better: ["Takka-Tukka-Land", "Regenbogenland"]},
    {bad: "kriminell", better: ["freundlich", "zuvorkommend"]},
    {bad: "niederbrennen", better: ["verehren", "huldigen", "lieb drücken"]},
    {bad: "Schlepper", better: ["Rosenverkäufer", "Blumenkinder", "Einhörner"]},
    {bad: "deutschen", better: ["grünen", "gelben", "mit roten Punkten"]},
    {bad: "deutsch", better: ["grün", "gelb"]},
    {bad: "abgeschafft", better: ["eingerahmt", "vergoldet"]},
    {bad: "ruinieren", better: ["optimieren"]},
    {bad: "stehlen", better: ["ausleihen", "borgen"]},
    {bad: "Eroberungsfeldzuges", better: ["Kaffeekränzchen", "Hobby-Treffen"]},
    {bad: "NPD", better: ["Nazi"]},
    {bad: "Schmarotzer", better: ["Muttersöhnchen", "Nervensägen"]},
    {bad: "Asylanten", better: ["Opfer", "Gäste"]},
    {bad: "Asylkrise", better: ["neuer Mimimi-Grund", "Hobby-Politiker-Drama"]},
    {bad: "Untergang", better: ["übertriebene Scheiß", "unnötige Angsthase", "Panikmacher"]},
    {bad: "Gutmenschen", better: ["hilfsbereite Menschen", "Nicht-Arschlöcher"]},
    {bad: "Verbrecherregierung", better: ["Regierung", "anderen Menschen", "Anderen"]},
    {bad: "verteidigen", better: ["beschwatzen", "lobhudeln", "wichtig machen"]},
    {bad: "Depp", better: ["Süßer", "Eismann", "Videothek-Mitarbeiter", "Gentlemen"]},
    {bad: "Idioten", better: ["Freunde", "Verwandte"]},
    {bad: "Idiot", better: ["Bestseller-Autor", "Porsche-Fahrer", "Bank-Vorstand"]},
    {bad: "illegal", better: ["anziehend", "athletisch", "beeindruckend"]},
    {bad: "Sklaven", better: ["Angestellte", "Mitarbeiter", "Buddys", "Kumpel"]},
    {bad: "unkultiviert", better: ["freundlich", "nett"]},
    {bad: "verbrennen", better: ["lieb knuddeln", "drücken", "heiraten", "einladen", "helfen"]},
    {bad: "schäbig", better: ["süß", "geistreich", "sexy"]},
    {bad: "Genossen", better: ["Sturmtruppler", "Gangster", "Badehosenträger"]},
    {bad: "Hetzerei", better: ["freundliches Gespräch", "Regenbögen", "Liebesnest"]},
    {bad: "anzünden", better: ["neu streichen", "besser einrichten", "einweihen", "segnen", "fördern"]}
]
// get all comments -> .UFICommentBody
// get all posts -> .userContent

function FUNGENERATOR(elements) {
  // match all comments
  // for (var i = 0; i < elements.length; i++) {
  // match first comment/post
    //console.log(elements[i].innerText)
    // search for blackword
    for (var x = 0; x < badlist.length; x++) {
      // change the badword to something FUN FUN FUN!
      //var thebadword = badlist[x].bad
      //var thebetterword = badlist[x].better[Math.floor(Math.random() * (badlist[x].better.length))]
      elements[0].innerHTML = elements[0].innerHTML.split(badlist[x].bad).join("<strike>" + badlist[x].bad.substring(0, badlist[x].bad.length - 3) + "...</strike> " + badlist[x].better[Math.floor(Math.random() * (badlist[x].better.length))])
      elements[0].classList.add('FBHKC')
    }
  //}
}

function start() {
    comments = document.querySelectorAll(".UFICommentBody span:not(.FBHKC)")
    posts = document.querySelectorAll(".userContent p:not(.FBHKC)")
    //linktext = document.querySelectorAll(".text_exposed_root p:not(.FBHKC)")
    FUNGENERATOR(comments)
    FUNGENERATOR(posts)
    //FUNGENERATOR(linktext)
}

window.setInterval(start, 100);
