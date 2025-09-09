// Google Forms Configuration
// Создайте Google Form и замените URL ниже

export const GOOGLE_FORMS_CONFIG = {
  // Замените на URL вашей Google Forms (после создания формы)
  FORM_URL: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse',
  
  // Замените на entry ID полей в вашей форме
  PHONE_FIELD: 'entry.123456789', // ID поля для телефона
  MESSAGE_FIELD: 'entry.987654321' // ID поля для сообщения (опционально)
};

// Инструкция по настройке:
// 1. Создайте Google Form: forms.google.com
// 2. Добавьте поле "Телефон" (обязательное)
// 3. Добавьте поле "Сообщение" (опционально)
// 4. Получите ссылку для ответов
// 5. Найдите entry ID для каждого поля (через F12 в браузере)