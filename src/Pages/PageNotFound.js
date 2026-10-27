import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { FaCircleChevronRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import Seo from "../Components/Seo";
import Navbar from "../Components/Navbar";

export default function PageNotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <Box
        sx={{
          px: { md: 17, xs: 2 },
          py: { md: 15, xs: 10 },
          align: "center",
          justifyContent: "center",
          my: "auto",
        }}
      >
        <Seo
          title="Page Not Found | SMSWithoutBorders"
          description="The page you are looking for does not exist."
          noindex
        />
        <Typography
          variant="h2"
          className="banner-text"
          sx={{
            px: { md: 25, xs: 2 },
            textAlign: "center",
            fontWeight: 700,
            fontSize: { md: "3rem", xs: "2rem" },
          }}
        >
          {t("notFound.title", { defaultValue: "Oops you got lost" })}
        </Typography>{" "}
        <Typography
          variant="h5"
          sx={{
            px: { md: 35, xs: 2 },
            py: { md: 5, xs: 3 },
            textAlign: "center",
            opacity: "70%",
          }}
        >
          {t("notFound.subtitle", {
            defaultValue:
              "It seems the page you are looking for does not exist",
          })}
        </Typography>
        <Typography
          sx={{
            px: { md: 35, xs: 2 },
            py: { md: 7, xs: 2 },
            textAlign: "center",
            opacity: "70%",
          }}
        >
          {t("notFound.backHome", {
            defaultValue: "Let's get you back home",
          })}
          <IconButton component="a" href="/">
            <FaCircleChevronRight size="30px" />
          </IconButton>
        </Typography>
      </Box>
    </>
  );
}
