import { signOut } from "next-auth/react";

import { AccountMenuProps } from "@/types";

import useCurrentUser from "@/hooks/useCurrentUser";

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <div className="acc-menu__container">
      <div className="acc-menu__items">
        <div className="acc-menu__profile group/item">
          <img
            src="/images/default-red.png"
            alt="Profile Logo"
            className="acc-menu__image"
          />
          <p className="acc-menu__name">{currentUser?.name}</p>
        </div>
      </div>

      <hr className="acc-menu__break" />

      <div onClick={() => signOut()} className="acc-menu__logout">
        Sign out of Netflix
      </div>
    </div>
  );
};

export default AccountMenu;
