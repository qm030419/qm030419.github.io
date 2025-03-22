document.addEventListener('DOMContentLoaded', () => {

  const cardArray = [
    {
      name: 'cat1',
      img: 'images/cat1.jpg'
    },
    {
      name: 'cat2',
      img: 'images/cat2.jpg'
    },
    {
      name: 'cat3',
      img: 'images/cat3.jpg'
    },
    {
      name: 'cat4',
      img: 'images/cat4.jpg'
    },
    {
      name: 'cat5',
      img: 'images/cat5.jpg'
    },
    {
      name: 'cat6',
      img: 'images/cat6.jpg'
    },
    {
      name: 'cat1',
      img: 'images/cat1.jpg'
    },
    {
      name: 'cat2',
      img: 'images/cat2.jpg'
    },
    {
      name: 'cat3',
      img: 'images/cat3.jpg'
    },
    {
      name: 'cat4',
      img: 'images/cat4.jpg'
    },
    {
      name: 'cat5',
      img: 'images/cat5.jpg'
    },
    {
      name: 'cat6',
      img: 'images/cat6.jpg'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //游戏指令(借鉴网上的）

  function createBoard() {
   
    for (let i = 0; i < cardArray.length; i++) {
   
      const card = document.createElement('img')
   
      card.setAttribute('src', 'images/blank.png')

   
      card.setAttribute('data-id', i)

   
      card.addEventListener('click', flipCard)

   
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
 
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]


    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert("Mommy! Don't keep poking me!")
    }

    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Mommy! Congratulations on finding me!')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)

    }
     else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert("Mommy! It's not me!")
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Mommy! Congratulations on finding me all!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
