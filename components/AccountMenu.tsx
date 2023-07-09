import { signOut } from "next-auth/react";

import { AccountMenuProps } from "@/types";

import useCurrentUser from "@/hooks/useCurrentUser";

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <div
      className="
      bg-black w-44 absolute top-14 right-0 py-5
        flex flex-col border-2 border-gray-800
      "
    >
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img
            className="w-8 rounded-md"
            src="/images/default-red.png"
            alt="Profile Logo"
          />
          <p className="text-white text-sm group-hover/item:underline">
            {currentUser?.name}
          </p>
        </div>
      </div>

      <hr className="bg-gray-600 h-px my-4 border-0" />

      <div
        onClick={() => signOut()}
        className="text-white px-3 text-center text-sm hover:underline"
      >
        Sign out of Netflix
      </div>
    </div>
  );
};

export default AccountMenu;
