import { Box, Typography, Grid, ListItem, List } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{ bgcolor: "black", color: "white", p: 3, px: { md: 8, xs: 2 } }}
      >
        <Box>
          <Grid container>
            <Grid item md={6} xs={6}>
              <Box sx={{ display: { md: "flex", xs: "block" } }}>
                <Box
                  component="img"
                  src="/logo.png"
                  sx={{ width: "30px", px: 2 }}
                  alt="smswithoutborders logo"
                />{" "}
                <Typography variant="h5">SMSWithoutBorders</Typography>
              </Box>
            </Grid>
            <Grid item md={3} xs={12}>
              <List>
                <ListItem variant="body1">Blogs</ListItem>
                <ListItem variant="body1">RelaySMS</ListItem>
                <ListItem variant="body1">Deku SMS</ListItem>
                <ListItem variant="body1">Developers</ListItem>
              </List>
            </Grid>
            <Grid item md={3} xs={12}>
              <List>
                <ListItem variant="body1">GitHub</ListItem>
                <ListItem variant="body1">Facebook</ListItem>
                <ListItem variant="body1">Twitter</ListItem>
                <ListItem variant="body1">Mail</ListItem>
              </List>
            </Grid>
          </Grid>
          <br />
        </Box>
        <Typography variant="body1">© 2024 SMSWithoutBorders</Typography>
      </Box>
    </>
  );
}
