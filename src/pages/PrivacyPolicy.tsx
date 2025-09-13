import React from 'react';
import { ArrowLeft, Shield, Eye, Database, Users, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Button
            variant="ghost" 
            onClick={() => window.history.back()}
            className="mb-4"
          >
            <Icon name="ArrowLeft" className="mr-2" size={16} />
            Назад
          </Button>
          
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Shield" className="text-blue-600" size={32} />
              <h1 className="text-3xl font-bold text-gray-900">
                Политика конфиденциальности
              </h1>
            </div>
            
            <p className="text-gray-600 text-sm mb-8">
              Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Icon name="Eye" className="text-blue-600" size={20} />
                  1. Общие положения
                </h2>
                <div className="text-gray-700 space-y-3">
                  <p>
                    Настоящая Политика конфиденциальности определяет порядок обработки 
                    персональных данных пользователей сайта кухонной студии.
                  </p>
                  <p>
                    Мы обрабатываем персональные данные в соответствии с Федеральным законом 
                    от 27.07.2006 № 152-ФЗ "О персональных данных".
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Icon name="Database" className="text-blue-600" size={20} />
                  2. Какие данные мы собираем
                </h2>
                <div className="text-gray-700">
                  <p className="mb-3">При заполнении квиза и форм обратной связи мы собираем:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Имя и фамилию</li>
                    <li>Номер телефона</li>
                    <li>Предпочтительный способ связи (телефон/WhatsApp)</li>
                    <li>Ответы на вопросы квиза о предпочтениях</li>
                    <li>IP-адрес и данные cookie для аналитики</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Icon name="Users" className="text-blue-600" size={20} />
                  3. Цели обработки данных
                </h2>
                <div className="text-gray-700">
                  <p className="mb-3">Мы используем ваши данные для:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Связи с вами по вопросам заказа кухни</li>
                    <li>Подготовки персонального предложения</li>
                    <li>Отправки информации о наших услугах</li>
                    <li>Улучшения работы сайта и сервиса</li>
                    <li>Ведения статистики и аналитики</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  4. Cookie-файлы
                </h2>
                <div className="text-gray-700 space-y-3">
                  <p>
                    Мы используем cookie для улучшения работы сайта, аналитики посещений 
                    и персонализации контента.
                  </p>
                  <p>
                    Вы можете отключить cookie в настройках браузера, но это может 
                    ограничить функциональность сайта.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  5. Передача данных третьим лицам
                </h2>
                <div className="text-gray-700 space-y-3">
                  <p>
                    Мы не передаем ваши персональные данные третьим лицам, за исключением:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Случаев, предусмотренных законодательством РФ</li>
                    <li>Получения вашего явного согласия</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  6. Ваши права
                </h2>
                <div className="text-gray-700">
                  <p className="mb-3">Вы имеете право:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Получать информацию об обработке ваших данных</li>
                    <li>Требовать уточнения или удаления данных</li>
                    <li>Отозвать согласие на обработку</li>
                    <li>Обратиться в Роскомнадзор с жалобой</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Icon name="Phone" className="text-blue-600" size={20} />
                  7. Контактная информация
                </h2>
                <div className="text-gray-700 bg-blue-50 p-4 rounded-lg">
                  <p className="mb-2">
                    <strong>По вопросам обработки персональных данных обращайтесь:</strong>
                  </p>
                  <div className="space-y-1">
                    <p className="flex items-center gap-2">
                      <Icon name="Phone" size={16} />
                      Телефон: +7 (XXX) XXX-XX-XX
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Mail" size={16} />
                      Email: privacy@kitchen-studio.ru
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  8. Изменения политики
                </h2>
                <div className="text-gray-700 space-y-3">
                  <p>
                    Мы можем обновлять данную Политику конфиденциальности. 
                    О существенных изменениях мы уведомим на сайте.
                  </p>
                  <p>
                    <strong>Дата вступления в силу:</strong> {new Date().toLocaleDateString('ru-RU')}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;