import random
import collections
def bfs(grid, start, goal):
    queue = collections.deque([[start]])
    seen = set([start])
    while queue:
        path = queue.popleft()
        x, y = path[-1]
        if grid[y][x] == goal:
            return path
        for x2, y2 in ((x+1,y), (x-1,y), (x,y+1), (x,y-1)):
            if 0 <= x2 < 21 and 0 <= y2 < 20 and grid[y2][x2] != 1 and (x2, y2) not in seen:
                queue.append(path + [(x2, y2)])
                seen.add((x2, y2))
def move_red(state):
    brid = state['grid']
    brid[state['pacman'][0]][state['pacman'][1]] = 5
    path = bfs(brid,(state['red'][1],state['red'][0]),5)
    print(path)
    try:
        return [path[1][0]-state['red'][1],path[1][1]-state['red'][0]]
    except:
        return [0,0]
def move_cyan(state):
    brid = state['grid']
    brid[state['pacman'][0]][state['pacman'][1]] = 5
    path = bfs(brid,(state['cyan'][1],state['cyan'][0]),5)
    print(path)
    try:
        return [path[1][0]-state['cyan'][1],path[1][1]-state['cyan'][0]]
    except:
        return [0,0]
def move_orange(state):
    brid = state['grid']
    brid[state['pacman'][0]][state['pacman'][1]] = 5
    path = bfs(brid,(state['orange'][1],state['orange'][0]),5)
    print(path)
    try:
        return [path[1][0]-state['orange'][1],path[1][1]-state['orange'][0]]
    except:
        return [0,0]
def move_pink(state):
    brid = state['grid']
    brid[state['pacman'][0]][state['pacman'][1]] = 5
    path = bfs(brid,(state['pink'][1],state['pink'][0]),5)
    print(path)
    try:
        return [path[1][0]-state['pink'][1],path[1][1]-state['pink'][0]]
    except:
        return [0,0]