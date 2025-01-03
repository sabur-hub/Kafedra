import React, { useEffect, useState } from "react";
import "./Schedule.css";
import Footer from "../../Footer";
import { groupSchedules } from "./jsonstaff";
import { groupSchedules1 } from "./jsonstaff";
import { groupSchedules2 } from "./jsonstaff";
import { groupSchedules4 } from "./jsonstaff";

const Schedule = () => {
  const currentDay = new Date().getDay();
  const colors = [
    "#FC926D", // Sunday
    "#FCCE6D", // Monday
    "#8A6DFC", // Tuesday
    "#74FC6D", // Wednesday
    "#6D97FC", // Thursday
    "#6DFCFA", // Friday
    "#ffffff", // Saturday
  ];

  // Список групп, курсов и языков
  const groupLanguages = {
    40010202: "Русский",
    40010203: "Русский",
    40010204: "Русский",
    40010205: "Русский",
    40010206: "Таджикский",
    40010207: "Таджикский",
    40010208: "Таджикский",
  };
  const courses = ["1 курс", "2 курс", "3 курс", "4 курс"];
  const languages = ["Общий", "Таджикский", "Русский"];
  const groups = Object.keys(groupLanguages);

  // Расписания для каждой группы
  const courseSchedules = {
    "1 курс": groupSchedules1, // Добавьте расписания для 1 курса
    "2 курс": groupSchedules2, // Добавьте расписания для 2 курса
    "3 курс": groupSchedules, // Использует уже объявленные группы
    "4 курс": groupSchedules4, // Добавьте расписания для 4 курса
  };

  // Состояния для фильтрации
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedGroup, setSelectedGroup] = useState(groups[0]);

  // Фильтрация групп по языку и курсу
  const filteredGroups = groups.filter((group) => {
    // Если выбран "Общий" язык, то отображаются все группы
    if (selectedLanguage === "Общий") return true;

    // Фильтрация групп по выбранному языку
    return groupLanguages[group] === selectedLanguage;
  });

  // Фильтрация расписания в зависимости от выбранных курса и группы
  const filteredSchedule =
    courseSchedules[selectedCourse]?.[selectedGroup] || [];

  useEffect(() => {
    // Если выбранная группа уже не доступна в фильтре, то выберите первую доступную
    if (!filteredGroups.includes(selectedGroup)) {
      setSelectedGroup(filteredGroups[0]);
    }
  }, [selectedLanguage, selectedCourse, filteredGroups]);

  return (
    <div className="container">
      {/* Фильтры */}
      <div className="filters">
        <h1>
          <select
            className="selectAdele"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </h1>

        <h1>
          <select
            className="selectAdele"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </h1>

        <h1>
          <select
            className="selectAdele"
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
          >
            {filteredGroups.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </h1>
      </div>

      <div id="restDayMessage" className="rest-day" style={{ display: "none" }}>
        Рузи истироҳатӣ
      </div>

      {/* Расписание */}
      <div className="table">
        {filteredSchedule.map((daySchedule, index) => (
          <div
            className="block"
            key={index}
            style={{
              backgroundColor:
                index === currentDay - 1 ? colors[currentDay - 1] : "",
            }}
          >
            <h2 className="h2e">{daySchedule.day}</h2>
            {daySchedule.subjects.map((subject, idx) => (
              <p key={idx}>{subject}</p>
            ))}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Schedule;
