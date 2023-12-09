import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import Quetion from "../Component/Quetion";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [currentQuizId, setCurrentQuizId] = useState(1);
  const [nextQuizId, setNextQuizId] = useState(null);
  const [question, setQuestion] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [timerStart, setTimerStart] = useState(0);
  const navigate = useNavigate();

  const getQuestion = (quizId) => {
    let config = {
      method: "get",
      url: `questions/${quizId}`,
    };
    axios
      .request(config)
      .then((res) => {
        const data = res.data;
        setCurrentQuizId(data.question.quizId);
        setQuestion(data.question);
        setNextQuizId(data.nextQuizId);
        setTimerStart(Date.now());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetDb = () => {
    let config = {
      method: "get",
      url: `/reset`,
    };
    axios.request(config).then((res) => {
      getQuestion(currentQuizId);
    });
  };

  const handleSelectOption = (event) => {
    const value = event.target.value;
    let selectedOptionsArr = [...selectedOptions];
    if (selectedOptions?.includes(value)) {
      selectedOptionsArr = selectedOptionsArr.filter(
        (option) => value !== option
      );
    } else {
      selectedOptionsArr.push(value);
    }
    setSelectedOptions(selectedOptionsArr);
  };

  const submitResponse = () => {
    const timeTaken = Math.floor((Date.now() - timerStart) / 1000);
    let data = JSON.stringify({
      quizId: currentQuizId,
      selectedOptions: selectedOptions,
      timeTaken: timeTaken,
    });
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/submit-response",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((res) => {
        setSelectedOptions([]);
        getQuestion(nextQuizId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getScore = () => {
    navigate("/score");
  };

  useEffect(() => {
    resetDb();
  }, []);

  return (
    <div className="container display-center">
      <Box>
        {question && (
          <Quetion
            question={question}
            selectedOptions={selectedOptions}
            handleSelectOption={handleSelectOption}
          />
        )}
        <Box className="display-center">
          <Button
            variant="contained"
            onClick={nextQuizId === -1 ? getScore : submitResponse}
            disabled={selectedOptions?.length === 0}
          >
            {nextQuizId === -1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Quiz;
