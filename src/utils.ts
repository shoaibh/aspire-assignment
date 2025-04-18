import { Card, Transaction } from "./types";

export const SIDEBAR_NAVS = [
    {
        label: "Home",
        icon: "/home.svg",
        isActive: false,
    },
    {
        label: "Cards",
        icon: "/card.svg",
        isActive: true,
    },
    {
        label: "Payments",
        icon: "/payments.svg",
        isActive: false,
    },
    {
        label: "Credit",
        icon: "/credit.svg",
        isActive: false,
    },
    {
        label: "Settings",
        icon: "/settings.svg",
        isActive: false,
    },
]

export const TABS = [
    {
        label: "My debit cards",
        id: "myDebitCards"
    },
    {
        label: "All company cards",
        id: "allCompanyCards"
    }
]

export const CARD_CONTROLS = [
    {
        label: "Freeze Card",
        icon: "/freeze-card.svg",
        button_type: "freeze_card",
    },
    {
        label: "Set Spend Limit",
        icon: "/set-spend-limit.svg",
        button_type: "set_spend_limit",
    },
    {
        label: "Add to GPay",
        icon: "/add-to-gpay.svg",
        button_type: "add_to_gpay",
    },
    {
        label: "Replace Card",
        icon: "/replace-card.svg",
        button_type: "replace_card",
    },
    {
        label: "Cancel card",
        icon: "/cancel-card.svg",
        button_type: "cancel_card",
    }, 
]

export const generateDummyCardsWithTransactions = (enteredName?: string): Card[] => {
    const names = ['Alice Johnson', 'Bob Smith', 'Charlie Kim', 'Diana Lee', 'Ethan Brown'];
    const places = ['Amazon', 'Starbucks', 'Walmart', 'Apple Store', 'Netflix'];
    const transactionTypes = ['debit', 'credit'];
  
    const cards: Card[] = (enteredName ? [enteredName]: names).map((name, i) => {
      const cardId = `card-${i + Date.now()}`;
      const card: Card = {
        id: cardId,
        name,
        card_number: `4111-1111-1111-${Math.floor(1000 + Math.random() * 9000)}`,
        date_of_expiry: `0${Math.floor(Math.random() * 9) + 1}/2${Math.floor(Math.random() * 5)}`,
        cvv: Math.floor(100 + Math.random() * 900),
        isFrozen: Math.random() < 0.5,
        available_balance: Math.floor(Math.random() * 10000) + 1000,
        transactions: Array.from({ length: 5 }, (_, j) => ({
            id: `txn-${i + 1}-${j + 1}`,
            card_id: cardId,
            type: transactionTypes[Math.floor(Math.random() * transactionTypes.length)],
            amount: Math.floor(Math.random() * 500) + 10,
            place: places[Math.floor(Math.random() * places.length)],
            date_of_transaction: new Date(Date.now() - Math.floor(Math.random() * 10000000000))
                .toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
                .replace(/ /g, ' '),
          })) as Transaction[]
      };
      return card;
    });
  
    return cards;
  }
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <T extends (...args: any[]) => void>(fn: T, delay: number): (...args: Parameters<T>) => void => {
    let timerId: ReturnType<typeof setTimeout> | undefined;
    return (...args: Parameters<T>) => {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};
