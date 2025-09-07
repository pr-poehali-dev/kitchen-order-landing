import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {

  const portfolioItems = [
    {
      title: "Современная белая кухня",
      image: "/img/067d759e-6cf9-46db-8f88-162779d4fd66.jpg",
      description: "Минимализм с мраморными столешницами"
    },
    {
      title: "Тёмная кухня с деревом",
      image: "/img/0736edf1-cee6-4298-927e-c7e8efee0d40.jpg", 
      description: "Индустриальный стиль с акцентами"
    },
    {
      title: "Скандинавская кухня",
      image: "/img/dd4ff85c-08b3-480c-9ce8-72fd5252e110.jpg",
      description: "Светлое дерево и уют"
    }
  ];

  const services = [
    {
      icon: "Ruler",
      title: "Дизайн-проект",
      description: "Полный дизайн с 3D визуализацией"
    },
    {
      icon: "Hammer",
      title: "Изготовление",
      description: "Производство мебели под заказ"
    },
    {
      icon: "Truck",
      title: "Доставка и монтаж",
      description: "Установка с гарантией качества"
    },
    {
      icon: "Settings",
      title: "Сервис",
      description: "Обслуживание после установки"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-montserrat font-bold text-primary">
              КУХНИ НА ЗАКАЗ
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">Портфолио</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>

              <a href="#guarantees" className="text-gray-700 hover:text-primary transition-colors">Гарантии</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 text-gray-900">
            Кухни вашей
            <span className="text-primary block">мечты</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Создаём уникальные кухни под заказ с современным дизайном и премиальными материалами. 
            От проекта до установки за 30 дней.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90">
              <Icon name="Phone" className="mr-2" />
              Заказать проект
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="Phone" className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">Наше портфолио</h2>
            <p className="text-xl text-gray-600">Более 500 реализованных проектов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="font-montserrat">{item.title}</CardTitle>
                  <p className="text-gray-600">{item.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный цикл создания кухни</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Prices */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">Наши цены</h2>
            <p className="text-xl text-gray-600">Прозрачная система ценообразования</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-montserrat">Эконом</CardTitle>
                <div className="text-4xl font-bold text-primary font-montserrat">от 25,000₽</div>
                <p className="text-gray-600">за м²</p>
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

            <Card className="relative border-primary border-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary px-3 py-1">Популярный</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-montserrat">Комфорт</CardTitle>
                <div className="text-4xl font-bold text-primary font-montserrat">от 45,000₽</div>
                <p className="text-gray-600">за м²</p>
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

            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-montserrat">Премиум</CardTitle>
                <div className="text-4xl font-bold text-primary font-montserrat">от 75,000₽</div>
                <p className="text-gray-600">за м²</p>
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

      {/* Guarantees */}
      <section id="guarantees" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">Гарантии качества</h2>
            <p className="text-xl text-gray-600">Мы уверены в качестве нашей работы</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">5 лет гарантии</h3>
              <p className="text-gray-600">На всю мебель и фурнитуру</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">30 дней</h3>
              <p className="text-gray-600">Срок изготовления</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">500+ проектов</h3>
              <p className="text-gray-600">Довольных клиентов</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">15 лет</h3>
              <p className="text-gray-600">Опыта на рынке</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300">Готовы обсудить ваш проект</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-montserrat font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-primary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-primary" />
                  <span>info@kitchen-design.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-primary" />
                  <span>Москва, ул. Дизайнерская, д. 15</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-primary" />
                  <span>Пн-Сб: 9:00 - 19:00</span>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white font-montserrat">Заказать звонок</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Ваше имя</Label>
                    <Input id="name" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-300">Телефон</Label>
                    <Input id="phone" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Заказать звонок
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-montserrat font-bold text-primary mb-4">КУХНИ НА ЗАКАЗ</div>
          <p className="text-gray-400">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}