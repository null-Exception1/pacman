from flask import Flask, request
from flask import render_template
from pacman import *
from ghosts import *
app = Flask(__name__, static_folder='static_files', template_folder='template_files')
@app.route("/")
def hello():
    return render_template("index.html")
def chunks(test_str):
    K = 21
 
    chnk_len = len(test_str) // K
    
    res = [test_str[idx : idx + chnk_len] for idx in range(0, len(test_str), chnk_len)]
    
    return res
@app.route("/data")
def data():
    g = request.args.get('grid')
    pacman = [int(j) for j in request.args.get('pacman').split(',')]
    cyan = [int(j) for j in request.args.get('cyan').split(',')]
    red = [int(j) for j in request.args.get('red').split(',')]
    pink = [int(j) for j in request.args.get('pink').split(',')]
    orange = [int(j) for j in request.args.get('orange').split(',')]
    grid = []
    for i in chunks(g):
        grid.append([int(j) for j in i])
    data = {"grid":grid,
            "pacman":pacman,
            "red":red,
            "pink":pink,
            "orange":orange,
            "cyan":cyan}
    g = {
        "red":move_red(data),
        "cyan":move_cyan(data),
        "orange":move_orange(data),
        "pink":move_pink(data),
        "pacman":move_pacman(data)
        }
    return g

app.run()