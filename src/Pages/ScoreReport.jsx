import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import Score from "react-score-indicator";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";

const ScoreReport = () => {
  const [score, setScore] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const navigate = useNavigate();

  const restartQuiz = () => {
    navigate("/quiz");
  };

  useEffect(() => {
    let config = {
      method: "get",
      url: "/score-report",
    };
    axios
      .request(config)
      .then((res) => {
        const data = res.data;
        setScore(data.score);
        setTimeTaken(data.timeTaken);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container display-center">
      <Box>
        <Score
          className="score"
          value={score}
          maxValue={100}
          lineWidth={20}
          lineGap={0}
        />
        <Stack
          spacing={2}
          sx={{
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Box>Total time taken: {timeTaken} second</Box>
          <Box className="display-center">
            <Button
              variant="contained"
              onClick={restartQuiz}
              sx={{ width: 300 }}
            >
              Start Again!
            </Button>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default ScoreReport;
