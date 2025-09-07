import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
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
          Кухня на заказ
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Создаём уникальные кухни под заказ с современным дизайном и премиальными материалами. 
          От проекта до установки за 15 дней.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90">
            <Icon name="Phone" className="mr-2" />
            Заказать проект
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
            <Icon name="Phone" className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
}