import React from "react";
import { ResultCount } from "../DataContext";
import "./UserResult.scss";
import { useNavigate} from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MdReplay } from "react-icons/md";
import axios from "axios";

function UserResult() {
  const uname = localStorage.getItem("userName");
  const count = ResultCount();
  const navigate = useNavigate();
  function handleRplay(e) {
    navigate("/");
  }
  async function handleLboard(e) {
    try {
      const sendReg = await axios.post(
        "http://localhost:8080/lboard/postleader",
        {
          name: uname,
          score: count,
          date: Date.now(),
        }
      );
      console.log(sendReg);
      navigate("/lboard");
    } catch (e) {
      console.error(e.message);
    }
  }

  return (
    <div className="result">
      <div className="d-flex align-items-center justify-content-center">
        <div className="res_card_btns">
          <button
            className="res_btns d-flex align-items-center justify-content-center"
            onClick={(e) => {
              handleRplay(e);
            }}
          >
            Play Again
            <MdReplay />
          </button>
          <button
            className="res_btns"
            onClick={(e) => {
              handleLboard(e);
            }}
          >
            See Leader Board
          </button>
        </div>
      </div>
      <div className="result_card">
        <div className="d-flex justify-content-center align-items-center">
          <div className="res_head center">
            <h3 style={{ margin: "0px" }}>Your score card</h3>
          </div>

         
        </div>

        <div className="result_card_body">
          <div className="result_uname center w-40">
            <h6>{uname}</h6>
          </div>
          <div className="result_Bar center">
            <CircularProgressbar
              className="bar_prog"
              value={count}
              maxValue={5}
              text={`${count}/5`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // Text size
                textSize: "30px",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `${count > 3 ? "#5eff86" : "red"}`,
                textColor: `${count > 3 ? "#5eff86" : "red"}`,
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserResult;
