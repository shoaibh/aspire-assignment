import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { CardDetails } from "./CardDetails";
import { CardTransactions } from "./CardTransactions";

export const CardDetailsAndTransactions = () => {
  return <Accordion type="multiple" className="w-full flex flex-col gap-6" defaultValue={["item-2"]}>
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger className="rounded-[8px] cursor-pointer bg-[#F5F9FF] border border-[#F5F5F5] border-solid shadow-[0_0_8px_#0000000A] border-b-0 p-6">
          <div className="flex gap-3 items-center">
            <img src="/card-details.svg" alt={"arrow"} width={24} height={24} />
            <span className="text-sm text-[#0C365A]">Card Details</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
        <CardDetails />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="overflow-hidden relative">
        <AccordionTrigger className="rounded-[8px] cursor-pointer bg-[#F5F9FF] border border-[#F5F5F5] border-solid shadow-[0_0_8px_#0000000A] p-6 ">
          <div className="flex gap-3 items-center">
            <img src="/transactions.svg" alt={"arrow"} width={24} height={24} />
            <span className="text-sm text-[#0C365A]">Recent Transactions</span>
          </div>
          </AccordionTrigger>
        <AccordionContent className="">
          <CardTransactions />
          <div className="border border-[#DDFFEC] border-solid bg-[#EDFFF5] font-semibold w-full pb-4 pt-6 text-center text-[13px] text-[#01D167] rounded-b-[8px] mt-[-8px] relative z-0">
            View all card transactions</div>
        </AccordionContent>
      </AccordionItem>
      </Accordion>
};
