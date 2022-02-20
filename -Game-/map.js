let once=true
function drawmap(st){
    blockreset()
    for(let k=0;k<3;k++){
        for(let i=0;i<st[k].length;i++){
            for(let j=0;j<st[k][i].length;j++){
                if(k==0){
                    switch(st[k][i][j][0]){
                        case"1":drawimg(img.map.sky,j*16,i*16);break;
                        case"2":drawimg(img.map.cloud,j*16,i*16,st[k][i][j][1]==0,st[k][i][j][2]);break;
                        case"3":drawimg(img.map.bigcloud,j*16,i*16,st[k][i][j][1]==0,st[k][i][j][2]);break;
                    }
                }else if(k==1){
                    switch(st[k][i][j][0]){
                        case"A":blocks.areamove.push([j*16,i*16,st[k][i][j]]);break;
                        case"E":if(once){enemy.d.push(3);enemy.xy.push([j*16,i*16,0,false]);enemy.t.push(false);enemy.type.push(st[k][i][j][1]);enemy.p.push([st[k][i][j][2],st[k][i][j][3],st[k][i][j][4],st[k][i][j][5]])};break;
                        case"1":drawimg(img.map.grass,j*16,i*16);blocks.block.push([j*16,i*16,st[k][i][j]]);break;
                        case"2":drawimg(img.map.dirt,j*16,i*16);blocks.block.push([j*16,i*16,st[k][i][j]]);break;
                        case"3":drawimg(img.map.brick,j*16,i*16);blocks.block.push([j*16,i*16,st[k][i][j]]);break;
                        case"4":drawimg(img.map.bridge,j*16,i*16);blocks.bridge.push([j*16,i*16,st[k][i][j]]);break;
                        case"5":drawimg(img.map.needle,j*16,i*16);blocks.needle.push([j*16,i*16,st[k][i][j]]);break;
                        case"6":drawimg(img.map.spike,j*16,i*16,st[k][i][j][1]==0,st[k][i][j][2]);blocks.spike.push([j*16,i*16,st[k][i][j][1],st[k][i][j][2],st[k][i][j][3]]);break;
                        case"7":if(once){obj.d.push(false);obj.xy.push([j*16,i*16,0,false]);obj.t.push(false);obj.type.push("lift");obj.p.push(st[k][i][j].split(""))};break;
                        case"8":blocks.liftturn.push([j*16,i*16,st[k][i][j].split("")]);break;
                        case"9":drawimg(img.map.conveyor,j*16,i*16,st[k][i][j][1]==0);blocks.conveyor.push([j*16,i*16,st[k][i][j]]);break;
                        case"a":if(once){obj.d.push(false);obj.xy.push([j*16,i*16,0,false]);obj.t.push(false);obj.type.push("downlift");obj.p.push(st[k][i][j].split(""))};break;
                    }
                    drawplayer()
                }else if(k==2){
                    switch(st[k][i][j][0]){
                        case"1":drawimg(img.map.dirt,j*16,i*16);break;
                    }
                }
            }
        }
    }
    if(once){once=false}
}


let stage = {
    S1:{
        A1:[
            [
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","310000","000000","100000","100000","300000","000000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","000000","000000","100000","100000","000000","000000","100000","100000","100000","100000","100000","100000"],
                ["100000","300000","000000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","300000","000000","100000"],
                ["100000","000000","000000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","000000","000000","100000"],
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
            ],
            [
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","Ar+1xn"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","Ar+1xn"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","Ar+1xn"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","Ar+1xn"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","Ar+1xn"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","Ar+1xn"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","Ar+1xn"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","Ar+1xn"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","Ar+1xn"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","Ar+1xn"],
                ["000000","000000","000000","000000","000000","100000","100000","100000","100000","100000","100000","000000","000000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","100000","200000","200000","200000","200000","200000","210000","000000","000000","210000","200000","200000","200000"],
            ],
            [
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
            ],
            [0,0,-16]
        ],
        A2:[
            [
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
            ],
            [
                ["Ar-1xb","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","100000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["Ar-1xb","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","400000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["Ar-1xb","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","400000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["Ar-1xb","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","400000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["Ar-1xb","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","400000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["Ar-1xb","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","400000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["Ar-1xb","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","400000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","100000"],
                ["Ar-1xb","000000","000000","000000","000000","000000","400000","400000","000000","000000","100000","000000","400000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","Ar-1xb"],
                ["Ar-1xb","000000","000000","000000","000000","000000","000000","000000","400000","000000","400000","000000","400000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","Ar-1xb"],
                ["Ar-1xb","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","400000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","Ar-1xb"],
                ["100000","100000","100000","100000","000000","000000","100000","000000","000000","000000","000000","400000","000000","000000","000000","000000","E17100","E34440","000000","000000","000000","000000","000000","100000"],
                ["200000","200000","200000","200000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
            ],
            [
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
            ],
            [-16,0,-16]
        ],
    }
}