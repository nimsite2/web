let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const inkey = [];
window.addEventListener("keydown",function(e){inkey[e.keyCode] = true});
window.addEventListener("keyup",function(e){inkey[e.keyCode] = false});

function moveplayer(NX,NY){
    let a = player.x+NX+player.w[0]
    let b = player.x+NX+16-player.w[1]
    let c = player.y+NY+player.h[0]
    let d = player.y+NY+16-player.h[1]
    if(a<0-stage["S"+area[0]]["A"+area[1]][3][0]||b>stage["S"+area[0]]["A"+area[1]][1][0].length*16/4){
        NX=0
    }
    if(c>stage["S"+area[0]]["A"+area[1]][1].length*16){
        PlayerDeath("Bye")
    }
    for(let i of blocks.block){
        if(c<i[1]+16&&d>i[1]){
            if(b>i[0]&&a<i[0]){
                NX=0
            }
            if(a<i[0]+16&&b>i[0]+16){
                NX=0
            }
        }
        if(b>i[0]&&a<i[0]+16&&i[2]!=2){
            if(d>=i[1]&&d<=i[1]+3){
                NY=0;
                player.j=false;
                player.v=0;
                player.y=i[1]-16+player.h[1];
            }
            if(c<i[1]+16&&c>=i[1]+16-1&&i[2]!=1){
                NY=0;
                player.v=0.3;
                player.i=false;
                player.j=true;
                player.y=i[1]+16-player.h[0];
            }
        }
    }
    for(let i of blocks.bridge){
        if(b>i[0]&&a<i[0]+16){
            if(d>=i[1]&&d<=i[1]+2){
                NY=0
                player.j=false
                player.v=0
                player.y=i[1]-16+player.h[1]
            }
        }
    }
    for(let i of blocks.needle){
        if(b>i[0]&&a<i[0]+16&&c<i[1]+16&&d>i[1]){
            PlayerDeath("NEEDLE")
        }
    }
    for(let i of blocks.spike){
        if((i[3]==0)&&b>i[0]&&a<i[0]+16&&c<i[1]+16&&d>i[1]){
            if(d>i[1]+(i[0]+8-b)*2&&a<=i[0]+8
            ||d>i[1]+(a-i[0]-8)*2&&b>=i[0]+8){
                PlayerDeath("SPIKE")
            }
        }
        if((i[3]==2)&&b>i[0]&&a<i[0]+16&&c<i[1]+16&&d>i[1]){
            if(c<i[1]+16-(i[0]+8-b)*2&&a<=i[0]+8
            ||c<i[1]+16-(a-i[0]-8)*2&&b>=i[0]+8){
                PlayerDeath("SPIKE")
            }
        }
        if((i[3]==(i[2]==1?1:3))&&b>i[0]&&a<i[0]+16&&c<i[1]+16&&d>i[1]){
            if(d>=i[1]+(i[0]+16-b)/2&&c<=i[1]+8
            ||c<=i[1]+16-(i[0]+16-b)/2&&d>=i[1]+8){
                PlayerDeath("SPIKE")
            }
        }
        if((i[3]==(i[2]==1?3:1))&&b>i[0]&&a<i[0]+16&&c<i[1]+16&&d>i[1]){
            if(d>=i[1]+(a-i[0])/2&&c<=i[1]+8
            ||c<=i[1]+16-(a-i[0])/2&&d>=i[1]+8){
                PlayerDeath("SPIKE")
            }
        }
    }
    for(let i of blocks.areamove){
        if(b>i[0]&&a<i[0]+16&&c<i[1]+16&&d>i[1]){
            player.x=0
            area[1]++
            enemyreset()
            break
        }
    }
    for(let i in enemy.type){
        if(enemy.type[i]==0||enemy.type[i]==1||enemy.type[i]==2){
            if(b>enemy.xy[i][0]&&a<enemy.xy[i][0]+16&&c<enemy.xy[i][1]+16&&d>enemy.xy[i][1]+12){
                PlayerDeath("ENEMY-"+enemy.type[i])
            }
        }
    }
    for(let i in obj.type){
        if(obj.type[i]=="lift"){
            if(b>obj.xy[i][0]&&a<obj.xy[i][0]+16){
                if(d>=obj.xy[i][1]&&d<=obj.xy[i][1]+2){
                    if(obj.p[i][1]==0){
                        player.y-=parseInt(obj.p[i][0],16)/2
                    }else if(obj.p[i][1]==1){
                        player.x+=parseInt(obj.p[i][0],16)/2
                    }else if(obj.p[i][1]==2){
                        player.y+=parseInt(obj.p[i][0],16)/2
                    }else if(obj.p[i][1]==3){
                        player.x-=parseInt(obj.p[i][0],16)/2
                    }
                    NY=0
                    player.j=false
                    player.v=0
                    player.y=obj.xy[i][1]-16+player.h[1]
                }
            }
        }
    }
    let tx = 0
    let ty = 0
    let stx = stage["S"+area[0]]["A"+area[1]][1][0].length*16/4+stage["S"+area[0]]["A"+area[1]][3][2]
    let sty = stage["S"+area[0]]["A"+area[1]][1].length*16+stage["S"+area[0]]["A"+area[1]][3][3]
    if(a<16*8&&a<=stx-16*8){
        tx=0
    }else if(a<stx-16*8){
        tx=-a+16*8
    }else{
        tx=-stx+16*16
    }
    if(sty>16*12){ //=================================
        if(c>16*6&&c<=sty-16*6){
            ty=-c+16*6
        }else if(c<=16*6){
            ty=0
        }else{
            ty=-sty+16*12
        }
    }
    ctx.setTransform(1,0,0,1,parseInt(tx)+stage["S"+area[0]]["A"+area[1]][3][0],parseInt(ty)+stage["S"+area[0]]["A"+area[1]][3][1]);
    player.x+=NX
    player.y+=NY
}
function moveenemy(){
    for(let i in effect.xy){
        if(effect.d[i]>0){
            if(effect.type[i]=="die"){
                drawimg(img.effect.die,effect.xy[i][0],effect.xy[i][1])
            }else if(effect.type[i]=="dmg"){
                drawimg(img.effect.dmg,effect.xy[i][0],effect.xy[i][1])
            }
            effect.d[i]-=1
        }else{
            effect.xy.splice(i,1)
            effect.type.splice(i,1)
            effect.d.splice(i,1)
        }
    }
    for(let i in ball.xy){
        if(!ball.d[i]){
            ball.xy[i][0]+=ball.t[i]?-5:5
            if(player.x+16*8<ball.xy[i][0]||player.x-16*8>ball.xy[i][0]){
                ball.d[i]=true
            }
            drawimg(img.player.ball,ball.xy[i][0],ball.xy[i][1])
        }else{
            ball.xy.splice(i,1)
            ball.t.splice(i,1)
            ball.d.splice(i,1)
        }
    }
    for(let i in obj.xy){
        if(!obj.d[i]){
            if(obj.type[i]=="lift"){
                let a = obj.xy[i][0]+0
                let b = obj.xy[i][0]+16
                let c = obj.xy[i][1]+0
                let d = obj.xy[i][1]+16
                for(let j of blocks.liftturn){
                    if(b>j[0]&&a<j[0]+16&&c<j[1]+16&&d>j[1]){
                        obj.p[i][0]=j[2]
                        obj.p[i][1]=j[3]
                        break
                    }
                }
                let N = parseInt(obj.p[i][0],16)/2
                if(obj.p[i][1]==0){
                    obj.xy[i][1]-=N
                }else if(obj.p[i][1]==1){
                    obj.xy[i][0]+=N
                }else if(obj.p[i][1]==2){
                    obj.xy[i][1]+=N
                }else if(obj.p[i][1]==3){
                    obj.xy[i][0]-=N
                }
                drawimg(img.obj.lift,obj.xy[i][0],obj.xy[i][1])
            }
        }else{
            obj.xy.splice(i,1)
            obj.t.splice(i,1)
            obj.type.splice(i,1)
            obj.p.splice(i,1)
            obj.d.splice(i,1)
        }
    }
    for(let i in enemy.type){
        if(enemy.xy[i][1]>stage["S"+area[0]]["A"+area[1]][1].length*16||enemy.xy[i][0]<-20||enemy.xy[i][0]>stage["S"+area[0]]["A"+area[1]][1][0].length*16/4){
            enemy.d[i]=0
        }
        if(enemy.d[i]!=0){
            if(enemy.type[i]==0){
                let a = enemy.xy[i][0]+0
                let b = enemy.xy[i][0]+16
                let c = enemy.xy[i][1]+0+12
                let d = enemy.xy[i][1]+16
                enemy.xy[i][3]=true
                for(let j of blocks.block){
                    if(c<j[1]+16&&d>j[1]){
                        if(b>j[0]&&a<j[0]){
                            enemy.t[i]=false
                        }
                        if(a<j[0]+16&&b>j[0]+16){
                            enemy.t[i]=true
                        }
                    }
                    if(b>j[0]&&a<j[0]+16&&j[2]!=2){
                        if(d>=j[1]&&d<=j[1]+3){
                            enemy.xy[i][3]=false;
                            enemy.xy[i][2]=0;
                            enemy.xy[i][1]=j[1]-16;
                        }
                        if(c<j[1]+16&&c>=j[1]+16-1&&j[2]!=1){
                            enemy.xy[i][2]=0.3;
                            enemy.xy[i][3]=true;
                            enemy.xy[i][1]=j[1]+16-12;
                        }
                    }
                }
                for(let j in ball.xy){
                    if(b>ball.xy[j][0]+4&&a<ball.xy[j][0]+16-4&&c<ball.xy[j][1]+16-6&&d>ball.xy[j][1]+6){
                        addeffect(ball.xy[j][0],ball.xy[j][1],"dmg",6)
                        enemy.d[i]-=1
                        ball.d[j]=true
                    } 
                }
                if(enemy.xy[i][3]){
                    if(enemy.xy[i][2]<2){enemy.xy[i][2]+=0.05}else{enemy.xy[i][2]=2}
                    enemy.xy[i][1]+=enemy.xy[i][2]
                }
                if(enemy.t[i]){enemy.xy[i][0]+=parseInt(enemy.p[i][0],16)/2}
                if(!enemy.t[i]){enemy.xy[i][0]-=parseInt(enemy.p[i][0],16)/2}
            }else if(enemy.type[i]==1){
                let a = enemy.xy[i][0]+0
                let b = enemy.xy[i][0]+16
                let c = enemy.xy[i][1]+0+12
                let d = enemy.xy[i][1]+16
                for(let j of blocks.block){
                    if(c<j[1]+16&&d>j[1]){
                        if(b>j[0]&&a<j[0]){
                            enemy.t[i]=false
                        }
                        if(a<j[0]+16&&b>j[0]+16){
                            enemy.t[i]=true
                        }
                    }
                    if(b>j[0]&&a<j[0]+16&&j[2]!=2){
                        if(d>=j[1]&&d<=j[1]+3){
                            enemy.xy[i][3]=true;
                            enemy.xy[i][2]=-parseInt(enemy.p[i][1],16)/2;
                            enemy.xy[i][1]=j[1]-16;
                        }
                        if(c<j[1]+16&&c>=j[1]+16-1&&j[2]!=1){
                            enemy.xy[i][2]=0.3;
                            enemy.xy[i][3]=true;
                            enemy.xy[i][1]=j[1]+16-12;
                        }
                    }
                }
                for(let j in ball.xy){
                    if(b>ball.xy[j][0]+4&&a<ball.xy[j][0]+16-4&&c<ball.xy[j][1]+16-6&&d>ball.xy[j][1]+6){
                        addeffect(ball.xy[j][0],ball.xy[j][1],"dmg",6)
                        enemy.d[i]-=1
                        ball.d[j]=true
                    } 
                }
                if(enemy.xy[i][3]){
                    if(enemy.xy[i][2]<2){enemy.xy[i][2]+=0.05}else{enemy.xy[i][2]=2}
                    enemy.xy[i][1]+=enemy.xy[i][2]
                }
                if(enemy.t[i]){enemy.xy[i][0]+=parseInt(enemy.p[i][0],16)/2}
                if(!enemy.t[i]){enemy.xy[i][0]-=parseInt(enemy.p[i][0],16)/2}
            }else if(enemy.type[i]==2){
                let a = enemy.xy[i][0]+0
                let b = enemy.xy[i][0]+16
                let c = enemy.xy[i][1]+0+12
                let d = enemy.xy[i][1]+16
                enemy.xy[i][3]=true
                for(let j of blocks.block){
                    if(c<j[1]+16&&d>j[1]){
                        if(b>j[0]&&a<j[0]){
                            enemy.t[i]=false
                        }
                        if(a<j[0]+16&&b>j[0]+16){
                            enemy.t[i]=true
                        }
                    }
                    if(b>j[0]&&a<j[0]+16&&j[2]!=2){
                        if(d>=j[1]&&d<=j[1]+3){
                            enemy.xy[i][3]=false;
                            enemy.xy[i][1]=j[1]-16;
                        }
                        if(c<j[1]+16&&c>=j[1]+16-1&&j[2]!=1){
                            enemy.xy[i][2]=0.3;
                            enemy.xy[i][3]=true;
                            enemy.xy[i][1]=j[1]+16-12;
                        }
                    }
                }
                for(let j in ball.xy){
                    if(b>ball.xy[j][0]+4&&a<ball.xy[j][0]+16-4&&c<ball.xy[j][1]+16-6&&d>ball.xy[j][1]+6){
                        addeffect(ball.xy[j][0],ball.xy[j][1],"dmg",6)
                        enemy.d[i]-=1
                        ball.d[j]=true
                    } 
                }
                if(enemy.xy[i][3]){
                    enemy.t[i]=enemy.t[i]?false:true
                }
                if(enemy.t[i]){enemy.xy[i][0]+=parseInt(enemy.p[i][0],16)/2}
                if(!enemy.t[i]){enemy.xy[i][0]-=parseInt(enemy.p[i][0],16)/2}
            }
            drawimg(img.enemy[enemy.type[i]],parseInt(enemy.xy[i][0]),parseInt(enemy.xy[i][1]),!enemy.t[i]);
        }else{
            addeffect(enemy.xy[i][0],enemy.xy[i][1],"die",10)
            enemy.xy.splice(i,1)
            enemy.t.splice(i,1)
            enemy.type.splice(i,1)
            enemy.d.splice(i,1)
            enemy.p.splice(i,1)
        }
    }
}
function PlayerDeath(msg){
    player.d=true
    document.getElementById("gamemsg").innerHTML="<span style=\"color:#ff0000;font-size:50px;\">GAMEOVER</span><br>"+msg+""
    document.getElementById("gamemsg").style.display="initial"
}
function addeffect(x,y,type,d){
    effect.xy.push([x,y])
    effect.type.push(type)
    effect.d.push(d)
}

let ctime = {
    playermove:[0,4],
    ball:true,
    selectgame:[true,true],
}

let player = {
    x:0,
    y:150,
    w:[4,4],
    h:[1,0],
    j:false,
    v:0,
    m:false,
    i:false,
    t:false,
    d:false,
}
let ball = {}
let enemy = {}
let effect = {}
let obj = {}
let blocks = {}
function blockreset(){
    blocks = {
        block:[],
        bridge:[],
        needle:[],
        areamove:[],
        spike:[],
        liftturn:[],
    }
}
blockreset()
function enemyreset(){
    enemy = {
        xy:[],
        t:[],
        type:[],
        d:[],
        p:[]
    }
    obj = {
        xy:[],
        t:[],
        type:[],
        d:[],
        p:[]
    }
    ball={
        xy:[],
        t:[],
        d:[],
    }
    effect = {
        xy:[],
        type:[],
        d:[]
    }
    once=true
}
enemyreset()