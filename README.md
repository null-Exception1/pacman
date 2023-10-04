
# Pacman AI vs AI

You can create your AI for ghosts and pacman, and test them on using this repo.

To run and test your AIs, you need to run `main.py`, which will host a pacman game at https://localhost:5000. Every update, the `ghosts.py` and `pacman.py` recieve the state of the pacman maze in the argument `state`.

The `state` argument is a dictionary given in the following format - 

```
{
    "grid": [ ... ], # grid state of the maze (clarified in next section)
    "red": [row,col], # Row and column at which red ghost is present
    "cyan": [row,col], # Row and column at which cyan ghost is present
    "red": [row,col], # Row and column at which pink ghost is present
    "red": [row,col], # Row and column at which red ghost is present
    "pacman": [row, col] # Row and column at which pacman is present
}

```
`ghosts.py` recieve an extra argument `colour`, in order for the ghost AI agent to recognize it's position.

After recieving this, the functions need to return a list with 2 items.
This list indicates a direction in either of the 4 directions - up, down, left or right. These are represented by [x,y] - <br /><br />

`return [-1,0]` - go left <br />
`return [1,0]` - go right <br />
`return [0,-1]` - go up <br />
`return [0,1]` - go down <br />

The ghost AIs and the pacman AIs are to be built only in the ghosts.py and pacman.py script respectively. <br />

The grid is updated only once a second, each ghost and pacman can move only one step within the update. <br />

# Grid

Grid follows this exact [mapping](https://modelingcommons.org/browse/display_preview/1584)
```
[[4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
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
[4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4]]
```

Where - \
4 - Is a blank space \
1 - Is a block or barrier \
2 - Is a grid dot or point \
3 - Are power pellets (i.e the main pacman power-up) 

The grid does not represent the ghosts or pacman's position. It will report updates of the pellets in the grid.

A character may only move in the 4, 1 and 3 spaces alloted. If the character sends a move which crosses a block, it will not be played on the board. After pacman eats a pellet, the 1 or 3 in the grid, becomes a 4. When the character goes into the pathway going to the other side, it will get teleported to the other side of the map.

# Misc

A update counter is used for updating the game board. An update is 0.5 seconds (with delays from calculations made by AI)

- When a ghost is eaten in weak mode, it is kept imprisoned for 10 updates. \
- At the beginning, ghosts are randomly placed. They start moving one after another at a delay of 4 updates \
- Weak mode runs for 15 updates \

# Finishing up

Similar to the real game, pacman cannot land on the same tile as the ghost. Pacman only wins when all dots of the maze are eaten.

