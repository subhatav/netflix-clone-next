import { NavItemProps } from "@/types";

const NavItem: React.FC<NavItemProps> = ({ label, active }) => {
  return (
    <div
      className={
        active
          ? "text-white cursor-default"
          : "text-gray-200 hover:text-gray-300 cursor-pointer transition"
      }
    >
      {label}
    </div>
  );
};

export default NavItem;
