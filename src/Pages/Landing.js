import { Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Faqs from "../Components/FAQS";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <Box>
      <Box className="banner">
        <Box my="auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <Typography
              variant="h2"
              className="banner-text"
              sx={{
                align: "center",
                px: { md: 25, xs: 2 },
                textAlign: "center",
                fontWeight: 700,
                fontSize: { md: "80px", xs: "50px" },
              }}
            >
              The Private Part of SMS Messaging
            </Typography>{" "}
            <Typography
              variant="body1"
              sx={{
                px: { md: 35, xs: 2 },
                py: { md: 10, xs: 2 },
                textAlign: "center",
                color: "#F1E9DA",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim purus eu nunc ullamcorper, vel convallis ante tincidunt.
              Vivamus lacinia, lacus nec tristique bibendum, velit libero
              consequat purus, ut finibus ex lectus eget nisi. Nulla facilisi.
            </Typography>
          </motion.div>
        </Box>
      </Box>
      {/* About */}

      <Box
        align="center"
        sx={{
          p: { md: 8, xs: 2 },
          bgcolor: "#A9BCD0",
          color: "black",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, delay: 1 }}
        >
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ py: 4, px: 2, fontWeight: 600 }}
          >
            About
          </Typography>
          <Typography
            variant="h2"
            className="banner-text"
            textAlign="center"
            sx={{ py: 4, px: 2, fontWeight: 600 }}
          >
            WHAT WE DO?
          </Typography>

          <Typography
            variant="h6"
            sx={{
              px: { md: 35, xs: 2 },
              py: { md: 10, xs: 4 },
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim purus eu nunc ullamcorper, vel convallis ante tincidunt.
            Vivamus lacinia, lacus nec tristique bibendum, velit libero
            consequat purus, ut finibus ex lectus eget nisi. Nulla facilisi.
          </Typography>
        </motion.div>
      </Box>

      {/* Project 2 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 80, delay: 1 }}
      >
        <Box
          align="center"
          sx={{
            p: { md: 8, xs: 2 },
            bgcolor: "#2E294E",
          }}
        >
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ py: 4, px: 2, fontWeight: 600 }}
          >
            Project 2
          </Typography>
          <Typography
            variant="h2"
            textAlign="center"
            className="banner-text"
            sx={{ py: 4, px: 2, fontWeight: 600 }}
          >
            DEKU SMS
          </Typography>
          <Typography sx={{ py: 2, textDecoration: "underline" }}>
            About Deku SMS <FaArrowRight />
          </Typography>
          <Box
            component="img"
            src="/4.png"
            sx={{ width: { md: "40%", xs: "80%" } }}
            alt="RelaySMS"
          />
          <Typography
            variant="body1"
            sx={{
              px: { md: 35, xs: 2 },
              py: { md: 10, xs: 4 },
              textAlign: "center",
              color: "#F1E9DA",
            }}
          >
            The platform enables users with a smartphone to communicate with
            online third-party platforms using SMS messages. A typical use-case
            of the platform is sending out emails from platforms such as Gmail
            accounts. This becomes a useful tool in cases where access to the
            internet is limited or completely unavailable.
          </Typography>
        </Box>
      </motion.div>
      {/* Partners */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 80, delay: 1 }}
      >
        <Box
          align="center"
          sx={{
            p: { md: 8, xs: 2 },
            bgcolor: "#D7BEA8",
            color: "black",
          }}
        >
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ py: 4, px: 2, fontWeight: 600 }}
          >
            Partners
          </Typography>
          <Grid container columnGap={4} rowGap={6} justifyContent="center">
            <Grid md={5} xs={12} sx={{ bgcolor: "whitesmoke" }}>
              <Box
                component="img"
                src="/OTF.png"
                sx={{ width: { md: "60%", xs: "80%" } }}
                alt="RelaySMS"
              />
              <Typography sx={{ py: 2, textDecoration: "underline" }}>
                About OTF <FaArrowRight />
              </Typography>
            </Grid>
            <Grid md={5} xs={12} sx={{ bgcolor: "whitesmoke", p: 2 }}>
              <Box
                component="img"
                src="/Internews.png"
                sx={{ width: { md: "90%", xs: "80%" } }}
                alt="RelaySMS"
              />
              <Typography sx={{ py: 2, textDecoration: "underline" }}>
                About Internews <FaArrowRight />
              </Typography>
            </Grid>
          </Grid>

          <Typography
            variant="body1"
            sx={{
              px: { md: 35, xs: 2 },
              py: { md: 7, xs: 4 },
              textAlign: "center",
            }}
          >
            Give a voice those who need to speak up today
          </Typography>
          <Button
            size="large"
            className="cards"
            variant="contained"
            sx={{
              borderRadius: "30px",
              px: 6,
              mx: 2,
              py: 2,
              mb: 4,
              textTransform: "none",
              bgcolor: "whitesmoke",
            }}
          >
            Donate Now
          </Button>
        </Box>
      </motion.div>
      {/* Ask */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 80, delay: 1 }}
      >
        <Box
          align="center"
          sx={{
            p: { md: 8, xs: 2 },
            bgcolor: "#481D24",
          }}
        >
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ py: 4, px: 2, fontWeight: 600 }}
          >
            Ask
          </Typography>
          <Typography
            variant="h2"
            textAlign="center"
            className="banner-text"
            sx={{ py: 4, px: 2, fontWeight: 600 }}
          >
            FAQS
          </Typography>
          <Typography sx={{ py: 2, textDecoration: "underline" }}>
            Ask Us <FaArrowRight />
          </Typography>
          <Box sx={{ py: 4 }}>
            <Faqs />
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}
