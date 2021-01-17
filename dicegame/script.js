 // Function to roll the dice
 function playGame()
    {  
         var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
         var randomImageOnePath=  ".png" + randomNumber1 + ".png";

         var randomNumber2 = Math.floor(Math.random() * 6) + 1;
         var randomImageTwoPath= ".png" + randomNumber2 + ".png";

        var image1 =document.querySelectorAll("img")[0];
        image1.setAttribute("scr", randomImageOnePath);

        var image2 =document.querySelectorAll("img")[1];
        image2.setAttribute("scr", randomImageTwoPath);

    if (randomNumber1 > randomNumber2) { 
             document.querySelector("h1").innerHTML = "Player 1 Wins";
    } 

    else if (randomNumber1 < randomNumber2) { 
             document.querySelector("h1").innerHTML = " Player 2 WINS";
    } 
    else { 
             document.querySelector("h1").innerHTML =" It's a Draw";
         } 
    }
document.querySelector("button").addEventListener('click', playGame);