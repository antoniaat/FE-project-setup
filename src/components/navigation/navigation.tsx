import { Logo } from '../logo/logo';
import {
  NavigationStyled,
  NavigationListStyled,
  NavigationListItemStyled,
  NavigationBtnLinkStyled,
  ThemeButtonStyled,
  HelloBtnStyled,
  BlogBtnStyled,
  ThemeButtonImgStyled
} from './navigation.styled';
import sunImg from '../../assets/icons/sun.png';
import moonImg from '../../assets/icons/moon.png';

export const Navigation = ({
  toggleTheme,
  isDarkTheme
}: {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}) => {
  const themeIcon = isDarkTheme ? moonImg : sunImg;

  return (
    <NavigationStyled>
      <NavigationListStyled>
        <NavigationListItemStyled>
          <Logo />
        </NavigationListItemStyled>
        <HelloBtnStyled>
          <NavigationBtnLinkStyled href={`mailto:`}>SAY HELLO</NavigationBtnLinkStyled>
        </HelloBtnStyled>
        <BlogBtnStyled>
          <NavigationBtnLinkStyled href="/blog">BLOG</NavigationBtnLinkStyled>
        </BlogBtnStyled>
        <ThemeButtonStyled onClick={toggleTheme}>
          <ThemeButtonImgStyled src={themeIcon} />
        </ThemeButtonStyled>
      </NavigationListStyled>
    </NavigationStyled>
  );
};
