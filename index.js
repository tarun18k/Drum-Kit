for (var i = 0; i < document.querySelectorAll('button').length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        var expression = this.innerHTML;
        switch (expression) {
            case "w":
                var audi = new Audio("tom-1.mp3");
                audi.play();
                animation(expression);
                break;
            case "a":
                var audi = new Audio("tom-2.mp3");
                audi.play();
                animation(expression);
                break;

            case "s":
                var audi = new Audio("tom-3.mp3");
                audi.play();
                animation(expression);
                break;

            case "d":
                var audi = new Audio("tom-4.mp3");
                audi.play();
                animation(expression);
                break;


            case "j":
                var audi = new Audio("crash.mp3");
                audi.play();
                animation(expression);
                break;

            case "k":
                var audi = new Audio("kick-bass.mp3");
                audi.play();
                animation(expression);
                break;
            case "l":
                var audi = new Audio("snare.mp3");
                audi.play();
                animation(expression);
                break;

        } });
}
document.addEventListener("keydown", function (e) {
        var expression = e.key;
        switch (expression) {
            case "w":
                var audi = new Audio("tom-1.mp3");
                audi.play();
                animation(expression);
                break;
            case "a":
                var audi = new Audio("tom-2.mp3");
                audi.play();
                animation(expression);
                break;

            case "s":
                var audi = new Audio("tom-3.mp3");
                audi.play();
                animation(expression);
                break;

            case "d":
                var audi = new Audio("tom-4.mp3");
                audi.play();
                animation(expression);
                break;


            case "j":
                var audi = new Audio("crash.mp3");
                audi.play();
                animation(expression);
                break;

            case "k":
                var audi = new Audio("kick-bass.mp3");
                audi.play();
                animation(expression);
                break;
            case "l":
                var audi = new Audio("snare.mp3");
                audi.play();
                animation(expression);
                break;

        }

    });
function animation(e)
{
    document.querySelector("."+e).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+e).classList.remove("pressed");
    },100)
}
