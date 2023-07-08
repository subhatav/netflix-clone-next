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
