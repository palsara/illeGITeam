function generator() {
    var monsterNames = ["Múmia", "Kísértet", "Csontváz", "Zombi", "Démon"]
    var adjectives = [", a gonosz", ", a kísértő", ", a félelmetes", ", a sötét varázsigék tudója", ", a szexi"]

    var randomNumber1 = parseInt(Math.random() * monsterNames.length);
    var randomNumber2 = parseInt(Math.random() * adjectives.length);
    var fullName = monsterNames[randomNumber1] + adjectives[randomNumber2];

    alert(fullName);

    //ha már kidobott egy nevet, azt kitörli
    if (document.getElementById("result")) {
        document.getElementById("placeholder").removeChild(document.getElementById("result"));
    }

    var element = document.createElement("div");
    element.setAttribute("id", "result");
    element.appendChild(document.createTextNode(fullName));
    document.getElementById("placeholder").appendChild(element);
}