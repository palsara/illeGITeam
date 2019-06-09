function Picker() {
    var ishungarian = document.querySelector("#magyar");
    var magyar = ishungarian.checked;
    var isscary = document.querySelector("#scary");
    var scary = isscary.checked;
    var isfunny = document.querySelector("#funny");
    var funny = isfunny.checked;

    if (magyar == 1) {
        var btn = document.createElement('p');
        btn.innerHTML = "Magyar";
        document.getElementById("picker").appendChild(btn);

    } else {
        if (scary == 1) {
            var btn = document.createElement('p');
            btn.innerHTML = "Horror";
            document.getElementById("picker").appendChild(btn);

        } else {
            if (funny == 1) {
                var btn = document.createElement('p');
                btn.innerHTML = "Zs kategóriás film";
                document.getElementById("picker").appendChild(btn);
            } else {
                var btn = document.createElement('p');
                btn.innerHTML = "Sci-fi";
                document.getElementById("picker").appendChild(btn);
            }
        }
    }
}