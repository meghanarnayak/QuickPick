import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Paper
      elevation={10}
      sx={{
        backgroundColor: "#5a0c4a", // Deep purple theme
        color: "white",
        py: 2, // Reduced vertical padding
        px: { xs: 2, md: 4 }, // Adjusted padding for responsiveness
        textAlign: { xs: "center", md: "left" },
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        mt: 4, // Adds space above the footer
      }}
    >
      <Grid container spacing={2} justifyContent="space-between" alignItems="center">
        {/* Logo and Tagline */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "start" } }}>
            <img src="/logo1.png" alt="logo" style={{ height: "50px", width: "50px" }} />
          </Box>
          <Typography variant="body2" sx={{ mt: 1, fontStyle: "italic", color: "#f8e1ec", fontSize: "14px" }}>
            Where Quality Meets Convenience.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "right" } }}>
          <Typography variant="h6" fontWeight="bold" fontSize="16px">
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-end" } }}>
            {["Home", "About", "Shop"].map((text, index) => (
              <Link
                key={index}
                to={`/${text.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  color: "#f8e1ec",
                  fontSize: "14px",
                  marginBottom: "5px",
                }}
              >
                {text}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Typography
        variant="body2"
        sx={{ mt: 2, textAlign: "center", color: "#ddd", fontSize: "12px" }}
      >
        &copy; {new Date().getFullYear()} Your Brand. All Rights Reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;
