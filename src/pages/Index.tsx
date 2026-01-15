import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [quantity, setQuantity] = useState(50);
  const [selectedFlavor, setSelectedFlavor] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerComment, setCustomerComment] = useState('');

  const pricePerCookie = 150;
  const totalPrice = quantity * pricePerCookie;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['hero', 'flavors', 'process', 'about', 'order', 'contacts'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const cookieBreakProgress = Math.min((scrollY - 300) / 500, 1);
  const showFilling = cookieBreakProgress > 0.3;

  const flavors = [
    {
      name: 'Дубайский шоколад',
      emoji: '🍫',
      description: 'Трендовый вкус с шоколадом высочайшего качества',
      color: 'from-amber-900 to-yellow-700'
    },
    {
      name: 'Красный бархат',
      emoji: '❤️',
      description: 'Нежный классический вкус с кремовой начинкой',
      color: 'from-red-600 to-pink-500'
    },
    {
      name: 'Груша с горгонзоллой',
      emoji: '🧀',
      description: 'Премиум сочетание сладкого и пикантного',
      color: 'from-green-600 to-blue-500'
    },
    {
      name: 'Фисташка малина',
      emoji: '🍇',
      description: 'Яркий микс орехового и ягодного вкусов',
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Сникерс',
      emoji: '🥜',
      description: 'Карамель, арахис и шоколад в одном кукисе',
      color: 'from-orange-700 to-amber-600'
    },
    {
      name: 'M&M\'s',
      emoji: '🌈',
      description: 'Разноцветные конфеты и тягучая начинка',
      color: 'from-blue-500 to-green-500'
    },
  ];

  const navItems = [
    { id: 'hero', label: 'Главная' },
    { id: 'flavors', label: 'Вкусы' },
    { id: 'process', label: 'Процесс' },
    { id: 'about', label: 'О нас' },
    { id: 'order', label: 'Заказ' },
    { id: 'contacts', label: 'Контакты' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-secondary/50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/IMG_6861.jpeg" 
                alt="СЛАДОВАРОВ логотип" 
                className="h-12 md:h-14 w-auto"
              />
            </div>
            <div className="hidden md:flex gap-6">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-primary-foreground/80 hover:text-primary-foreground transition-colors ${
                    activeSection === item.id ? 'font-semibold text-primary-foreground' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button 
              onClick={() => scrollToSection('order')}
              className="bg-accent hover:bg-accent/90 text-white font-semibold"
            >
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://cdn.poehali.dev/files/IMG_0837.jpeg" 
              alt="Кукисы фон" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 font-heading">
            Кукис ручной работы
          </h2>
          <p className="text-xl md:text-2xl text-primary/80 mb-8 max-w-3xl mx-auto">
            Оптовое кондитерское производство с тягучей начинкой и сезонными фруктами
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('flavors')}
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6"
            >
              Смотреть вкусы
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('order')}
              className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Оптовый заказ
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 relative min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-[600px] flex items-center justify-center">
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transform: `translateX(${-cookieBreakProgress * 60}px) rotate(${-cookieBreakProgress * 8}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <img 
                  src="https://cdn.poehali.dev/projects/8b45e5f3-d9fe-4c73-9f1d-8ebb7d29b1c2/files/8a82cc40-c134-4629-aaf7-01da4009ca16.jpg"
                  alt="Разлом кукиса"
                  className="w-full max-w-md md:max-w-lg rounded-3xl shadow-2xl"
                />
              </div>
              
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transform: `translateX(${cookieBreakProgress * 60}px) rotate(${cookieBreakProgress * 8}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <img 
                  src="https://cdn.poehali.dev/projects/8b45e5f3-d9fe-4c73-9f1d-8ebb7d29b1c2/files/8a82cc40-c134-4629-aaf7-01da4009ca16.jpg"
                  alt="Разлом кукиса"
                  className="w-full max-w-md md:max-w-lg rounded-3xl shadow-2xl"
                />
              </div>

              {showFilling && (
                <div 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={{
                    opacity: Math.min((cookieBreakProgress - 0.3) / 0.3, 1)
                  }}
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-white to-gray-100 rounded-full blur-xl animate-pulse"></div>
                </div>
              )}
            </div>
            
            <div className="text-center mt-8 animate-fade-in">
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">
                Тягучая нежная начинка
              </h3>
              <p className="text-xl text-primary/80">
                При разломе открывается мягкая начинка: маршмелоу, нутелла и другие премиум-начинки
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="flavors" className="py-20 px-4 bg-gradient-to-br from-accent/10 to-transparent">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-primary mb-4 font-heading animate-fade-in">
            Наши вкусы
          </h2>
          <p className="text-center text-xl text-primary/80 mb-16 max-w-2xl mx-auto">
            Украшены свежими сезонными фруктами, ягодами и шоколадом
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flavors.map((flavor, index) => (
              <Card 
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-3 bg-gradient-to-r ${flavor.color}`}></div>
                <div className="p-8">
                  <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                    {flavor.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 font-heading">
                    {flavor.name}
                  </h3>
                  <p className="text-primary/70">
                    {flavor.description}
                  </p>
                </div>
                <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <img 
              src="https://cdn.poehali.dev/projects/8b45e5f3-d9fe-4c73-9f1d-8ebb7d29b1c2/files/b7a6ab01-96c2-4d8a-9c16-3149e9361e4a.jpg"
              alt="Ассортимент кукисов"
              className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl animate-scale-in"
            />
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-primary mb-16 font-heading animate-fade-in">
            Процесс производства
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 space-y-8">
              {[
                { icon: 'Cookie', title: 'Ручное производство', desc: 'Каждый кукис делается вручную с любовью' },
                { icon: 'Sparkles', title: 'Премиум ингредиенты', desc: 'Только качественные продукты и свежие фрукты' },
                { icon: 'Heart', title: 'Уникальные рецепты', desc: 'Авторские сочетания вкусов и начинок' },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex-shrink-0 w-14 h-14 bg-accent rounded-full flex items-center justify-center">
                    <Icon name={item.icon} className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2 font-heading">{item.title}</h3>
                    <p className="text-primary/70 text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src="https://cdn.poehali.dev/projects/8b45e5f3-d9fe-4c73-9f1d-8ebb7d29b1c2/files/ce23b16d-1ea4-41d5-8dbd-68ad7e89431e.jpg"
                alt="Процесс производства"
                className="w-full rounded-3xl shadow-2xl animate-scale-in"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-accent/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 font-heading animate-fade-in">
            О производстве
          </h2>
          <div className="space-y-6 text-lg text-primary/80 animate-slide-up">
            <p className="leading-relaxed">
              <strong className="text-primary text-xl">СЛАДОВАРОВ</strong> — это оптовое кондитерское производство, где каждый кукис создаётся вручную с вниманием к деталям.
            </p>
            <p className="leading-relaxed">
              Мы специализируемся на кукисах премиум-класса с тягучими начинками — маршмелоу, нутелла и другие авторские варианты. Каждый кукис украшен свежими сезонными фруктами, ягодами и шоколадом.
            </p>
            <p className="leading-relaxed">
              В нашем ассортименте — трендовые вкусы: дубайский шоколад, красный бархат, груша с горгонзоллой, фисташка-малина, сникерс, M&M's. При разломе кукис открывается нежная мягкая начинка.
            </p>
          </div>
        </div>
      </section>

      <section id="order" className="py-20 px-4 relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://cdn.poehali.dev/files/IMG_3324.jpeg" 
            alt="Кукисы фон" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-primary mb-8 font-heading animate-fade-in">
            Оптовый заказ
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-2xl border-2 animate-scale-in">
              <h3 className="text-2xl font-bold text-primary mb-6 font-heading">Калькулятор заказа</h3>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="quantity" className="text-base font-semibold">Количество кукисов</Label>
                  <Input 
                    id="quantity"
                    type="number" 
                    min="50"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(50, parseInt(e.target.value) || 50))}
                    className="mt-2 text-lg"
                  />
                  <p className="text-sm text-primary/60 mt-1">Минимальный заказ: 50 шт</p>
                </div>

                <div>
                  <Label htmlFor="flavor" className="text-base font-semibold">Выберите вкус</Label>
                  <select 
                    id="flavor"
                    value={selectedFlavor}
                    onChange={(e) => setSelectedFlavor(e.target.value)}
                    className="w-full mt-2 px-4 py-3 rounded-lg border-2 border-input bg-background text-lg"
                  >
                    <option value="">Выберите вкус</option>
                    {flavors.map((flavor, idx) => (
                      <option key={idx} value={flavor.name}>{flavor.emoji} {flavor.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="name" className="text-base font-semibold">Ваше имя</Label>
                  <Input 
                    id="name"
                    type="text" 
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Иван Иванов"
                    className="mt-2 text-lg"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base font-semibold">Телефон</Label>
                  <Input 
                    id="phone"
                    type="tel" 
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="+7 (XXX) XXX-XX-XX"
                    className="mt-2 text-lg"
                  />
                </div>

                <div>
                  <Label htmlFor="comment" className="text-base font-semibold">Комментарий (необязательно)</Label>
                  <Textarea 
                    id="comment"
                    value={customerComment}
                    onChange={(e) => setCustomerComment(e.target.value)}
                    placeholder="Дополнительные пожелания к заказу"
                    className="mt-2 text-lg min-h-24"
                  />
                </div>

                <div className="bg-accent/10 rounded-xl p-6 border-2 border-accent/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg text-primary/80">Цена за 1 шт:</span>
                    <span className="text-xl font-bold text-primary">{pricePerCookie} ₽</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-accent/20">
                    <span className="text-xl font-bold text-primary font-heading">Итого:</span>
                    <span className="text-3xl font-bold text-accent">{totalPrice.toLocaleString()} ₽</span>
                  </div>
                </div>

                <Button 
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6"
                  disabled={!customerName || !customerPhone || !selectedFlavor}
                >
                  Отправить заявку
                </Button>
              </div>
            </Card>

            <Card className="p-8 shadow-2xl border-2 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-primary mb-6 font-heading">Условия заказа</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Package" className="text-accent flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2 font-heading">Минимальный заказ</h4>
                    <p className="text-primary/70">От 50 штук. Возможна доставка по Сочи</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-accent flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2 font-heading">Сроки производства</h4>
                    <p className="text-primary/70">2-3 дня с момента подтверждения заказа</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Star" className="text-accent flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2 font-heading">Индивидуальный подход</h4>
                    <p className="text-primary/70">Возможность создания уникальных вкусов под ваш запрос</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Truck" className="text-accent flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2 font-heading">Доставка</h4>
                    <p className="text-primary/70">Бесплатная доставка при заказе от 100 шт</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
                  <img 
                    src="https://cdn.poehali.dev/files/67be92e6-e63f-40cd-997c-39e348515e1a.jpeg" 
                    alt="Кукисы с начинкой" 
                    className="w-full rounded-lg shadow-lg mb-4"
                  />
                  <p className="text-sm text-primary/70 text-center italic">
                    Все кукисы украшены вручную свежими ингредиентами
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 font-heading animate-fade-in">
            Контакты
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: 'Phone', title: 'Телефон', info: '+7 (XXX) XXX-XX-XX' },
              { icon: 'Mail', title: 'Email', info: 'info@sladovarov.ru' },
              { icon: 'MapPin', title: 'Адрес', info: 'Москва, Россия' },
            ].map((item, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex w-16 h-16 bg-accent rounded-full items-center justify-center mb-4">
                  <Icon name={item.icon} className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 font-heading">{item.title}</h3>
                <p className="text-primary-foreground/80">{item.info}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-6 justify-center">
            {['Instagram', 'Send', 'Facebook'].map((social, index) => (
              <button
                key={index}
                className="w-14 h-14 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Icon name={social} className="text-primary-foreground" size={24} />
              </button>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/files/IMG_6861.jpeg" 
                alt="СЛАДОВАРОВ логотип" 
                className="h-20 md:h-24 w-auto"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-primary-foreground/80 mb-2">
                © 2025 СЛАДОВАРОВ. Оптовое кондитерское производство
              </p>
              <p className="text-primary-foreground/60 text-sm">
                г. Сочи
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;