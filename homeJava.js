window.onload = function(){

    //Declaring the basic variables that allow me to control the canvas:
    var canvas = document.getElementById("homeCanvas");
    var context = canvas.getContext("2d");


    //This little function I figured out myself. It draws a line from the top left corner
    //to wherever the user clicks. Because people like clicking stuff.
    document.getElementById("homeCanvas").addEventListener("click", drawLine, false);     
        
    
    function drawLine(event){
        console.log(event);
        var x = event.pageX - canvas.offsetLeft;
        var y = event.pageY - canvas.offsetTop;
        var a = x - x;
        var b = y - y;
        
        context.beginPath();
        context.moveTo(a, b);
        context.lineTo(x, y);
     
        context.lineWidth = 1;
        context.strokeStyle = "black";
        context.stroke();
       
    }

    //this function, however, was in the Code+ lectures. It will show the X and Y
    //values of where the user clicks:

    document.getElementById("homeCanvas").addEventListener("click", time1, false);
    function time1(ev){
        console.log(ev);
        var time = "";

        time += " X: "
        time += ev.pageX;
        time += " Y: ";
        time += ev.pageY;

        document.getElementById("userTime").innerHTML = time;
    }
    
}