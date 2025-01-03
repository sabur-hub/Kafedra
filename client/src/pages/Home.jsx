import React from 'react';
import './Home.css';
import Footer from "../Footer.jsx";

// Импортируем изображения
import ConferencePhoto from '../assets/conference.png';
import OpenDayPhoto from '../assets/open-day.png';
import WorkshopPhoto from '../assets/workshop.png';
import AlumniMeetingPhoto from '../assets/alumni-meeting.png';

const news = [
  {
    title: 'МУҚОВИМАТ БО КОРРУПСИЯ ВА ТАТБИҚИ СТРАТЕГИЯҲО ДАР ДМТ',
    date: '2 декабрь соати 15:26',
    description: `Имрӯз (02.12.2024) дар доираи татбиқи «Стратегияи давлатии муқовимат бо коррупсия дар Ҷумҳурии Тоҷикистон барои давраи то соли 2030» ва бахшида ба "Соли маърифати ҳуқуқӣ" эълон гардидани соли 2024 дар толори калони Донишгоҳи миллии Тоҷикистон бо ибтикори раёсати Донишгоҳ ва садорати факултети ҳуқуқшиносӣ конференсияи ҷумҳуриявии илмӣ-назариявӣ дар мавзуи «Муқовимат бо коррупсия: мушкилот ва дурнамо» бо иштироки намояндагони сохторҳои дахлдори ҷумҳурӣ ва ҳайати васеи устодону кормандон, донишҷӯёну магистрантони Донишгоҳ  баргузор гардид.
Конференсияи мазкур бо садо додани Суруди миллӣ ва бо сухани муқаддимавии ректори Донишгоҳ, доктори илмҳои ҳуқуқшиносӣ, профессор Насриддинзода Э.С. оғоз ёфт.
Ректори Донишгоҳ зимни суханронӣ оид ба  ...`,
    link: 'https://www.facebook.com/groups/581133483175452/permalink/1246277646661029/',
    image: ConferencePhoto
  },
  {
    title: 'БОЗДИДИ МЕҲМОНОН АЗ ОСОРХОНАИ ПЕШВОИ МИЛЛАТ ВА МАШВАРАТИ КОРӢ',
    date: '01.09.2024',
    description: `Имрӯз (28.11.2024) дар доираи Форуми III байналмилалии ректорони муассисаҳои таҳсилоти олии касбии Ҷумҳурии Тоҷикистон ва Ҷумҳурии Белорус, ки дар мавзуи “Маориф - ҳамчун омили муҳим дар таҳкими робитаҳои дуҷонибаи байни Ҷумҳурии Тоҷикистон ва Ҷумҳурии Белорус” дар шаҳри Душанбе ҷараён дорад, ректори Донишгоҳи информатика ва радиоэлектроникаи Белорус Богуш Вадим Анатолевич ва ректори Донишгоҳи миллии техникии Белорус Харитончик Сергей Василевич аз Осорхонаи Пешвои миллат, ки дар бинои таълимии факултетҳои иқтисодии Донишгоҳи миллии Тоҷикистон таъсис дода шудааст, дидан намуданд. Дар Осорхонаи Пешвои миллат экспонатҳои давраи таҳсили Асосгузори сулҳу ваҳдати миллӣ – Пешвои миллат, Президенти Ҷумҳурии Тоҷикистон муҳтарам Эмомалӣ Раҳмон дар ин боргоҳи илм ва хизматҳои Сарвари давлат ....`,
    link: 'https://uef.tnu.tj/ru/nauka-i-znanija-glavnyj-faktor-duhovnogo-razvitija/',
    image: OpenDayPhoto
  },
];

const events = [
  {
    name: 'Мастер-класси барномасозӣ',
    date: '1 ноябр 2024',
    location: 'Аудитория 101',
    details: 'Мастер-класс оид ба таҳияи веб-барномаҳо Бо Истифода Аз React.',
    image: WorkshopPhoto
  },
  {
    name: 'Вохӯрии хатмкунандагон',
    date: '5 декабр 2024',
    location: 'Толори асосӣ',
    details: 'Вохӯрии солонаи хатмкунандагони кафедра.',
    image: AlumniMeetingPhoto
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <h1>Хуш омадед ба вебсайти кафедраи технология ва низоми иттилооти дар иктисодиёт</h1>
      
      <section className="news-section">
        <h2>Хабарҳо</h2>
        <div className="news-list">
          {news.map((item, index) => (
            <div key={index} className="news-card">
              <img src={item.image} alt={item.title} className="news-image" />
              <div className="news-content">
                <h3>{item.title}</h3>
                <p><em>{item.date}</em></p>
                <p>{item.description}</p>
                <a href={item.link}>Муфассалтар</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="events-section">
        <h2>Чорабиниҳо</h2>
        <div className="events-list">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.image} alt={event.name} className="event-image" />
              <div className="event-content">
                <h3>{event.name}</h3>
                <p><strong>Сана:</strong> {event.date}</p>
                <p><strong>Ҷой:</strong> {event.location}</p>
                <p>{event.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
