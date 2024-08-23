import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { IoCopy } from "react-icons/io5";
import { newquestions } from "./data";

const InfoCard = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const topic = newquestions.find((topic) => topic.id === parseInt(id));
    if (topic) {
      setData(topic);
    } else {
      setData({ tags: {} });
    }
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleBack = () => {
    navigate("/");
  };

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: "9vh",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Back Arrow */}
      <div
        onClick={handleBack}
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: "6px",
          left: "20px",
          cursor: "pointer",
          zIndex: 2, // Ensure it stays above other content
        }}
      >
        <BiArrowBack style={{ fontSize: "23px", color: "black" }} />
      </div>

      {isSidebarOpen && (
        <div
          style={{
            width: "20%",
            backgroundColor: "#508D4E",
            color: "black",
            padding: "20px",
            borderRight: "1px solid #ddd",
            position: "fixed",
            height: "100%",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>Concepts</div>
            <IoMdClose
              onClick={toggleSidebar}
              style={{
                fontSize: "24px",
                color: "white",
                cursor: "pointer",
              }}
            />
          </div>
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              marginTop: "20px",
            }}
          >
            {Object.keys(data.tags).map((topic) => (
              <li
                key={topic}
                style={{
                  marginBottom: "15px",
                  cursor: "pointer",
                }}
              >
                <a
                  href={`#${topic}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "16px",
                  }}
                >
                  {topic} Questions
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div
        style={{
          marginLeft: isSidebarOpen ? "30%" : "0",
          width: isSidebarOpen ? "70%" : "100%",
          padding: "20px",
          overflowY: "auto",
          height: "100vh",
        }}
      >
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            style={{
              position: "absolute",
              top: "100px",
              left: "20px",
              backgroundColor: "#508D4E",
              color: "white",
              border: "none",
              padding: "10px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Contents
          </button>
        )}
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {data.name} Questions
        </h2>
        {Object.keys(data.tags).map((topic) => (
          <div id={topic} key={topic} style={{ marginBottom: "30px" }}>
            <h3>{topic} Questions</h3>
            {data.tags[topic].length === 0 ? (
              <p>No {topic} questions available.</p>
            ) : (
              <ul style={{ listStyleType: "none", padding: "0" }}>
                {data.tags[topic].map((question) => (
                  <li
                    key={question.id}
                    style={{
                      marginBottom: "15px",
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                    }}
                  >
                    <strong>
                      {question.id}. {question.question}
                    </strong>
                    <p>
                      <strong>Sol. </strong>
                      {question.answer}
                    </p>
                    {question.code && (
                      <div
                        style={{
                          backgroundColor: "#f8f8f8",
                          marginTop: "5px",
                          padding: "10px",
                          borderRadius: "5px",
                          position: "relative",
                        }}
                      >
                        <button
                          onClick={() => handleCopy(question.code)}
                          style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            color: "#508D4E",
                            border: "none",
                            backgroundColor: "transparent",
                            cursor: "pointer",
                          }}
                        >
                          <IoCopy fontSize="20px" />
                        </button>
                        <pre
                          style={{
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                          }}
                        >
                          {question.code}
                        </pre>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
