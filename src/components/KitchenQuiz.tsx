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
            💰 Рассчитайте кухню бесплатно за 5 минут
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ответьте на 5 простых вопросов, и получите точную стоимость вашей кухни
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