// HTML DIVS
const messageBox = document.getElementById('message')
const myScoreBox = document.getElementById('my-score')
const sheldonScoreBox = document.getElementById('sheldon-score')

// POSSIBLE VALUES FOR SHELDON TO CHOOSE FROM
const sheldonChoices = ['rock', 'paper', 'scissor', 'lizard', 'spock']

// THE SCORES
let myScore = 0;
let sheldonScore = 0;

// SELECT A RANDOM ITEM - THE BRAIN
const selectRandomItem = array => array[Math.floor(Math.random() * array.length)]

// VISUAL CHANGES
const classToggle = (item, className) => {
  document.querySelector(`.${item}`).classList.add(className)  
  setTimeout(_ => {
   document.querySelector(`.${item}`).classList.remove(className)
    }, 500)
}

// PLAY THE GAME WHEN CLICKED
const play = userChoice => {
  let sheldonChoice = selectRandomItem(sheldonChoices)
 
  switch (userChoice + sheldonChoice) {
    case 'rockrock':
    case 'paperpaper':
    case 'scissorscissor':
    case 'lizardlizard':
    case 'spockspock':
      classToggle(userChoice, 'gray-glow')
      break
      
    case 'rockspock':
    case 'rockpaper':
    case 'paperscissor':
    case 'paperlizard':
    case 'scissorrock':
    case 'scissorspock':
    case 'lizardrock':
    case 'lizardscissor':
    case 'spocklizard':
    case 'spockpaper':
      classToggle(userChoice, 'red-glow')
      sheldonScore++
      break
      
    case 'rocklizard':
    case 'rockscissor':
    case 'paperrock':
    case 'paperspock':
    case 'scissorpaper':
    case 'scissorlizard':
    case 'lizardspock':
    case 'lizardpaper':
    case 'spockscissor':
    case 'spockrock':
      classToggle(userChoice, 'green-glow')
      myScore++
      break
      
    default:
      break
  }
  showMessage(userChoice + sheldonChoice)
  document.getElementById('my-score').innerText = myScore
  document.getElementById('sheldon-score').innerText = sheldonScore
  
  if (myScore == 42 && sheldonScore < 42) {
    drat()
    myScore = 0
    sheldonScore = 0
  }
  if (sheldonScore == 42 && myScore < 42) {
    yay()
    myScore = 0
    sheldonScore = 0
  }
}

// SHOW MESSAGE
const showMessage = items => {
  let term = ''
  switch (items) {
    case 'scissorpaper':
    case 'paperscissor':
      term = 'Scissors cuts Paper'
      break
      
    case 'paperrock':
    case 'rockpaper':
      term = 'Paper covers Rock'
      break
      
    case 'rocklizard':
    case 'lizardrock':
      term = 'Rock crushes Lizard'
      break
      
    case 'lizardspock':
    case 'spocklizard':
      term = 'Lizard poisons Spock'
      break
      
    case 'spockscissor':
    case 'scissorspock':
      term = 'Spock smashes Scissors'
      break
      
    case 'scissorlizard':
    case 'lizardscissor':
      term = 'Scissors decapitates Lizard'
      break
      
    case 'lizardpaper':
    case 'paperlizard':
      term = 'Lizard eats Paper'
      break
      
    case 'paperspock':
    case 'spockpaper':
      term = 'Paper disproves Spock'
      break
      
    case 'spockrock':
    case 'rockspock':
      term = 'Spock vaporizes Rock'
      break
      
    case 'rockscissor':
    case 'scissorrock':
      term = 'Rock crushes Scissors'
      break
      
    default:
      term = 'Its a tie'
      break
  }
  messageBox.innerText = term
}

const drat = _ => {
  let img = document.getElementById('drat')
  img.style.display = 'block'
}

const yay = _ => {
  let img = document.getElementById('yay')
  img.style.display = 'block'
}

// CHOOSE PLAYER
const choosePlayer = player => {
  let img = document.querySelector(`#${player} img`)
  let url = img.src
  
  myScoreBox.parentNode.style.background = `url(${url})`
  document.getElementById('player-name').innerText = player;
  
 document.querySelector('.characters').style.display = 'none'
  
  /* TODO: get ramjet working!! 🤬🤬
  	- fade rest of images & background & h3
    - delay 300ms
    - morph image into score box
    - fade in 'can...42' thingy
    - every move shows & fades choice near score
  */
  
	/*let rest = document.querySelectorAll('.player')
  	.filter(character => {
  		if (character !== player) return character
    })
  
  document.write(rest)
  
  ramjet.transform(img, myScoreBox.parentNode, {
  	done: function() {
 			document.querySelector('.characters')
        .style.display = 'none'
    }
  })*/
}

// gibberish
  
 


