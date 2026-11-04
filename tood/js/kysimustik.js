
function keeled() {
    let vastus1 = document.getElementById("vastus1");
    let javascript = document.getElementById("javascript");
    let python = document.getElementById("python");
    let java = document.getElementById("java");
    let csharp = document.getElementById("csharp");
    let php = document.getElementById("php");

    let valik = "";

    if (javascript.checked) {
        valik += javascript.value + ", ";
    }
    if (python.checked) {
        valik += python.value + ", ";
    }
    if (java.checked) {
        valik += java.value + ", ";
    }
    if (csharp.checked) {
        valik += csharp.value + ", ";
    }
    if (php.checked) {
        valik += php.value + ", ";
    }

    if (valik == "") {
        valik = "Tee oma valik!";
    }

    vastus1.innerHTML = "Sinu valitud programmeerimiskeeled: " + valik;
    vastus1.style.backgroundColor = "lightgreen";

    return valik;
}

// Tekstiala
function arvamuseVastus() {
    let vastus2 = document.getElementById("vastus2");
    let arvamus = document.getElementById("arvamus");

    vastus2.innerHTML = "Sinu arvamus: " + arvamus.value;
    vastus2.style.backgroundColor = "lightgreen";

    return arvamus.value;
}

// Tundide arv
function tundideVastus() {
    let vastus3 = document.getElementById("vastus3");
    let tunnid = document.getElementById("tunnid");

    vastus3.innerHTML = "Tegeled programmeerimisega " +
        tunnid.value + " tundi nädalas.";

    return tunnid.value;
}

// Raadio valik
function meeldibVastus() {
    let vastus4 = document.getElementById("vastus4");
    let jah = document.getElementById("jah");
    let ei = document.getElementById("ei");
    let pilt = document.getElementById("smile");

    let valik = "";

    if (jah.checked) {
        valik = "Programmeerimine meeldib!";
        pilt.src = "pildit/roomus.png";
        pilt.hidden = false;
    } else if (ei.checked) {
        valik = "Programmeerimine ei meeldi.";
        pilt.src = "pildit/kurb.png";
        pilt.hidden = false;
    } else {
        valik = "Palun tee oma valik!";
        pilt.hidden = true;
    }

    vastus4.innerHTML = valik;

    return valik;
}

// Tekstikast
function tooriistadeVastus() {
    let vastus5 = document.getElementById("vastus5");
    let tooriistad = document.getElementById("tooriistad");

    vastus5.innerHTML = "Sinu nimetatud tööriistad: " + tooriistad.value;
    vastus5.style.backgroundColor = "lightgreen";

    return tooriistad.value;
}

// Rippmenüü
function keeleValik() {
    let vastus6 = document.getElementById("vastus6");
    let keel = document.getElementById("keel");

    if (keel.selectedIndex !== 0) {
        vastus6.innerHTML = "Sinu valik: " + keel.value;
    } else {
        vastus6.innerHTML = "Palun tee oma valik!";
    }

    return keel.value;
}

// Näitab kõiki vastuseid
function saada() {
    let kokkuvote = document.getElementById("kokkuvote");

    let valik = keeled();
    let arvamus = arvamuseVastus();
    let tunnid = tundideVastus();
    let meeldib = meeldibVastus();
    let tooriistad = tooriistadeVastus();
    let keel = keeleValik();

    kokkuvote.innerHTML =
        "<h3>Sinu vastused:</h3>" +
        "Sinu valitud programmeerimiskeeled: " + valik + "<br>" +
        "Sinu arvamus: " + arvamus + "<br>" +
        "Tegeled programmeerimisega " + tunnid + " tundi nädalas.<br>" +
        meeldib + "<br>" +
        "Sinu nimetatud tööriistad: " + tooriistad + "<br>" +
        "Sinu valik: " + keel;
}

// Puhastab kõik vastused
function puhasta() {
    let vorm = document.getElementById("kysimustikForm");
    let pilt = document.getElementById("smile");

    vorm.reset();

    document.getElementById("vastus1").innerHTML = "";
    document.getElementById("vastus2").innerHTML = "";
    document.getElementById("vastus3").innerHTML = "";
    document.getElementById("vastus4").innerHTML = "";
    document.getElementById("vastus5").innerHTML = "";
    document.getElementById("vastus6").innerHTML = "";

    document.getElementById("kokkuvote").innerHTML = "";

    document.getElementById("vastus1").style.backgroundColor = "";
    document.getElementById("vastus2").style.backgroundColor = "";
    document.getElementById("vastus5").style.backgroundColor = "";

    pilt.hidden = true;
}
