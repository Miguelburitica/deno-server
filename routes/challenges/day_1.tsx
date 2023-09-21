import { Header } from "../../components/header.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";

function addCards (cardsArray: any[]) {
  if (!IS_BROWSER) return
  const cardsContainer = document.querySelector('.cards-container') as HTMLElement

  cardsArray.forEach(card => {
    const cardElement = document.createElement('div')
    for (const cardClass of card.cardClassString.split(' ')) {
      cardElement.classList.add(cardClass)
    }
    cardElement.innerHTML = `<h3>${card.title}</h3>`
    cardElement.addEventListener('click', (e) => {
      const currentCard = e.target as HTMLElement
      if (currentCard.classList.contains('selected')) {
        return
      }
      cardElement.classList.toggle('selected')
      removeSelectedOtherCards(cardElement)
    })
    cardsContainer.appendChild(cardElement)
  })
  const cards = document.querySelectorAll('.card')
  cards[0].classList.add('selected')
}

function removeSelectedOtherCards (currentCard: HTMLElement) {
  if (!IS_BROWSER) return
  const cards = document.querySelectorAll('.card')
  cards.forEach(card => {
    if (card !== currentCard) {
      card.classList.remove('selected')
    }
  })
}

export default function Day1() {
  const cardsArray = [
    {
      title: 'Desierto de la Tatacoa',
      image: 'tatacoa',
      cardClassString : 'bg-tatacoa card'
    },
    {
      title: 'Pico Cristobal Cólon',
      image: 'colon',
      cardClassString : 'bg-colon card'
    },
    {
      title: 'Sierra de la Macarena, Caño cristales',
      image: 'cristales',
      cardClassString : 'bg-cristales card'
    },
    {
      title: 'Piedra del Peñol',
      image: 'peñol',
      cardClassString : 'bg-peñol card'
    },
    {
      title: 'Isla de San Andrés',
      image: 'isla',
      cardClassString : 'bg-isla card'
    }
  ]

  addCards(cardsArray)
  
  return (
    <>
      <Header isChallengePage={true}/>
      <div class="cards-container">
      </div>
    </>
  )
}