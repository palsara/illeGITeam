function Picker() {
    var ishungarian = document.querySelector("#magyar");
    var magyar = ishungarian.checked;
    var isscary = document.querySelector("#scary");
    var scary = isscary.checked;
    var isfunny = document.querySelector("#funny");
    var funny = isfunny.checked;

    if (magyar == 1) {
        var btn = document.createElement('a');
        btn.href = "https://www.google.com/"
        btn.innerHTML = "Magyar";
        document.body.appendChild(btn);
    } else {
        if (scary == 1) {
            var btn = document.createElement('a');
            btn.href = "https://www.google.com/"
            btn.innerHTML = "Horror";
            document.body.appendChild(btn);

        } else {
            if (funny == 1) {
                var btn = document.createElement('a');
                btn.href = "https://www.google.com/"
                btn.innerHTML = "Zs";
                document.body.appendChild(btn);
            } else {
                var btn = document.createElement('a');
                btn.href = "https://www.google.com/"
                btn.innerHTML = "SciFi";
                document.body.appendChild(btn);
            }
        }
    }
}