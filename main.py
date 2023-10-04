from flask import Flask, request
from flask import render_template
from pacman import *
from ghosts import *
import time
import logging
werkzeug_logger = logging.getLogger('werkzeug')

werkzeug_logger.setLevel(logging.CRITICAL)

werkzeug_logger.addHandler(logging.NullHandler())
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
    red = move_ghost_agent(data,'red')
    cyan = move_ghost_agent(data,'cyan')
    pink = move_ghost_agent(data,'pink')
    orange = move_ghost_agent(data,'orange')
    pacman = move_pacman(data)
    dir = [[0,-1],[0,1],[1,0],[-1,0]]
    if (red in dir) and (cyan in dir) and (pink in dir) and (orange in dir) and (pacman in dir):
        g = {
            "red":red,
            "cyan":cyan,
            "orange":orange,
            "pink":pink,
            "pacman":pacman
            }
        time.sleep(0.5)
        return g
    else:
        print('ERROR: Movement only includes [0,-1], [0,1], [1,0], [-1,0]')
        return "0"
app.run()