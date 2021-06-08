const randomNumber=Math.floor(Math.random()*9+1);
const userGuess=document.querySelector("#input");
const resultDiv=document.querySelector(".result");
const historyDiv=document.querySelector(".history");


historyDiv.innerHTML="";

let chances=5;
let iswin=false;

function game()
{
    let result;
    let guess=userGuess.value;

    if(guess>10|| guess<1)
    {
        result="Enter a number between 1 and 10";
        resultDiv.innerHTML=`<h4>${result}</h4>`;
    }
    else if(chances && !iswin){
        let guess=userGuess.value;
        if(randomNumber==guess)
        {
            result="you won!";
            iswin=true;
        }
        else if(randomNumber<guess)
        {
            if(chances==1){
                result=`Game Over! <br> The Number is ${randomNumber}`;
            }
            else{
                result="Your guess is HIGH!";
            }
        }
        else{
            if(chances==1){
                result=`Game Over! <br> The Number is${randomNumber}`;
            }else{
                result="your guess is LOW!";
            }
        }
        chances--;
        historyDiv.innerHTML+=`<h4>You guessed${guess}</h4>`;
        return resultDiv.innerHTML=`<h4>${result}</h4>`;
    }
}


function reload()
{
    if(!chances||iswin){
        location.reload();
    }
}
