import styled from 'styled-components';
interface NavLinksProps {
  $highlightLastLink?: boolean;
}

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 60px; /* Ensure adequate touch target height */
  font-weight: 500;
  position: relative;

  & > div:first-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0;
    padding: 1rem 2rem;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem 0;
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    border-bottom: 2px solid #000;
    background-color: #fff;
  }

  @media (max-width: 431px) {
    height: 95px;

    & > div {
      width: 100vw;
    }

    & > div > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: calc(100% - 2rem);
      margin: 1rem;
    }
  }
`;

export const NavLinks = styled.nav<NavLinksProps>`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  ${({ $highlightLastLink }) =>
    $highlightLastLink &&
    `
      a:last-child {
        border: 2px solid #3c7ef9;
        padding: 0.7rem 1rem;
        font-weight: 500;
        border-radius: 8px;
      }
    `}

  /* Responsive navigation */
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.25rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
  }

  @media (max-width: 430px) {
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
  }
`;
