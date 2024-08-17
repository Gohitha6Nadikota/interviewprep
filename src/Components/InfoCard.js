import React, { useEffect, useState } from "react";
import { questions } from "../Components/data";
import { useNavigate, useParams} from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
const InfoCard = () => {
  const { id } = useParams(); 
  const [data, setData] = useState(null); 
  const navigate=useNavigate();
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
  const handleBack=()=>{
    navigate('/');
  }
  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <div
        onClick={handleBack}
        style={{ width: "100%", display: "flex", alignItems: "flex-start" }}
      >
        <BiArrowBack style={{ fontSize: "23px", color: "black" }} />
      </div>
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
      <div style={{ display: "flex", flexDirection: "column" }}>
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
              backgroundColor: "#508D4E",
              color: "white",
              padding: "5px 19px",
              fontWeight: "bold",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#06D001")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#508D4E")
            }
          >
            Easy
          </a>
          <a
            href="#medium"
            style={{
              marginRight: "20px",
              textDecoration: "none",
              backgroundColor: "#508D4E",
              color: "white",
              padding: "5px 19px",
              fontWeight: "bold",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#06D001")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#508D4E")
            }
          >
            Medium
          </a>
          <a
            href="#hard"
            style={{
              textDecoration: "none",
              backgroundColor: "#508D4E",
              color: "white",
              padding: "5px 19px",
              fontWeight: "bold",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#06D001")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#508D4E")
            }
          >
            Hard
          </a>
        </div>
        <div style={{ width: "100%" }}>
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
                      <span >{question.answer}</span>
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
                      <span >{question.answer}</span>
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
