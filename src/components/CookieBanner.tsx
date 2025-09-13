import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from './ui/button';
import Icon from './ui/icon';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Icon name="Cookie" className="text-amber-600 mt-1 flex-shrink-0" size={20} />
          <div className="text-sm text-gray-700">
            <p className="font-medium mb-1">🍪 Мы используем cookie-файлы</p>
            <p>
              Для улучшения работы сайта, аналитики и персонализации. 
              Продолжая использовать сайт, вы соглашаетесь с{' '}
              <a href="/privacy" className="text-blue-600 hover:underline">
                Политикой конфиденциальности
              </a>{' '}
              и использованием cookie.
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={declineCookies}
            className="text-gray-600 hover:text-gray-800"
          >
            Отклонить
          </Button>
          <Button
            size="sm"
            onClick={acceptCookies}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Принять все
          </Button>
          <button
            onClick={declineCookies}
            className="p-1 text-gray-400 hover:text-gray-600"
            aria-label="Закрыть"
          >
            <Icon name="X" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;