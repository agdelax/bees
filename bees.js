var style = document.createElement('style');
style.innerHTML = 
"@-webkit-keyframes wobble-hor-bottom{0%,50%{-webkit-transform:translateX(0);transform:translateX(0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}10%{-webkit-transform:translateX(-30px) rotate(-6deg);transform:translateX(-30px) rotate(-6deg)}20%{-webkit-transform:translateX(15px) rotate(6deg);transform:translateX(15px) rotate(6deg)}35%{-webkit-transform:translateX(-15px) rotate(-3.6deg);transform:translateX(-15px) rotate(-3.6deg)}40%{-webkit-transform:translateX(9px) rotate(2.4deg);transform:translateX(9px) rotate(2.4deg)}45%{-webkit-transform:translateX(-6px) rotate(-1.2deg);transform:translateX(-6px) rotate(-1.2deg)}}@keyframes wobble-hor-bottom{0%,50%{-webkit-transform:translateX(0);transform:translateX(0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}10%{-webkit-transform:translateX(-30px) rotate(-6deg);transform:translateX(-30px) rotate(-6deg)}20%{-webkit-transform:translateX(15px) rotate(6deg);transform:translateX(15px) rotate(6deg)}35%{-webkit-transform:translateX(-15px) rotate(-3.6deg);transform:translateX(-15px) rotate(-3.6deg)}40%{-webkit-transform:translateX(9px) rotate(2.4deg);transform:translateX(9px) rotate(2.4deg)}45%{-webkit-transform:translateX(-6px) rotate(-1.2deg);transform:translateX(-6px) rotate(-1.2deg)}};";

var ref = document.querySelector('script');

ref.parentNode.insertBefore(style, ref);

function beeGenerator(){
    var bee = document.createElement('div');
    bee.style.backgroundColor = "black";
    bee.style.position = "absolute";
    bee.style.height = "7px";
    bee.style.width = "7px";
    bee.style.borderRadius = "100%";
    bee.style.right = "50px";
    bee.style.bottom = "50px";
    bee.style.zIndex = "40";
    document.getElementsByTagName('body')[0].appendChild(bee);

    window.setInterval(function(){

        var rand = Math.round(Math.random()*99);

        var positions = [{
            top: 0,
            left: rand + "%"
        },
        {
            top: rand + "%",
            left: 0
        },
        {
            top: "99%",
            left: rand + "%"
        },
        {
            bottom: rand + "%",
            right: "99%"
        }
        ];

        var randomArray = Math.round(Math.random()*3);

        bee.style.left = positions[randomArray].left;
        bee.style.top = positions[randomArray].top;
        bee.style.transition = "all 0.5s";
    }, 200);
};
        
window.onload = function createHive(){
    var beehive = document.createElement('div');
    beehive.id = "beehive";
    beehive.style.cursor = 'pointer';
    beehive.style.width = "60px";
    beehive.style.height = "60px";
    beehive.style.border = "5px solid black";
    beehive.style.borderRadius = "100%";
    beehive.innerHTML = "&#128029;";
    beehive.style.backgroundImage = "url(), linear-gradient(360deg, rgba(225,173,1,1) 0%, rgba(244,208,90,1) 100%)";
    beehive.style.backgroundSize = "cover";
    beehive.style.position = "fixed";
    beehive.style.zIndex = "50";
    beehive.style.bottom = "20px";
    beehive.style.right = "20px";
    beehive.style.fontSize = "35px";
    beehive.style.display = "flex";
    beehive.style.alignItems = 'center';
    beehive.style.justifyContent = 'center';
    beehive.style.boxShadow = "0px 0px 38px 13px rgba(0,0,0,0.2)";
    beehive.style.webkitAnimationName = "wobble-hor-bottom";
    beehive.style.webkitAnimationDuration = "3s";
    beehive.style.webkitAnimationIterationCount = "infinite";
    document.getElementsByTagName('body')[0].appendChild(beehive);

    var beeBool = 0;

    beehive.onclick = function(){

        if (beeBool === 0){
            console.log(beeBool);

            beeBool++;

            window.setInterval(function(){
                beeGenerator();
            },200);

            beehive.style.webkitAnimationName = "none";
        }

    };
}