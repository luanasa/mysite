
import React, { useState } from 'react';
import { useTranslation } from '../context/TranslationContext';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SupportedLanguage } from '../context/TranslationContext';

const TranslationButton = () => {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en' as SupportedLanguage, name: 'English' },
    { code: 'pt' as SupportedLanguage, name: 'Português' },
    { code: 'es' as SupportedLanguage, name: 'Español' },
    { code: 'fr' as SupportedLanguage, name: 'Français' },
    { code: 'ko' as SupportedLanguage, name: '한국어' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (langCode: SupportedLanguage) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background/90 transition-colors"
        aria-label="Change language"
      >
        <Globe size={18} />
        <span className="text-sm font-medium">{languages.find(lang => lang.code === language)?.name}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-background backdrop-blur-sm rounded-lg shadow-lg border border-border z-50 overflow-hidden">
          <ul className="py-1">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleLanguageChange(lang.code)}
                  className={cn(
                    "w-full text-left px-4 py-2 text-sm hover:bg-accent transition-colors",
                    language === lang.code && "bg-primary/10 font-medium"
                  )}
                >
                  {lang.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TranslationButton;
