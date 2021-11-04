let scores = 
{
  X: 10,
  O: -10,
  tie: 0
};

function optimalMove() 
{
  // AI makes its turn
  let bestScore = -Infinity;
  let move;

  // traversing the remaining possible nodes
  for (let row = 0; row < 3; row++) 
  {
    for (let col = 0; col < 3; col++) 
    {
      // Is this cell available?
      if (board[row][col] === "") 
      {
        board[row][col] = ai;  // push
        let score = minimax(board, -Infinity, Infinity, false);  // recursive call
        board[row][col] = ""; // pop

        if (score > bestScore) 
        {
          bestScore = score;
          move = {row, col};
        }
      }
    }
  }

  board[move.row][move.col] = ai;
  currentPlayer = human; // toggle
}

function minimax(board, alpha, beta, nowMaximizing) 
{
  // base case
  let result = checkWining();
  if (result !== null)
  {
    return scores[result];
  }

  if (nowMaximizing) // maximizer
  {
    let maxEval = -Infinity;

    // traversing the remaining possible nodes
    for (let row = 0; row < 3; row++) 
    {
      for (let col = 0; col < 3; col++) 
      {
        // Is this cell available?
        if (board[row][col] == "") 
        {
          board[row][col] = ai; // push
          let score = minimax(board, alpha, beta, false);  // recursive call
          board[row][col] = ""; // pop

          maxEval = max(score, maxEval);

          alpha = max(score, alpha);
          // pruning the hopeless states
          if (beta <= alpha)
          {
            break;
          }
        }
      }
    }
    return maxEval;
  } 
  else // minimizer
  { 
    let minEval = Infinity;
    for (let row = 0; row < 3; row++) 
    {
      for (let col = 0; col < 3; col++) 
      {
        if (board[row][col] == "") 
        {
          board[row][col] = human;
          let score = minimax(board, alpha, beta, true);
          board[row][col] = "";

          minEval = min(score, minEval);

          beta = min(score, beta);
          if (beta <= alpha)
          {
            break;
          }
        }
      }
    }
    return minEval;
  }
}
