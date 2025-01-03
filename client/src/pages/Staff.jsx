import React, { useEffect, useState } from "react";
import "./Staff.css"; // подключим стили для страницы
import Footer from "../Footer.jsx";
import { staffMembers } from "./staffw.js";
import { FaGraduationCap, FaBookOpen, FaClock } from "react-icons/fa";

const Staff = () => {
  const [selectedStaff, setSelectedStaff] = useState(null);

  const handleCardClick = (member) => {
    setSelectedStaff(member);
  };

  const handleBackClick = () => {
    setSelectedStaff(null);
  };

  useEffect(() => {
    if (selectedStaff) {
      window.scrollTo(0, 0);
    }
  }, [selectedStaff]);

  return (
    <div className="staff-container">
      <h1>Устодон</h1>
      {!selectedStaff ? (
        <div className="staff-list">
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className="staff-card"
              onClick={() => handleCardClick(member)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="staff-photo"
              />
              <h2>{member.name}</h2>
              <p>
                <FaGraduationCap /> <strong>{member.title}</strong>
              </p>
              <p>
                <FaBookOpen /> {member.bio}
              </p>
              <p>
                <FaClock /> <em>{member.experience}</em>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="staff-details">
          <button className="back-button" onClick={handleBackClick}>
            ба қафо
          </button>
          <div className="details-header">
            <img
              src={selectedStaff.image}
              alt={selectedStaff.name}
              className="staff-photo-large"
            />
            <div className="staff-info">
              <h2>{selectedStaff.name}</h2>
              <p>
                <FaGraduationCap /> <strong>{selectedStaff.title}</strong>
              </p>
              <p>
                <FaBookOpen /> {selectedStaff.bio}
              </p>
              <p>
                <FaClock /> <em>{selectedStaff.experience}</em>
              </p>
            </div>
          </div>
          <pre className="staff-description">{selectedStaff.details}</pre>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Сол</th>
                  <th>Маълумот</th>
                </tr>
              </thead>
              <tbody>
                {selectedStaff.data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{row.year}</td>
                    <td>{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Staff;
