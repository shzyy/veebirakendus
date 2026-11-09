function joon() {
    //joon - линия
    const canvas = document.getElementById("canvas"); //määrame canvas element
    const tx = canvas.getContext("2d");
    if(canvas.getContext) {
        let tx = canvas.getContext("2d"); //2d tasand
        tx.beginPath();
        tx.strokeStyle="blue";
        tx.lineWidth = 2;
        tx.moveTo(50, 50); //alguspunkt
        tx.lineTo(200, 280); //lõpppunkt
        tx.stroke();
    }
}
function puhasta(){
    const canvas = document.getElementById("canvas"); //määrame canvas element
    const tx = canvas.getContext("2d");
    if(canvas.getContext) {
    let tx = canvas.getContext("2d");} //2d tasand
    tx.clearRect(0, 0, 400,400);
}
function kolmnurk(){
    const canvas = document.getElementById("canvas"); //määrame canvas element
    const tx = canvas.getContext("2d");
    if(canvas.getContext) {
        let tx = canvas.getContext("2d"); //2d tasand
        tx.beginPath();
        tx.fillStyle = "red";
        tx.strokeStyle="blue";
        tx.lineWidth = 2;
        tx.moveTo(50, 50); //alguspunkt
        tx.lineTo(200, 280); //lõpppunkt
        tx.lineTo(30, 250);
        tx.lineTo(50, 50);
        tx.fill(); //taust
    }
}
function ristkylik(){
    const canvas = document.getElementById("canvas");
    const l=document.getElementById('laius')
    const k=document.getElementById('kyrgus');
    if(canvas.getContext) {
        let tx = canvas.getContext("2d");
        tx.fillStyle = "blue";
        tx.fillRect(100, 150, l.value, k.value);
    }
}
//ümberjoon - окружность
//ring - круг
function ring(){
    const canvas = document.getElementById("canvas");
    const r=document.getElementById("raadius");
    if(canvas.getContext) {
        let tx = canvas.getContext("2d");
        //tx.beginPath();
        tx.strokeStyle="black";
        tx.fillStyle = "yellow";
        tx.arc(100, 100, r.value, 0, 2*Math.PI, true);//x,y -keskpunkt, R-raadius
        tx.fill();
        //tx.stroke;
    }
}

function pilt(){
    const canvas = document.getElementById("canvas");
    if(canvas.getContext) {
        let tx = canvas.getContext("2d");
        const fail=new Image();
        fail.src="https://picsum.photos/200/300?random=1";
        fail.onload=()=>{
            tx.drawImage(fail, 50,50, 100, 100);
        }
    }
}

function ratas(){
    const canvas = document.getElementById("canvas");
    const r=document.getElementById("raadius");
    if(canvas.getContext) {
        let tx = canvas.getContext("2d");
        tx.beginPath();
        tx.strokeStyle="black";
        tx.fillStyle = "black";
        tx.arc(50, 200, 20, 0, 2*Math.PI, true);//x,y -keskpunkt, R-raadius
        tx.fill();
        tx.arc(200, 200, 20, 0, 2*Math.PI, true);//x,y -keskpunkt, R-raadius
        tx.fill();
        //tx.stroke;
    }
}
function kere(){
    const canvas = document.getElementById("canvas");
    if(canvas.getContext) {
        let tx = canvas.getContext("2d");
        tx.fillStyle = "blue";
        tx.fillRect(25, 130, 200, 50);
        tx.fillStyle = "blue";
        tx.fillRect(100, 90, 100, 50);
    }
}
function tuled(){
    const canvas = document.getElementById("canvas"); //määrame canvas element
    const tx = canvas.getContext("2d");
    if(canvas.getContext) {
        let tx = canvas.getContext("2d"); //2d tasand
        tx.beginPath();
        tx.strokeStyle="yellow";
        tx.lineWidth = 2;
        tx.moveTo(500, 10);
        tx.lineTo(225, 160);
        tx.moveTo(2700, 100);
        tx.lineTo(225, 160);
        tx.moveTo(1400, 1000);
        tx.lineTo(225, 160);
        tx.stroke();
    }
}
function Tee(){
    const canvas = document.getElementById("canvas");
    if(canvas.getContext) {
        let tx = canvas.getContext("2d");
        tx.fillStyle = "grey";
        tx.fillRect(1, 220, 500, 150);
    }
    if(canvas.getContext) {
        let tx = canvas.getContext("2d");
        tx.fillStyle = "white";
        tx.fillRect(1, 255, 860, 5);

    }
}
