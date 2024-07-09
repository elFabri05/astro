import React, { useState, MouseEvent } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import useTranslation from 'next-translate/useTranslation';
import useMediaQuery from '../hooks/useMediaQuery';
import { useRouter } from 'next/router';
import { styled } from '@mui/system';
import i18nConfig from '../../i18n.json';

const StyledMenuItem = styled(MenuItem)({
  fontSize: '1.2rem', 
  color: 'rgb(19, 101, 121)',
});

const LanguageMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { t, lang } = useTranslation('common');
  const currentLanguage = (lang || 'en').toUpperCase();
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language: string) => {
    const locale = language.toLowerCase();
    router.push(router.pathname, router.asPath, { locale });
    setAnchorEl(null);
  };

  const menuIsOpen = Boolean(anchorEl);
  const languages = i18nConfig.locales.map(locale => locale.toUpperCase());
  const remainingLanguages = languages.filter(lang => lang !== currentLanguage);

  const isTablet = !useMediaQuery(720);

  return (
    <>
      <IconButton
        aria-label={t('language-selection')}
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
