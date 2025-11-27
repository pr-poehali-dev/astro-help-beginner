import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const telescopes = [
    {
      name: 'Celestron NexStar 8SE',
      type: 'Катадиоптрический',
      aperture: '203 мм',
      price: '₽120,000',
      level: 'Средний',
      image: 'https://cdn.poehali.dev/projects/6e15b0dd-ce02-401f-a5b8-4af7c215f6ab/files/aa0fe94f-959f-4e3b-9198-6fd6c77a4f16.jpg'
    },
    {
      name: 'Sky-Watcher BK 707AZ2',
      type: 'Рефрактор',
      aperture: '70 мм',
      price: '₽15,000',
      level: 'Новичок',
      image: 'https://cdn.poehali.dev/projects/6e15b0dd-ce02-401f-a5b8-4af7c215f6ab/files/aa0fe94f-959f-4e3b-9198-6fd6c77a4f16.jpg'
    },
    {
      name: 'Meade LX90',
      type: 'Катадиоптрический',
      aperture: '254 мм',
      price: '₽180,000',
      level: 'Продвинутый',
      image: 'https://cdn.poehali.dev/projects/6e15b0dd-ce02-401f-a5b8-4af7c215f6ab/files/aa0fe94f-959f-4e3b-9198-6fd6c77a4f16.jpg'
    }
  ];

  const celestialObjects = [
    { name: 'Луна', type: 'Спутник', difficulty: 'Легко', constellation: 'Различные', icon: '🌙' },
    { name: 'Юпитер', type: 'Планета', difficulty: 'Легко', constellation: 'Телец', icon: '🪐' },
    { name: 'Туманность Ориона', type: 'Туманность', difficulty: 'Средне', constellation: 'Орион', icon: '🌌' },
    { name: 'Галактика Андромеды', type: 'Галактика', difficulty: 'Средне', constellation: 'Андромеда', icon: '✨' },
    { name: 'Сатурн', type: 'Планета', difficulty: 'Легко', constellation: 'Водолей', icon: '🪐' },
    { name: 'Плеяды', type: 'Звездное скопление', difficulty: 'Легко', constellation: 'Телец', icon: '⭐' }
  ];

  const constellations = [
    { name: 'Большая Медведица', stars: 7, x: 30, y: 20, visible: true },
    { name: 'Орион', stars: 9, x: 50, y: 60, visible: true },
    { name: 'Кассиопея', stars: 5, x: 70, y: 25, visible: true },
    { name: 'Лев', stars: 6, x: 40, y: 50, visible: false },
    { name: 'Скорпион', stars: 8, x: 65, y: 70, visible: false }
  ];

  const filteredObjects = celestialObjects.filter(obj =>
    obj.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative overflow-hidden bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.85), rgba(26, 31, 44, 0.85)), url('https://cdn.poehali.dev/projects/6e15b0dd-ce02-401f-a5b8-4af7c215f6ab/files/b15c9991-7e94-4807-9a32-8de8aa1e6465.jpg')`,
          backgroundAttachment: 'fixed'
        }}
      >
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Telescope" size={32} className="text-primary" />
            <span className="text-2xl font-bold star-glow">AstroGuide</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#equipment" className="hover:text-primary transition-colors">Оборудование</a>
            <a href="#objects" className="hover:text-primary transition-colors">Объекты</a>
            <a href="#sky-map" className="hover:text-primary transition-colors">Карта неба</a>
          </nav>
          <Button className="cosmic-gradient border-0">
            Начать наблюдение
          </Button>
        </header>

        <section className="container mx-auto px-4 py-20 md:py-32 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 star-glow">
            Астрономия для начинающих
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Откройте для себя удивительный мир звезд, планет и далеких галактик. 
            Начните свое путешествие в космос прямо сейчас.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cosmic-gradient border-0 text-lg px-8">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Выбрать телескоп
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Гид по наблюдению
            </Button>
          </div>
        </section>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            />
          ))}
        </div>
      </div>

      <section id="equipment" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Оборудование для наблюдений</h2>
          <p className="text-xl text-muted-foreground">Выберите телескоп, который подходит именно вам</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {telescopes.map((telescope, idx) => (
            <Card 
              key={idx} 
              className="overflow-hidden hover:scale-105 transition-transform duration-300 border-border/50 bg-card/80 backdrop-blur"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={telescope.image} 
                  alt={telescope.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{telescope.name}</CardTitle>
                  <Badge variant="secondary" className="bg-primary/20">{telescope.level}</Badge>
                </div>
                <CardDescription className="text-muted-foreground">{telescope.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Circle" size={16} className="text-primary" />
                    <span className="text-sm">Апертура: {telescope.aperture}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="DollarSign" size={16} className="text-primary" />
                    <span className="text-sm font-semibold">{telescope.price}</span>
                  </div>
                </div>
                <Button className="w-full cosmic-gradient border-0">
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6 border-border/50 bg-card/80 backdrop-blur">
            <Icon name="Eye" size={40} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Окуляры</h3>
            <p className="text-muted-foreground">Для различных увеличений и полей зрения</p>
          </Card>
          <Card className="text-center p-6 border-border/50 bg-card/80 backdrop-blur">
            <Icon name="Filter" size={40} className="mx-auto mb-4 text-secondary" />
            <h3 className="text-xl font-semibold mb-2">Фильтры</h3>
            <p className="text-muted-foreground">Улучшают контраст и детализацию объектов</p>
          </Card>
          <Card className="text-center p-6 border-border/50 bg-card/80 backdrop-blur">
            <Icon name="Camera" size={40} className="mx-auto mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">Камеры</h3>
            <p className="text-muted-foreground">Для астрофотографии и записи наблюдений</p>
          </Card>
        </div>
      </section>

      <section id="objects" className="container mx-auto px-4 py-20 bg-card/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Небесные объекты</h2>
          <p className="text-xl text-muted-foreground mb-8">Что можно наблюдать в телескоп</p>
          
          <div className="max-w-md mx-auto relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск объектов..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card/80 backdrop-blur border-border/50"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredObjects.map((obj, idx) => (
            <Card 
              key={idx}
              className="p-6 hover:scale-105 transition-transform cursor-pointer border-border/50 bg-card/80 backdrop-blur"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
                  {obj.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{obj.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{obj.type}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs border-primary/50">
                      <Icon name="Target" size={12} className="mr-1" />
                      {obj.difficulty}
                    </Badge>
                    <Badge variant="outline" className="text-xs border-secondary/50">
                      <Icon name="Stars" size={12} className="mr-1" />
                      {obj.constellation}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="sky-map" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Интерактивная карта неба</h2>
          <p className="text-xl text-muted-foreground">Найдите созвездия на ночном небе</p>
        </div>

        <Card className="max-w-4xl mx-auto border-border/50 bg-card/80 backdrop-blur overflow-hidden">
          <CardContent className="p-0">
            <div 
              className="relative w-full h-96 bg-gradient-to-b from-background to-card"
              style={{
                backgroundImage: 'radial-gradient(2px 2px at 20% 30%, white, transparent), radial-gradient(2px 2px at 60% 70%, white, transparent), radial-gradient(1px 1px at 50% 50%, white, transparent), radial-gradient(1px 1px at 80% 10%, white, transparent), radial-gradient(2px 2px at 90% 60%, white, transparent), radial-gradient(1px 1px at 33% 50%, white, transparent), radial-gradient(1px 1px at 66% 20%, white, transparent)',
                backgroundSize: '200% 200%',
                backgroundPosition: '0% 0%'
              }}
            >
              {constellations.map((constellation, idx) => (
                <div
                  key={idx}
                  className="absolute group cursor-pointer"
                  style={{ left: `${constellation.x}%`, top: `${constellation.y}%` }}
                >
                  <div className="relative">
                    <div className="w-3 h-3 bg-primary rounded-full animate-twinkle shadow-lg shadow-primary/50" 
                         style={{ animationDelay: `${idx * 0.3}s` }} />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-card border border-border/50 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur">
                      <p className="text-sm font-semibold">{constellation.name}</p>
                      <p className="text-xs text-muted-foreground">{constellation.stars} звезд</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-primary/20 border-primary/50">
                    <Icon name="Eye" size={12} className="mr-1" />
                    Видимые сейчас
                  </Badge>
                  <Badge variant="outline" className="border-muted">
                    <Icon name="EyeOff" size={12} className="mr-1" />
                    Невидимые
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 border-border/50 bg-card/80 backdrop-blur">
            <Icon name="Clock" size={32} className="mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Лучшее время наблюдения</h3>
            <p className="text-muted-foreground">Зимние месяцы: 18:00 - 23:00</p>
            <p className="text-muted-foreground">Летние месяцы: 22:00 - 02:00</p>
          </Card>
          <Card className="p-6 border-border/50 bg-card/80 backdrop-blur">
            <Icon name="MapPin" size={32} className="mb-4 text-secondary" />
            <h3 className="text-xl font-semibold mb-2">Условия наблюдения</h3>
            <p className="text-muted-foreground">Темное место вдали от города</p>
            <p className="text-muted-foreground">Ясная безоблачная погода</p>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border/50 bg-card/30 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Telescope" size={24} className="text-primary" />
                <span className="text-xl font-bold">AstroGuide</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Ваш проводник в мир астрономии и космических наблюдений
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#equipment" className="hover:text-primary transition-colors">Оборудование</a></li>
                <li><a href="#objects" className="hover:text-primary transition-colors">Объекты</a></li>
                <li><a href="#sky-map" className="hover:text-primary transition-colors">Карта неба</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Гиды для новичков</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Календарь событий</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сообщество</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@astroguide.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 AstroGuide. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
