import { Box, Typography } from "@mui/material";
import React from "react";
export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "url('/shop11.jpg')",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          // backgroundImage: "linear-gradient(144deg,rgba(249, 251, 252, 0.29),rgba(248, 249, 250, 0.47))",
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "60px", sm: "100px" },
            textTransform: "uppercase",
            color: "white",
            //fontStyle:"italic" 

          }}
          gutterBottom
        >
          <b>Welcome to QuickPick</b>
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "40px", color: "white", fontStyle: "italic" }}
        >
          <b> Where Quality Meets Convenience.</b>
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontSize: "30px",fontWeight: "600", color: "white" }}
        >
          <b>Because You Deserve the Best – Seamless Shopping, Every Time.</b>
        </Typography>
      </Box>
    </Box>
  );
}
