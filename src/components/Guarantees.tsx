import Icon from '@/components/ui/icon';

export default function Guarantees() {
  const guarantees = [
    {
      icon: "Shield",
      title: "12 месяцев гарантии",
      description: "На всю мебель и фурнитуру"
    },
    {
      icon: "Clock",
      title: "от 14 дней",
      description: "Срок изготовления"
    },
    {
      icon: "Award",
      title: "500+ проектов",
      description: "Довольных клиентов"
    },
    {
      icon: "Users",
      title: "10 лет",
      description: "Опыта на рынке"
    }
  ];

  return (
    <section id="guarantees" className="py-20 bg-white animate-on-scroll opacity-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">Гарантии качества</h2>
          <p className="text-xl text-gray-600">Мы уверены в качестве нашей работы</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="text-center animate-on-scroll opacity-0" style={{animationDelay: `${index * 100}ms`}}>
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={guarantee.icon} size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">{guarantee.title}</h3>
              <p className="text-gray-600">{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}