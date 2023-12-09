import React from "react";
import {
  Stack,
  Box,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";

const Quetion = ({ question, selectedOptions, handleSelectOption }) => {
  return (
    <div>
      <Stack spacing={2}>
        <Box>{question.text}</Box>
        {question.image && (
          <Box className="display-center">
            <img src={question.image} alt="" height={100} width={100} />
          </Box>
        )}
        <Box>
          <FormGroup>
            {!!question.options.length &&
              question.options.map((option) => (
                <>
                  <FormControlLabel
                    value={option}
                    control={
                      <Checkbox
                        sx={{
                          color: "white",
                        }}
                        onChange={handleSelectOption}
                        checked={selectedOptions.includes(option)}
                      />
                    }
                    label={option}
                  />
                </>
              ))}
          </FormGroup>
        </Box>
        <Box></Box>
      </Stack>
    </div>
  );
};

export default Quetion;
