import type { Signal } from "@preact/signals";

interface CardsProps {
  selectedCardId: Signal<string>;
  cardsArray: any[];
}

export default function SelecteableCards(props: CardsProps) {
  return (
    <div className="flex h-full w-full items-center justify-center gap-8 transitions-animation cursor-pointer">
      {
        props.cardsArray.map(card => {
          return (
            <div className={card.cardClassString + (card.id !== props.selectedCardId.value ? ' flex-[0.5]' : ' flex-[5]')} onClick={() => props.selectedCardId.value = card.id}>
              <h3 className={'absolute bottom-6 left-6 text-white text-xl font-bold bg-gray-800 px-8 rounded transitions-animation' + (card.id !== props.selectedCardId.value ? ' opacity-0' : '')}>
                  {card.title}
              </h3>
            </div>
          )
        })
      }
    </div>
  );
}
