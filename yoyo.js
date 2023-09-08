var randomnum1 = Math.floor(Math.random() * 6) + 1;
var randomnum2 = Math.floor(Math.random() * 6) + 1;

var randomdice1 = "dice"+ randomnum1 + ".png";
var randomdice2 = "dice"+ randomnum2 + ".png";

var randomimage1 = "images/" + randomdice1;
var randomimage2 = "images/" + randomdice2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src" , randomimage1);
image2.setAttribute("src" , randomimage2);

if(randomnum1 > randomnum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomnum2 > randomnum1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "It's a tie !";
}