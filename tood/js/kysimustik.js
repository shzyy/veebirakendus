
// 1. Checkbox
function keelevalik() {
    let vastus1 = document.getElementById("vastus1");
    let javascript = document.getElementById("javascript");
    let python = document.getElementById("python");
    let java = document.getElementById("java");
    let csharp = document.getElementById("csharp");
    let php = document.getElementById("php");
    let html = document.getElementById("html");

    let valik = "";

    if (javascript.checked) {
        valik += "JavaScript ";
    }
    if (python.checked) {
        valik += "Python ";
    }
    if (java.checked) {
        valik += "Java ";
    }
    if (csharp.checked) {
        valik += "C# ";
    }
    if (php.checked) {
        valik += "PHP ";
    }
    if (html.checked) {
        valik += "HTML ";
    }

    if (valik == "") {
        vastus1.innerHTML = "";
    } else {
        vastus1.innerHTML = "Sinu valitud programmeerimiskeeled: " + valik;
    }

    return valik;
}


// 2. Textarea
function arvamuseVastus() {
    let vastus2 = document.getElementById("vastus2");
    let arvamus = document.getElementById("arvamus").value;

    if (arvamus == "") {
        vastus2.textContent = "";
    } else {
        vastus2.textContent = "Sinu arvamus: " + arvamus;
    }

    return arvamus;
}


// 3. Number
function tundideVastus() {
    let vastus3 = document.getElementById("vastus3");
    let tunnid = document.getElementById("tunnid").value;

    if (tunnid == "") {
        vastus3.innerHTML = "";
    } else {
        vastus3.innerHTML = "Tegeled programmeerimisega " +
            tunnid + " tundi nädalas.";
    }

    return tunnid;
}


// 4. Radio
function meeldibVastus() {
    let vastus4 = document.getElementById("vastus4");
    let jah = document.getElementById("jah");
    let ei = document.getElementById("ei");
    let vastamata = document.getElementById("vastamata");
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
    } else if (vastamata.checked) {
        valik = "vastamata.";
        pilt.hidden = true;
    } else {
        pilt.hidden = true;
    }

    vastus4.innerHTML = valik;

    return valik;
}


// 5. Text
function tooriistadeVastus() {
    let vastus5 = document.getElementById("vastus5");
    let tooriistad = document.getElementById("tooriistad").value;

    if (tooriistad == "") {
        vastus5.textContent = "";
    } else {
        vastus5.textContent = "Sinu nimetatud tööriistad: " + tooriistad;
    }

    return tooriistad;
}


// 6. Select
function keeleValik() {
    let vastus6 = document.getElementById("vastus6");
    let keel = document.getElementById("keel").value;

    if (keel == "") {
        vastus6.innerHTML = "";
    } else {
        vastus6.innerHTML = "Sinu valik: " + keel;
    }

    return keel;
}


// Kõik vastused
function saada() {
    let kokkuvote = document.getElementById("kokkuvote");

    let keeled = keelevalik();
    let arvamus = arvamuseVastus();
    let tunnid = tundideVastus();
    let meeldib = meeldibVastus();
    let tooriistad = tooriistadeVastus();
    let keel = keeleValik();

    kokkuvote.textContent =
        "Sinu valitud programmeerimiskeeled: " + keeled + "\n" +
        "Sinu arvamus: " + arvamus + "\n" +
        "Tegeled programmeerimisega " + tunnid + " tundi nädalas.\n" +
        meeldib + "\n" +
        "Sinu nimetatud tööriistad: " + tooriistad + "\n" +
        "Sinu valik: " + keel;
}


// Puhastamine
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
