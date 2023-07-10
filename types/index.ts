interface MovieInterface {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  genre: string;
}

export interface InputProps {
  id: string;
  type?: string;
  value: string;
  label: string;
  onChange: any;
}

export interface UserCardProps {
  name: string;
}

export interface NavItemProps {
  label: string;
  active?: boolean;
}

export interface AccountMenuProps {
  visible?: boolean;
}

export interface MobileMenuProps {
  visible?: boolean;
}

export interface PlayButtonProps {
  movieId: string;
}

export interface FavoriteButtonProps {
  movieId: string;
}

export interface ModalInterface {
  movieId?: string;
  isOpen: boolean;

  openModal: (movieId: string) => void;
  closeModal: () => void;
}

export interface InfoModalProps {
  visible?: boolean;
  onClose: any;
}

export interface MovieCardProps {
  data: MovieInterface;
}

export interface MovieListProps {
  data: MovieInterface[];
  title: string;
}
