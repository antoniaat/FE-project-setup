import {
  FooterCopyrightMadeWithLinkStyled,
  FooterCopyrightMadeWithStyled,
  FooterCopyrightStyled,
  FooterCopyrightTextStyled,
  FooterSloganStyled,
  FooterStyled
} from './footer.styled';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => (
  <FooterStyled>
    <FooterSloganStyled>Living, learning, & leveling up</FooterSloganStyled>
    <FooterSloganStyled>one day at a time.</FooterSloganStyled>
    <FooterCopyrightStyled>
      <FooterCopyrightTextStyled>
        All rights reserved © Antonia Atanasova {CURRENT_YEAR}
      </FooterCopyrightTextStyled>
      <FooterCopyrightMadeWithStyled>
        Made with
        <FooterCopyrightMadeWithLinkStyled href="https://nextjs.org/"></FooterCopyrightMadeWithLinkStyled>
      </FooterCopyrightMadeWithStyled>
    </FooterCopyrightStyled>
  </FooterStyled>
);
