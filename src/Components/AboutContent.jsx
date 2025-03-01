import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: { xs: 2, sm: 4, md: 6 } }}>
      <Grid
        container
        spacing={4}
        sx={{
          backgroundColor: "#f8e1ec", // Soft pastel pink
          //backgroundColor: "#e0f7fa",
          borderRadius: "24px",
          p: { xs: 3, sm: 5 },
          boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.1)",
          border: "3px solid #5a0c4a",
        }}
      >
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/shop6.jpg"
            alt="About Us"
            sx={{
              width: "100%",
              borderRadius: "24px",
              objectFit: "cover",
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
            }}
          />
        </Grid>

        {/* Text Content */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            p: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#5a0c4a",
              mb: 2,
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "600",
              color: "#333",
              fontSize: "22px",
              mb: 2,
            }}
          >
            <b>Where Quality Meets Convenience.</b>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#555",
              maxWidth: "500px",
            }}
          >
            Welcome to <b>QuickPick</b>, where passion meets innovation. We are
            dedicated to providing high-quality products and services that cater
            to your needs with excellence and precision. Our journey began with
            a simple vision—to redefine industry standards while maintaining
            integrity, transparency, and reliability. Your satisfaction is our
            motivation!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
