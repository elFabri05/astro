import React, { useState, MouseEvent } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '../hooks/useMediaQuery';
import { useRouter } from 'next/router';
import { styled } from '@mui/system';

const StyledMenuItem = styled(MenuItem)({
  fontSize: '1.2rem', // Adjust the font size here
  color: 'rgb(19, 101, 121)',
});

const LanguageMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { i18n } = useTranslation();
  const currentLanguage = (i18n.language || 'en').toUpperCase();
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language.toLowerCase()).then(() => {
      router.push(router.pathname, router.asPath, { locale: language.toLowerCase() });
    });
    setAnchorEl(null);
  };

  const menuIsOpen = Boolean(anchorEl);
  const languages = ['EN', 'FR', 'ES'];
  const remainingLanguages = languages.filter(lang => lang !== currentLanguage);

  const isTablet = !useMediaQuery(720);

  return (
    <>
      <IconButton
        aria-label="language selection"
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ color: 'rgb(19, 101, 121)', marginLeft: '8px', ...(isTablet && { marginTop: '12px' }) }}
      >
        <LanguageIcon sx={{ marginRight: '4px' }} />
        <span style={{ fontSize: '1.2rem' }}>{currentLanguage}</span>
      </IconButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted
        open={menuIsOpen}
        onClose={handleClose}
      >
        {remainingLanguages.map(language => (
          <StyledMenuItem key={language} onClick={() => handleLanguageChange(language)}>
            {language}
          </StyledMenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageMenu;
