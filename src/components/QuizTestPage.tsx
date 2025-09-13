import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const QuizTestPage = () => {
  const [testData, setTestData] = useState<any[]>([]);

  const handleTestSubmit = async () => {
    const mockQuizData = {
      name: 'Тест Тестов',
      phone: '+7 999 123-45-67',
      contactMethod: 'whatsapp',
      answers: [
        { question: 1, answer: 'Угловая планировка' },
        { question: 2, answer: 'Скандинавский стиль' },
        { question: 3, answer: 'Нет готового проекта' },
        { question: 4, answer: '2-3 метра' },
        { question: 5, answer: 'Скидка 15%' }
      ]
    };

    const message = `🎯 ТЕСТОВАЯ заявка с квиза!

👤 Имя: ${mockQuizData.name}
📱 Телефон: ${mockQuizData.phone}
📞 Способ связи: ${mockQuizData.contactMethod === 'phone' ? 'Телефон' : 'WhatsApp'}

📋 Ответы квиза:
${mockQuizData.answers.map((answer, index) => 
  `${index + 1}. ${answer.answer}`
).join('\n')}

📅 Дата: ${new Date().toLocaleString('ru-RU')}`;

    try {
      await navigator.clipboard.writeText(message);
      alert('✅ ТЕСТОВЫЕ данные скопированы в буфер!\n\n📋 Отправьте их боту @voodi_leads_bot для проверки.');
      
      // Добавляем в список отправленных
      setTestData(prev => [...prev, {
        timestamp: new Date().toLocaleString('ru-RU'),
        data: mockQuizData,
        message: message
      }]);
    } catch (error) {
      console.log('📋 ТЕСТОВЫЕ ДАННЫЕ:');
      console.log(message);
      alert('✅ Тестовые данные выведены в консоль (F12)');
    }
  };

  const clearTestData = () => {
    setTestData([]);
    localStorage.removeItem('kitchenQuizData');
    alert('🗑️ Тестовые данные очищены');
  };

  const loadRealData = () => {
    const realData = JSON.parse(localStorage.getItem('kitchenQuizData') || '[]');
    if (realData.length > 0) {
      setTestData(realData.map(item => ({
        timestamp: new Date(item.timestamp).toLocaleString('ru-RU'),
        data: {
          name: item.contact.name,
          phone: item.contact.phone,
          contactMethod: item.contact.contactMethod,
          answers: item.answers
        },
        message: `Реальные данные от ${new Date(item.timestamp).toLocaleString('ru-RU')}`
      })));
      alert(`📊 Загружено ${realData.length} реальных заявок`);
    } else {
      alert('📭 Реальных заявок пока нет');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 mb-6">
          <h1 className="text-2xl font-bold mb-4">🧪 Тест отправки данных квиза</h1>
          
          <div className="flex gap-4 mb-6">
            <Button onClick={handleTestSubmit} className="bg-blue-600 hover:bg-blue-700">
              📤 Отправить тестовые данные
            </Button>
            <Button onClick={loadRealData} variant="outline">
              📊 Загрузить реальные заявки
            </Button>
            <Button onClick={clearTestData} variant="outline" className="text-red-600">
              🗑️ Очистить данные
            </Button>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-yellow-800 mb-2">📝 Инструкция:</h3>
            <ol className="text-sm text-yellow-700 space-y-1">
              <li>1. Нажмите "Отправить тестовые данные"</li>
              <li>2. Данные скопируются в буфер обмена</li>
              <li>3. Отправьте их боту @voodi_leads_bot в Telegram</li>
              <li>4. Проверьте, пришло ли сообщение</li>
            </ol>
          </div>
        </Card>

        {testData.length > 0 && (
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">📋 История отправок ({testData.length})</h2>
            
            <div className="space-y-4">
              {testData.map((item, index) => (
                <div key={index} className="border rounded-lg p-4 bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm text-gray-500">#{index + 1}</span>
                    <span className="text-sm text-gray-500">{item.timestamp}</span>
                  </div>
                  
                  <div className="mb-2">
                    <strong>Имя:</strong> {item.data.name}<br/>
                    <strong>Телефон:</strong> {item.data.phone}<br/>
                    <strong>Способ связи:</strong> {item.data.contactMethod}
                  </div>
                  
                  <details className="text-sm">
                    <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
                      📄 Показать полное сообщение
                    </summary>
                    <pre className="mt-2 bg-gray-50 p-2 rounded text-xs overflow-auto">
                      {item.message}
                    </pre>
                  </details>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default QuizTestPage;