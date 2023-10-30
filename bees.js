var style = document.createElement('style');
style.innerHTML =
"@-webkit-keyframes wobble-hor-bottom{0%,50%{-webkit-transform:translateX(0);transform:translateX(0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}10%{-webkit-transform:translateX(-30px) rotate(-6deg);transform:translateX(-30px) rotate(-6deg)}20%{-webkit-transform:translateX(15px) rotate(6deg);transform:translateX(15px) rotate(6deg)}35%{-webkit-transform:translateX(-15px) rotate(-3.6deg);transform:translateX(-15px) rotate(-3.6deg)}40%{-webkit-transform:translateX(9px) rotate(2.4deg);transform:translateX(9px) rotate(2.4deg)}45%{-webkit-transform:translateX(-6px) rotate(-1.2deg);transform:translateX(-6px) rotate(-1.2deg)}}@keyframes wobble-hor-bottom{0%,50%{-webkit-transform:translateX(0);transform:translateX(0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}10%{-webkit-transform:translateX(-30px) rotate(-6deg);transform:translateX(-30px) rotate(-6deg)}20%{-webkit-transform:translateX(15px) rotate(6deg);transform:translateX(15px) rotate(6deg)}35%{-webkit-transform:translateX(-15px) rotate(-3.6deg);transform:translateX(-15px) rotate(-3.6deg)}40%{-webkit-transform:translateX(9px) rotate(2.4deg);transform:translateX(9px) rotate(2.4deg)}45%{-webkit-transform:translateX(-6px) rotate(-1.2deg);transform:translateX(-6px) rotate(-1.2deg)}}.killer-bee,.killer-bee::after,.killer-bee::before{display:block;box-sizing:border-box;border:2px solid #ce8838}.killer-bee{position:relative;width:12px;height:20px;transform:scale(var(--ggs,1));border-radius:22px;background:linear-gradient(to left,currentColor 12px,transparent 0) no-repeat center 6px/12px 2px,linear-gradient(to left,currentColor 12px,transparent 0) no-repeat center 10px/12px 2px;box-shadow:0 4px 0 -2px,0 7px 0 -4px}.killer-bee::after,.killer-bee::before{content:'';position:absolute;width:6px;height:10px;border-top:0;border-bottom-left-radius:22px;border-bottom-right-radius:22px;top:4px}.killer-bee::before{left:-6px;transform:rotate(40deg)}.killer-bee::after{right:-6px;transform:rotate(-40deg)}";

var ref = document.querySelector('script');

ref.parentNode.insertBefore(style, ref);

function beeGenerator(){
    var bee = document.createElement('i');
    bee.classList.add('killer-bee');
    bee.style.position = "fixed";
    bee.style.zIndex = "40";
    document.getElementsByTagName('body')[0].appendChild(bee);

    window.setInterval(function(){

        var rand = Math.round(Math.random()*99);

        var positions = [{
            top: 0,
            left: rand + "%",
            transform: 'rotate(45deg)'
        },
        {
            top: rand + "%",
            left: 0,
            transform: 'rotate(-45deg)'
        },
        {
            top: "99%",
            left: rand + "%",
            transform: 'rotate(135deg)'
        },
        {
            bottom: rand + "%",
            right: "99%",
            transform: 'rotate(225deg)'
        }
        ];

        var randomArray = Math.round(Math.random()*3);

        bee.style.left = positions[randomArray].left;
        bee.style.top = positions[randomArray].top;
        bee.style.transform = positions[randomArray].transform;
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
