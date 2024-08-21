import React, { useEffect, useState } from "react";
import { questions } from "../Components/data";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const InfoCard = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const fetchData = () => {
    const topic = questions.find((topic) => topic.id === parseInt(id));
    if (topic) {
      setData(topic);
    } else {
      setData({ tags: { easy: [], medium: [], hard: [] } });
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleBack = () => {
    navigate("/");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        position: "relative",
      }}
    >
      {sidebarOpen && (
        <div
          style={{
            width: "250px",
            backgroundColor: "#80AF81",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            borderRight: "1px solid #ccc",
            position: "fixed",
            top: 0,
            left: 0,
            marginTop: "9vh",
            zIndex: 1000,
            boxShadow: "2px 0 5px rgba(0,0,0,0.5)",
            transition: "transform 0.3s ease-in-out",
            transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <IoMdClose
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
            onClick={toggleSidebar}
          />
          <h3>Topics</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px", cursor: "pointer" }}>
              <a
                onClick={() => scrollToSection("easy")}
                style={{ textDecoration: "none", color: "black" }}
              >
                Easy
              </a>
            </li>
            <li style={{ marginBottom: "10px", cursor: "pointer" }}>
              <a
                onClick={() => scrollToSection("medium")}
                style={{ textDecoration: "none", color: "black" }}
              >
                Medium
              </a>
            </li>
            <li style={{ marginBottom: "10px", cursor: "pointer" }}>
              <a
                onClick={() => scrollToSection("hard")}
                style={{ textDecoration: "none", color: "black" }}
              >
                Hard
              </a>
            </li>
          </ul>
        </div>
      )}
      <div
        style={{
          flex: 1,
          padding: "20px",
          marginLeft: sidebarOpen ? "250px" : "0",
          transition: "margin-left 0.3s ease-in-out",
        }}
      >
        <div
          onClick={handleBack}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            marginBottom: "20px",
          }}
        >
          <BiArrowBack style={{ fontSize: "23px", color: "black" }} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {data.name + " Questions"}
          </h2>
          <button
            onClick={toggleSidebar}
            style={{
              backgroundColor: "#508D4E",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Concepts
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div id="easy" style={{ marginBottom: "20px" }}>
            <h3
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Easy Questions
            </h3>
            {data.tags.easy.length === 0 ? (
              <p>No easy questions available.</p>
            ) : (
              <ul style={{ listStyleType: "none" }}>
                {data.tags.easy.map((question) => (
                  <li key={question.id}>
                    <strong>{question.id + ". " + question.question}</strong>
                    <p>
                      <strong>Sol. </strong>
                      <span>{question.answer}</span>
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div id="medium" style={{ marginBottom: "20px" }}>
            <h3
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Medium Questions
            </h3>
            {data.tags.medium.length === 0 ? (
              <p>No medium questions available.</p>
            ) : (
              <ul style={{ listStyleType: "none" }}>
                {data.tags.medium.map((question) => (
                  <li key={question.id}>
                    <strong>{question.id + ". " + question.question}</strong>
                    <p>
                      <strong>Sol. </strong>
                      <span>{question.answer}</span>
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div id="hard">
            <h3
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Hard Questions
            </h3>
            {data.tags.hard.length === 0 ? (
              <p>No hard questions available.</p>
            ) : (
              <ul style={{ listStyleType: "none" }}>
                {data.tags.hard.map((question) => (
                  <li key={question.id}>
                    <strong>{question.id + ". " + question.question}</strong>
                    <p>
                      <strong>Sol. </strong>
                      <span>{question.answer}</span>
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
