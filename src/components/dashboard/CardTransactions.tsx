import { useCardContext } from "@/context/CardContext";

const getTransactionIcon = (place: string): string => {
  const icons = ["/transaction-icon-1.svg", "/transaction-icon-2.svg", "/transaction-icon-3.svg"];
  const hash = Array.from(place).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const index = hash % icons.length;
  return icons[index];
};

export const CardTransactions = () => {

  const {selectedCard} = useCardContext()

  return <div className="rounded-bl-[8px] rounded-br-[8px] border-r border-b border-l border-[#F0F0F0] border-solid p-6 bg-white relative z-10">

  {selectedCard?.transactions?.map(t=>(
    <div className="flex gap-3 py-4 border-b border-[#F5F5F5] border-solid last:border-b-0" key={t.id}>
      <div className="rounded-full bg-[#009DFF1A] size-12 grid place-content-center">
        <img src={getTransactionIcon(t.place)} alt={"transaction icon"} className="" width={16} height={16} />
      </div>

    <div>
      <div className="text-sm text-[#222222] font-semibold mb-1">{t.place}</div>
      <div className="text-[13px] text-[#AAAAAA] font-normal mb-3">{t.date_of_transaction}</div>
      <div className="flex gap-2 items-center">
        <div className="bg-[#325BAF] w-6 h-5 grid place-content-center rounded-full">
          <img src="/debit.svg" alt={"transaction icon"} className="" width={10} height={10} />
        </div>
        <div className="text-[#325BAF] text-xs font-semibold">{t.type ==="credit" ? "Refund on debit card": "Charged to debit card"}</div>
      </div>
    </div>
    <div className="ml-auto flex text-sm ">
      <div className={`${t.type==="debit" ? "text-[#222222]": "text-[#01D167]"} font-bold`}>{t.type==="debit"?"-":"+"} S$ {t.amount}</div>
    </div>
    </div>
    )
    )}




  </div>;
};
