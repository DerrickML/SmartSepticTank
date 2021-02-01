jQuery().ready(function() {
    setInterval("getResult()", 500); //set theinterval for the update
});

function getResult() {

    //GREETINGS MESSAGE
    {
        var today = new Date();
        var time = today.toLocaleTimeString();
        var hr = today.getHours();

        document.getElementById("time").innerHTML = time;

        if(hr < 4){
            document.getElementById("time").style.color = "lightblue";
            document.getElementById("greeting").innerHTML = "It's a new day ";
        }
        else if(hr >= 4 && hr <= 11){
            document.getElementById("greeting").innerHTML ="Good-morning ";
        }
        else if(hr >= 12 && hr <= 16){
            document.getElementById("greeting").innerHTML ="Good-afternoon ";
        }
        else if(hr >= 17 && hr <= 23){
            document.getElementById("time").style.color = "lightblue";
            document.getElementById("greeting").innerHTML ="Good-evening ";
            
        }
        else{
            document.getElementById("greeting").innerHTML ="Hello ";
        }
    }

}