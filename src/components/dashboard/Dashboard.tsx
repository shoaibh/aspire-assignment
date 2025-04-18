import { useState } from "react";
import { Header } from "./Header";
import { MyDebitCards } from "./MyDebitCards";
import { TABS } from "@/utils";

export const Dashboard = () => {


  const [selectedTab, setSelectedTab] = useState("myDebitCards")


  return <div className="p-[60px] w-full min-w-[calc(100vw-340px)] h-screen overflow-scroll">
    <Header />
    <div className="flex mt-9 gap-8 mb-4">
      {TABS.map((tab) => (
        <div
          key={tab.id}
          className={`cursor-pointer text-sm text-[#222222] font-semibold hover:opacity-80 ${selectedTab === tab.id ? "pb-1 border-b-2 border-solid border-[#23CEFD]" : "opacity-30 font-normal"
          }`}
          onClick={() => setSelectedTab(tab.id)}
        >
          {tab.label}
        </div>
      ))}
    </div>

    {selectedTab==="myDebitCards"? <MyDebitCards />: <div>All Company Cards</div> }

    </div>;
};
