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

  const layouts = [
    {
      id: 'straight',
      name: 'Прямая',
      description: 'Кухня вдоль одной стены',
      image: '/img/ea376148-f8ab-4ba4-9929-85fea3f4265c.jpg'
    },
    {
      id: 'corner',
      name: 'Угловая',
      description: 'L-образная планировка',
      image: '/img/113acac4-cba6-490f-9110-685792fe983c.jpg'
    },
    {
      id: 'u-shaped',
      name: 'П-образная',
      description: 'Кухня на трёх стенах',
      image: '/img/8df89da8-d3a5-4f3c-ad43-56fc3a46e946.jpg'
    },
    {
      id: 'bar',
      name: 'С барной стойкой',
      description: 'Кухня с барной зоной',
      image: '/img/35c19f5a-fde6-4bf1-84dd-7ddec4ba249b.jpg'
    },
    {
      id: 'island',
      name: 'Островная',
      description: 'С центральным островом',
      image: '/img/93d63d99-4edc-4ade-9daf-edec3509ac4d.jpg'
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

  const nextQuestion = () => {
    if (selectedLayout) {
      setCurrentQuestion(2);
      // Здесь будет логика для следующих вопросов
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🧩 Квиз: Подберём идеальную кухню
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ответьте на 5 простых вопросов, и мы подберём оптимальное решение именно для вас
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
                  <div className="p-4">
                    <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={layout.image}
                        alt={`Планировка ${layout.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">
                      {layout.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {layout.description}
                    </p>
                    {selectedLayout === layout.id && (
                      <div className="mt-3 flex items-center text-orange-600">
                        <span className="text-sm font-medium">✓ Выбрано</span>
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

        {currentQuestion > 1 && (
          <div className="text-center">
            <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Вопрос {currentQuestion} из 5
              </h3>
              <p className="text-gray-600">
                Ожидаем остальные вопросы квиза...
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default KitchenQuiz;