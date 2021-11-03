<h1 align="center">Unbeatable Tic-Tac-Toe</h1>

You vs. Unbeatable AI!

#### Illustration:

* Minimax algorithm is a decision rule, used in artificial intelligence, decision theory, game theory and statistics for minimizing the possible loss for a worst case scenario and maximizing the possible gain. Here is some kind of backtracking problem to find the most optimal move, assuming all are playing optimally.

* In Tic-Tac-Toe, this algorithm sees a few steps ahead and puts itself in the shoes of its opponent. It keeps searching ahead until it ends up with the terminal states of the board; resulting in a tie, a win, or a loss. Once, AI knows all possible moves, it backtracks and makes a decision, after it has assigned an arbitrary score for each board state; e.g. +10 for a win, -10 for a loss, and 0 for a tie. 

* Alpha-beta pruning is to allow the minimax algorithm to search and check further cases only when a better move isn't already available, decreasing and optimizing heavily the number of possible search states. It improves the performance of the game.
