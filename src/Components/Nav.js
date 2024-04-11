import { Typography, Box, Button } from "@mui/material";
import React from "react";

export default function Nav() {
  return (
    <Box
      component="nav"
      sx={{
        display: { md: "flex", xs: "none" },
        justifyContent: "space-between",
        py: 2,
        mx: 5,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          component="img"
          src="/logo.png"
          sx={{ width: "40px" }}
          alt="smswithoutborders logo"
        />
        <Typography variant="h6" sx={{ marginLeft: "8px", fontWeight: 600 }}>
          SMSWithoutBorders
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",

            borderRadius: 7,

            px: 2,
            justifyItems: "space-between",
          }}
        >
          <Button
            sx={{
              mx: 3,
              textTransform: "none",
              color: "whitesmoke",
              fontSize: "18px",
            }}
          >
            Technologies
          </Button>
          <Button
            sx={{
              mx: 3,
              textTransform: "none",
              color: "whitesmoke",
              fontSize: "18px",
            }}
          >
            Blogs
          </Button>
          <Button
            sx={{
              mx: 3,
              textTransform: "none",
              color: "whitesmoke",
              fontSize: "18px",
            }}
          >
            Documentations
          </Button>
        </Box>
        <Button
          size="large"
          className="cards"
          variant="contained"
          sx={{
            borderRadius: "30px",
            px: 4,
            mx: 2,
            textTransform: "none",
            bgcolor: "whitesmoke",
          }}
        >
          Donate
        </Button>
      </Box>
    </Box>
  );
}
