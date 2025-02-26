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
				width: "100%",
				direction: isRtl ? "rtl" : "ltr",
				boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.2)"
			}}
		>
			{/* <Divider sx={{ my: 3, borderColor: "#424242" }} /> */}

			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					flexWrap: "wrap",
					textAlign: "center",
					px: { xs: 2, sm: 4, md: 6 },
					gap: 2
				}}
			>
				{/* Start: Privacy Policy */}
				<Link
					href="/privacy-policy"
					color="inherit"
					underline="none"
					sx={{
						fontSize: "0.875rem",
						textAlign: { xs: "center", sm: "start" },
						width: { xs: "100%", sm: "auto" },
						px: { xs: 2, sm: 4 },
						transition: "color 0.3s",
						"&:hover": {
							color: "#00bcd4"
						}
					}}
				>
					{t("footer.privacyPolicy")}
				</Link>

				{/* Middle: Social Icons */}
				<Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
					<IconButton
						href="https://github.com/smswithoutborders"
						aria-label="GitHub"
						title={t("social.github")}
						sx={{
							color: "#ffffff",
							transition: "transform 0.3s, color 0.3s",
							"&:hover": {
								transform: "scale(1.2)",
								color: "#00bcd4"
							}
						}}
					>
						<FaGithub size={24} />
					</IconButton>
					<IconButton
						href="https://twitter.com/RelaySMS"
						aria-label="Twitter"
						title={t("social.x")}
						sx={{
							color: "#ffffff",
							transition: "transform 0.3s, color 0.3s",
							"&:hover": {
								transform: "scale(1.2)",
								color: "#00bcd4"
							}
						}}
					>
						<FaTwitter size={24} />
					</IconButton>
					<IconButton
						href="https://bsky.app/profile/relaysms.bsky.social"
						aria-label="Bluesky"
						title={t("social.bluesky")}
						sx={{
							color: "#ffffff",
							transition: "transform 0.3s, color 0.3s",
							"&:hover": {
								transform: "scale(1.2)",
								color: "#1DA1F2"
							}
						}}
					>
						<img src="./bluesky.svg" alt="Bluesky" style={{ width: 24, height: 24 }} />
					</IconButton>
				</Box>

				{/* End: Copyright */}
				<Typography
					variant="body2"
					sx={{
						fontSize: "0.835rem",
						textAlign: { xs: "center", sm: "end" },
						width: { xs: "100%", sm: "auto" },
						opacity: 0.8
					}}
				>
					© {new Date().getFullYear()} SMSWithoutBorders.
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;

{
	/* Social Icons */
}
