import { OutlineButtonStyled, PrimaryButtonStyled } from './button.styled';

interface Button {
  children: React.ReactNode;
  onClick: () => void;
}

export const PrimaryButton = ({ children, onClick }: Button) => (
  <PrimaryButtonStyled onClick={onClick}>{children}</PrimaryButtonStyled>
);

export const OutlineButton = ({ children, onClick }: Button) => (
  <OutlineButtonStyled onClick={onClick}>{children}</OutlineButtonStyled>
);
