import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import {newquestions} from "./data";

const InfoCard = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const fetchData = () => {
    const topic = newquestions.find((topic) => topic.id === parseInt(id));
    if (topic) {
      setData(topic);
    } else {
      setData({ tags: {} });
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
            {Object.keys(data.tags).map((topic) => (
              <li
                key={topic}
                style={{ marginBottom: "10px", cursor: "pointer" }}
              >
                <a
                  onClick={() => scrollToSection(topic)}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {topic.charAt(0).toUpperCase() +
                    topic.slice(1).replace(/([A-Z])/g, " ")}
                </a>
              </li>
            ))}
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
            cursor: "pointer",
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
          {Object.keys(data.tags).map((topic) => (
            <div id={topic} key={topic} style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {topic.charAt(0).toUpperCase() +
                  topic.slice(1).replace(/([A-Z])/g, " ")}{" "}
                Questions
              </h3>
              {data.tags[topic].length === 0 ? (
                <p>No {topic} questions available.</p>
              ) : (
                <ul style={{ listStyleType: "none" }}>
                  {data.tags[topic].map((question) => (
                    <li key={question.id}>
                      <strong>{question.id + ". " + question.question}</strong>
                      <p>
                        <strong>Sol. </strong>
                        <span>{question.answer}</span>
                      </p>
                      <pre
                        style={{
                          backgroundColor: "#f8f8f8",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                      >
                        <code>{question.code}</code>
                      </pre>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
