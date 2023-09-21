import { Header } from "../../components/Header.tsx";
import SelecteableCards from "../../islands/Cards.tsx";
import { signal } from "@preact/signals";

export default function Day1() {
  const cardStyles = 'bg-cover bg-center bg-no-repeat h-4/5 w-64 rounded-lg shadow-lg relative transition-all'
  
  const cardsArray = [
    {
      id: '0',
      title: 'Desierto de la Tatacoa',
      image: 'tatacoa',
      cardClassString : "bg-[url('/desierto_tatacoa.webp')] " + cardStyles 
    },
    {
      id: '1',
      title: 'Pico Cristobal Cólon',
      image: 'colon',
      cardClassString : "bg-[url('/pico_colon.webp')] " + cardStyles
    },
    {
      title: 'Sierra de la Macarena, Caño cristales',
      image: 'cristales',
      cardClassString : "bg-[url('/caño_cristales.webp')] " + cardStyles
    },
    {
      id: '2',
      title: 'Piedra del Peñol',
      image: 'peñol',
      cardClassString : "bg-[url('/piedra_peñol.webp')] " + cardStyles
    },
    {
      id: '3',
      title: 'Isla de San Andrés',
      image: 'isla',
      cardClassString : "bg-[url('/san_andres_isla.webp')] " + cardStyles
    }
  ]

  return (
    <>
      <Header isChallengePage={true}/>
      <div className={'max-w-screen-2xl h-screen overflow-x-hidden mx-auto px-6'}>
        <SelecteableCards cardsArray={cardsArray} selectedCardId={signal(cardsArray[0].id || '0')} />
      </div>
    </>
  )
}