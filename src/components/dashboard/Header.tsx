import { useState } from "react";
import { useCardContext } from "../../context/CardContext";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const Header = () => {
    const {selectedCard, onAddingCard} = useCardContext()

  const [name, setName] = useState("")
  const [open, setOpen] = useState(false)


  return <div className="">
        <div className="text-[#222222] text-sm mb-4">Available balance</div>

<div className="flex justify-between">
    <div className="flex gap-3 items-center">
          <div className="w-10 h-6 rounded bg-[#01D167] text-[13px] text-white font-bold text-center flex items-center justify-center">S$</div>
          <div className="font-bold text-[#222222] text-[26px]">{selectedCard?.available_balance}</div>
        </div>
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded bg-[#325BAF] cursor-pointer hover:bg-[#87a4dc]">
          <div className="flex items-center gap-2">
            <img src="/button-add.svg" alt={"add"} width={16} height={16} />
            <span className="text-[#FFFFFF] font-bold text-[13px]">New Card</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={()=>{
            if(!name) return
            onAddingCard(name)
            setOpen(false)
          }}>
        <DialogHeader>
          <DialogTitle>Make a new card</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
              value={name}
              onChange={e=>setName(e.target.value)}
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
    </div>
  </div>;
};
