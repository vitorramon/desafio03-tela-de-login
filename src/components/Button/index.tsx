import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, desativar}: IButtonProps) => {
  return <ButtonContainer disabled={desativar} onClick={onClick}>{title} </ButtonContainer>;
};

export default Button;
