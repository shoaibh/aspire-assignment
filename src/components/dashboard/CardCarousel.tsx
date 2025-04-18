import { useCallback, useEffect, useRef, useState } from "react";
import { useCardContext } from "../../context/CardContext";
import { debounce } from "../../utils";
import { Card } from "./Card";


export const CardCarousel = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { cards, setSelectedCard} = useCardContext()

  const selectCardWithDelay = useCallback(
    debounce((id: number) => {
      setSelectedCard(cards[id]);
    }, 300),
    [cards, setSelectedCard]
  );

  useEffect(() => {
    const container = containerRef.current;
    if(!container) return
    const onScroll = () => {
      const index = Math.round(
        container.scrollLeft / container.offsetWidth
      );
      setActiveIndex(index);
      selectCardWithDelay(index)
    };
    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, [cards, selectCardWithDelay, setSelectedCard]);

  const scrollTo = (index: number) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: container.offsetWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-[414px] mb-[32px]">
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="min-w-full snap-center"
          >
            <Card name={card.name} card_number={card.card_number} date_of_expiry={card.date_of_expiry} cvv={card.cvv} isFrozen={card.isFrozen} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-3">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-green-500 w-5" : "bg-green-200"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
