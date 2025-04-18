import { FC,  useState } from "react";

type Props = {
    name: string;
    card_number: string;
    date_of_expiry: string;
    cvv: number;
    isFrozen: boolean
};

export const Card: FC<Props> = ({ name, card_number, date_of_expiry, cvv, isFrozen }) => {
  
    const [showFull, setShowFull] = useState(false);

    const digits = card_number.replace(/\D/g, ''); // remove non-digits
  
    const maskedGroups = digits
    .slice(0, -4)
    .match(/.{1,4}/g)
    ?.map((group, i) => (
      <div key={i} className="flex space-x-2">
        {group.split('').map((_, j) => (
          <span key={j} className="w-2 h-2 bg-white rounded-full inline-block" />
        ))}
      </div>
    ));
    const last4 = digits.slice(-4);

    const fullGroups = digits.match(/.{1,4}/g)?.map((group, i) => (
        <span key={i} className="tracking-widest font-bold text-white">
          {group}
        </span>
      ));

    return (
    <>
    <div className="flex gap-[6px] items-center mb-3 ml-auto justify-end">
        <img src="/show-eye.svg" alt={"show"} width={16} height={16} />
    <div className="text-[#01D167] font-bold text-xs cursor-pointer" onClick={()=>setShowFull(!showFull)}>Show card number</div>
    </div>
    <div className={`${isFrozen ? "bg-[#b2beb8]":"bg-[#01D167]"} w-[414px] h-[248px] text-white rounded-2xl p-7 relative`}>
        <img src="/card-logo.svg" alt={"show"} width={84} height={24} className="absolute right-7 top-7" />
        <div className="font-bold text-2xl mt-[50px]">{name}</div>
      <div className="flex gap-2 text-sm mb-5 mt-8 font-bold">
        <div className="flex flex-wrap items-center gap-7">
            {showFull ? fullGroups : (
            <>
            {maskedGroups}
            <span className="tracking-widest font-bold">{last4}</span>
            </>
            )}
        </div>
      </div>
      <div className="flex items-center gap-9 text-[13px]">
        <div className="font-bold">Thru: {date_of_expiry}</div>
        <div className="font-bold flex items-center">CVV: {showFull ? <span className="text-[16px] tracking-[3px] ml-[4px] leading-[20px]">{cvv}</span>: <span className="text-[27px] tracking-[3px] ml-[4px] pt-[8px] leading-[12px]">***</span>}</div>
      </div>
      <img src="/Visa-Logo.svg" width={66} height={22} className="absolute right-7 bottom-7" />
    </div>
    </>
  );
};
