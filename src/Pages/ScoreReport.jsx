import React, { useEffect } from "react";
import axios from "../utils/axios";

const ScoreReport = () => {
  useEffect(() => {
    let config = {
      method: "get",
      url: "/score-report",
    };
    axios
      .request(config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>ScoreReport</div>;
};

export default ScoreReport;
