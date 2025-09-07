import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const pricesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            
            // Показываем модальное окно после просмотра цен
            if (entry.target.id === 'prices-section') {
              setTimeout(() => {
                setShowModal(true);
              }, 2000);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const portfolioItems = [
    {
      title: "Деревянная кухня",
      image: "/img/9a685fdb-cbab-481c-b20f-737dc790df9b.jpg",
      description: "Тепло натурального дерева"
    },
    {
      title: "Неоклассическая кухня",
      image: "/img/996514bc-959f-4e8f-ad92-f5b1971200b0.jpg", 
      description: "Элегантность и изысканность"
    },
    {
      title: "Хай-тек кухня",
      image: "/img/dedade47-4955-49ef-80fa-d822ec7deb3c.jpg",
      description: "Технологии и современный дизайн"
    },
    {
      title: "Современная белая кухня",
      image: "/img/a57ce2af-c0dd-4a0e-b14a-ea9dc90a155a.jpg",
      description: "Минимализм с мраморными столешницами"
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
    <div className="min-h-screen bg-gray-50 font-open-sans">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="https://cdn.poehali.dev/files/bd995261-e053-426f-8067-527df733980c.jpeg" 
                alt="VOODI Logo" 
                className="h-8 w-auto"
              />
              <div className="text-2xl font-montserrat font-bold text-primary">
                ВудиМебель
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">Портфолио</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>

              <a href="#guarantees" className="text-gray-700 hover:text-primary transition-colors">Гарантии</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-20 min-h-[80vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://cdn.poehali.dev/files/700a72d3-21a4-4730-987e-81268a6d32f4.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 text-white">
            Современные кухни на заказ
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ваша идеальная кухня — уже в шаге от реальности! Забудьте о шаблонах и компромиссах. Проектируются, изготавливаются и устанавливаются «под ключ» — вы только наслаждаетесь результатом.
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto font-medium">
            Пора заказать кухню, которая создана именно для вас
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90">
              <Icon name="Phone" className="mr-2" />
              Заказать проект
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-white animate-on-scroll opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold mb-6">Наши работы</h2>
            <p className="text-xl text-gray-600">Посмотрите на реализованные проекты</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {[
                  "https://cdn.poehali.dev/files/b2504485-132d-4265-9251-c489061e6339.jpeg",
                  "https://cdn.poehali.dev/files/50c24e58-864a-489d-8685-698974615f6a.jpeg",
                  "https://cdn.poehali.dev/files/4fff06f3-90bf-493f-a0ac-895258c4ce22.jpeg",
                  "https://cdn.poehali.dev/files/f633cb99-6659-45cc-bb21-ddb60cf74c70.jpeg",
                  "https://cdn.poehali.dev/files/550b829b-e735-4ded-95ae-cf61abecc26b.jpeg",
                  "https://cdn.poehali.dev/files/7500041f-84e8-4fa8-9718-b6d3325cad64.jpeg",
                  "https://cdn.poehali.dev/files/5a6154a6-39d1-4509-b593-79350c69758c.jpeg"
                ].map((image, index) => (
                  <div key={index} className="min-w-full">
                    <img 
                      src={image} 
                      alt={`Проект ${index + 1}`}
                      className="w-full aspect-[4/3] object-cover cursor-pointer hover:brightness-110 transition-all"
                      onClick={() => {
                        setLightboxImage(image);
                        setLightboxOpen(true);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={() => setCurrentSlide(prev => prev === 0 ? 6 : prev - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            <button 
              onClick={() => setCurrentSlide(prev => prev === 6 ? 0 : prev + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
            >
              <Icon name="ChevronRight" size={24} />
            </button>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'bg-primary scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-pastel-gray animate-on-scroll opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный цикл создания кухни</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white animate-on-scroll opacity-0" style={{animationDelay: `${index * 150}ms`}}>
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

      {/* Guarantees */}
      <section id="guarantees" className="py-20 bg-white animate-on-scroll opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">Гарантии качества</h2>
            <p className="text-xl text-gray-600">Мы уверены в качестве нашей работы</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-on-scroll opacity-0" style={{animationDelay: '0ms'}}>
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">12 месяцев гарантии</h3>
              <p className="text-gray-600">На всю мебель и фурнитуру</p>
            </div>
            <div className="text-center animate-on-scroll opacity-0" style={{animationDelay: '100ms'}}>
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">от 14 дней</h3>
              <p className="text-gray-600">Срок изготовления</p>
            </div>
            <div className="text-center animate-on-scroll opacity-0" style={{animationDelay: '200ms'}}>
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">500+ проектов</h3>
              <p className="text-gray-600">Довольных клиентов</p>
            </div>
            <div className="text-center animate-on-scroll opacity-0" style={{animationDelay: '300ms'}}>
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">10 лет</h3>
              <p className="text-gray-600">Опыта на рынке</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-soft-black text-white animate-on-scroll opacity-0">
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
                  <span>+7 993 252‑14‑75</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-primary" />
                  <span>Пн-Сб: 9:00 - 19:00</span>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-charcoal border-gray-600">
                <CardHeader>
                  <CardTitle className="text-white font-montserrat">Заказать звонок</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Ваше имя</Label>
                    <Input id="name" className="bg-gray-600 border-gray-500 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-300">Телефон</Label>
                    <Input id="phone" className="bg-gray-600 border-gray-500 text-white" />
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
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="https://cdn.poehali.dev/files/bd995261-e053-426f-8067-527df733980c.jpeg" 
              alt="VOODI Logo" 
              className="h-8 w-auto"
            />
            <div className="text-2xl font-montserrat font-bold text-primary">КУХНИ НА ЗАКАЗ</div>
          </div>
          <p className="text-gray-400">© 2024 Все права защищены</p>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button 
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <Icon name="X" size={32} />
          </button>
          
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <img 
              src={lightboxImage}
              alt="Увеличенное изображение"
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <Icon name="X" size={24} />
            </button>
            
            <div className="text-center mb-6">
              <div className="text-3xl font-montserrat font-bold text-primary mb-2">🎉 АКЦИЯ!</div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">Бесплатный замер + 3D проект</h3>
              <p className="text-gray-600">Оставьте свой номер телефона для связи и получите замер + 3D проект бесплатно</p>
            </div>
            
            <form className="space-y-4">
              <div>
                <Label htmlFor="modal-phone">Ваш номер телефона</Label>
                <Input 
                  id="modal-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (999) 123-45-67"
                  className="mt-1"
                />
              </div>
              
              <Button 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={(e) => {
                  e.preventDefault();
                  // Здесь можно добавить логику отправки формы
                  alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
                  setShowModal(false);
                  setPhone('');
                }}
              >
                <Icon name="Phone" className="mr-2" />
                Получить бесплатный замер
              </Button>
            </form>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </div>
        </div>
      )}
    </div>
  );
}