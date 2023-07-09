import { MobileMenuProps } from "@/types";

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="mob-menu__container">
      <div className="mob-menu__items">
        <div className="mob-menu__item">Home</div>
        <div className="mob-menu__item">Series</div>
        <div className="mob-menu__item">Movies</div>
        <div className="mob-menu__item">New & Popular</div>
        <div className="mob-menu__item">My Favorites</div>
        <div className="mob-menu__item">Browse by Languages</div>
      </div>
    </div>
  );
};

export default MobileMenu;
