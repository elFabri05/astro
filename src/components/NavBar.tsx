import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/navBar.module.css';
import useMediaQuery from '@/hooks/useMediaQuery';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageMenu from './LanguageMenu';
import useTranslation from 'next-translate/useTranslation';

const NavBar: React.FC = () => {
  const { t } = useTranslation('common');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuIsOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isTablet = useMediaQuery(720);

  return (
    <>
      <header>
        <nav className={styles.navBar}>
          <Image
            src='/assets/navBar-icon.png'
            alt='Nav bar logo'
            width={50}
            height={50}
            className={styles.navBarIcon}
          />
          {isTablet ? (
            <>
              <IconButton
                aria-label='more'
                aria-controls='long-menu'
                aria-haspopup='true'
                onClick={handleClick}
                sx={{ color: 'rgb(121, 89, 19)' }}
              >
                <MenuIcon sx={{ fontSize: '35px' }} />
              </IconButton>
              <Menu
                id='long-menu'
                anchorEl={anchorEl}
                keepMounted
                open={menuIsOpen}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link href='/' className={styles.link}>
                    {t('home')}
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href='/sessions' className={styles.link}>
                    {t('sessions')}
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href='/aboutme' className={styles.link}>
                    {t('about')}
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href='/contact' className={styles.link}>
                    {t('contact')}
                  </Link>
                </MenuItem>
                <LanguageMenu />  
              </Menu>
            </>
          ) : (
            <div style={{ display: 'flex', marginRight: '1rem' }}>
              <ul>
                <li>
                  <Link href='/' className={styles.link}>
                    {t('home')}
                  </Link>
                </li>
                <li>
                  <Link href='/sessions' className={styles.link}>
                    {t('sessions')}
                  </Link>
                </li>
                <li>
                  <Link href='/aboutme' className={styles.link}>
                    {t('about')}
                  </Link>
                </li>
                <li>
                  <Link href='/contact' className={styles.link}>
                    {t('contact')}
                  </Link>
                </li>
              </ul>
              <LanguageMenu />
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default NavBar;
