import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface QuizAnswer {
  question: number;
  answer: string;
  value?: any;
}

interface ContactData {
  name: string;
  phone: string;
  contactMethod: 'phone' | 'whatsapp';
}

const KitchenQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedLayout, setSelectedLayout] = useState<string>('');
  const [selectedStyle, setSelectedStyle] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<string>('');
  const [selectedLength, setSelectedLength] = useState<string>('');
  const [selectedGift, setSelectedGift] = useState<string>('');
  const [showContactForm, setShowContactForm] = useState<boolean>(false);
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    contactMethod: 'phone'
  });

  const layouts = [
    {
      id: 'straight',
      name: 'Прямая',
      description: 'Кухня вдоль одной стены',
      image: 'https://cdn.poehali.dev/files/dae6672f-9acd-4704-a054-e1fadfb4a8cf.jpeg'
    },
    {
      id: 'corner',
      name: 'Угловая',
      description: 'L-образная планировка',
      image: 'https://cdn.poehali.dev/files/00493a3d-2e57-43bf-8c8c-42cad84a8d3b.jpeg'
    },
    {
      id: 'u-shaped',
      name: 'П-образная',
      description: 'Кухня на трёх стенах',
      image: 'https://cdn.poehali.dev/files/0ef53cbf-930b-46cd-b669-1f316c9e8e4f.jpeg'
    },
    {
      id: 'bar',
      name: 'С барной стойкой',
      description: 'Кухня с барной зоной',
      image: 'https://cdn.poehali.dev/files/6099c05c-a1e8-4949-8331-c7e642f92078.jpeg'
    }
  ];

  const styles = [
    {
      id: 'modern',
      name: 'Модерн',
      description: 'Минимализм и чистые линии',
      image: '/img/5b6121e2-dbcd-4706-a7f8-d52823005ca9.jpg'
    },
    {
      id: 'scandinavian',
      name: 'Скандинавия',
      description: 'Уют и натуральные материалы',
      image: '/img/c2204b69-8502-4eec-9140-d8960e38b115.jpg'
    },
    {
      id: 'loft',
      name: 'Лофт',
      description: 'Индустриальный стиль',
      image: '/img/c89ba1e8-728c-44f7-9f02-bb745ec872e7.jpg'
    },
    {
      id: 'neoclassic',
      name: 'Неоклассика',
      description: 'Элегантность и традиции',
      image: '/img/c6834518-8703-475d-a55d-63ee25622620.jpg'
    }
  ];

  const projectOptions = [
    {
      id: 'yes',
      name: 'Да',
      description: 'У меня уже есть готовый проект'
    },
    {
      id: 'no',
      name: 'Нет',
      description: 'Нуждаюсь в помощи с разработкой'
    },
    {
      id: 'idea',
      name: 'Есть идея которую хочу реализовать',
      description: 'Имею представление о желаемом результате'
    }
  ];

  const lengthOptions = [
    {
      id: '2-3m',
      name: 'от 2 до 3 метров',
      description: 'Компактная кухня'
    },
    {
      id: '3-5m',
      name: 'от 3 до 5 метров',
      description: 'Средняя кухня'
    },
    {
      id: '5-7m',
      name: 'от 5 до 7 метров',
      description: 'Большая кухня'
    },
    {
      id: '7m+',
      name: '7+ метров',
      description: 'Очень большая кухня'
    }
  ];

  const handleLayoutSelect = (layoutId: string) => {
    setSelectedLayout(layoutId);
    const newAnswer: QuizAnswer = {
      question: 1,
      answer: layoutId,
      value: layouts.find(l => l.id === layoutId)?.name
    };
    
    setAnswers(prev => [...prev.filter(a => a.question !== 1), newAnswer]);
  };

  const handleStyleSelect = (styleId: string) => {
    setSelectedStyle(styleId);
    const newAnswer: QuizAnswer = {
      question: 2,
      answer: styleId,
      value: styles.find(s => s.id === styleId)?.name
    };
    
    setAnswers(prev => [...prev.filter(a => a.question !== 2), newAnswer]);
  };

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId);
    const newAnswer: QuizAnswer = {
      question: 3,
      answer: projectId,
      value: projectOptions.find(p => p.id === projectId)?.name
    };
    
    setAnswers(prev => [...prev.filter(a => a.question !== 3), newAnswer]);
  };

  const handleLengthSelect = (lengthId: string) => {
    setSelectedLength(lengthId);
    const newAnswer: QuizAnswer = {
      question: 4,
      answer: lengthId,
      value: lengthOptions.find(l => l.id === lengthId)?.name
    };
    
    setAnswers(prev => [...prev.filter(a => a.question !== 4), newAnswer]);
  };

  const nextQuestion = () => {
    if (currentQuestion === 1 && selectedLayout) {
      setCurrentQuestion(2);
    } else if (currentQuestion === 2 && selectedStyle) {
      setCurrentQuestion(3);
    } else if (currentQuestion === 3 && selectedProject) {
      setCurrentQuestion(4);
    } else if (currentQuestion === 4 && selectedLength) {
      setCurrentQuestion(5);
    } else if (currentQuestion === 5 && selectedGift) {
      setShowContactForm(true);
    }
  };

  const handleGiftSelect = (giftId: string) => {
    setSelectedGift(giftId);
    const newAnswer: QuizAnswer = {
      question: 5,
      answer: giftId === 'yes' ? 'Конечно да' : giftId === 'no' ? 'Нет' : 'Не надо',
      value: giftId
    };
    setAnswers([...answers.filter(a => a.question !== 5), newAnswer]);
  };

  const sendToTelegram = async (data: any) => {
    const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN'; // Замените на токен вашего бота
    const TELEGRAM_CHAT_ID = '800581249'; // Chat ID пользователя Oleg
    
    const message = `
🎯 *Новая заявка с квиза!*

👤 *Имя:* ${data.name}
📱 *Телефон:* ${data.phone}
📞 *Способ связи:* ${data.contactMethod === 'phone' ? 'Телефон' : 'WhatsApp'}

📋 *Ответы квиза:*
${answers.map((answer, index) => 
  `${index + 1}. ${getQuestionText(answer.question)}: ${answer.answer}`
).join('\n')}

📅 *Дата:* ${new Date().toLocaleString('ru-RU')}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown'
        })
      });

      if (response.ok) {
        return true;
      } else {
        throw new Error('Ошибка отправки в Telegram');
      }
    } catch (error) {
      console.error('Ошибка отправки в Telegram:', error);
      return false;
    }
  };

  const getQuestionText = (questionNumber: number): string => {
    const questions = {
      1: 'Планировка кухни',
      2: 'Стиль кухни', 
      3: 'Тип проекта',
      4: 'Длина гарнитура',
      5: 'Подарок (замер + 3D проект)'
    };
    return questions[questionNumber] || `Вопрос ${questionNumber}`;
  };

  const handleContactSubmit = async () => {
    const success = await sendToTelegram(contactData);
    
    if (success) {
      alert('✅ Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
    } else {
      alert('⚠️ Произошла ошибка при отправке. Попробуйте позвонить нам напрямую.');
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            💰 Рассчитайте кухню бесплатно за 5 минут
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ответьте на 5 простых вопросов — получите точную стоимость, 3D проект и замер бесплатно
          </p>
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step === currentQuestion
                      ? 'bg-orange-500 text-white'
                      : step < currentQuestion
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>

        {currentQuestion === 1 && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Вопрос 1 из 5: Выберите планировку кухни
              </h3>
              <p className="text-gray-600">
                Какая планировка больше всего подходит для вашего помещения?
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
              {layouts.map((layout) => (
                <Card
                  key={layout.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedLayout === layout.id
                      ? 'ring-2 ring-orange-500 bg-orange-50'
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => handleLayoutSelect(layout.id)}
                >
                  <div className="p-3">
                    <div className="aspect-square bg-gray-100 rounded-lg mb-2 overflow-hidden">
                      <img
                        src={layout.image}
                        alt={`Планировка ${layout.name}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="font-semibold text-sm text-gray-800 mb-1 text-center">
                      {layout.name}
                    </h4>
                    {selectedLayout === layout.id && (
                      <div className="flex justify-center text-orange-600">
                        <span className="text-xs font-medium">✓ Выбрано</span>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={nextQuestion}
                disabled={!selectedLayout}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              >
                Следующий вопрос →
              </Button>
            </div>
          </div>
        )}

        {currentQuestion === 2 && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Вопрос 2 из 5: Выберите стиль кухни
              </h3>
              <p className="text-gray-600">
                Какой стиль вам больше нравится?
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
              {styles.map((style) => (
                <Card
                  key={style.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedStyle === style.id
                      ? 'ring-2 ring-orange-500 bg-orange-50'
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => handleStyleSelect(style.id)}
                >
                  <div className="p-3">
                    <div className="aspect-square bg-gray-100 rounded-lg mb-2 overflow-hidden">
                      <img
                        src={style.image}
                        alt={`Стиль ${style.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-sm text-gray-800 mb-1 text-center">
                      {style.name}
                    </h4>
                    {selectedStyle === style.id && (
                      <div className="flex justify-center text-orange-600">
                        <span className="text-xs font-medium">✓ Выбрано</span>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex justify-center space-x-4">
              <Button
                onClick={prevQuestion}
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg"
              >
                ← Назад
              </Button>
              <Button
                onClick={nextQuestion}
                disabled={!selectedStyle}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              >
                Следующий вопрос →
              </Button>
            </div>
          </div>
        )}

        {currentQuestion === 3 && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Вопрос 3 из 5: У вас есть проект кухни?
              </h3>
              <p className="text-gray-600">
                Поможет нам понять, как лучше организовать работу
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
              {projectOptions.map((option) => (
                <Card
                  key={option.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedProject === option.id
                      ? 'ring-2 ring-orange-500 bg-orange-50'
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => handleProjectSelect(option.id)}
                >
                  <div className="p-6 text-center">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">
                      {option.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {option.description}
                    </p>
                    {selectedProject === option.id && (
                      <div className="mt-3 flex justify-center text-orange-600">
                        <span className="text-sm font-medium">✓ Выбрано</span>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex justify-center space-x-4">
              <Button
                onClick={prevQuestion}
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg"
              >
                ← Назад
              </Button>
              <Button
                onClick={nextQuestion}
                disabled={!selectedProject}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              >
                Следующий вопрос →
              </Button>
            </div>
          </div>
        )}

        {currentQuestion === 4 && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Вопрос 4 из 5: Укажите ориентировочную длину кухонного гарнитура
              </h3>
              <p className="text-gray-600">
                Поможет более точно рассчитать стоимость
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
              {lengthOptions.map((option) => (
                <Card
                  key={option.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedLength === option.id
                      ? 'ring-2 ring-orange-500 bg-orange-50'
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => handleLengthSelect(option.id)}
                >
                  <div className="p-6 text-center">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">
                      {option.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {option.description}
                    </p>
                    {selectedLength === option.id && (
                      <div className="mt-3 flex justify-center text-orange-600">
                        <span className="text-sm font-medium">✓ Выбрано</span>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex justify-center space-x-4">
              <Button
                onClick={prevQuestion}
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg"
              >
                ← Назад
              </Button>
              <Button
                onClick={nextQuestion}
                disabled={!selectedLength}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              >
                Следующий вопрос →
              </Button>
            </div>
          </div>
        )}

        {currentQuestion === 5 && !showContactForm && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Вопрос 5 из 5: За прохождение квиза дарим бесплатный замер + 3D проект
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                🎁 Закрепить подарок за вами?
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-3 mb-8 max-w-xl mx-auto">
              {[
                { id: 'yes', name: 'Конечно да!', description: 'Получить замер и проект бесплатно', emoji: '✅' },
                { id: 'no', name: 'Нет', description: 'Только расчет стоимости', emoji: '❌' },
                { id: 'later', name: 'Не надо', description: 'Передумал(а)', emoji: '🤔' }
              ].map((option) => (
                <Card
                  key={option.id}
                  className={`p-3 cursor-pointer transition-all border-2 ${
                    selectedGift === option.id
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                  onClick={() => handleGiftSelect(option.id)}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{option.emoji}</div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">{option.name}</h4>
                    <p className="text-xs text-gray-600">{option.description}</p>
                    {selectedGift === option.id && (
                      <div className="mt-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs inline-flex items-center">
                        <span className="text-sm font-medium">✓ Выбрано</span>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex justify-center space-x-4">
              <Button
                onClick={prevQuestion}
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg"
              >
                ← Назад
              </Button>
              <Button
                onClick={nextQuestion}
                disabled={!selectedGift}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              >
                Получить расчет →
              </Button>
            </div>
          </div>
        )}

        {showContactForm && (
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                🎉 Отлично! Оставьте контакты
              </h3>
              <p className="text-gray-600">
                Мы свяжемся с вами для уточнения деталей и предоставления расчета
              </p>
            </div>

            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    value={contactData.name}
                    onChange={(e) => setContactData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Номер телефона
                  </label>
                  <input
                    type="tel"
                    value={contactData.phone}
                    onChange={(e) => setContactData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Способ связи
                  </label>
                  <div className="flex space-x-2">
                    <Button
                      type="button"
                      variant={contactData.contactMethod === 'phone' ? 'default' : 'outline'}
                      onClick={() => setContactData(prev => ({ ...prev, contactMethod: 'phone' }))}
                      className="flex-1"
                    >
                      📞 Телефон
                    </Button>
                    <Button
                      type="button"
                      variant={contactData.contactMethod === 'whatsapp' ? 'default' : 'outline'}
                      onClick={() => setContactData(prev => ({ ...prev, contactMethod: 'whatsapp' }))}
                      className="flex-1"
                    >
                      💬 WhatsApp
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={handleContactSubmit}
                  disabled={!contactData.name || !contactData.phone}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg"
                >
                  Получить расчет и подарок 🎁
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default KitchenQuiz;