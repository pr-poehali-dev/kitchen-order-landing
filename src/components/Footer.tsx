import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <>
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
    </>
  );
}