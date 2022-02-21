let area = [1,1,{}]
const W = 16*16
const H = 16*12
canvas.width=W
canvas.height=H
const inkey = {};
window.addEventListener("keydown",function(e){
    inkey[e.code] = true
    if(e.code=="KeyP"&&!player.d){
        playerpause=!playerpause
        if(playerpause){
            document.getElementById("gamemsg").innerHTML="<h1 style=\"color:#00ff00;\">Pause</h1>"
            document.getElementById("gamemsg").style.display="initial"
        }else{
            document.getElementById("gamemsg").innerHTML=""
            document.getElementById("gamemsg").style.display="none"
        }
    }
});
window.addEventListener("keyup",function(e){
    inkey[e.code] = false
});
let isgame
let playinggame
let stopgame=false
let pause=false
let playerpause=false
let startgame=false
document.getElementById("startbtn").onclick = function(){
    this.style.display = "none";
    canvas.style.display = "initial";
    makeimg()
    isgame=setInterval(selectgame,15)
}
function selectgame(){
    if(!startgame){
        if(inkey["ArrowRight"]&&ctime.selectgame[0]){
            ctime.selectgame[0]=false
            area[1]+=1
        }else if(!inkey["ArrowRight"]&&!ctime.selectgame[0]){
            ctime.selectgame[0]=true
        }
        if(inkey["ArrowLeft"]&&ctime.selectgame[1]){
            ctime.selectgame[1]=false
            area[1]-=1
        }else if(!inkey["ArrowLeft"]&&!ctime.selectgame[1]){
            ctime.selectgame[1]=true
        }
        if(inkey["Enter"]){
            startgame=true
            playinggame = setInterval(gameloop,15)
        }
    }
}
let startmsg=area[0]==1?true:false
function gameloop(){
    if(startmsg){
        startmsg=false
        document.getElementById("gametext").style.display="inline"
        setTimeout(function(){document.getElementById("gametext").style.display="none"},1000)
    }
    if(!(pause||playerpause||document.getElementById("gametext").style.display=="inline")){
        if(!player.d){
            let nextplayerXY = [0,0]
            if(inkey["Space"]&&!player.j){
                player.j=true
                player.i=true
                player.v+=-0.15
            }else if(inkey["Space"]&&player.j&&player.i&&player.v>-1.2){
                player.v+=-0.15
            }else{
                player.i=false
            }
            if(player.j){
                if(player.v<3){player.v+=0.05}else{player.v=3}
                nextplayerXY[1]+=player.v
            }
            player.j=true
            player.m=false
            // if(inkey["ArrowUp"]){
            //     player.y-=0.5
            // }else if(inkey["ArrowRight"]){
            //     player.x+=0.5
            // }else if(inkey["ArrowDown"]){
            //     player.y+=0.5
            // }else if(inkey["ArrowLeft"]){
            //     player.x-=0.5
            // }else
            if(inkey["ArrowLeft"]){
                ctime.playermove[0]=ctime.playermove[0]>ctime.playermove[1]?0:ctime.playermove[0]+1
                player.m=true
                nextplayerXY[0]-=inkey["KeyD"]?1.5:1
                player.t=player.t?true:true
            }else if(inkey["ArrowRight"]){
                ctime.playermove[0]=ctime.playermove[0]>ctime.playermove[1]?0:ctime.playermove[0]+1
                player.m=true
                nextplayerXY[0]+=inkey["KeyD"]?1.5:1
                player.t=!player.t?false:false
            }else{
                ctime.playermove[0]=0
            }
            if(inkey["KeyB"]&&ball.xy.length<5&&ctime.ball){
                ctime.ball=false
                ball.xy.push([player.x,inkey["ArrowDown"]?player.y+4:inkey["ArrowUp"]?player.y-4:player.y])
                ball.d.push(false)
                ball.t.push(player.t)
            }else if(!inkey["KeyB"]&&!ctime.ball){
                ctime.ball=true
            }
            moveplayer(...nextplayerXY)
        }else if(player.d){
            if(inkey["KeyR"]&&!stopgame){
                clearInterval(playinggame)
                stopgame=true
                document.getElementById("gamemsg").innerHTML=""
                document.getElementById("gamemsg").style.display="none"
                window.location.reload();
            }
        }
        drawmap(stage["S"+area[0]]["A"+area[1]])
        moveenemy()
        ctx.fillStyle=DEBUGCOLOR
        ctx.fillRect(player.x+player.w[0],player.y+player.h[0],16-player.w[0]-player.w[1],16-player.h[0]-player.h[1])
    }
}
let DEBUGCOLOR = '#00ff0050';

