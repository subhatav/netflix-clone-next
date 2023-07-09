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
    <div className="group mx-auto w-44 flex-row">
      <div
        className="
          flex h-44 w-44 items-center justify-center
          overflow-hidden rounded-md border-2 border-transparent
          group-hover:cursor-pointer group-hover:border-white
        "
      >
        <img
          draggable={false}
          className="h-max w-max object-contain"
          src={profileImage}
          alt="Profile"
        />
      </div>
      <div className="mt-4 text-center text-2xl text-gray-400 group-hover:text-white">
        {name}
      </div>
    </div>
  );
};

export default UserCard;
