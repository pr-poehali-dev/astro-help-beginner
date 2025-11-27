import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Constellation from '@/components/Constellation';
import { getConstellationShape } from '@/data/constellationShapes';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [constellationSearch, setConstellationSearch] = useState('');

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
    { name: 'Андромеда', latin: 'Andromeda', stars: 16, x: 15, y: 25, hemisphere: 'Северное' },
    { name: 'Насос', latin: 'Antlia', stars: 4, x: 65, y: 55, hemisphere: 'Южное' },
    { name: 'Райская Птица', latin: 'Apus', stars: 5, x: 85, y: 85, hemisphere: 'Южное' },
    { name: 'Водолей', latin: 'Aquarius', stars: 10, x: 78, y: 48, hemisphere: 'Экваториальное' },
    { name: 'Орел', latin: 'Aquila', stars: 10, x: 72, y: 42, hemisphere: 'Экваториальное' },
    { name: 'Жертвенник', latin: 'Ara', stars: 8, x: 82, y: 75, hemisphere: 'Южное' },
    { name: 'Овен', latin: 'Aries', stars: 5, x: 18, y: 32, hemisphere: 'Северное' },
    { name: 'Возничий', latin: 'Auriga', stars: 8, x: 28, y: 22, hemisphere: 'Северное' },
    { name: 'Волопас', latin: 'Boötes', stars: 8, x: 58, y: 28, hemisphere: 'Северное' },
    { name: 'Резец', latin: 'Caelum', stars: 4, x: 25, y: 65, hemisphere: 'Южное' },
    { name: 'Жираф', latin: 'Camelopardalis', stars: 4, x: 32, y: 12, hemisphere: 'Северное' },
    { name: 'Рак', latin: 'Cancer', stars: 5, x: 42, y: 35, hemisphere: 'Северное' },
    { name: 'Гончие Псы', latin: 'Canes Venatici', stars: 2, x: 52, y: 22, hemisphere: 'Северное' },
    { name: 'Большой Пес', latin: 'Canis Major', stars: 8, x: 35, y: 52, hemisphere: 'Южное' },
    { name: 'Малый Пес', latin: 'Canis Minor', stars: 2, x: 38, y: 42, hemisphere: 'Северное' },
    { name: 'Козерог', latin: 'Capricornus', stars: 9, x: 76, y: 52, hemisphere: 'Южное' },
    { name: 'Киль', latin: 'Carina', stars: 9, x: 48, y: 75, hemisphere: 'Южное' },
    { name: 'Кассиопея', latin: 'Cassiopeia', stars: 5, x: 8, y: 18, hemisphere: 'Северное' },
    { name: 'Центавр', latin: 'Centaurus', stars: 11, x: 68, y: 68, hemisphere: 'Южное' },
    { name: 'Цефей', latin: 'Cepheus', stars: 7, x: 5, y: 15, hemisphere: 'Северное' },
    { name: 'Кит', latin: 'Cetus', stars: 14, x: 12, y: 48, hemisphere: 'Экваториальное' },
    { name: 'Хамелеон', latin: 'Chamaeleon', stars: 4, x: 62, y: 88, hemisphere: 'Южное' },
    { name: 'Циркуль', latin: 'Circinus', stars: 3, x: 75, y: 78, hemisphere: 'Южное' },
    { name: 'Голубь', latin: 'Columba', stars: 5, x: 32, y: 62, hemisphere: 'Южное' },
    { name: 'Волосы Вероники', latin: 'Coma Berenices', stars: 3, x: 55, y: 32, hemisphere: 'Северное' },
    { name: 'Южная Корона', latin: 'Corona Australis', stars: 8, x: 80, y: 68, hemisphere: 'Южное' },
    { name: 'Северная Корона', latin: 'Corona Borealis', stars: 8, x: 62, y: 28, hemisphere: 'Северное' },
    { name: 'Ворон', latin: 'Corvus', stars: 4, x: 58, y: 55, hemisphere: 'Южное' },
    { name: 'Чаша', latin: 'Crater', stars: 4, x: 54, y: 52, hemisphere: 'Южное' },
    { name: 'Южный Крест', latin: 'Crux', stars: 4, x: 70, y: 78, hemisphere: 'Южное' },
    { name: 'Лебедь', latin: 'Cygnus', stars: 9, x: 68, y: 32, hemisphere: 'Северное' },
    { name: 'Дельфин', latin: 'Delphinus', stars: 5, x: 74, y: 38, hemisphere: 'Северное' },
    { name: 'Золотая Рыба', latin: 'Dorado', stars: 3, x: 28, y: 78, hemisphere: 'Южное' },
    { name: 'Дракон', latin: 'Draco', stars: 9, x: 45, y: 8, hemisphere: 'Северное' },
    { name: 'Малый Конь', latin: 'Equuleus', stars: 4, x: 75, y: 38, hemisphere: 'Северное' },
    { name: 'Эридан', latin: 'Eridanus', stars: 24, x: 22, y: 58, hemisphere: 'Южное' },
    { name: 'Печь', latin: 'Fornax', stars: 4, x: 18, y: 62, hemisphere: 'Южное' },
    { name: 'Близнецы', latin: 'Gemini', stars: 8, x: 35, y: 35, hemisphere: 'Северное' },
    { name: 'Журавль', latin: 'Grus', stars: 6, x: 88, y: 72, hemisphere: 'Южное' },
    { name: 'Геркулес', latin: 'Hercules', stars: 14, x: 65, y: 25, hemisphere: 'Северное' },
    { name: 'Часы', latin: 'Horologium', stars: 3, x: 22, y: 72, hemisphere: 'Южное' },
    { name: 'Гидра', latin: 'Hydra', stars: 17, x: 50, y: 55, hemisphere: 'Экваториальное' },
    { name: 'Южная Гидра', latin: 'Hydrus', stars: 3, x: 15, y: 82, hemisphere: 'Южное' },
    { name: 'Индеец', latin: 'Indus', stars: 3, x: 85, y: 78, hemisphere: 'Южное' },
    { name: 'Ящерица', latin: 'Lacerta', stars: 5, x: 78, y: 22, hemisphere: 'Северное' },
    { name: 'Лев', latin: 'Leo', stars: 9, x: 48, y: 38, hemisphere: 'Северное' },
    { name: 'Малый Лев', latin: 'Leo Minor', stars: 3, x: 48, y: 28, hemisphere: 'Северное' },
    { name: 'Заяц', latin: 'Lepus', stars: 8, x: 32, y: 58, hemisphere: 'Южное' },
    { name: 'Весы', latin: 'Libra', stars: 6, x: 65, y: 52, hemisphere: 'Экваториальное' },
    { name: 'Волк', latin: 'Lupus', stars: 9, x: 72, y: 72, hemisphere: 'Южное' },
    { name: 'Рысь', latin: 'Lynx', stars: 4, x: 42, y: 18, hemisphere: 'Северное' },
    { name: 'Лира', latin: 'Lyra', stars: 5, x: 70, y: 28, hemisphere: 'Северное' },
    { name: 'Столовая Гора', latin: 'Mensa', stars: 3, x: 35, y: 88, hemisphere: 'Южное' },
    { name: 'Микроскоп', latin: 'Microscopium', stars: 5, x: 82, y: 62, hemisphere: 'Южное' },
    { name: 'Единорог', latin: 'Monoceros', stars: 4, x: 38, y: 48, hemisphere: 'Экваториальное' },
    { name: 'Муха', latin: 'Musca', stars: 4, x: 68, y: 82, hemisphere: 'Южное' },
    { name: 'Наугольник', latin: 'Norma', stars: 5, x: 75, y: 72, hemisphere: 'Южное' },
    { name: 'Октант', latin: 'Octans', stars: 3, x: 55, y: 92, hemisphere: 'Южное' },
    { name: 'Змееносец', latin: 'Ophiuchus', stars: 10, x: 68, y: 45, hemisphere: 'Экваториальное' },
    { name: 'Орион', latin: 'Orion', stars: 10, x: 30, y: 45, hemisphere: 'Экваториальное' },
    { name: 'Павлин', latin: 'Pavo', stars: 7, x: 88, y: 82, hemisphere: 'Южное' },
    { name: 'Пегас', latin: 'Pegasus', stars: 9, x: 82, y: 32, hemisphere: 'Северное' },
    { name: 'Персей', latin: 'Perseus', stars: 9, x: 22, y: 22, hemisphere: 'Северное' },
    { name: 'Феникс', latin: 'Phoenix', stars: 8, x: 8, y: 72, hemisphere: 'Южное' },
    { name: 'Живописец', latin: 'Pictor', stars: 3, x: 32, y: 75, hemisphere: 'Южное' },
    { name: 'Рыбы', latin: 'Pisces', stars: 7, x: 5, y: 42, hemisphere: 'Северное' },
    { name: 'Южная Рыба', latin: 'Piscis Austrinus', stars: 7, x: 85, y: 62, hemisphere: 'Южное' },
    { name: 'Корма', latin: 'Puppis', stars: 9, x: 42, y: 68, hemisphere: 'Южное' },
    { name: 'Компас', latin: 'Pyxis', stars: 3, x: 48, y: 62, hemisphere: 'Южное' },
    { name: 'Сетка', latin: 'Reticulum', stars: 4, x: 25, y: 78, hemisphere: 'Южное' },
    { name: 'Стрела', latin: 'Sagitta', stars: 4, x: 72, y: 35, hemisphere: 'Северное' },
    { name: 'Стрелец', latin: 'Sagittarius', stars: 15, x: 78, y: 58, hemisphere: 'Южное' },
    { name: 'Скорпион', latin: 'Scorpius', stars: 18, x: 70, y: 62, hemisphere: 'Южное' },
    { name: 'Скульптор', latin: 'Sculptor', stars: 4, x: 12, y: 62, hemisphere: 'Южное' },
    { name: 'Щит', latin: 'Scutum', stars: 2, x: 74, y: 52, hemisphere: 'Экваториальное' },
    { name: 'Змея', latin: 'Serpens', stars: 11, x: 62, y: 42, hemisphere: 'Экваториальное' },
    { name: 'Секстант', latin: 'Sextans', stars: 3, x: 52, y: 48, hemisphere: 'Экваториальное' },
    { name: 'Телец', latin: 'Taurus', stars: 19, x: 25, y: 38, hemisphere: 'Северное' },
    { name: 'Телескоп', latin: 'Telescopium', stars: 2, x: 80, y: 75, hemisphere: 'Южное' },
    { name: 'Треугольник', latin: 'Triangulum', stars: 3, x: 12, y: 28, hemisphere: 'Северное' },
    { name: 'Южный Треугольник', latin: 'Triangulum Australe', stars: 3, x: 78, y: 82, hemisphere: 'Южное' },
    { name: 'Тукан', latin: 'Tucana', stars: 6, x: 5, y: 82, hemisphere: 'Южное' },
    { name: 'Большая Медведица', latin: 'Ursa Major', stars: 20, x: 50, y: 12, hemisphere: 'Северное' },
    { name: 'Малая Медведица', latin: 'Ursa Minor', stars: 7, x: 38, y: 5, hemisphere: 'Северное' },
    { name: 'Паруса', latin: 'Vela', stars: 9, x: 55, y: 72, hemisphere: 'Южное' },
    { name: 'Дева', latin: 'Virgo', stars: 15, x: 58, y: 45, hemisphere: 'Экваториальное' },
    { name: 'Летучая Рыба', latin: 'Volans', stars: 4, x: 45, y: 82, hemisphere: 'Южное' },
    { name: 'Лисичка', latin: 'Vulpecula', stars: 5, x: 72, y: 32, hemisphere: 'Северное' }
  ];

  const filteredObjects = celestialObjects.filter(obj =>
    obj.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredConstellations = constellations.filter(c =>
    c.name.toLowerCase().includes(constellationSearch.toLowerCase()) ||
    c.latin.toLowerCase().includes(constellationSearch.toLowerCase())
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
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Все 88 созвездий</h2>
          <p className="text-xl text-muted-foreground mb-6">Интерактивная карта звездного неба</p>
          
          <div className="max-w-md mx-auto relative mb-6">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск созвездий..."
              value={constellationSearch}
              onChange={(e) => setConstellationSearch(e.target.value)}
              className="pl-10 bg-card/80 backdrop-blur border-border/50"
            />
          </div>

          <div className="flex gap-3 justify-center flex-wrap mb-4">
            <Badge variant="outline" className="border-primary/50">
              <Icon name="Globe" size={14} className="mr-1" />
              Всего: {filteredConstellations.length}
            </Badge>
            <Badge variant="outline" className="border-secondary/50">
              <Icon name="Compass" size={14} className="mr-1" />
              Северное: {filteredConstellations.filter(c => c.hemisphere === 'Северное').length}
            </Badge>
            <Badge variant="outline" className="border-accent/50">
              <Icon name="CircleDot" size={14} className="mr-1" />
              Южное: {filteredConstellations.filter(c => c.hemisphere === 'Южное').length}
            </Badge>
          </div>
        </div>

        <Card className="border-border/50 bg-card/80 backdrop-blur overflow-hidden mb-8">
          <CardContent className="p-0">
            <div 
              className="relative w-full h-[800px] overflow-auto bg-gradient-to-b from-background via-card to-background"
              style={{
                backgroundImage: 'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.3), transparent), radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.4), transparent), radial-gradient(0.5px 0.5px at 50% 50%, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 80% 10%, rgba(255,255,255,0.3), transparent), radial-gradient(1px 1px at 90% 60%, rgba(255,255,255,0.4), transparent), radial-gradient(0.5px 0.5px at 33% 50%, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 66% 20%, rgba(255,255,255,0.3), transparent), radial-gradient(1px 1px at 15% 80%, rgba(255,255,255,0.3), transparent), radial-gradient(0.5px 0.5px at 85% 85%, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 40% 15%, rgba(255,255,255,0.4), transparent), radial-gradient(0.5px 0.5px at 25% 60%, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 70% 45%, rgba(255,255,255,0.3), transparent), radial-gradient(0.5px 0.5px at 55% 85%, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 10% 40%, rgba(255,255,255,0.3), transparent)',
                backgroundSize: '400px 400px'
              }}
            >
              <div className="relative min-h-[1600px] w-full">
                {filteredConstellations.map((constellation, idx) => {
                  const shape = getConstellationShape(constellation.name);
                  return (
                    <Constellation
                      key={idx}
                      name={constellation.name}
                      latin={constellation.latin}
                      stars={shape.stars}
                      lines={shape.lines}
                      x={constellation.x}
                      y={(constellation.y / 100) * 1600}
                      hemisphere={constellation.hemisphere}
                      delay={idx * 0.05}
                    />
                  );
                })}

                <div className="absolute top-4 left-4 right-4 flex gap-2 flex-wrap pointer-events-none z-30">
                  <Badge className="bg-background/80 border-primary/50 backdrop-blur">
                    <Icon name="Map" size={12} className="mr-1" />
                    Прокрутите для просмотра всей карты
                  </Badge>
                  <Badge className="bg-background/80 border-secondary/50 backdrop-blur">
                    <Icon name="MousePointer" size={12} className="mr-1" />
                    Наведите на созвездие для информации
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-6 border-border/50 bg-card/80 backdrop-blur">
            <Icon name="Clock" size={32} className="mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Лучшее время</h3>
            <p className="text-sm text-muted-foreground">Зима: 18:00 - 23:00</p>
            <p className="text-sm text-muted-foreground">Лето: 22:00 - 02:00</p>
          </Card>
          <Card className="p-6 border-border/50 bg-card/80 backdrop-blur">
            <Icon name="MapPin" size={32} className="mb-4 text-secondary" />
            <h3 className="text-xl font-semibold mb-2">Условия</h3>
            <p className="text-sm text-muted-foreground">Темное место</p>
            <p className="text-sm text-muted-foreground">Ясная погода</p>
          </Card>
          <Card className="p-6 border-border/50 bg-card/80 backdrop-blur">
            <Icon name="Star" size={32} className="mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">Полушария</h3>
            <p className="text-sm text-muted-foreground">Север: зимой</p>
            <p className="text-sm text-muted-foreground">Юг: не видно</p>
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