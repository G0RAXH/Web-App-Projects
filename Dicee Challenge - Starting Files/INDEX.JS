// ----------------------for_Player_1------------------------------//

var n= Math.random();//genrating Random Number-player1
n= Math.floor((n*6)+1); //to get number from 1-6
//console.log(n);//
var RanImg = "/images/dice" + n  + ".png"; //Selecting the Dice Images by a variable

var player1 = document.querySelectorAll("img")[0]; //selecting the attribute in DOM

player1.setAttribute("src", RanImg) ; //changing the SRC attribute to randomized image 

// ----------------------for_Player_2------------------------------//

var p= Math.random();//genrating Random Number-player1
p= Math.floor((p*6)+1); //to get number from 1-6
//console.log(n);//
var RanImg2 = "/images/dice" + p  + ".png"; //Selecting the Dice Images by a variable

var player2 = document.querySelectorAll("img")[1]; //selecting the attribute in DOM

player2.setAttribute("src", RanImg2) ; //changing the SRC attribute to randomized image 

// ----------------------Winner------------------------------//
// var winner = document.getElementsByTagName("h1");

if (n>p) //if Player-1 Wins
{
    document.querySelector("h1").innerHTML= "<h1>🎉🎊 Player-1 🎉🎊</h1>";
}
else if (p>n) //if player-2 Wins
{
    document.querySelector("h1").innerHTML= "<h1>🎉🎊 Player-2 🎉🎊</h1>";
}

else //if there is a Draw.
{
    document.querySelector("h1").innerHTML="<h1>😕Aww..It's a Draw</h1>"
}