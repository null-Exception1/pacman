import random
def move_pacman(state):

    grid = state['grid'] # 20 rows, 21 columns (1 - block, 2 - pellet, 3 - power pellet, 4 - blank)
    pacman = state['pacman'] # pacman's location given in [row,column] on the grid
    red = state['red'] # red's location given in [row,column] on the grid
    cyan = state['cyan'] # cyan's location given in [row,column] on the grid
    pink = state['pink'] # pink's location given in [row,column] on the grid
    orange = state['orange'] # orange's location given in [row,column] on the grid



    # your AI agent code
    # in a [x-offset,y-offset] format, one of the following movements : [-1,0], [1,0], [0,-1], [0,1] 
    # [0,0] is not valid.
    return [0,0]