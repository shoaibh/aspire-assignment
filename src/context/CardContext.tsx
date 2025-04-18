import { createContext, FC, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Card } from "../types";
import { generateDummyCardsWithTransactions } from "../utils";

type ContextType = {
    selectedCard: Card | undefined,
    cards: Card[]
    setSelectedCard: React.Dispatch<React.SetStateAction<Card | undefined>>
    onAddingCard: (name: string) => void
    onFreezeUnfreezeCard: () => void
}

const CardContext = createContext<ContextType>({} as ContextType);

export const CardContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [cards, setCards] = useState<Card[]>([]);

    const [selectedCard, setSelectedCard] = useState<Card | undefined>(undefined)
  
    useEffect(() => {
      const stored = localStorage.getItem('cards');
      if (stored) {
        setCards(JSON.parse(stored));
      } else {
        const generated = generateDummyCardsWithTransactions();
        localStorage.setItem('cards', JSON.stringify(generated));
        setCards(generated);
      }
    }, []);

    useEffect(()=>{
      if(cards.length>0 && !selectedCard) {
        setSelectedCard(cards[0])
      } else {
        setSelectedCard(cards.find(card => card.id === selectedCard?.id) || cards[0]);
      }
    }, [cards, selectedCard])


    const onAddingCard = useCallback((name: string) => {
      const generatedCard = generateDummyCardsWithTransactions(name);
      const stored = localStorage.getItem('cards');
      const parsedCards = JSON.parse(stored!);
      const updatedCards = [...generatedCard, ...parsedCards];
      localStorage.setItem('cards', JSON.stringify(updatedCards));
      setCards(updatedCards);
    }, []);
  
    const onFreezeUnfreezeCard = useCallback(()=> {
      const updatedCards = cards.map(card =>
        card.id === selectedCard?.id ? { ...card, isFrozen: !selectedCard.isFrozen } : card
      );
      console.log({updatedCards})
      localStorage.setItem('cards', JSON.stringify(updatedCards));
      setCards(updatedCards); 
    }, [cards, selectedCard?.id, selectedCard?.isFrozen])

  const contextValue = useMemo(() => {
    return {
        selectedCard,
        setSelectedCard,
        cards,
        onAddingCard,
        onFreezeUnfreezeCard
    };
  }, [selectedCard, cards, onAddingCard, onFreezeUnfreezeCard]);

  return <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCardContext = () => useContext(CardContext);
