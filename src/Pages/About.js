import { Box, Typography, Grid } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Box sx={{ mx: 20, my: 4, p: 8 }}>
      <Typography variant="h6" sx={{ mb: 10, fontWeight: 600 }}>
        About the project
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
        purus eu nunc ullamcorper, vel convallis ante tincidunt. Vivamus
        lacinia, lacus nec tristique bibendum, velit libero consequat purus, ut
        finibus ex lectus eget nisi. Nulla facilisi. Phasellus quis libero nec
        libero tristique dapibus. Cras nec lacus vel magna posuere ultricies.
      </Typography>
      <Box sx={{ py: 4 }}>
        <Typography variant="body1">
          Duis dapibus tristique vestibulum. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Vivamus ut malesuada quam. Integer vel magna in risus dictum lobortis.
          Etiam sed libero id libero fringilla finibus vitae sit amet odio. Sed
          sit amet libero eros. Ut vel dui dapibus, maximus purus sed, ultrices
          odio. Maecenas sit amet semper mauris, vitae varius neque.
        </Typography>
      </Box>
      {/*  */}
      <Box sx={{ p: 3 }} id="impact">
        {/* <Typography variant="h6" sx={{ py: 3, px: 2, fontWeight: 600 }}>
          Our Impact
        </Typography> */}

        <Grid container rowSpacing={12} columnSpacing={2}>
          <Grid item md={6} xs={12}>
            <Box
              component="img"
              src="/voice.jpg"
              sx={{ width: "90%", borderRadius: 5 }}
              alt="RelaySMS"
            />
          </Grid>
          <Grid item md={6} xs={12} my="auto">
            <Typography variant="h6" sx={{ py: 2, fontWeight: 550 }}>
              Our Impact
            </Typography>
            <Typography variant="body1">
              The platform enables users with a smartphone to communicate with
              online third-party platforms using SMS messages. A typical
              use-case of the platform is sending out emails from platforms such
              as Gmail accounts. This becomes a useful tool in cases where
              access to the internet is limited or completely unavailable.
            </Typography>
            <br />
          </Grid>
          {/*  */}
        </Grid>
      </Box>
      {/*  */}
      <Box
        md={6}
        xs={6}
        sx={{
          p: 3,
          bgcolor: "white",

          borderRadius: 5,
        }}
      >
        <Grid
          container
          mx="auto"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mx: 15,
          }}
        >
          <Grid item md={4} xs={12}>
            <Typography
              variant="h6"
              sx={{ py: 3, px: 2, fontWeight: 600, color: "black" }}
            >
              Our Partners:
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box
              component="img"
              src="/OTF.png"
              alt="Open Technology Fund Logo"
              sx={{ width: "50%" }}
            />
          </Grid>

          <Grid item md={4} xs={12}>
            <Box
              component="img"
              src="/Internews.png"
              alt="Internews Logo"
              sx={{ width: "50%" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
