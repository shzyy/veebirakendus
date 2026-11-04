function keelevalik() {
    let vastus1 = document.getElementById("vastus1");
    let javascript = document.getElementById("javascript");
    let python = document.getElementById("python");
    let java = document.getElementById("java");
    let csharp = document.getElementById("csharp");
    let php = document.getElementById("php");

    let valik = "";

    if (javascript.checked) {
        valik += javascript.value + " ";
    }
    if (python.checked) {
        valik += python.value + " ";
    }
    if (java.checked) {
        valik += java.value + " ";
    }
    if (csharp.checked) {
        valik += csharp.value + " ";
    }
    if (php.checked) {
        valik += php.value + " ";
    }

    if (valik === "") {
        vastus1.innerHTML = "";
    } else {
        vastus1.innerHTML = "Sinu valitud programmeerimiskeeled: " + valik;
    }

    return valik;
}


function arvamuseVastus() {
    let vastus2 = document.getElementById("vastus2");
    let arvamus = document.getElementById("arvamus");

    vastus2.innerHTML = "Sinu arvamus: " + arvamus.value;

    return arvamus.value;
}

function tundideVastus() {
    let vastus3 = document.getElementById("vastus3");
    let tunnid = document.getElementById("tunnid");

    vastus3.innerHTML = "Tegeled programmeerimisega " +
        tunnid.value + " tundi nädalas.";

    return tunnid.value;
}

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
    }

    vastus4.innerHTML = valik;

    return valik;
}

function tooriistadeVastus() {
    let vastus5 = document.getElementById("vastus5");
    let tooriistad = document.getElementById("tooriistad");

    vastus5.innerHTML = "Sinu nimetatud tööriistad: " + tooriistad.value;

    return tooriistad.value;
}

function keeleValik() {
    let vastus6 = document.getElementById("vastus6");
    let keel = document.getElementById("keel");

    vastus6.innerHTML = "Sinu valik: " + keel.value;

    return keel.value;
}

function saada() {
    let kokkuvote = document.getElementById("kokkuvote");

    let valik = keeled();
    let arvamus = arvamuseVastus();
    let tunnid = tundideVastus();
    let meeldib = meeldibVastus();
    let tooriistad = tooriistadeVastus();
    let keel = keeleValik();

    kokkuvote.innerHTML =
        "Sinu valitud programmeerimiskeeled: " + valik + "<br>" +
        "Sinu arvamus: " + arvamus + "<br>" +
        "Tegeled programmeerimisega " + tunnid + " tundi nädalas.<br>" +
        meeldib + "<br>" +
        "Sinu nimetatud tööriistad: " + tooriistad + "<br>" +
        "Sinu valik: " + keel;
}

function puhasta() {
    document.getElementById("kysimustikForm").reset();

    document.getElementById("vastus1").innerHTML = "";
    document.getElementById("vastus2").innerHTML = "";
    document.getElementById("vastus3").innerHTML = "";
    document.getElementById("vastus4").innerHTML = "";
    document.getElementById("vastus5").innerHTML = "";
    document.getElementById("vastus6").innerHTML = "";
    document.getElementById("kokkuvote").innerHTML = "";

    document.getElementById("smile").hidden = true;
}
