const button = document.querySelectorAll(".game");
let myScore = 0;
  let dakiScore = 0;

button.forEach((botao) => {
  
  document.querySelector("#my-score").innerHTML = myScore;
  document.querySelector("#machine-score").innerHTML = dakiScore;
  botao.addEventListener("click", (event) => {

    const dakiMove = Math.floor(Math.random() * 3) + 1;

    if (event.target.value === "rock" && dakiMove === 1) {      
      document.querySelector('#your-choice').innerHTML = ' &#128074'
      document.querySelector('#choose-daki').innerHTML = ' &#128074'
      document.querySelector('#result').classList.remove('hidden')
      document.querySelector('#result').innerHTML = 'Empate'
      setTimeout(() => {
            document.querySelector('#result').classList.add('hidden')
      }, 500);      
    } if (event.target.value === "paper" && dakiMove === 2) {      
      document.querySelector('#your-choice').innerHTML = ' &#x1f590'
      document.querySelector('#choose-daki').innerHTML = ' &#x1f590'
      document.querySelector('#result').classList.remove('hidden')
      document.querySelector('#result').innerHTML = 'Empate'
      setTimeout(() => {
            document.querySelector('#result').classList.add('hidden')
      }, 500);      
    } if (event.target.value === "scissors" && dakiMove === 3) {      
      document.querySelector('#your-choice').innerHTML = ' &#9996'
      document.querySelector('#choose-daki').innerHTML = ' &#9996'
      document.querySelector('#result').classList.remove('hidden')
      document.querySelector('#result').innerHTML = 'Empate'
      setTimeout(() => {
            document.querySelector('#result').classList.add('hidden')
      }, 500);      
    } if(event.target.value === "rock" && dakiMove === 2) {      
      document.querySelector('#your-choice').innerHTML = ' &#128074'
      document.querySelector('#choose-daki').innerHTML = ' &#x1f590'
      document.querySelector('#result').classList.remove('hidden')
      document.querySelector('#result').innerHTML = 'Daki Venceu'
      dakiScore++
      document.querySelector("#machine-score").innerHTML = dakiScore;
      setTimeout(() => {
            document.querySelector('#result').classList.add('hidden')
      }, 500);      
    } if (event.target.value === "rock" && dakiMove === 3) {      
      document.querySelector('#your-choice').innerHTML = ' &#128074'
      document.querySelector('#choose-daki').innerHTML = ' &#9996'
      document.querySelector('#result').classList.remove('hidden')
      document.querySelector('#result').innerHTML = 'Você Venceu'
      myScore++
      document.querySelector("#my-score").innerHTML = myScore;
      setTimeout(() => {
            document.querySelector('#result').classList.add('hidden')
      }, 500);      
    } if (event.target.value === "paper" && dakiMove === 1) {      
      document.querySelector('#your-choice').innerHTML = ' &#x1f590'
      document.querySelector('#choose-daki').innerHTML = ' &#128074'
      document.querySelector('#result').classList.remove('hidden')
      document.querySelector('#result').innerHTML = 'Você Venceu'
      myScore++
      document.querySelector("#my-score").innerHTML = myScore;
      setTimeout(() => {
            document.querySelector('#result').classList.add('hidden')
      }, 500);      
    } if (event.target.value === "paper" && dakiMove === 3) {      
      document.querySelector('#your-choice').innerHTML = ' &#x1f590'
      document.querySelector('#choose-daki').innerHTML = ' &#9996'
      document.querySelector('#result').classList.remove('hidden')
      document.querySelector('#result').innerHTML = 'Daki Venceu'
      dakiScore++
      document.querySelector("#machine-score").innerHTML = dakiScore;
      setTimeout(() => {
            document.querySelector('#result').classList.add('hidden')
      }, 500);      
    } if (event.target.value === "scissors" && dakiMove === 1) {      
      document.querySelector('#your-choice').innerHTML = ' &#9996'
      document.querySelector('#choose-daki').innerHTML = ' &#128074'
      document.querySelector('#result').classList.remove('hidden')
      document.querySelector('#result').innerHTML = 'Daki Venceu'
      dakiScore++
      document.querySelector("#machine-score").innerHTML = dakiScore;
      setTimeout(() => {
            document.querySelector('#result').classList.add('hidden')
      }, 500);      
    } if (event.target.value === "scissors" && dakiMove === 2) {      
      document.querySelector('#your-choice').innerHTML = ' &#9996'
      document.querySelector('#choose-daki').innerHTML = ' &#x1f590'
      document.querySelector('#result').classList.remove('hidden')
      document.querySelector('#result').innerHTML = 'Você Venceu'
      myScore++
      document.querySelector("#my-score").innerHTML = myScore;
      setTimeout(() => {
            document.querySelector('#result').classList.add('hidden')
      }, 500);      
    }
    
  });
});
