import { SIDEBAR_NAVS } from "@/utils";
import { Logo } from "./Logo";
import { SidebarNav } from "./SidebarNav";

export const Sidebar = () => {
  return (
    <div className="min-w-[340px] max-w-[340px] h-screen overflow-scroll bg-[#0C365A] p-12">
        <Logo />
        <div className="mt-20 flex flex-col gap-[60px]">
          {SIDEBAR_NAVS.map(s=><SidebarNav icon={s.icon} label={s.label} isActive={s.isActive} />)}
        </div>
    </div>
  )
};
