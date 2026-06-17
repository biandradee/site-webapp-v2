import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HeaderContainer, NavLinks } from './header.styles';
import Link from '../.global/link';
import type { HeaderProps } from './types';
import logoDesktop from '../../assets/sj-logo-header.svg';
import logoMobile from '../../assets/sj-logo-mobile.svg';
import menuIcon from '../../assets/menu.svg';
import Logo from '../.global/logo';

const Header: React.FC<HeaderProps> = ({ links }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const isAreaPage = location.pathname.startsWith('/area/');
  const [menuOpen, setMenuOpen] = useState(false);

  const isLinkActive = (route?: string) => {
    if (!route) return false;

    if (route.includes('#')) {
      const hash = route.split('#')[1];
      return location.hash === `#${hash}`;
    }

    return location.pathname === route;
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 430;
      setIsMobile(mobile);

      if (!mobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <HeaderContainer role="banner">
      <div>
        <div style={{ position: 'relative' }}>
          <a href="/">
            <Logo
              src={isMobile ? logoMobile : logoDesktop}
              alt="Sou Junior - Logo da organização que impulsiona carreiras em tecnologia"
              role="img"
            />
          </a>

          {!isMobile && (
            <NavLinks
              role="navigation"
              aria-label="Navegação principal"
              $highlightLastLink
            >
              {links[0]?.map((link) => (
                <Link
                  key={link.label}
                  onClick={link.onClick}
                  aria-label={
                    link.ariaLabel || `Navegar para ${t(`links.${link.label}`)}`
                  }
                  role="menuitem"
                  paddingY={8}
                  paddingX={12}
                  isActive={isLinkActive(link.route)}
                >
                  {t(`links.${link.label}`)}
                </Link>
              ))}
            </NavLinks>
          )}

          {isMobile && (
            <div
              style={{
                position: 'absolute',
                top: -10,
                left: 340,
              }}
            >
              <button
                type="button"
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
                style={{
                  cursor: 'pointer',
                  width: '24px',
                  height: '24px',
                  padding: 0,
                  border: 0,
                  background: 'transparent',
                }}
              >
                <img
                  src={menuIcon}
                  alt=""
                  aria-hidden="true"
                  style={{ width: '24px', height: '24px' }}
                />
              </button>

              {menuOpen && (
                <NavLinks
                  role="navigation"
                  aria-label="Navegação principal"
                  style={{
                    position: 'absolute',
                    top: '40px',
                    right: 375,
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    background: '#fff',
                    padding: '1rem',
                    borderRadius: '8px',
                    width: '200px',
                    zIndex: 9999,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  }}
                >
                  {links[0]?.map((link) => (
                    <Link
                      key={link.label}
                      onClick={() => {
                        link.onClick?.();
                        setMenuOpen(false);
                      }}
                      aria-label={
                        link.ariaLabel ||
                        `Navegar para ${t(`links.${link.label}`)}`
                      }
                      role="menuitem"
                      paddingY={8}
                      paddingX={12}
                      isActive={isLinkActive(link.route)}
                    >
                      {t(`links.${link.label}`)}
                    </Link>
                  ))}
                </NavLinks>
              )}
            </div>
          )}
        </div>
      </div>

      {isAreaPage && (
        <NavLinks
          role="navigation"
          aria-label="Navegação secundaria"
          style={{ gap: '3.35rem', marginTop: '1.5rem', marginBottom: '1rem' }}
        >
          {links[1]?.map((link) => (
            <Link
              key={link.label}
              onClick={link.onClick}
              aria-label={
                link.ariaLabel || `Navegar para ${t(`links.${link.label}`)}`
              }
              role="menuitem"
              paddingY={8}
              paddingX={12}
              isLastLink={link.label === 'supportUs'}
              isActive={isLinkActive(link.route)}
            >
              {t(`links.${link.label}`)}
            </Link>
          ))}
        </NavLinks>
      )}
    </HeaderContainer>
  );
};

export default Header;
