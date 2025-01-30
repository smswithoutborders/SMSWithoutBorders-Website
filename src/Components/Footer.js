import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === "fa";

	return (
		<Box
			sx={{
				backgroundColor: "#1c222c",
				color: "#ffffff",
				py: 4,
				mt: 3,
				width: "100%",
				direction: isRtl ? "rtl" : "ltr"
			}}
		>
			<Box
				sx={{
					width: "100%",
					mx: "auto",
					px: { xs: 5, md: 15 }
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexWrap: "wrap",
						textAlign: "center"
					}}
				>
					{/* Start: Privacy Policy */}
					<Link
						href="/privacy-policy"
						color="inherit"
						underline="hover"
						sx={{ fontSize: "0.875rem" }}
					>
						{t("footer.privacyPolicy")}
					</Link>

					{/* Middle: Social Icons */}
					<Box>
						<IconButton
							href="https://github.com/smswithoutborders"
							aria-label="GitHub"
							sx={{ color: "#ffffff", mx: 1 }}
						>
							<FaGithub size={24} />
						</IconButton>
						<IconButton
							href="https://twitter.com/RelaySMS"
							aria-label="Twitter"
							sx={{ color: "#ffffff", mx: 1 }}
						>
							<FaTwitter size={24} />
						</IconButton>
					</Box>

					{/* End: Copyright */}
					<Typography variant="body2" sx={{ fontSize: "0.835rem" }}>
						© {new Date().getFullYear()} SMSWithoutBorders.
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Footer;
