import icon from '../../assets/icons.svg';
import { LogoIcon, LogoLink } from './Logo.styled';

const Logo = () => {
  return (
    <LogoLink to="/">
      <LogoIcon>
        <use href={`${icon}#logo`}></use>
      </LogoIcon>
    </LogoLink>
  );
};

export default Logo;
