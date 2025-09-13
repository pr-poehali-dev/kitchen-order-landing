import { useEffect } from 'react';

interface YandexMetricaProps {
  id: string;
}

declare global {
  interface Window {
    ym: (id: string, method: string, params?: any) => void;
  }
}

const YandexMetrica = ({ id }: YandexMetricaProps) => {
  useEffect(() => {
    // Создаем скрипт Яндекс.Метрики
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(${id}, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      });
    `;
    
    document.head.appendChild(script);

    // Добавляем noscript для счетчика
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<div><img src="https://mc.yandex.ru/watch/${id}" style="position:absolute; left:-9999px;" alt="" /></div>`;
    document.body.appendChild(noscript);

    // Очистка при размонтировании
    return () => {
      document.head.removeChild(script);
      document.body.removeChild(noscript);
    };
  }, [id]);

  return null;
};

// Функция для отправки целей
export const reachGoal = (goal: string, params?: any) => {
  if (window.ym) {
    window.ym('YOUR_COUNTER_ID', 'reachGoal', goal, params);
  }
};

export default YandexMetrica;