let once=true
function drawmap(st){
    blockreset()
    ctx.fillStyle="#555555"
    ctx.fillRect(0,0,stage["S"+area[0]]["A"+area[1]][1][0].length*16,stage["S"+area[0]]["A"+area[1]][1].length*16)
    for(let k=0;k<3;k++){
        for(let i=0;i<st[k].length;i++){
            for(let j=0;j<st[k][i].length;j++){
                if(k==0){
                    switch(st[k][i][j][0]){
                        case"1":drawimg(img.map.sky,j*16,i*16);break;
                    }
                }else if(k==1){
                    switch(st[k][i][j][0]){
                        case"A":blocks.areamove.push([j*16,i*16]);break;
                        case"E":if(once){enemy.d.push(3);enemy.xy.push([j*16,i*16,0,false]);enemy.t.push(false);enemy.type.push(st[k][i][j][1]);enemy.p.push([st[k][i][j][2],st[k][i][j][3]])};break;
                        case"1":drawimg(img.map.grass,j*16,i*16);blocks.block.push([j*16,i*16,st[k][i][j]]);break;
                        case"2":drawimg(img.map.dirt,j*16,i*16);blocks.block.push([j*16,i*16,st[k][i][j]]);break;
                        case"3":drawimg(img.map.brick,j*16,i*16);blocks.block.push([j*16,i*16,st[k][i][j]]);break;
                        case"4":drawimg(img.map.bridge,j*16,i*16);blocks.bridge.push([j*16,i*16,st[k][i][j]]);break;
                        case"5":drawimg(img.map.needle,j*16,i*16);blocks.needle.push([j*16,i*16,st[k][i][j]]);break;
                        case"6":drawimg(img.map.spike,j*16,i*16,st[k][i][j][1]==0,st[k][i][j][2]);blocks.spike.push([j*16,i*16,st[k][i][j][1],st[k][i][j][2],st[k][i][j][3]]);break;
                        case"7":if(once){obj.d.push(false);obj.xy.push([j*16,i*16,0,false]);obj.t.push(false);obj.type.push("lift");obj.p.push(st[k][i][j].split(""))};break;
                        case"8":blocks.liftturn.push([j*16,i*16,st[k][i][j].split("")]);break;
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
            [
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["842000","000000","000000","000000","000000","843000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","400000","400000","400000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","711000","000000","840000","000000","000000","400000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","811000","100000","000000","000000","000000","E01000","000000","100000","000000","000000","E24000","000000","600000","610000","000000"],
                ["000000","400000","100000","100000","100000","110000","100000","100000","100000","000000","000000","110000","000000","601000","611000","000000","A00000"],
                ["000000","400000","000000","000000","100000","220000","000000","000000","000000","000000","000000","220000","000000","602000","612000","000000","A00000"],
                ["000000","400000","100000","100000","E1f400","220000","E01000","E13300","E21000","000000","000000","220000","000000","603000","613000","000000","A00000"],
                ["100000","100000","200000","200000","200000","220000","100000","100000","100000","100000","100000","220000","100000","100000","100000","100000","100000"],
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
            [0,0,0,0]
        ],
        A2:[
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
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
            ],
            [
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","100000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","400000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","400000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","600000","000000","610000","000000","000000","000000","000000","000000","000000","000000","400000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","400000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","603000","000000","613000","000000","000000","000000","000000","000000","000000","000000","400000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","400000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","602000","000000","612000","000000","000000","400000","400000","000000","000000","000000","400000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","400000","400000","400000","400000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","601000","000000","611000","000000","000000","000000","000000","000000","000000","000000","400000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","100000","000000","000000","000000","000000","400000","000000","000000","000000","000000","E17100","000000","000000","000000","000000","000000","000000","100000"],
                ["100000","100000","000000","000000","000000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000"],
                ["000000","000000","400000","400000","400000","000000","000000","000000","000000","000000","000000","100000","000000","000000","100000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","100000","000000","000000","100000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","100000","000000","000000","100000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","100000","400000","000000","100000","100000","000000","000000","000000","000000","000000","000000","000000","000000"],
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
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
                ["000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000","000000"],
            ],
            [0,0,0,0]
        ],
    }
}