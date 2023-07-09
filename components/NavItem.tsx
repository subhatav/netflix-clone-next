import { NavItemProps } from "@/types";

const NavItem: React.FC<NavItemProps> = ({ label, active }) => {
  return (
    <div className={active ? "nav-item__current" : "nav-item__select"}>
      {label}
    </div>
  );
};

export default NavItem;
