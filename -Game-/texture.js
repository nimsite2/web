function drawimg(img,x,y,C=true,T=0){
    if(!C){
        T=parseInt(T)+4
    }
    ctx.drawImage(img[T],parseInt(x),parseInt(y))
}
function drawplayer(){
    drawimg(img.player[player.d?"D":player.j?"J":player.m?ctime.playermove[0]>2?"M":"M2":"N"],player.x,player.y,!player.t,0)
}
let img = {
    player:{
        N:[
           //0123456789ABCDEF
           "0000000000000000",//0
            "000000QQQQQ00000",//1
            "00000QQQQQQQ0000",//2
            "0000QQLRLRL00000",//3
            "0000QLLLLLL00000",//4
            "00000LLRLLR00000",//5
            "00000LLLRRL00000",//6
            "000000LLLL000000",//7
            "000000DDDD000000",//8
            "00000DDDDDD00000",//9
            "00000LDDDDL00000",//A
            "00000LIIIIL00000",//B
            "00000LIIIIL00000",//C
            "000000I00I000000",//D
            "000000J00J000000",//E
            "00000JJ00JJ00000",//F
        ],
        M:[
           //0123456789ABCDEF
            "0000000000000000",//0
            "000000QQQQQ00000",//1
            "00000QQQQQQQ0000",//2
            "0000QQLRLRL00000",//3
            "0000QLLLLLL00000",//4
            "00000LLRLLR00000",//5
            "00000LLLRRL00000",//6
            "000000LLLL000000",//7
            "000000DDDD000000",//8
            "00000DDDDDD00000",//9
            "0000L0DDDD0L0000",//A
            "000L00IIII00L000",//B
            "000000IIII000000",//C
            "0000J0I00I000000",//D
            "0000JJ0000J00000",//E
            "0000000000JJ0000",//F
        ],
        M2:[
            //0123456789ABCDEF
            "0000000000000000",//0
            "000000QQQQQ00000",//1
            "00000QQQQQQQ0000",//2
            "0000QQLRLRL00000",//3
            "0000QLLLLLL00000",//4
            "00000LLRLLR00000",//5
            "00000LLLRRL00000",//6
            "000000LLLL000000",//7
            "000000DDDD000000",//8
            "00000DDDDDD00000",//9
            "0000L0DDDD0L0000",//A
            "000L00IIII00L000",//B
            "000000IIII000000",//C
            "000000I00I000000",//D
            "000000J00J000000",//E
            "00000JJ00JJ00000",//F
        ],
        J:[
            //0123456789ABCDEF
            "0000000000000000",//0
            "000000QQQQQ00000",//1
            "00000QQQQQQQ0000",//2
            "0000QQLRLRL00000",//3
            "0000QLLLLLL00000",//4
            "00000LLRLLR00000",//5
            "00000LLLRRL00000",//6
            "000000LLLL00L000",//7
            "000000DDDD0L0000",//8
            "00000DDDDDD00000",//9
            "0000L0DDDD000000",//A
            "000L00IIII000000",//B
            "000000IIII000000",//C
            "000000I00I000000",//D
            "00000J0000J00000",//E
            "0000JJ0000JJ0000",//F
        ],
        D:[
            //0123456789ABCDEF
            "0000000000000000",//0
            "000000EEEEE00000",//1
            "00000EEEEEEE0000",//2
            "0000EE2E2E200000",//3
            "0000E22222200000",//4
            "00000222RR200000",//5
            "0000022R22R00000",//6
            "0002002222002000",//7
            "000020DDDD020000",//8
            "00000DDDDDD00000",//9
            "000000DDDD000000",//A
            "000000IIII000000",//B
            "000000IIII000000",//C
            "000000I00I000000",//D
            "00000J0000J00000",//E
            "0000JJ0000JJ0000",//F
        ],
        ball:[
           //0123456789ABCDEF
            "0000000000000000",//0
            "0000000000000000",//1
            "0000000000000000",//2
            "0000000000000000",//3
            "0000000000000000",//4
            "0000000000000000",//5
            "000000FFFF000000",//6
            "00000FQQQQF00000",//7
            "00000FQQQQF00000",//8
            "000000FFFF000000",//9
            "0000000000000000",//A
            "0000000000000000",//B
            "0000000000000000",//C
            "0000000000000000",//D
            "0000000000000000",//E
            "0000000000000000",//F
        ]
    },
    enemy:{
        0:[
           //0123456789ABCDEF
            "0000000000000000",//0
            "0000000000000000",//1
            "0000000000000000",//2
            "0000000000000000",//3
            "0000000000000000",//4
            "0000000000000000",//5
            "0000000000000000",//6
            "0000000000000000",//7
            "0000000000000000",//8
            "0000000000000000",//9
            "0000000000000000",//A
            "0002222222222000",//B
            "002TTRTTTTTTT200",//C
            "02TTTRTTTTTTTT20",//D
            "2TTTTTTTTTTTTTT2",//E
            "2222222222222222",//F
        ],
        1:[
           //0123456789ABCDEF
            "0000000000000000",//0
            "0000000000000000",//1
            "0000000000000000",//2
            "0000000000000000",//3
            "0000000000000000",//4
            "0000000000000000",//5
            "0000000000000000",//6
            "0000000000000000",//7
            "0000000000000000",//8
            "0000000000000000",//9
            "0000000000000000",//A
            "0009999999999000",//B
            "009bbRbbbbbbb900",//C
            "09bbbRbbbbbbbb90",//D
            "9bbbbbbbbbbbbbb9",//E
            "9999999999999999",//F
        ],
        2:[
           //0123456789ABCDEF
            "0000000000000000",//0
            "0000000000000000",//1
            "0000000000000000",//2
            "0000000000000000",//3
            "0000000000000000",//4
            "0000000000000000",//5
            "0000000000000000",//6
            "0000000000000000",//7
            "0000000000000000",//8
            "0000000000000000",//9
            "0000000000000000",//A
            "0004444444444000",//B
            "004VVRVVVVVVV400",//C
            "04VVVRVVVVVVVV40",//D
            "4VVVVVVVVVVVVVV4",//E
            "4444444444444444",//F
        ],
        3:[
           //0123456789ABCDEF
            "0000000000000000",//0
            "0000000000000000",//1
            "0000000000000000",//2
            "0000000000000000",//3
            "0000000000000000",//4
            "0000000000000000",//5
            "0000000000000000",//6
            "0000000000000000",//7
            "0000000000000000",//8
            "0000000000000000",//9
            "0000000000000000",//A
            "0006666666666000",//B
            "006XXRXXXXXXX600",//C
            "06XXXRXXXXXXXX60",//D
            "6XXXXXXXXXXXXXX6",//E
            "6666666666666666",//F
        ],
    },
    obj:{
        lift:[
           //0123456789ABCDEF
            "NNNNNNNNNNNNNNNN",//0
            "N88888888888888N",//1
            "N88888888888888N",//2
            "NNNNNNNNNNNNNNNN",//3
            "0000000000000000",//4
            "0000000000000000",//5
            "0000000000000000",//6
            "0000000000000000",//7
            "0000000000000000",//8
            "0000000000000000",//9
            "0000000000000000",//A
            "0000000000000000",//B
            "0000000000000000",//C
            "0000000000000000",//D
            "0000000000000000",//E
            "0000000000000000",//F
        ],
        downlift:[
           //0123456789ABCDEF
            "KKKKKKKKKKKKKKKK",//0
            "KAAAAAAAAAAAAAAK",//1
            "KAAAAAAAAAAAAAAK",//2
            "KKKKKKKKKKKKKKKK",//3
            "0000000000000000",//4
            "0000000000000000",//5
            "0000000000000000",//6
            "0000000000000000",//7
            "0000000000000000",//8
            "0000000000000000",//9
            "0000000000000000",//A
            "0000000000000000",//B
            "0000000000000000",//C
            "0000000000000000",//D
            "0000000000000000",//E
            "0000000000000000",//F
        ]
    },
    effect:{
        die:[
           //0123456789ABCDEF
            "0000000000000000",//0
            "0000000000000000",//1
            "0000000000000000",//2
            "0000000000000000",//3
            "0000200000020000",//4
            "0000020000200000",//5
            "0000002002000000",//6
            "0000000220000000",//7
            "0000000220000000",//8
            "0000002002000000",//9
            "0000020000200000",//A
            "0000200000020000",//B
            "0000000000000000",//C
            "0000000000000000",//D
            "0000000000000000",//E
            "0000000000000000",//F
        ],
        dmg:[
           //0123456789ABCDEF
            "0000000000000000",//0
            "0000000000000000",//1
            "0000000000000000",//2
            "0000000000000000",//3
            "0000100000010000",//4
            "0000010000100000",//5
            "0000001001000000",//6
            "0000000110000000",//7
            "0000000110000000",//8
            "0000001001000000",//9
            "0000010000100000",//A
            "0000100000010000",//B
            "0000000000000000",//C
            "0000000000000000",//D
            "0000000000000000",//E
            "0000000000000000",//F
        ]
    },
    map:{
        grass:[
           //0123456789ABCDEF
            "5555555555555555",//0
            "5555555555555555",//1
            "5555555555555555",//2
            "5555555553555553",//3
            "3355533333335533",//4
            "3333333333333333",//5
            "3333333333333333",//6
            "3333333333333333",//7
            "3333333333333333",//8
            "3333333333333333",//9
            "3333333333333333",//A
            "3333333333333333",//B
            "3333333333333333",//C
            "3333333333333333",//D
            "3333333333333333",//E
            "3333333333333333",//F
        ],
        dirt:[
           //0123456789ABCDEF
            "3333333333333333",//0
            "3333333333333333",//1
            "3333333333333333",//2
            "3333333333333333",//3
            "3333333333333333",//4
            "3333333333333333",//5
            "3333333333333333",//6
            "3333333333333333",//7
            "3333333333333333",//8
            "3333333333333333",//9
            "3333333333333333",//A
            "3333333333333333",//B
            "3333333333333333",//C
            "3333333333333333",//D
            "3333333333333333",//E
            "3333333333333333",//F
        ],
        conveyor:[
           //0123456789ABCDEF
            "4444444444444444",//0
            "2222222222222222",//1
            "4444444444444444",//2
            "LLLLLLLLLLLLLLLL",//3
            "LLLLLLL22LLLLLLL",//4
            "LLLLLLL2222LLLLL",//5
            "LL22222222222LLL",//6
            "LL2222222222222L",//7
            "LL2222222222222L",//8
            "LL22222222222LLL",//9
            "LLLLLLL2222LLLLL",//A
            "LLLLLLL22LLLLLLL",//B
            "LLLLLLLLLLLLLLLL",//C
            "4444444444444444",//D
            "2222222222222222",//E
            "4444444444444444",//F
        ],
        sky:[
           //0123456789ABCDEF
            "8888888888888888",//0
            "8888888888888888",//1
            "8888888888888888",//2
            "8888888888888888",//3
            "8888888888888888",//4
            "8888888888888888",//5
            "8888888888888888",//6
            "8888888888888888",//7
            "8888888888888888",//8
            "8888888888888888",//9
            "8888888888888888",//A
            "8888888888888888",//B
            "8888888888888888",//C
            "8888888888888888",//D
            "8888888888888888",//E
            "8888888888888888",//F
        ],
        cloud:[
           //0123456789ABCDEF
            "8888888888888888",//0
            "8888888888888888",//1
            "8888888888888888",//2
            "8888888888888888",//3
            "8888888811118888",//4
            "8888811111111888",//5
            "8811111111111188",//6
            "8111111111111118",//7
            "8111111111111118",//8
            "8111111111111118",//9
            "8811111111111188",//A
            "8811111111188888",//B
            "8881111188888888",//C
            "8888888888888888",//D
            "8888888888888888",//E
            "8888888888888888",//F
        ],
        bigcloud:[
            //0123456789ABCDEF
            "88888888888888888888888888888888",//0
            "88888888888888888888888888888888",//1
            "88888888888888888888888888888888",//2
            "88888888888888888888888888888888",//3
            "88888888888888888888888888888888",//4
            "88888888888888888888888888888888",//5
            "88888888888888888111188888888888",//6
            "88888888888888811111118888888888",//7
            "88888881188888111111111888888888",//8
            "88888111118881111111111888888888",//9
            "88881111111111111111111111888888",//A
            "88811111111111111111111111188888",//B
            "88811111111111111111111111111888",//C
            "88111111111111111111111111111888",//D
            "88111111111111111111111111111188",//E
            "88111111111111111111111111111118",//F
            "81111111111111111111111111111118",//0
            "81111111111111111111111111111118",//1
            "81111111111111111111111111111118",//2
            "88811111111111111111111111111118",//3
            "88811111111111111111111111111188",//4
            "88811111111111111111111111111888",//5
            "88881111111111111111111111111888",//6
            "88881111111111111111111111111888",//7
            "88888111111111111111181111111888",//8
            "88888811111111111111888811888888",//9
            "88888881111111111118888888888888",//A
            "88888888811111111888888888888888",//B
            "88888888888888818888888888888888",//C
            "88888888888888888888888888888888",//D
            "88888888888888888888888888888888",//E
            "88888888888888888888888888888888",//F
        ],
        brick:[
            //0123456789ABCDEF
            "KKKKK3KKKK3KKKKK",//0
            "KKKKK3KKKK3KKKKK",//1
            "KKKKK3KKKK3KKKKK",//2
            "KKKKK3KKKK3KKKKK",//3
            "KKKKK3KKKK3KKKKK",//4
            "3333333333333333",//5
            "KKKKK3KKKK3KKKKK",//6
            "KKKKK3KKKK3KKKKK",//7
            "KKKKK3KKKK3KKKKK",//8
            "KKKKK3KKKK3KKKKK",//9
            "3333333333333333",//A
            "KKKKK3KKKK3KKKKK",//B
            "KKKKK3KKKK3KKKKK",//C
            "KKKKK3KKKK3KKKKK",//D
            "KKKKK3KKKK3KKKKK",//E
            "KKKKK3KKKK3KKKKK",//F
        ],
        bridge:[
            //0123456789ABCDEF
            "LLLLLLLLLLLLLLLL",//0
            "L44444444444444L",//1
            "L44444444444444L",//2
            "LLLLLLLLLLLLLLLL",//3
            "0000000000000000",//4
            "0000000000000000",//5
            "0000000000000000",//6
            "0000000000000000",//7
            "0000000000000000",//8
            "0000000000000000",//9
            "0000000000000000",//A
            "0000000000000000",//B
            "0000000000000000",//C
            "0000000000000000",//D
            "0000000000000000",//E
            "0000000000000000",//F
        ],
        needle:[
            //0123456789ABCDEF
            "QQ00000QQ00000QQ",//0
            "QQQ0000QQ0000QQQ",//1
            "0QQQ000QQ000QQQ0",//2
            "00QQQ00QQ00QQQ00",//3
            "000QQQ0QQ0QQQ000",//4
            "0000QQQQQQQQ0000",//5
            "00000QQQQQQ00000",//6
            "QQQQQQQQQQQQQQQQ",//7
            "QQQQQQQQQQQQQQQQ",//8
            "00000QQQQQQ00000",//9
            "0000QQQQQQQQ0000",//A
            "000QQQ0QQ0QQQ000",//B
            "00QQQ00QQ00QQQ00",//C
            "0QQQ000QQ000QQQ0",//D
            "QQQ0000QQ0000QQQ",//E
            "QQ00000QQ00000QQ",//F
        ],
        spike:[
            //0123456789ABCDEF
            "0000000QQ0000000",//0
            "0000000QQ0000000",//1
            "000000Q11Q000000",//2
            "000000Q11Q000000",//3
            "00000Q1111Q00000",//4
            "00000Q1111Q00000",//5
            "0000Q111111Q0000",//6
            "0000Q111111Q0000",//7
            "000Q11111111Q000",//8
            "000Q11111111Q000",//9
            "00Q1111111111Q00",//A
            "00Q1111111111Q00",//B
            "0Q111111111111Q0",//C
            "0Q111111111111Q0",//D
            "Q11111111111111Q",//E
            "QQQQQQQQQQQQQQQQ",//F
        ],
    }
}
function makeimg(){
    for(let i in img){
        for(let j in img[i]){
            let newimg = []
            for(let k=0;k<8;k++){
                for(let l=0;l<img[i][j].length;l++){
                    for(let m=0;m<img[i][j][l].length;m++){
                        let color
                        switch(img[i][j][l][m]){
                            case"0":color="#00000000";break;
                            case"1":color="#ffffff";break;
                            case"2":color="#ff0000";break;
                            case"3":color="#ffaa00";break;
                            case"4":color="#ffff00";break;
                            case"5":color="#aaff00";break;
                            case"6":color="#00ff00";break;
                            case"7":color="#00ffaa";break;
                            case"8":color="#00ffff";break;
                            case"9":color="#00aaff";break;
                            case"A":color="#0000ff";break;
                            case"B":color="#aa00ff";break;
                            case"C":color="#ff00aa";break;
                            case"D":color="#ff00ff";break;
                            case"E":color="#aa0000";break;
                            case"F":color="#aaaa00";break;
                            case"G":color="#00aa00";break;
                            case"H":color="#00aaaa";break;
                            case"I":color="#0000aa";break;
                            case"J":color="#aa00aa";break;
                            case"K":color="#ffaaaa";break;
                            case"L":color="#ffffaa";break;
                            case"M":color="#aaffaa";break;
                            case"N":color="#aaffff";break;
                            case"O":color="#aaaaff";break;
                            case"P":color="#ffaaff";break;
                            case"Q":color="#aaaaaa";break;
                            case"R":color="#000000";break;
                            case"S":color="#ffffff55";break;
                            case"T":color="#ff000055";break;
                            case"U":color="#ffaa0055";break;
                            case"V":color="#ffff0055";break;
                            case"W":color="#aaff0055";break;
                            case"X":color="#00ff0055";break;
                            case"Y":color="#00ffaa55";break;
                            case"Z":color="#00ffff55";break;
                            case"a":color="#00aaff55";break;
                            case"b":color="#0000ff55";break;
                            case"c":color="#aa00ff55";break;
                            case"d":color="#ff00aa55";break;
                            case"e":color="#ff00ff55";break;
                            case"f":color="#aa000055";break;
                            case"g":color="#aaaa0055";break;
                            case"h":color="#00aa0055";break;
                            case"i":color="#00aaaa55";break;
                            case"j":color="#0000aa55";break;
                            case"k":color="#aa00aa55";break;
                            case"l":color="#ffaaaa55";break;
                            case"m":color="#ffffaa55";break;
                            case"n":color="#aaffaa55";break;
                            case"o":color="#aaffff55";break;
                            case"p":color="#aaaaff55";break;
                            case"q":color="#ffaaff55";break;
                            case"r":color="#aaaaaa55";break;
                            case"s":color="#00000055";break;
                        }
                        ctx.fillStyle=color
                        let L
                        let M
                        switch(k){
                            case 0:L=l;M=m;break;
                            case 1:L=m;M=(img[i][j].length-1)-l;break;
                            case 2:L=(img[i][j].length-1)-l;M=(img[i][j][0].length-1)-m;break;
                            case 3:L=(img[i][j][0].length-1)-m;M=l;break;
                            case 4:L=l;M=(img[i][j][0].length-1)-m;break;
                            case 5:L=m;M=l;break;
                            case 6:L=(img[i][j].length-1)-l;M=m;break;
                            case 7:L=(img[i][j][0].length-1)-m;M=(img[i][j].length-1)-l;break;
                        }
                        ctx.fillRect(M,L,1,1)
                    }
                }
                newimg[k]=new Image();
                newimg[k].src=canvas.toDataURL("image/webp")
                ctx.clearRect(0,0,img[i][j][0].length,img[i][j].length)
            }
            img[i][j]=newimg
        }
    }
}