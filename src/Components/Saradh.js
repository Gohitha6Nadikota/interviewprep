import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { IoCopy } from "react-icons/io5";
import { newquestions } from "./data";

const InfoCard = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
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

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
        flexWrap: "wrap",
        marginTop: "9vh",
        width: "100%",
      }}
    >
      <div
        style={{
          padding: "20px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
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
            flexDirection: "row",
            width: "100%",
          }}
        >
          <div
            style={{
              backgroundColor: "#508D4E",
              color: "black",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "20%",
              cursor: "pointer",
              fontWeight: "bold",
              height: "20px",
            }}
          >
            <p
              onClick={toggleSidebar}
              style={{
                backgroundColor: "#508D4E",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                fontSize: "16px",
              }}
            >
              Concepts
            </p>

            <IoMdClose fontSize="20px" display="none" />
          </div>
          <div
            style={{
              backgroundColor: "transparent",
              color: "black",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
              cursor: "pointer",
              fontWeight: "bold",
              height: "20px",
              fontSize: "18px",
            }}
          >
            {data.name + " Questions"}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginTop: "25px",
          }}
        >
          {Object.keys(data.tags).map((topic) => (
            <div
              id={topic}
              key={topic}
              style={{ marginBottom: "20px", width: "100%" }}
            >
              <h3
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "5px",
                }}
              >
                {topic.charAt(0).toUpperCase() +
                  topic.slice(1).replace(/([A-Z])/g, " ")}{" "}
                Questions
              </h3>
              {data.tags[topic].length === 0 ? (
                <p>No {topic} questions available.</p>
              ) : (
                <ul
                  style={{
                    listStyleType: "none",
                    width: "100%",
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {data.tags[topic].map((question) => (
                    <li
                      key={question.id}
                      style={{ marginTop: "15px", width: "100%" }}
                    >
                      <strong style={{ width: "100%" }}>
                        {question.id + ". " + question.question}
                      </strong>
                      <p style={{ width: "100%" }}>
                        <strong>Sol. </strong>
                        <span>{question.answer}</span>
                      </p>
                      <div
                        style={{
                          backgroundColor: "#f8f8f8",
                          marginTop: "5px",
                          padding: "10px",
                          borderRadius: "5px",
                          width: "100%",
                          position: "relative",
                        }}
                      >
                        <pre style={{ width: "100%" }}>
                          <code style={{ width: "100%" }}>{question.code}</code>
                        </pre>
                        <button
                          onClick={() => handleCopy(question.code)}
                          style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            color: "#508D4E",
                            border: "none",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontSize: "20px",
                          }}
                        >
                          <IoCopy />
                        </button>
                      </div>
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
