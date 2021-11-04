<h1 align="center">Unbeatable Tic-Tac-Toe</h1>

You vs. Unbeatable AI!

#### Illustration:
* Minimax algorithm is a decision rule, used in artificial intelligence, decision theory, game theory and statistics for minimizing the possible loss for a worst case scenario and maximizing the possible gain. Here is some kind of backtracking problem to find the most optimal move, assuming all are playing optimally.

```javascript
function minimax(coordinatedNode, depth, nowMaximizing)
  // base case
  if depth == 0 or game over in coordinatedNode
    return evaluation of coordinatedNode

  if nowMaximizing
    maxEval = -Infinity
    // traversing the remaining possible nodes
    for each child of coordinatedNode
      score = minimax(child, depth - 1, false)
      maxEval = max(score, maxEval)
    return maxEval
  else
    minEval = Infinity
    for each child of coordinatedNode
      score = minimax(child, depth - 1, true)
      minEval = min(score, minEval)
    return minEval
```

* In Tic-Tac-Toe, this algorithm sees a few steps ahead and puts itself in the shoes of its opponent. It keeps searching ahead and inevitably it ends up with the terminal states of the board; resulting in a tie, a win, or a loss. AI knows all possible moves, it backtracks and makes a decision, after it has assigned an arbitrary score for each board state; e.g. +10 for a win, -10 for a loss, and 0 for a tie. 

#### Pruning:
* Alpha-beta pruning is to allow the minimax algorithm to search and check further cases only when a better move isn't already available, decreasing and optimizing heavily the number of possible search states. It improves the performance of the game.

```javascript
function minimax(coordinatedNode, alpha, beta, nowMaximizing)
  // base case
  if game over in coordinatedNode
    return evaluation of coordinatedNode
  // no need for depth, since it is inevitable to have a terminal state

  if nowMaximizing
    maxEval = -Infinity
    // traversing the remaining possible nodes
    for each child of coordinatedNode
      // mark
      child = ai
      // get in with marked child
      score = minimax(child, alpha, beta, false)
      // unmark again
      child = null
      maxEval = max(score, maxEval)
      alpha = max(alpha, maxEval)
      if beta <= alpha
        break
    return maxEval
  else
    minEval = Infinity
    for each child of coordinatedNode
      child = human
      score = minimax(child, alpha, beta, true)
      child = null
      minEval = min(score, minEval)
      beta = min(beta, maxEval)
      if beta <= alpha
        break
    return minEval
```

#### 1-minute DEMO:
[DEMO](https://user-images.githubusercontent.com/52632898/140322496-d1e13e31-27ee-4184-b03a-edb492ab0aad.mp4)
