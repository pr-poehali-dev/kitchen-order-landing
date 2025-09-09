// Google Forms Configuration
// Создайте Google Form и замените URL ниже

export const GOOGLE_FORMS_CONFIG = {
  // URL для отправки данных в Google Forms (изменен viewform на formResponse)
  FORM_URL: 'https://docs.google.com/forms/d/e/1FAIpQLSeKyvmyrJt6PtjUoohPy9ZN7Wh9qhnVyuA916pJCQNmZavSFw/formResponse',
  
  // Попробуем стандартные entry ID (будем тестировать)
  PHONE_FIELD: 'entry.1045781291', // Первое поле (телефон)
  MESSAGE_FIELD: 'entry.839337160' // Второе поле (сообщение)
};

// Инструкция по настройке:
// 1. Создайте Google Form: forms.google.com
// 2. Добавьте поле "Телефон" (обязательное)
// 3. Добавьте поле "Сообщение" (опционально)
// 4. Получите ссылку для ответов
// 5. Найдите entry ID для каждого поля (через F12 в браузере)