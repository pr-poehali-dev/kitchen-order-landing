import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface PortfolioProps {
  onImageClick: (imageUrl: string) => void;
}

export default function Portfolio({ onImageClick }: PortfolioProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://cdn.poehali.dev/files/b2504485-132d-4265-9251-c489061e6339.jpeg",
    "https://cdn.poehali.dev/files/50c24e58-864a-489d-8685-698974615f6a.jpeg",
    "https://cdn.poehali.dev/files/4fff06f3-90bf-493f-a0ac-895258c4ce22.jpeg",
    "https://cdn.poehali.dev/files/f633cb99-6659-45cc-bb21-ddb60cf74c70.jpeg",
    "https://cdn.poehali.dev/files/550b829b-e735-4ded-95ae-cf61abecc26b.jpeg",
    "https://cdn.poehali.dev/files/7500041f-84e8-4fa8-9718-b6d3325cad64.jpeg",
    "https://cdn.poehali.dev/files/5a6154a6-39d1-4509-b593-79350c69758c.jpeg"
  ];

  return (
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
              {images.map((image, index) => (
                <div key={index} className="min-w-full">
                  <img 
                    src={image} 
                    alt={`Проект ${index + 1}`}
                    className="w-full aspect-[4/3] object-cover cursor-pointer hover:brightness-110 transition-all"
                    onClick={() => onImageClick(image)}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={() => setCurrentSlide(prev => prev === 0 ? images.length - 1 : prev - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
          >
            <Icon name="ChevronLeft" size={24} />
          </button>
          <button 
            onClick={() => setCurrentSlide(prev => prev === images.length - 1 ? 0 : prev + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
          >
            <Icon name="ChevronRight" size={24} />
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
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
  );
}