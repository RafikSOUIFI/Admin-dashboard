import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({size = "40" ,allIncome, weeklyIncome}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = (weeklyIncome/allIncome) * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;