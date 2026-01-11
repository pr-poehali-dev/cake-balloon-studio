import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [portfolioImages, setPortfolioImages] = useState([
    'https://cdn.poehali.dev/projects/fa08a36c-5ec4-4d9a-a002-166bddc8c346/files/d1723c26-6b0e-4586-98f8-66b60b4f6d2e.jpg',
    'https://cdn.poehali.dev/projects/fa08a36c-5ec4-4d9a-a002-166bddc8c346/files/2605c21c-e8ae-4ffb-9cbc-ad80cf4965ed.jpg',
    'https://cdn.poehali.dev/projects/fa08a36c-5ec4-4d9a-a002-166bddc8c346/files/f0804bd9-d1b5-4e32-b721-95986617a553.jpg',
  ]);

  const services = [
    {
      icon: 'Cake',
      title: 'Торты на заказ',
      description: 'Авторские торты для любых мероприятий — от классики до современных дизайнов',
    },
    {
      icon: 'PartyPopper',
      title: 'Воздушные шары',
      description: 'Оформление праздников композициями из шаров, арки, букеты',
    },
    {
      icon: 'Palette',
      title: 'Мастер-классы',
      description: 'Обучение кондитерскому искусству в студии и онлайн для любого уровня',
    },
  ];

  const masterclasses = [
    {
      title: 'Декор тортов кремом',
      date: '15 января, 14:00',
      duration: '3 часа',
      price: '3 500 ₽',
    },
    {
      title: 'Муссовые торты',
      date: '22 января, 12:00',
      duration: '4 часа',
      price: '4 500 ₽',
    },
    {
      title: 'Работа с мастикой',
      date: '28 января, 15:00',
      duration: '2,5 часа',
      price: '3 000 ₽',
    },
  ];

  const priceList = [
    {
      category: 'Торты',
      items: [
        { name: 'Бисквитный торт', weight: '1 кг', price: '2 500 ₽' },
        { name: 'Муссовый торт', weight: '1 кг', price: '3 200 ₽' },
        { name: 'Свадебный торт', weight: '1 кг', price: '4 000 ₽' },
        { name: 'Детский торт с декором', weight: '1 кг', price: '3 500 ₽' },
      ],
    },
    {
      category: 'Воздушные шары',
      items: [
        { name: 'Букет из 5 шаров', weight: '', price: '800 ₽' },
        { name: 'Арка из шаров (3м)', weight: '', price: '5 500 ₽' },
        { name: 'Цифра из шаров', weight: '', price: '2 000 ₽' },
        { name: 'Оформление зала', weight: '', price: 'от 15 000 ₽' },
      ],
    },
    {
      category: 'Капкейки и десерты',
      items: [
        { name: 'Капкейки классические', weight: '1 шт', price: '200 ₽' },
        { name: 'Макаронс', weight: '1 шт', price: '120 ₽' },
        { name: 'Эклеры', weight: '1 шт', price: '180 ₽' },
        { name: 'Торт-цифра', weight: '1 кг', price: '2 800 ₽' },
      ],
    },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setPortfolioImages([...portfolioImages, ...newImages]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Sweetery</h1>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm hover:text-primary transition-colors">О студии</a>
              <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-sm hover:text-primary transition-colors">Портфолио</a>
              <a href="#prices" className="text-sm hover:text-primary transition-colors">Прайс</a>
              <a href="#masterclasses" className="text-sm hover:text-primary transition-colors">Мастер-классы</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button size="sm" className="hidden md:inline-flex">
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-6xl md:text-7xl font-light leading-tight">
                Кондитерская <br />
                <span className="font-semibold">студия</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Создаём авторские торты, оформляем праздники и делимся вдохновением на мастер-классах
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="rounded-full">
                  Сделать заказ
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  Посмотреть работы
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={portfolioImages[0]}
                  alt="Торт"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-50" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted">
        <div className="container mx-auto max-w-4xl text-center space-y-6 animate-fade-in">
          <h3 className="text-5xl font-light">О студии</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Мы создаём уникальные кондитерские изделия с 2018 года. Каждый торт — это произведение искусства, 
            созданное с любовью и вниманием к деталям. Используем только натуральные ингредиенты 
            и авторские рецепты.
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-2">
              <div className="text-4xl font-light">500+</div>
              <div className="text-muted-foreground">Довольных клиентов</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light">6</div>
              <div className="text-muted-foreground">Лет опыта</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light">50+</div>
              <div className="text-muted-foreground">Мастер-классов</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-5xl font-light text-center mb-16">Услуги</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <h4 className="text-2xl font-semibold">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-5xl font-light">Портфолио</h3>
            <label htmlFor="upload" className="cursor-pointer">
              <Button variant="outline" className="rounded-full" asChild>
                <span>
                  <Icon name="Upload" size={18} className="mr-2" />
                  Загрузить фото
                </span>
              </Button>
              <input
                id="upload"
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-scale-in"
              >
                <img src={image} alt={`Работа ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="masterclasses" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-5xl font-light text-center mb-16">Мастер-классы</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {masterclasses.map((mc, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
                <CardContent className="p-6 space-y-4">
                  <h4 className="text-xl font-semibold">{mc.title}</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      <span>{mc.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span>{mc.duration}</span>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-2xl font-semibold">{mc.price}</span>
                    <Button size="sm" className="rounded-full">Записаться</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-5xl font-light text-center mb-16">Прайс-лист</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {priceList.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg animate-fade-in">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-semibold mb-6 pb-4 border-b border-border">{category.category}</h4>
                  <div className="space-y-4">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.name}</p>
                          {item.weight && <p className="text-xs text-muted-foreground mt-1">{item.weight}</p>}
                        </div>
                        <span className="font-semibold text-sm whitespace-nowrap">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">* Точная стоимость рассчитывается индивидуально в зависимости от сложности работы</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-5xl font-light text-center mb-12">Контакты</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-xl font-semibold">Адрес студии</h4>
                <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold">Телефон</h4>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold">Email</h4>
                <p className="text-muted-foreground">hello@sweetery.ru</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold">Режим работы</h4>
                <p className="text-muted-foreground">Пн-Вс: 10:00 — 20:00</p>
              </div>
              <div className="flex gap-4 pt-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Phone" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Mail" size={20} />
                </Button>
              </div>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <h4 className="text-xl font-semibold">Написать нам</h4>
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" type="tel" />
                <Input placeholder="Email" type="email" />
                <Textarea placeholder="Сообщение" rows={4} />
                <Button className="w-full rounded-full">Отправить</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Sweetery. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;