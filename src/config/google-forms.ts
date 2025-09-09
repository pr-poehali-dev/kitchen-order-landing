// Google Forms Configuration
// Создайте Google Form и замените URL ниже

export const GOOGLE_FORMS_CONFIG = {
  // URL для отправки данных в Google Forms (новая форма)
  FORM_URL: 'https://docs.google.com/forms/d/e/1FAIpQLScGynP0ngq01VWZc4vsKfRmPGxX_EmWCEAFi8PtFYYwTMPUmw/formResponse',
  
  // Попробуем самые частые entry ID для Google Forms
  PHONE_FIELD: 'entry.2005620554', // Поле для телефона
  MESSAGE_FIELD: 'entry.1166974658' // Поле для сообщения
};

// Инструкция по настройке:
// 1. Создайте Google Form: forms.google.com
// 2. Добавьте поле "Телефон" (обязательное)
// 3. Добавьте поле "Сообщение" (опционально)
// 4. Получите ссылку для ответов
// 5. Найдите entry ID для каждого поля (через F12 в браузере)