let area = [1,1]
canvas.width=16*16
canvas.height=16*12
let isgame
let playinggame
let stopgame=false
let startgame=false
document.getElementById("startbtn").onclick = function(){
    this.style.display = "none";
    canvas.style.display = "initial";
    makeimg()
    isgame=setInterval(selectgame,15)
}
function selectgame(){
    if(!startgame){
        if(inkey[39]&&ctime.selectgame[0]){
            ctime.selectgame[0]=false
            area[1]+=1
        }else if(!inkey[39]&&!ctime.selectgame[0]){
            ctime.selectgame[0]=true
        }
        if(inkey[37]&&ctime.selectgame[1]){
            ctime.selectgame[1]=false
            area[1]-=1
        }else if(!inkey[37]&&!ctime.selectgame[1]){
            ctime.selectgame[1]=true
        }
        if(inkey[13]){
            startgame=true
            playinggame = setInterval(gameloop,15)
        }
    }
}

function gameloop(){
    if(!player.d){
        let nextplayerXY = [0,0]
        if(inkey[32]&&!player.j){
            player.j=true
            player.i=true
            player.y--
        }else if(inkey[32]&&player.j&&player.i&&player.v>-1){
            player.v+=-0.25
        }else{
            player.i=false
        }
        player.m=false
        // if(inkey[38]){
        //     player.y-=0.5
        // }else if(inkey[39]){
        //     player.x+=0.5
        // }else if(inkey[40]){
        //     player.y+=0.5
        // }else if(inkey[37]){
        //     player.x-=0.5
        // }else
        if(inkey[37]){
            ctime.playermove[0]=ctime.playermove[0]>ctime.playermove[1]?0:ctime.playermove[0]+1
            player.m=true
            nextplayerXY[0]-=inkey[68]?3:1
            player.t=player.t?true:true
        }else if(inkey[39]){
            ctime.playermove[0]=ctime.playermove[0]>ctime.playermove[1]?0:ctime.playermove[0]+1
            player.m=true
            nextplayerXY[0]+=inkey[68]?3:1
            player.t=!player.t?false:false
        }else{ctime.playermove[0]=0}
        if(player.j){
            if(player.v<2){player.v+=0.05}else{player.v=2}
            nextplayerXY[1]+=player.v
        }
        player.j=true
        if(inkey[66]&&ball.xy.length<5&&ctime.ball){
            ctime.ball=false
            ball.xy.push([player.x,inkey[40]?player.y+4:inkey[38]?player.y-4:player.y])
            ball.d.push(false)
            ball.t.push(player.t)
        }else if(!inkey[66]&&!ctime.ball){
            ctime.ball=true
        }
        moveplayer(...nextplayerXY)
    }else{
        if(inkey[82]&&!stopgame){
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
let DEBUGCOLOR = '#00ff0050';

