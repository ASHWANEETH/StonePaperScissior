let paptxt = document.querySelector(".paptxt");
    let scistxt = document.querySelector(".scistxt");
    let rocktxt = document.querySelector(".rocktxt");
    let rock = document.querySelector(".rock");
    let paper = document.querySelector(".paper");
    let sci = document.querySelector(".scissor");

    rock.addEventListener('mouseenter', () => rocktxt.style.visibility = "visible");
    rock.addEventListener('mouseleave', () => rocktxt.style.visibility = "hidden");

    paper.addEventListener('mouseenter', () => paptxt.style.visibility = "visible");
    paper.addEventListener('mouseleave', () => paptxt.style.visibility = "hidden");

    sci.addEventListener('mouseenter', () => scistxt.style.visibility = "visible");
    sci.addEventListener('mouseleave', () => scistxt.style.visibility = "hidden");

    let r = "<img src='rock.png' class='small'>";
    let p = "<img src='paper.png' class='small'>";
    let s = "<img src='scis.png' class='small'>";

    function rest(){
      score = {
        win:0,loss:0,tie:0
      };
      localStorage.setItem("scoree",JSON.stringify(score));
      document.querySelector('.score').innerHTML = `<h5>Win:${score.win} &nbsp Loss:${score.loss} &nbspTie:${score.tie}</h5>`;
    }

    let score1 = localStorage.getItem('scoree');
    let score;
    
    if(score1 !== null){
      score=JSON.parse(score1); 
    }
    else{
      score = {
      win:0,loss:0,tie:0
    };}

    document.querySelector('.score').innerHTML = `<h5>Win:${score.win} &nbsp Loss:${score.loss} &nbspTie:${score.tie}</h5>`;

    let ar = ['rock', 'scissor', 'paper'];
    function game(gameonbaby){
      let comp = ar[Math.floor(Math.random() * ar.length)];
      let user = gameonbaby;

      let usrim;
      if(user=="rock"){usrim=r;}
      if(user=="scissor"){usrim=s;}
      if(user=="paper"){usrim=p;}

      let compim;
      if(comp=="rock"){compim=r;}
      if(comp=="scissor"){compim=s;}
      if(comp=="paper"){compim=p;}
      

      if(comp === user) {
        document.querySelector('.res').innerHTML = `GAME DRAW!! <h6>You: ${usrim} &nbsp;&nbsp;Computer: ${compim}</h6>`;score.tie++;
      } else if(comp === "rock" && user === "scissor") {
        document.querySelector('.res').innerHTML = `You lost :( <h6>You: ${usrim} &nbsp;&nbsp;Computer: ${compim}</h6>`;score.loss++;
      } else if(comp === "scissor" && user === "rock") {
        document.querySelector('.res').innerHTML = `You Won :) <h6>You: ${usrim} &nbsp;&nbsp;Computer: ${compim}</h6>`; score.win++;
      } else if(comp === "paper" && user === "scissor") {
        document.querySelector('.res').innerHTML = `You Won :) <h6>You: ${usrim} &nbsp;&nbsp;Computer: ${compim}</h6>`;score.win++;
      } else if(comp === "scissor" && user === "paper") {
        document.querySelector('.res').innerHTML = `You lost :( <h6>You: ${usrim} &nbsp;&nbsp;Computer: ${compim}</h6>`;score.loss++;
      } else if(comp === "rock" && user === "paper") {
        document.querySelector('.res').innerHTML = `You Won :) <h6>You: ${usrim} &nbsp;&nbsp;Computer: ${compim}</h6>`;score.win++;
      } else if(comp === "paper" && user === "rock") {
        document.querySelector('.res').innerHTML = `You lost :( <h6>You: ${usrim} &nbsp;&nbsp;Computer: ${compim}</h6>`;score.loss++;
      }
      localStorage.setItem("scoree",JSON.stringify(score));

      document.querySelector('.score').innerHTML = `<h5>Win:${score.win} &nbsp Loss:${score.loss} &nbspTie:${score.tie}</h5>`;

     
      
    } 
   

