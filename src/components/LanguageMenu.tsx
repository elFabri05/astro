import React, { useState, MouseEvent, useEffect } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';
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
  const [currentLanguage, setCurrentLanguage] = useState(lang || 'en');
  const router = useRouter();

  useEffect(() => {
    setCurrentLanguage(lang || 'en');
  }, [lang]);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = async (language: string) => {
    await setLanguage(language);
    setCurrentLanguage(language);
    setAnchorEl(null);

    // Update the URL without navigation
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: language, shallow: true });
  };

  const menuIsOpen = Boolean(anchorEl);
  const languages = i18nConfig.locales;
  const remainingLanguages = languages.filter(lang => lang !== currentLanguage);

  const isTablet = !useMediaQuery(720);

  const getLanguageFullName = (code: string) => {
    const names: { [key: string]: string } = {
      en: 'English',
      fr: 'Français',
      es: 'Español',
      // Add more languages as needed
    };
    return names[code] || code.toUpperCase();
  };

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
        <span style={{ fontSize: '1.2rem' }}>{currentLanguage.toUpperCase()}</span>
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
            {getLanguageFullName(language)}
          </StyledMenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageMenu;