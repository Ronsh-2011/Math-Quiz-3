player1n = localStorage.getItem("Player 1 Name is");
player2n = localStorage.getItem("Player 2 Name is");

p1s = 0;
p2s = 0;

document.getElementById("Player 1").innerHTML = player1n +"-";
document.getElementById("Player 2").innerHTML = player2n +"-";

document.getElementById("p1s").innerHTML = p1s;
document.getElementById("p2s").innerHTML = p2s;

document.getElementById("question").innerHTML = "question turn - "+player1n;
document.getElementById("answer").innerHTML = "answer turn - "+player2n;