import { CardAndControls } from "./CardAndControls";
import { CardDetailsAndTransactions } from "./CardDetailsAndTransactions";

export const MyDebitCards = () => {
  return <div className="p-10 rounded-lg border-[#FCFCFC] border shadow-[0_2px_12px_#00000014] grid grid-cols-[repeat(auto-fit,_minmax(414px,_1fr))] gap-12">
    
    <CardAndControls />
    <CardDetailsAndTransactions />
  </div>;
};
