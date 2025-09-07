import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Services() {
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
  );
}