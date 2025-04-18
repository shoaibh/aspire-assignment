import { FC } from "react";

type SidebarNavProps = {
    icon: string,
    label: string,
    isActive?: boolean
}

export const SidebarNav: FC<SidebarNavProps> = ({icon, label, isActive=false}) => {
  return <div className="flex items-center gap-4 cursor-pointer">
    <img src={icon} alt={label} width={24} height={24} className={`${!isActive? "fill-[#01D167]": "hover:fill-[#01D167]"}`} />
    <span className={`${isActive? "text-[#01D167]": "text-white hover:text-[#01D167]"}  text-base`}>
        {label}
    </span>
  </div>;
};
