import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-pastel-gray to-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 text-charcoal">
          Кухни вашей
          <span className="text-soft-black block">мечты</span>
        </h1>
        <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
          Создаём уникальные кухни под заказ с современным дизайном и премиальными материалами. 
          От проекта до установки за 15 дней.
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
  );
}