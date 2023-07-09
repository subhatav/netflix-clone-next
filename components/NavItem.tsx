import { NavItemProps } from "@/types";

const NavItem: React.FC<NavItemProps> = ({ label, active }) => {
  return (
    <div
      className={
        active
          ? "cursor-default text-white"
          : "cursor-pointer text-gray-200 transition hover:text-gray-300"
      }
    >
      {label}
    </div>
  );
};

export default NavItem;
