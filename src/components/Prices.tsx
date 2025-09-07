import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface PricesProps {
  onPricesViewed: () => void;
}

export default function Prices({ onPricesViewed }: PricesProps) {
  return (
    <section id="prices-section" className="py-20 bg-pastel-blue animate-on-scroll opacity-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">Наши цены</h2>
          <p className="text-xl text-gray-600">Прозрачная система ценообразования</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="relative animate-on-scroll opacity-0" style={{animationDelay: '0ms'}}>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-montserrat">Эконом</CardTitle>
              <div className="text-4xl font-bold text-primary font-montserrat">от 35,000₽</div>
              <p className="text-gray-600">за м/пгн</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={20} className="text-green-500" />
                <span>ЛДСП фасады</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={20} className="text-green-500" />
                <span>Базовая фурнитура</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={20} className="text-green-500" />
                <span>Стандартная столешница</span>
              </div>
            </CardContent>
          </Card>

          <Card className="relative border-primary border-2 animate-on-scroll opacity-0" style={{animationDelay: '200ms'}}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary px-3 py-1">Популярный</Badge>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-montserrat">Комфорт</CardTitle>
              <div className="text-4xl font-bold text-primary font-montserrat">от 55,000₽</div>
              <p className="text-gray-600">за м/пгн</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={20} className="text-green-500" />
                <span>МДФ фасады</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={20} className="text-green-500" />
                <span>Качественная фурнитура</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={20} className="text-green-500" />
                <span>Кварцевая столешница</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={20} className="text-green-500" />
                <span>Встроенная техника</span>
              </div>
            </CardContent>
          </Card>

          <Card className="relative animate-on-scroll opacity-0" style={{animationDelay: '400ms'}}>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-montserrat">Премиум</CardTitle>
              <div className="text-4xl font-bold text-primary font-montserrat">от 75,000₽</div>
              <p className="text-gray-600">за м/пгн</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={20} className="text-green-500" />
                <span>Массив дерева</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={20} className="text-green-500" />
                <span>Премиум фурнитура</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={20} className="text-green-500" />
                <span>Натуральный камень</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={20} className="text-green-500" />
                <span>Техника премиум класса</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}