import { useCardContext } from "@/context/CardContext";
import { CARD_CONTROLS } from "@/utils";

export const CardControls = () => {

  const {onFreezeUnfreezeCard, selectedCard} = useCardContext()


  const onClick = (buttonType: string) => {
    switch(buttonType){
      case "freeze_card": {
        onFreezeUnfreezeCard()
        break
      }
      default:
        console.log("clicked")
      
    }
  }

  return <div className="bg-[#EDF3FF] flex p-5 w-[414px] justify-between items-center rounded-2xl">

  {CARD_CONTROLS.map((control) => <div className="cursor-pointer">

    <div onClick={() => onClick(control.button_type)} className="max-w-[70px] text-center hover:opacity-45">
    <img src={control.icon} alt={control.label} width={32} height={32} className="m-auto" />
      <span className="text-[#0C365A] text-[13px]">{control.label === "Freeze Card" ? selectedCard?.isFrozen ? "Unfreeze Card": "Freeze Card": control.label}</span>
      </div>

  </div>)}

</div>;
};
