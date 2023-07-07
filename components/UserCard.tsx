import { UserCardProps } from "@/types";

const profileImages = [
  "/images/default-red.png",
  "/images/default-green.png",
  "/images/default-blue.png",
  "/images/default-slate.png",
];

const UserCard: React.FC<UserCardProps> = ({ name }) => {
  const profileImage = profileImages[Math.floor(Math.random() * 4)];

  return (
    <div className="group flex-row w-44 mx-auto">
      <div
        className="w-44 h-44 rounded-md overflow-hidden
        flex items-center justify-center border-2 border-transparent
        group-hover:cursor-pointer group-hover:border-white"
      >
        <img
          draggable={false}
          className="w-max h-max object-contain"
          src={profileImage}
          alt="Profile"
        />
      </div>
      <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
        {name}
      </div>
    </div>
  );
};

export default UserCard;
