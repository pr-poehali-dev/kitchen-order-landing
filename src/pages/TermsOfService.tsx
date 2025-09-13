import React from 'react';
import { ArrowLeft, FileText, CheckCircle, AlertTriangle, Scale, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TermsOfService = () => {
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
              <Icon name="FileText" className="text-blue-600" size={32} />
              <h1 className="text-3xl font-bold text-gray-900">
                Пользовательское соглашение
              </h1>
            </div>
            
            <p className="text-gray-600 text-sm mb-8">
              Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Icon name="Users" className="text-blue-600" size={20} />
                  1. Общие положения
                </h2>
                <div className="text-gray-700 space-y-3">
                  <p>
                    Настоящее Пользовательское соглашение регулирует отношения между 
                    кухонной студией и пользователями сайта.
                  </p>
                  <p>
                    Используя сайт, вы соглашаетесь с условиями данного соглашения. 
                    Если вы не согласны с условиями, не используйте сайт.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-green-600" size={20} />
                  2. Предоставляемые услуги
                </h2>
                <div className="text-gray-700">
                  <p className="mb-3">Мы предоставляем:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Консультации по дизайну кухни</li>
                    <li>Изготовление кухонной мебели на заказ</li>
                    <li>Установку и монтаж кухонных гарнитуров</li>
                    <li>Гарантийное и послегарантийное обслуживание</li>
                    <li>Информационные услуги через сайт</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  3. Права и обязанности сторон
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Наши обязательства:</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                      <li>Предоставлять качественные услуги</li>
                      <li>Соблюдать сроки выполнения работ</li>
                      <li>Обеспечивать гарантию на изделия</li>
                      <li>Конфиденциально обрабатывать ваши данные</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ваши обязательства:</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                      <li>Предоставлять достоверную информацию</li>
                      <li>Соблюдать сроки оплаты</li>
                      <li>Обеспечить доступ к месту установки</li>
                      <li>Не использовать сайт во вред третьим лицам</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  4. Порядок оказания услуг
                </h2>
                <div className="text-gray-700 space-y-3">
                  <p>
                    Оказание услуг осуществляется на основании договора, 
                    заключаемого после получения заявки и согласования условий.
                  </p>
                  <p>
                    Стоимость и сроки выполнения работ определяются индивидуально 
                    и фиксируются в договоре.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  5. Гарантии и ответственность
                </h2>
                <div className="text-gray-700 space-y-3">
                  <p>
                    На изготовленную мебель предоставляется гарантия 2 года 
                    с момента приемки работ.
                  </p>
                  <p>
                    Гарантия не распространяется на дефекты, возникшие в результате 
                    неправильной эксплуатации или механических повреждений.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Icon name="AlertTriangle" className="text-amber-600" size={20} />
                  6. Ограничение ответственности
                </h2>
                <div className="text-gray-700 space-y-3">
                  <p>
                    Мы не несем ответственность за:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Временную недоступность сайта</li>
                    <li>Действия третьих лиц</li>
                    <li>Форс-мажорные обстоятельства</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  7. Интеллектуальная собственность
                </h2>
                <div className="text-gray-700 space-y-3">
                  <p>
                    Все материалы сайта (дизайн, тексты, изображения) являются 
                    интеллектуальной собственностью и охраняются авторским правом.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Icon name="Scale" className="text-blue-600" size={20} />
                  8. Разрешение споров
                </h2>
                <div className="text-gray-700 space-y-3">
                  <p>
                    Все споры решаются путем переговоров. При невозможности 
                    достижения соглашения спор передается в суд по месту нахождения 
                    исполнителя.
                  </p>
                  <p>
                    Отношения регулируются законодательством Российской Федерации.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  9. Заключительные положения
                </h2>
                <div className="text-gray-700 space-y-3">
                  <p>
                    Соглашение может быть изменено в одностороннем порядке. 
                    Изменения вступают в силу с момента размещения на сайте.
                  </p>
                  <p>
                    При изменении соглашения пользователи уведомляются через сайт.
                  </p>
                  <p>
                    <strong>Дата вступления в силу:</strong> {new Date().toLocaleDateString('ru-RU')}
                  </p>
                </div>
              </section>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Контактная информация</h3>
                <div className="text-gray-700 space-y-1">
                  <p>Телефон: +7 (XXX) XXX-XX-XX</p>
                  <p>Email: info@kitchen-studio.ru</p>
                  <p>Адрес: г. Москва, ул. Примерная, д. 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;