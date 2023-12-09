import React from "react";
import { Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledButton = styled(Button)({
  borderRadius: "50%",
  padding: "4rem",
  fontWeight: 600,
});

function Start() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/quiz");
  };
  return (
    <div className="container display-center">
      <StyledButton variant="contained" onClick={handleNavigate}>
        Start
      </StyledButton>
    </div>
  );
}

export default Start;
