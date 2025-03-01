import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f8e1ec",
        overflow: "hidden",
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 6 },
        borderRadius: "16px",
        border: "3px solid #5a0c4a",
        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Grid container alignItems="center" spacing={4}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 2 } }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#5a0c4a" }}>
              Welcome to
            </Typography>
            <Typography
              variant="h2"
              sx={{
                textTransform: "uppercase",
                color: "#212121",
                fontWeight: "bold",
                pb: 2,
              }}
            >
              QuickPick
            </Typography>
            <Typography variant="body1" sx={{ color: "#555", pb: 3 }}>
              Discover exclusive deals and amazing collections that redefine your shopping experience.
            </Typography>

            {/* Shop Now Button with Navigation */}
            <Button
              component={Link}
              to="/shop"
              variant="contained"
              sx={{
                backgroundColor: "#5a0c4a",
                color: "white",
                px: 4,
                py: 1,
                fontSize: "1rem",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#450a38" },
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Grid>

        {/* Right Content (Image) */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/shop14.jpg"
            alt="Banner Image"
            sx={{
              width: "100%",
              height: "100%",
              maxWidth: "450px",
              maxHeight: "300px",
              objectFit: "cover",
              display: "block",
              mx: "auto",
              borderRadius: "16px",
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
