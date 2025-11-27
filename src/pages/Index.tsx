import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Constellation from '@/components/Constellation';
import { getConstellationShape } from '@/data/constellationShapes';

const Index = () => {
  const [constellationSearch, setConstellationSearch] = useState('');

  const constellations = [
    { name: 'Андромеда', latin: 'Andromeda', stars: 16, x: 8, y: 15, hemisphere: 'Северное' },
    { name: 'Насос', latin: 'Antlia', stars: 4, x: 45, y: 65, hemisphere: 'Южное' },
    { name: 'Райская Птица', latin: 'Apus', stars: 5, x: 75, y: 85, hemisphere: 'Южное' },
    { name: 'Водолей', latin: 'Aquarius', stars: 10, x: 82, y: 48, hemisphere: 'Экваториальное' },
    { name: 'Орел', latin: 'Aquila', stars: 10, x: 78, y: 35, hemisphere: 'Экваториальное' },
    { name: 'Жертвенник', latin: 'Ara', stars: 8, x: 68, y: 78, hemisphere: 'Южное' },
    { name: 'Овен', latin: 'Aries', stars: 5, x: 15, y: 25, hemisphere: 'Северное' },
    { name: 'Возничий', latin: 'Auriga', stars: 8, x: 32, y: 18, hemisphere: 'Северное' },
    { name: 'Волопас', latin: 'Boötes', stars: 8, x: 62, y: 22, hemisphere: 'Северное' },
    { name: 'Резец', latin: 'Caelum', stars: 4, x: 22, y: 68, hemisphere: 'Южное' },
    { name: 'Жираф', latin: 'Camelopardalis', stars: 4, x: 42, y: 8, hemisphere: 'Северное' },
    { name: 'Рак', latin: 'Cancer', stars: 5, x: 48, y: 28, hemisphere: 'Северное' },
    { name: 'Гончие Псы', latin: 'Canes Venatici', stars: 2, x: 58, y: 18, hemisphere: 'Северное' },
    { name: 'Большой Пес', latin: 'Canis Major', stars: 8, x: 35, y: 55, hemisphere: 'Южное' },
    { name: 'Малый Пес', latin: 'Canis Minor', stars: 2, x: 42, y: 38, hemisphere: 'Северное' },
    { name: 'Козерог', latin: 'Capricornus', stars: 9, x: 85, y: 55, hemisphere: 'Южное' },
    { name: 'Киль', latin: 'Carina', stars: 9, x: 52, y: 82, hemisphere: 'Южное' },
    { name: 'Кассиопея', latin: 'Cassiopeia', stars: 5, x: 5, y: 12, hemisphere: 'Северное' },
    { name: 'Центавр', latin: 'Centaurus', stars: 11, x: 62, y: 72, hemisphere: 'Южное' },
    { name: 'Цефей', latin: 'Cepheus', stars: 7, x: 12, y: 8, hemisphere: 'Северное' },
    { name: 'Кит', latin: 'Cetus', stars: 14, x: 18, y: 42, hemisphere: 'Экваториальное' },
    { name: 'Хамелеон', latin: 'Chamaeleon', stars: 4, x: 58, y: 88, hemisphere: 'Южное' },
    { name: 'Циркуль', latin: 'Circinus', stars: 3, x: 72, y: 75, hemisphere: 'Южное' },
    { name: 'Голубь', latin: 'Columba', stars: 5, x: 28, y: 62, hemisphere: 'Южное' },
    { name: 'Волосы Вероники', latin: 'Coma Berenices', stars: 3, x: 55, y: 25, hemisphere: 'Северное' },
    { name: 'Южная Корона', latin: 'Corona Australis', stars: 8, x: 78, y: 68, hemisphere: 'Южное' },
    { name: 'Северная Корона', latin: 'Corona Borealis', stars: 8, x: 68, y: 22, hemisphere: 'Северное' },
    { name: 'Ворон', latin: 'Corvus', stars: 4, x: 52, y: 52, hemisphere: 'Южное' },
    { name: 'Чаша', latin: 'Crater', stars: 4, x: 48, y: 48, hemisphere: 'Южное' },
    { name: 'Южный Крест', latin: 'Crux', stars: 4, x: 65, y: 82, hemisphere: 'Южное' },
    { name: 'Лебедь', latin: 'Cygnus', stars: 9, x: 72, y: 28, hemisphere: 'Северное' },
    { name: 'Дельфин', latin: 'Delphinus', stars: 5, x: 82, y: 32, hemisphere: 'Северное' },
    { name: 'Золотая Рыба', latin: 'Dorado', stars: 3, x: 32, y: 85, hemisphere: 'Южное' },
    { name: 'Дракон', latin: 'Draco', stars: 9, x: 52, y: 5, hemisphere: 'Северное' },
    { name: 'Малый Конь', latin: 'Equuleus', stars: 4, x: 88, y: 35, hemisphere: 'Северное' },
    { name: 'Эридан', latin: 'Eridanus', stars: 24, x: 25, y: 58, hemisphere: 'Южное' },
    { name: 'Печь', latin: 'Fornax', stars: 4, x: 15, y: 65, hemisphere: 'Южное' },
    { name: 'Близнецы', latin: 'Gemini', stars: 8, x: 38, y: 32, hemisphere: 'Северное' },
    { name: 'Журавль', latin: 'Grus', stars: 6, x: 92, y: 75, hemisphere: 'Южное' },
    { name: 'Геркулес', latin: 'Hercules', stars: 14, x: 75, y: 18, hemisphere: 'Северное' },
    { name: 'Часы', latin: 'Horologium', stars: 3, x: 18, y: 75, hemisphere: 'Южное' },
    { name: 'Гидра', latin: 'Hydra', stars: 17, x: 42, y: 52, hemisphere: 'Экваториальное' },
    { name: 'Южная Гидра', latin: 'Hydrus', stars: 3, x: 12, y: 82, hemisphere: 'Южное' },
    { name: 'Индеец', latin: 'Indus', stars: 3, x: 88, y: 82, hemisphere: 'Южное' },
    { name: 'Ящерица', latin: 'Lacerta', stars: 5, x: 85, y: 15, hemisphere: 'Северное' },
    { name: 'Лев', latin: 'Leo', stars: 9, x: 52, y: 35, hemisphere: 'Северное' },
    { name: 'Малый Лев', latin: 'Leo Minor', stars: 3, x: 48, y: 22, hemisphere: 'Северное' },
    { name: 'Заяц', latin: 'Lepus', stars: 8, x: 28, y: 58, hemisphere: 'Южное' },
    { name: 'Весы', latin: 'Libra', stars: 6, x: 62, y: 48, hemisphere: 'Экваториальное' },
    { name: 'Волк', latin: 'Lupus', stars: 9, x: 68, y: 72, hemisphere: 'Южное' },
    { name: 'Рысь', latin: 'Lynx', stars: 4, x: 38, y: 12, hemisphere: 'Северное' },
    { name: 'Лира', latin: 'Lyra', stars: 5, x: 78, y: 25, hemisphere: 'Северное' },
    { name: 'Столовая Гора', latin: 'Mensa', stars: 3, x: 42, y: 92, hemisphere: 'Южное' },
    { name: 'Микроскоп', latin: 'Microscopium', stars: 5, x: 88, y: 62, hemisphere: 'Южное' },
    { name: 'Единорог', latin: 'Monoceros', stars: 4, x: 35, y: 45, hemisphere: 'Экваториальное' },
    { name: 'Муха', latin: 'Musca', stars: 4, x: 62, y: 85, hemisphere: 'Южное' },
    { name: 'Наугольник', latin: 'Norma', stars: 5, x: 72, y: 72, hemisphere: 'Южное' },
    { name: 'Октант', latin: 'Octans', stars: 3, x: 55, y: 95, hemisphere: 'Южное' },
    { name: 'Змееносец', latin: 'Ophiuchus', stars: 10, x: 72, y: 42, hemisphere: 'Экваториальное' },
    { name: 'Орион', latin: 'Orion', stars: 10, x: 25, y: 38, hemisphere: 'Экваториальное' },
    { name: 'Павлин', latin: 'Pavo', stars: 7, x: 82, y: 85, hemisphere: 'Южное' },
    { name: 'Пегас', latin: 'Pegasus', stars: 9, x: 92, y: 25, hemisphere: 'Северное' },
    { name: 'Персей', latin: 'Perseus', stars: 9, x: 22, y: 18, hemisphere: 'Северное' },
    { name: 'Феникс', latin: 'Phoenix', stars: 8, x: 5, y: 75, hemisphere: 'Южное' },
    { name: 'Живописец', latin: 'Pictor', stars: 3, x: 38, y: 78, hemisphere: 'Южное' },
    { name: 'Рыбы', latin: 'Pisces', stars: 7, x: 5, y: 35, hemisphere: 'Северное' },
    { name: 'Южная Рыба', latin: 'Piscis Austrinus', stars: 7, x: 92, y: 65, hemisphere: 'Южное' },
    { name: 'Корма', latin: 'Puppis', stars: 9, x: 42, y: 68, hemisphere: 'Южное' },
    { name: 'Компас', latin: 'Pyxis', stars: 3, x: 48, y: 62, hemisphere: 'Южное' },
    { name: 'Сетка', latin: 'Reticulum', stars: 4, x: 28, y: 82, hemisphere: 'Южное' },
    { name: 'Стрела', latin: 'Sagitta', stars: 4, x: 82, y: 28, hemisphere: 'Северное' },
    { name: 'Стрелец', latin: 'Sagittarius', stars: 15, x: 75, y: 58, hemisphere: 'Южное' },
    { name: 'Скорпион', latin: 'Scorpius', stars: 18, x: 68, y: 62, hemisphere: 'Южное' },
    { name: 'Скульптор', latin: 'Sculptor', stars: 4, x: 8, y: 62, hemisphere: 'Южное' },
    { name: 'Щит', latin: 'Scutum', stars: 2, x: 75, y: 48, hemisphere: 'Экваториальное' },
    { name: 'Змея', latin: 'Serpens', stars: 11, x: 65, y: 38, hemisphere: 'Экваториальное' },
    { name: 'Секстант', latin: 'Sextans', stars: 3, x: 52, y: 42, hemisphere: 'Экваториальное' },
    { name: 'Телец', latin: 'Taurus', stars: 19, x: 28, y: 28, hemisphere: 'Северное' },
    { name: 'Телескоп', latin: 'Telescopium', stars: 2, x: 78, y: 78, hemisphere: 'Южное' },
    { name: 'Треугольник', latin: 'Triangulum', stars: 3, x: 12, y: 22, hemisphere: 'Северное' },
    { name: 'Южный Треугольник', latin: 'Triangulum Australe', stars: 3, x: 75, y: 88, hemisphere: 'Южное' },
    { name: 'Тукан', latin: 'Tucana', stars: 6, x: 5, y: 88, hemisphere: 'Южное' },
    { name: 'Большая Медведица', latin: 'Ursa Major', stars: 20, x: 58, y: 8, hemisphere: 'Северное' },
    { name: 'Малая Медведица', latin: 'Ursa Minor', stars: 7, x: 32, y: 5, hemisphere: 'Северное' },
    { name: 'Паруса', latin: 'Vela', stars: 9, x: 55, y: 75, hemisphere: 'Южное' },
    { name: 'Дева', latin: 'Virgo', stars: 15, x: 58, y: 42, hemisphere: 'Экваториальное' },
    { name: 'Летучая Рыба', latin: 'Volans', stars: 4, x: 48, y: 88, hemisphere: 'Южное' },
    { name: 'Лисичка', latin: 'Vulpecula', stars: 5, x: 85, y: 22, hemisphere: 'Северное' }
  ];

  const filteredConstellations = constellations.filter(c =>
    c.name.toLowerCase().includes(constellationSearch.toLowerCase()) ||
    c.latin.toLowerCase().includes(constellationSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Telescope" size={28} className="text-primary" />
            <span className="text-xl font-bold star-glow">Карта звёздного неба</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск созвездий..."
                value={constellationSearch}
                onChange={(e) => setConstellationSearch(e.target.value)}
                className="pl-10 w-64 bg-card/50 backdrop-blur border-border/50"
              />
            </div>
            <Badge variant="outline" className="border-primary/50">
              <Icon name="Star" size={14} className="mr-1" />
              {filteredConstellations.length} / 88
            </Badge>
          </div>
        </div>
      </header>

      <div className="pt-20">
        <div className="relative w-full min-h-screen">
          <Card className="m-0 rounded-none border-0 bg-transparent">
            <CardContent className="p-0">
              <div 
                className="relative w-full min-h-screen bg-gradient-to-b from-background via-card to-background"
                style={{
                  backgroundImage: 'radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.3), transparent), radial-gradient(1px 1px at 45% 15%, rgba(255,255,255,0.4), transparent), radial-gradient(0.5px 0.5px at 25% 30%, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 70% 25%, rgba(255,255,255,0.3), transparent), radial-gradient(1px 1px at 85% 35%, rgba(255,255,255,0.4), transparent), radial-gradient(0.5px 0.5px at 15% 50%, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 55% 45%, rgba(255,255,255,0.3), transparent), radial-gradient(1px 1px at 30% 65%, rgba(255,255,255,0.3), transparent), radial-gradient(0.5px 0.5px at 75% 70%, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 20% 80%, rgba(255,255,255,0.4), transparent), radial-gradient(0.5px 0.5px at 60% 85%, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 90% 75%, rgba(255,255,255,0.3), transparent), radial-gradient(0.5px 0.5px at 40% 90%, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 65% 10%, rgba(255,255,255,0.3), transparent)',
                  backgroundSize: '500px 500px'
                }}
              >
                <div className="relative min-h-[3000px] w-full">
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
                        y={(constellation.y / 100) * 3000}
                        hemisphere={constellation.hemisphere}
                        delay={idx * 0.03}
                      />
                    );
                  })}

                  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-3 flex-wrap justify-center pointer-events-none z-30 px-4">
                    <Badge className="bg-background/90 border-primary/50 backdrop-blur pointer-events-auto">
                      <Icon name="MousePointer" size={12} className="mr-1" />
                      Наведите на созвездие
                    </Badge>
                    <Badge className="bg-background/90 border-secondary/50 backdrop-blur pointer-events-auto">
                      <Icon name="Compass" size={12} className="mr-1" />
                      Северное: {filteredConstellations.filter(c => c.hemisphere === 'Северное').length}
                    </Badge>
                    <Badge className="bg-background/90 border-accent/50 backdrop-blur pointer-events-auto">
                      <Icon name="CircleDot" size={12} className="mr-1" />
                      Южное: {filteredConstellations.filter(c => c.hemisphere === 'Южное').length}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
