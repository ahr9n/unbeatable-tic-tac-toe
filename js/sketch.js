let board = 
[
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

let cellWidth; // = (width / 3);
let cellHeight; // = (height / 3);

let ai = "X";
let human = "O";
let currentPlayer = human;

function setup() 
{
  createCanvas(400, 400);
  cellWidth = width / 3;
  cellHeight = height / 3;
  optimalMove();
}

function areSame(a, b, c) 
{
  return a != "" && a == b && b == c;
}

function checkWining() 
{
  let winner = null;

  // horizontal
  for (let idx = 0; idx < 3; idx++) 
  {
    if (areSame(board[idx][0], board[idx][1], board[idx][2])) 
    {
      return winner = board[idx][0];
    }
    // vertical
    else if (areSame(board[0][idx], board[1][idx], board[2][idx])) 
    {
      return winner = board[0][idx];
    }
  }

  // main diagonal
  if (areSame(board[0][0], board[1][1], board[2][2])) 
  {
    return winner = board[0][0];
  }
  // anti-diagonal
  else if (areSame(board[2][0], board[1][1], board[0][2])) 
  {
    return winner = board[2][0];
  }


  let freeCells = 0;
  for (let row = 0; row < 3; row++) 
  {
    for (let col = 0; col < 3; col++) 
    {
      if (board[row][col] == "") 
      {
        freeCells++;
      }
    }
  }

  if (winner === null && freeCells === 0) 
  {
    return "tie";
  } 
  else 
  {
    return winner;
  }
}

function mousePressed() 
{
  if (currentPlayer == human) 
  {
    const row = floor(mouseX / cellWidth);
    const col = floor(mouseY / cellHeight);
    // Human make turn

    // If valid turn
    if (board[row][col] == "") 
    {
      board[row][col] = human;
      currentPlayer = ai; // toggle
      optimalMove();
    }
  }
}

function draw() 
{
  background(255);
  strokeWeight(4);

  line(cellWidth, 0, cellWidth, height);
  line(cellWidth * 2, 0, cellWidth * 2, height);
  line(0, cellHeight, width, cellHeight);
  line(0, cellHeight * 2, width, cellHeight * 2);

  // drawing of x-o in the grid
  for (let col = 0; col < 3; col++) 
  {
    for (let row = 0; row < 3; row++) 
    {
      let x = cellWidth * row + cellWidth / 2;
      let y = cellHeight * col + cellHeight / 2;
      
      let cell = board[row][col];
      textSize(32);
      let r = cellWidth / 4;
      if (cell == human) 
      {
        // circle
        noFill();
        ellipse(x, y, r * 2);
      } 
      else if (cell == ai) 
      {
        // two intersected lines
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
      }
    }
  }

  let result = checkWining();
  if (result != null) 
  {
    noLoop();
    // game state
    let resultP = createP("");
    resultP.style("font-size", "42pt");
    resultP.style("text-align", "center");
    resultP.style("margin-top", "10px");
    
    if (result == "tie") 
    {
      resultP.style("color", "limegreen");
      resultP.html("Tie!");
    } 
    else 
    {
      result == "X" ? resultP.style("color", "red") : resultP.style("color", "green");
      resultP.html(`${result} wins!`);
    }
  }
}
