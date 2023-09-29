
canvas = document.getElementById('canvas')
canvas.width = 210
canvas.height = 210
ctx = canvas.getContext('2d')

grid = [
    [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
    [4, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 4],
    [4, 1, 3, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 3, 1, 4],
    [4, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 4],
    [4, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 4],
    [4, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 4],
    [4, 1, 1, 1, 1, 2, 1, 1, 1, 4, 1, 4, 1, 1, 1, 2, 1, 1, 1, 1, 4],
    [4, 4, 4, 4, 1, 2, 1, 4, 4, 4, 4, 4, 4, 4, 1, 2, 1, 4, 4, 4, 4],
    [1, 1, 1, 1, 1, 2, 1, 4, 1, 1, 1, 1, 1, 4, 1, 2, 1, 1, 1, 1, 1],
    [4, 4, 4, 4, 4, 2, 4, 4, 1, 4, 4, 4, 1, 4, 4, 2, 4, 4, 4, 4, 4],
    [1, 1, 1, 1, 1, 2, 1, 4, 1, 1, 1, 1, 1, 4, 1, 2, 1, 1, 1, 1, 1],
    [4, 4, 4, 4, 1, 2, 1, 4, 4, 4, 4, 4, 4, 4, 1, 2, 1, 4, 4, 4, 4],
    [4, 1, 1, 1, 1, 2, 1, 4, 1, 1, 1, 1, 1, 4, 1, 2, 1, 1, 1, 1, 4],
    [4, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 4],
    [4, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 4],
    [4, 1, 3, 2, 1, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 1, 2, 3, 1, 4],
    [4, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 4],
    [4, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 4],
    [4, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 4],
    [4, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 4],
    [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
]
// 5 - pacman
// 1 - block
// 2 - dots
// 4 - blank
// 3 - big dot
// i,j
pacmanc = [15,10];
pinkc = [9,9];
cyanc = [9,10];
orangec = [9,11];
redc = [7,10];
gamestart = true;
function render_grid(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,innerWidth,innerHeight);
    for (i=0;i<=200;i+=10){
        for (j=0;j<=210;j+=10){
            
            val = grid[Math.floor(i/10)][Math.floor(j/10)];
            if (val == 1){
                ctx.fillStyle = "rgb(52,93,169)";
                ctx.fillRect(j,i,10,10);
            }
            if (val == 2){
                ctx.beginPath();
                ctx.fillStyle = "white";
                ctx.strokeStyle = "white";
                ctx.arc(j+5,i+5,1,0,Math.PI*2);
                ctx.fill();
                ctx.stroke();
            }
            if (val == 3){
                ctx.beginPath();
                ctx.fillStyle = "white";
                ctx.strokeStyle = "white";
                ctx.arc(j+5,i+5,2,0,Math.PI*2);
                ctx.fill();
                ctx.stroke();
            }
        }
    }
    ctx.drawImage(pacman, pacmanc[1]*10, pacmanc[0]*10, 10, 10);
    if (wk > 0){
        ctx.drawImage(weak, pinkc[1]*10, pinkc[0]*10, 10, 10);
        ctx.drawImage(weak, orangec[1]*10, orangec[0]*10, 10, 10);
        ctx.drawImage(weak, redc[1]*10, redc[0]*10, 10, 10);
        ctx.drawImage(weak, cyanc[1]*10, cyanc[0]*10, 10, 10);
        wk -= 1;
    } else {
        ctx.drawImage(pink, pinkc[1]*10, pinkc[0]*10, 10, 10);
        ctx.drawImage(orange, orangec[1]*10, orangec[0]*10, 10, 10);
        ctx.drawImage(red, redc[1]*10, redc[0]*10, 10, 10);
        ctx.drawImage(cyan, cyanc[1]*10, cyanc[0]*10, 10, 10);
    }
};
window.addEventListener("keyup",function(e){
    if (e.key=="w"){
        move_in_grid(pacmanc,0,-1,true);
    }
    if (e.key=="a"){
        move_in_grid(pacmanc,-1,0,true);
    }
    if (e.key=="s"){
        move_in_grid(pacmanc,0,1,true);
    }
    if (e.key=="d"){
        move_in_grid(pacmanc,1,0,true);
    }
})
wk = 0;
function move_in_grid(val,x,y,r=false){
    x1 = val[0];
    y1 = val[1];
    if (y1+x > 20){
        y1 = 0
        val[0] = x1+y;
        val[1] = y1;
        return;
    }
    if (y1+x < 0){
        y1 = 20
        val[0] = x1+y;
        val[1] = y1;
        return;
    }
    if (grid[x1+y][y1+x] != 1){
        
        val[0] = x1+y;
        val[1] = y1+x;
        if (r){
            if (grid[x1+y][y1+x] == 3){
                wk = 15;
            }
            
            grid[x1+y][y1+x] = 0;
        }
    }
}
loads = 0
var pacman = new Image;
pacman.onload = function() {
    loads+=1
}
pacman.src = "static_files/assets/pacman.png";

var red = new Image;
red.onload = function() {
    loads+=1
}
red.src = "static_files/assets/red.png";

var cyan = new Image;
cyan.onload = function() {
    loads+=1
}
cyan.src = "static_files/assets/cyan.png";

var pink = new Image;
pink.onload = function() {
    loads+=1
}
pink.src = "static_files/assets/pink.png";

var orange = new Image;
orange.onload = function() {
    loads+=1
}
orange.src = "static_files/assets/orange.png";

var weak = new Image;
weak.onload = function() {
    loads+=1
}
weak.src = "static_files/assets/weak.png";

c = setInterval(function(){
    if (loads == 6){
        render_grid()
        main()
        clearInterval(c)
    }
},10);

steps = 0
stepsr = 0
stepsp = 0
stepsc = 0
stepso = 0
function main(){
    l = ""
    for (i=0;i<21;i++){
        for (j=0;j<21;j++){
            l+=grid[i][j];
        }
    }

    fetch('/data?grid='+l+"&pacman="+pacmanc+"&red="+redc+"&pink="+pinkc+"&cyan="+cyanc+"&orange="+orangec)
    .then(response => response.text())
    .then(function (text) {
    text = JSON.parse(text);
    if (wk > 0){
        if (String(pacmanc) == String(pinkc)){
            pinkc = [9,9];
            stepsp = 10
        }
        if (String(pacmanc) == String(cyanc)){
            cyanc = [9,10];
            stepsc = 10
        }
        if (String(pacmanc) == String(orangec)){
            orangec = [9,11];
            stepso = 10
        }
        if (String(pacmanc) == String(redc)){
            redc = [9,10];
            stepsr = 10
        }
    } else {
        if (String(pacmanc) == String(pinkc)){
            gamestart = false;
            clearInterval(d);
            console.log('game over');
        }
        if (String(pacmanc) == String(cyanc)){
            gamestart = false;
            clearInterval(d);
            console.log('game over');
        }
        if (String(pacmanc) == String(orangec)){
            gamestart = false;
            clearInterval(d);
            console.log('game over');
        }
        if (String(pacmanc) == String(redc)){
            gamestart = false;
            clearInterval(d);
            console.log('game over');
        }
    }

    move_in_grid(pacmanc,text["pacman"][0],text["pacman"][1],true)

    if (steps == 4){
        move_in_grid(pinkc,1,-2);
    }
    if (steps > 4){
        if (stepsp == 0){
        move_in_grid(pinkc,text["pink"][0],text["pink"][1]);
        } else {
            if (stepsp > 1){
                pinkc = [9,9];
                stepsp -= 1
            }
            if (stepsp == 1){
                move_in_grid(pinkc,1,-2);
                stepsp -= 1
            }
        }
    }
    if (steps == 8){
        move_in_grid(cyanc,0,-2);
    }
    if (steps > 8){
        if (stepsc == 0){
            move_in_grid(cyanc,text["cyan"][0],text["cyan"][1]);
            } else {
                if (stepsc > 1){
                    cyanc = [9,10];
                    stepsc -= 1
                }
                if (stepsc == 1){
                    move_in_grid(cyanc,1,-2);
                    stepsc -= 1
                }
            }
    }
    if (steps == 12){
        move_in_grid(orangec,-1,-2);
    }
    if (steps > 12){
        if (stepso == 0){
            move_in_grid(orangec,text["orange"][0],text["orange"][1]);
            } else {
                if (stepso > 1){
                    orangec = [9,11];
                    stepso -= 1
                }
                if (stepso == 1){
                    move_in_grid(orangec,1,-2);
                    stepso -= 1
                }
            }
    }

    
    //move_in_grid(redc,text["red"][0],text["red"][1])
    if (stepsr == 0){
        move_in_grid(redc,text["red"][0],text["red"][1]);
    } else {
        if (stepsr > 1){
            redc = [9,10];
            stepsr -= 1;
        }
        if (stepsr == 1){
            move_in_grid(redc,1,-2);
            stepsr -= 1;
        }
    }
    
    render_grid()
    steps += 1;
    });
    
}

d = setInterval(main,1000);
