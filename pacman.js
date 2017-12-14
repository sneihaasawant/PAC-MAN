$(document).ready(function(){



  var pacman={y:5,
              x:3};

  var board=[ [1,1,1,1,1,1,1,1,1,1],
              [1,0,0,0,0,0,0,0,0,1],
              [1,0,1,1,0,0,1,0,0,1],
              [1,0,1,0,0,1,1,0,0,1],
              [1,0,1,0,0,1,0,0,0,1],
              [1,0,0,3,0,1,1,1,0,1],
              [1,0,0,0,0,0,0,0,0,1],
              [1,0,1,1,1,0,0,1,0,1],
              [1,0,0,0,0,0,0,0,0,1],
              [1,1,1,1,1,1,1,1,1,1]
            ]
  function drowBoard(){
      var htmlStr="";
      var count=0;
    for(var y=0;y < board.length;y++)
    {
      for(var x=0;x < board[y].length;x++)
      {
        if(board[y][x] == 0)
        { htmlStr += '<div class="floor"><img src="images/coin.gif" alt="coin image"></div>';  }

        if(board[y][x] == 1)
        { htmlStr += '<div class="wall"></div>';  }

        if(board[y][x] == 2)
        { htmlStr += '<div class="floor"></div>';  }

        if(board[y][x] == 3)
        { htmlStr += '<div class="floor"><img id="pacimage" src="images/pacman.gif" alt="coin image"></div>';  }
      }
    }
    $('#wrapper').html(htmlStr);
  }
  drowBoard();

  function gameOver(){
    var count=0;
    for(var y=0;y < board.length;y++)
    {
      for(var x=0;x < board[y].length;x++)
      {
        if( board[y][x] == 0){
          count +=1;
        }
        if ( count == 0){
          alert("game over")
        }
  }
}
}

  $(document).on('keydown','body',function(e){
    console.log(e.which);
    // gameOver();
    switch(e.which){
              case 37:

              if(board[pacman.y][pacman.x-1] == 1)
              {
                break;
              }else
              $("#pacimage").css("-webkit-transform","rotate(45deg)");
              $("#pacimage").css("transform","rotate(45deg)");
              board[pacman.y][pacman.x]=2;
              pacman.x -= 1;
              board[pacman.y][pacman.x]=3;
              drowBoard();
              break;

              case 38:
              if(board[pacman.y-1][pacman.x] == 1)
              {
                break;
              }else
              // $('.pacman').css("-webkit-transform","rotate(95deg)");
              board[pacman.y][pacman.x]=2;
              pacman.y -= 1;
              board[pacman.y][pacman.x]=3;
              // gameOver();
              drowBoard();
              break;

              case 39:
              if(board[pacman.y][pacman.x+1] == 1)
              {
                break;
              }else
              // $('.pacman').css("-webkit-transform","rotate(95deg)");
              board[pacman.y][pacman.x]=2;
              pacman.x += 1;
              board[pacman.y][pacman.x]=3;
              drowBoard();
              // gameOver();
              break;

              case 40:
              if(board[pacman.y+1][pacman.x] == 1)
              {
                break;
              }else

              board[pacman.y][pacman.x]=2;
              pacman.y += 1;
              board[pacman.y][pacman.x]=3;
              // $('.pacimage').css("transform","srotate(180deg)");
              drowBoard();
              // gameOver();
              break;

    }   // Switch case ends
  });

}) // document ready function ends
