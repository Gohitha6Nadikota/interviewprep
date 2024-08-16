import React, { useEffect, useState } from "react";
import { questions } from "../Components/data";
import { useParams } from "react-router-dom";

const InfoCard = () => {
  const { id } = useParams(); 
  const [data, setData] = useState(null); 

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

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <a
          href="#easy"
          style={{
            marginRight: "20px",
            textDecoration: "none",
            color: "green",
          }}
        >
          Easy
        </a>
        <a
          href="#medium"
          style={{
            marginRight: "20px",
            textDecoration: "none",
            color: "green",
          }}
        >
          Medium
        </a>
        <a href="#hard" style={{ textDecoration: "none", color: "green" }}>
          Hard
        </a>
      </div>
      <div style={{ width: "100%" }}>
        <div id="easy" style={{ marginBottom: "20px" }}>
          <h3>Easy Questions</h3>
          {data.tags.easy.length === 0 ? (
            <p>No easy questions available.</p>
          ) : (
            <ul>
              {data.tags.easy.map((question) => (
                <li key={question.id}>
                  <strong>{question.question}</strong>
                  <p>{question.answer}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div id="medium" style={{ marginBottom: "20px" }}>
          <h3>Medium Questions</h3>
          {data.tags.medium.length === 0 ? (
            <p>No medium questions available.</p>
          ) : (
            <ul>
              {data.tags.medium.map((question) => (
                <li key={question.id}>
                  <strong>{question.question}</strong>
                  <p>{question.answer}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div id="hard">
          <h3>Hard Questions</h3>
          {data.tags.hard.length === 0 ? (
            <p>No hard questions available.</p>
          ) : (
            <ul>
              {data.tags.hard.map((question) => (
                <li key={question.id}>
                  <strong>{question.question}</strong>
                  <p>{question.answer}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
