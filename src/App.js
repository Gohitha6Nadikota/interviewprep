import "./App.css";
import { GiAchievement } from "react-icons/gi";
import { topics } from "./Components/data";
import { Routes,Route, useNavigate } from "react-router-dom";
import InfoCard from "./Components/InfoCard";
function App() {
  const navigate= useNavigate();
  const handleClick=(id)=>{
        navigate(`/topics/${id}`);
  }
  return (
      <div
        style={{
          backgroundColor: "#D6EFD8",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "9vh",
            display: "flex",
            backgroundColor: "#1A5319",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
            position:'fixed'
          }}
        >
          <GiAchievement
            style={{ fontSize: "40px", color: "white", paddingLeft: "7px" }}
          />
          <ol
            style={{
              display: "flex",
              alignItems: "center",
              listStyle: "none",
              paddingRight: "12px",
            }}
          >
            <li style={{ paddingRight: "7px" }}>Home</li>
            <li style={{ paddingRight: "7px" }}>About</li>
            <li style={{ paddingRight: "7px" }}>Login</li>
          </ol>
        </div>
        <Routes>
          <Route path="/" element={<div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px",
              fontSize: "30px",
              color: "#508D4E",
              fontWeight: "bold",
            }}
          >
            Contents
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {topics.map((topic) => (
              <div
                key={topic.id}
                style={{
                  width: "80vw",
                  backgroundColor: "#80AF81",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "10px",
                  margin: "20px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                  color: "black",
                }}
                onClick={() => handleClick(topic.id)}
              >
                <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                  {topic.name}
                </p>
                <p style={{ fontSize: "16px" }}>{topic.description}</p>
              </div>
            ))}
          </div>
        </div>} />
        <Route path='/topics/:id' element={<InfoCard/>} />
        </Routes>
      </div>
  );
}

export default App;
