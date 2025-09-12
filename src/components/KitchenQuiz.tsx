import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface QuizAnswer {
  question: number;
  answer: string;
  value?: any;
}

const KitchenQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedLayout, setSelectedLayout] = useState<string>('');
  const [selectedStyle, setSelectedStyle] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<string>('');
  const [selectedLength, setSelectedLength] = useState<string>('');

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
            Ответьте на 5 простых вопросов, и получите точную стоимость + 3D проект и замер бесплатно
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

        {currentQuestion > 4 && (
          <div className="text-center">
            <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Вопрос {currentQuestion} из 5
              </h3>
              <p className="text-gray-600">
                Ожидаем остальные вопросы квиза...
              </p>
              <div className="flex justify-center mt-6">
                <Button
                  onClick={prevQuestion}
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg"
                >
                  ← Назад
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default KitchenQuiz;