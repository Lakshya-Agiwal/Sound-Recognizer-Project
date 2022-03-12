// https://teachablemachine.withgoogle.com/models/UibiIiHJJ/
var dog=0;
var lion=2;
var cat=0;

function start()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier( "https://teachablemachine.withgoogle.com/models/UibiIiHJJ/model.json",modelReady)
}
function modelReady()
{
  console.log("A");
  classifier.classify(gotResult);
}
function gotResult(error,result)
{
    if (error)
    {
        console.log(error);
    }
    else
    {
     console.log(result);
     random_number_r = Math.floor(Math.random()*255)+1;
     random_number_g = Math.floor(Math.random()*255)+1;
     random_number_b = Math.floor(Math.random()*255)+1;
    document.getElementById("detected").innerHTML = "Detected dog - " + dog + "Detected cat - " + cat + "Detected Lion - " + lion;
    document.getElementById("detected").style.color = "rgb("+random_number_r + "," + random_number_g + "," + random_number_b+")";

    document.getElementById("Hear").innerHTML = "Detected Voice Is Of : " + result[0].label;
    document.getElementById("Hear").style.color = "rgb("+random_number_r + "," + random_number_g + "," + random_number_b+")";

    img=document.getElementById("i1");
    if (result[0].label == "barking")
    {
        img.src = "https://media0.giphy.com/media/ipYxohtCI8h6Os5ffs/giphy.gif";
        dog = dog+1;
    }
    else if (result[0].label == "meowing")
    {
        img.src = "https://i.gifer.com/origin/56/56f000765b31ad8220bc5f14106c7b13.gif";
        cat = cat+1;
    }
    else if (result[0].label == "Roaring")
    {
        img.src = "https://acegif.com/wp-content/uploads/2020/07/lion-roar.gif";
        lion = lion+1;
    }
    else 
    {
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhG4rRW3SqRWPEoWw8B9tklPDH4DKdkv97tLCx4hPmV2p7qgTUcP8USDCO8emalkwm_qM&usqp=CAU";
    }
    }
}


