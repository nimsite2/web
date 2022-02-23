let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function pausegame(time){
    pause=true
    setTimeout(function(){pause=false},time)
}

function moveplayer(NX,NY,P){
    function resetposition(){
        A = player.x+player.w[0]
        B = player.x+16-player.w[1]
        C = player.y+player.h[0]
        D = player.y+16-player.h[1]
        a = A+NX
        b = B+NX
        c = C+NY
        d = D+NY
    }
    let A,B,C,D,a,b,c,d
    resetposition()
    if(a<0-stage["S"+area[0]]["A"+area[1]][3][0]||b>stage["S"+area[0]]["A"+area[1]][1][0].length*16+stage["S"+area[0]]["A"+area[1]][3][2]){
        NX=0
    }
    if(c>stage["S"+area[0]]["A"+area[1]][1].length*16-stage["S"+area[0]]["A"+area[1]][3][1]+stage["S"+area[0]]["A"+area[1]][3][3]){
        PlayerDeath("<span style=\"font-size:10ch;\">乙</span>")
    }
    for(let i of blocks.block){
        if(c<i[1]+16&&d>i[1]){
            if(B<=i[0]&&b>=i[0]&&i[2][4]!=1){
                NX=i[0]-B
            }
            if(A>=i[0]+16&&a<=i[0]+16&&i[2][2]!=1){
                NX=i[0]+16-A
            }
        }
        if(b>i[0]&&a<i[0]+16){
            if(D<=i[1]&&d>=i[1]&&i[2][1]!=1){
                NY=i[1]-D;
                player.j=false;
                player.v=0;
            }
            if(C>=i[1]+16&&c<=i[1]+16&&i[2][3]!=1){
                NY=i[1]+16-C;
                player.v=0.3;
                player.i=false;
                player.j=true;
            }
        }
    }
    for(let i of blocks.conveyor){
        if(P!="NoConveyor"){
            if(c<i[1]+16&&d>i[1]&&i[2][3]!=1){
                if(B<=i[0]&&b>=i[0]){
                    NX=i[0]-B
                }
                if(A>=i[0]+16&&a<=i[0]+16){
                    NX=i[0]+16-A
                }
            }
            if(b>i[0]&&a<i[0]+16){
                if(D<=i[1]&&d>=i[1]){
                    NY=i[1]-D;
                    player.j=false;
                    player.v=0;
                    if(i[2][1]==1){
                        moveplayer(-parseInt(i[2][2],16),0,"NoConveyor")
                    }else{
                        moveplayer(parseInt(i[2][2],16),0,"NoConveyor")
                    }
                    break;
                }
                if(C>=i[1]+16&&c<=i[1]+16){
                    NY=i[1]+16-C;
                    player.v=0.3;
                    player.i=false;
                    player.j=true;
                }
            }
        }
    }
    for(let i of blocks.updraft){
        if(b>i[0]&&a<i[0]+16&&c<i[1]+16&&d>i[1]){
            player.j=true
            if(i[2][1]=="+"){
                player.v=-parseInt(i[2][2],16)/4
            }else{
                player.v=+parseInt(i[2][2],16)/4
            }
            break
        }
    }
    for(let i of blocks.bridge){
        if(b>i[0]&&a<i[0]+16){
            if(D<=i[1]&&d>=i[1]){
                NY=i[1]-D;
                player.j=false;
                player.v=0;
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
            if(i[2][1]=="r"){
                area[1]+=(i[2][2]=="+"?parseInt(i[2][3]):-parseInt(i[2][3]))
            }else if(i[2][1]=="a"){
                area[1]=(i[2][2]=="+"?parseInt(i[2][3]):-parseInt(i[2][3]))
            }
            if(i[2][4]=="x"){
                if(i[2][5]=="n"){
                    player.x=0-player.w[0]-stage["S"+area[0]]["A"+area[1]][3][0]
                }else{
                    player.x=stage["S"+area[0]]["A"+area[1]][1][0].length*16-16+player.w[1]+stage["S"+area[0]]["A"+area[1]][3][2]
                }
            }else if(i[2][4]=="y"){
                if(i[2][5]=="n"){
                    player.y=16+player.h[0]+stage["S"+area[0]]["A"+area[1]][3][1]
                }else{
                    player.y=stage["S"+area[0]]["A"+area[1]][1].length*16-16+player.h[1]+player.h[0]+stage["S"+area[0]]["A"+area[1]][3][3]
                }
            }
            enemyreset()
            resetposition()
            scroll(a,b,c,d)
            pausegame(100)
            break
        }
    }
    for(let i in enemy.type){
        if(enemy.type[i]<=4){
            if(b>enemy.xy[i][0]&&a<enemy.xy[i][0]+16&&c<enemy.xy[i][1]+16&&d>enemy.xy[i][1]+12){
                PlayerDeath("ENEMY-"+enemy.type[i])
            }
        }
    }
    resetposition()
    for(let i in obj.type){
        if(obj.type[i]=="lift"&&P!="NoLift"){
            if(b>obj.xy[i][0]&&a<obj.xy[i][0]+16){
                if(D<=obj.xy[i][1]+((obj.p[i][2]==0&&obj.p[i][3]!=1)?parseInt(obj.p[i][1],16)/2:(obj.p[i][2]==2&&obj.p[i][3]!=1)?-parseInt(obj.p[i][1],16)/2:0)&&d>=obj.xy[i][1]){
                    if(obj.p[i][2]==0&&obj.p[i][3]!=1){
                        moveplayer(0,-parseInt(obj.p[i][1],16)/2,"NoLift")
                    }else if(obj.p[i][2]==1&&obj.p[i][3]!=1){
                        moveplayer(parseInt(obj.p[i][1],16)/2,0,"NoLift")
                    }else if(obj.p[i][2]==2&&obj.p[i][3]!=1){
                        moveplayer(0,parseInt(obj.p[i][1],16)/2,"NoLift")
                    }else if(obj.p[i][2]==3&&obj.p[i][3]!=1){
                        moveplayer(-parseInt(obj.p[i][1],16)/2,0,"NoLift")
                    }
                    NY=obj.xy[i][1]-D
                    player.j=false
                    player.v=0
                    if(obj.p[i][3]==1){
                        obj.p[i][3]=0
                    }
                }
            }
        }else if(obj.type[i]=="downlift"&&P!="NoDownLift"){
            if(b>obj.xy[i][0]&&a<obj.xy[i][0]+16){
                if(D<=obj.xy[i][1]&&d>=obj.xy[i][1]){
                    NY=obj.xy[i][1]-D
                    player.j=false
                    player.v=0
                    if(obj.p[i][2]==0){
                        moveplayer(0,-parseInt(obj.p[i][1],16)/4,"NoDownLift")
                        obj.xy[i][1]-=parseInt(obj.p[i][1],16)/4
                    }else if(obj.p[i][2]==1){
                        moveplayer(parseInt(obj.p[i][1],16)/4,0,"NoDownLift")
                        obj.xy[i][0]+=parseInt(obj.p[i][1],16)/4
                    }else if(obj.p[i][2]==2){
                        moveplayer(0,parseInt(obj.p[i][1],16)/4,"NoDownLift")
                        obj.xy[i][1]+=parseInt(obj.p[i][1],16)/4
                    }else if(obj.p[i][2]==3){
                        moveplayer(-parseInt(obj.p[i][1],16)/4,0,"NoDownLift")
                        obj.xy[i][0]-=parseInt(obj.p[i][1],16)/4
                    }
                }
            }
        }
    }
    player.x+=NX
    player.y+=NY
    resetposition()
    scroll(a,b,c,d)
}
function scroll(a,b,c,d){
    let tx = 0
    let ty = 0
    let stx = stage["S"+area[0]]["A"+area[1]][1][0].length*16
    let sty = stage["S"+area[0]]["A"+area[1]][1].length*16
    let S = stage["S"+area[0]]["A"+area[1]][3]
    if(a<16*8-S[0]&&a<=stx-16*8+S[2]){
        tx=S[0]
    }else if(a<stx-16*8+S[2]){
        tx=-a+16*8
    }else{
        tx=-stx+16*16-S[2]
    }
    if(sty+S[1]+S[3]>=16*12){ //=================================
        if(c<16*6-S[1]&&c<=sty-16*6+S[3]){
            ty=S[1]
        }else if(c<sty-16*6+S[3]){
            ty=-c+16*6
        }else{
            ty=-sty+16*12-S[3]
        }
    }
    ctx.setTransform(1,0,0,1,parseInt(tx),parseInt(ty));
}
function objmovecheck(NX,NY,i,P){
    if(P=="e0"||P=="e1"||P=="e2"||P=="e3"){
        if(P=="e3"){
            if(enemy.xy[i][0]+8<=player.x+8+parseInt(enemy.p[i][1],16)*8&&player.x+8-parseInt(enemy.p[i][2],16)*8<=enemy.xy[i][0]+8){
                NX*=parseInt(enemy.p[i][2],16)/2
            }
        }
        let A = enemy.xy[i][0]+0
        let B = enemy.xy[i][0]+16
        let C = enemy.xy[i][1]+0+12
        let D = enemy.xy[i][1]+16
        let a = A+NX
        let b = B+NX
        let c = C+NY
        let d = D+NY
        for(let j of blocks.block){
            if(c<j[1]+16&&d>j[1]){
                if(B<=j[0]&&b>=j[0]){
                    NX=j[0]-B
                    enemy.t[i]=false
                }
                if(A>=j[0]+16&&a<=j[0]+16){
                    NX=j[0]+16-A
                    enemy.t[i]=true
                }
            }
            if(b>j[0]&&a<j[0]+16&&j[2][1]!=2){
                if(D<=j[1]&&d>=j[1]){
                    enemy.xy[i][3]=false;
                    if(P=="e1"){
                        enemy.xy[i][3]=true;
                        enemy.xy[i][2]=-parseInt(enemy.p[i][1],16)/2;
                        break;
                    }
                    enemy.xy[i][2]=0;
                    NY=j[1]-D
                }
                if(C>=j[1]+16&&c<=j[1]+16&&j[2][1]!=1){
                    enemy.xy[i][3]=true;
                    enemy.xy[i][2]=0.3
                    NY=j[1]+16-C
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
        if(P=="e2"&&enemy.xy[i][3]){
            enemy.xy[i][3]=false
            if(enemy.t[i]){
                enemy.t[i]=false
            }else if(!enemy.t[i]){
                enemy.t[i]=true
            }
        }
        enemy.xy[i][0]+=NX
        enemy.xy[i][1]+=NY
    }else if(P=="lift"){
        let A = obj.xy[i][0]+0
        let B = obj.xy[i][0]+16
        let C = obj.xy[i][1]+0
        let D = obj.xy[i][1]+16
        let a = A+NX
        let b = B+NX
        let c = C+NY
        let d = D+NY
        for(let j of blocks.liftturn){
            if(c<j[1]+16&&d>j[1]&&(B<=j[0]&&b>=j[0]||A>=j[0]+16&&a<=j[0]+16)
            ||b>j[0]&&a<j[0]+16&&(D<=j[1]&&d>=j[1]||C>=j[1]+16&&c<=j[1]+16)){
                obj.p[i][1]=j[2][1]
                obj.p[i][2]=j[2][2]
                break
            }
        }
        obj.xy[i][0]+=NX
        obj.xy[i][1]+=NY
    }
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
                let nextxy=[0,0]
                let S = parseInt(obj.p[i][1],16)/2
                if(obj.p[i][2]==0&&obj.p[i][3]!=1){
                    nextxy[1]-=S
                }else if(obj.p[i][2]==1&&obj.p[i][3]!=1){
                    nextxy[0]+=S
                }else if(obj.p[i][2]==2&&obj.p[i][3]!=1){
                    nextxy[1]+=S
                }else if(obj.p[i][2]==3&&obj.p[i][3]!=1){
                    nextxy[0]-=S
                }
                objmovecheck(...nextxy,i,"lift")
                drawimg(img.obj.lift,obj.xy[i][0],obj.xy[i][1])
            }else if(obj.type[i]=="downlift"){
                drawimg(img.obj.downlift,obj.xy[i][0],obj.xy[i][1])
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
        if(enemy.xy[i][1]>stage["S"+area[0]]["A"+area[1]][1].length*16||enemy.xy[i][0]<-20||enemy.xy[i][0]>stage["S"+area[0]]["A"+area[1]][1][0].length*16){
            enemy.d[i]=0
        }
        if(enemy.d[i]!=0){
            if(enemy.type[i]<=4){
                let nextxy=[0,0]
                if(enemy.xy[i][3]){
                    if(enemy.xy[i][2]<2){enemy.xy[i][2]+=0.05}else{enemy.xy[i][2]=2}
                    nextxy[1]+=enemy.xy[i][2]
                }
                enemy.xy[i][3]=true
                if(enemy.t[i]){nextxy[0]+=parseInt(enemy.p[i][0],16)/2}
                if(!enemy.t[i]){nextxy[0]-=parseInt(enemy.p[i][0],16)/2}
                objmovecheck(...nextxy,i,"e"+enemy.type[i])
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
        updraft:[],
        conveyor:[],
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