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
    <div className="user-card__page group">
      <div className="user-card__container">
        <img
          src={profileImage}
          alt="Profile"
          className="user-card__image"
          draggable={false}
        />
      </div>
      <div className="user-card__name">{name}</div>
    </div>
  );
};

export default UserCard;
