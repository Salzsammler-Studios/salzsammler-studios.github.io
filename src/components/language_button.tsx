import React from 'react';
import { useMediaQuery } from "react-responsive";
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LanguageButton: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language: string) => {
      i18n.changeLanguage(language);
    };

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    const location = useLocation();
    const isWhite = location.pathname === '/contact' && !isMobile;

    return (
        <div style={isMobile ? {}: {top: 8, right: 8, position: 'absolute', zIndex: 10}}>
            <a
                href="#"
                onClick={() => changeLanguage('en')}
                style={{ fontWeight: i18n.language === 'en' ? 'bold' : 'normal', color: isWhite ? 'background' : 'black'}}
            >
                EN
            </a>{' '}
            <span style={{color: isWhite ? 'background' : 'black'}}>|{' '}</span>
            <a
                href="#"
                onClick={() => changeLanguage('de')}
                style={{ fontWeight: i18n.language === 'de' ? 'bold' : 'normal', color: isWhite ? 'background' : 'black'}}
            >
                GER
            </a>
        </div>
    );
};

export default LanguageButton;