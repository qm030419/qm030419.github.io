document.addEventListener('DOMContentLoaded', () => {
//所有卡选项
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
    // 循环遍历卡牌数组
    for (let i = 0; i < cardArray.length; i++) {
      // 创建卡牌元素
      const card = document.createElement('img')
      // 设置默认背面图片
      card.setAttribute('src', 'images/blank.png')

      // 绑定索引标识
      card.setAttribute('data-id', i)

      // 添加点击事件监听
      card.addEventListener('click', flipCard)

      // 将卡牌添加到游戏面板
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
     // 获取所有卡牌元素
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
