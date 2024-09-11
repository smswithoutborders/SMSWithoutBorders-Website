import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LanguageSwitcher from "../Components/LanguageSwitcher";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import "../index.css";

const PrivacyPolicy = () => {
	const { i18n, t } = useTranslation();
	const [content, setContent] = useState("");
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setAnchorEl(null);
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 600);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		const language = i18n.language || "en";
		const filePath = `/privacy-policy/${language}.md`;

		fetch(filePath)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.text();
			})
			.then((text) => setContent(text))
			.catch((error) => console.error("Error fetching markdown:", error));
	}, [i18n.language]);

	return (
		<>
			{/* ============== Navbar ================= */}
			<AppBar
				position="fixed"
				sx={{
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundColor: "#1c222c",
					backgroundBlendMode: "overlay"
				}}
			>
				<Toolbar
					sx={{
						justifyContent: isMobile ? "center" : "space-between",
						minHeight: { xs: 60, sm: 70 }
					}}
				>
					<Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
					{isMobile ? (
						<>
							<IconButton
								edge="start"
								color="inherit"
								aria-label="menu"
								onClick={handleMenu}
								sx={{ ml: "auto" }}
							>
								<MenuIcon />
							</IconButton>
							<Menu
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								PaperProps={{
									style: {
										width: "80%",
										maxWidth: "none",
										fontSize: "14px",
										fontWeight: "500"
									}
								}}
								MenuListProps={{
									sx: {
										p: 0,
										display: "flex",
										flexDirection: "column",
										alignItems: "center"
									}
								}}
							>
								<MenuItem
									onClick={handleClose}
									sx={{
										"&:hover": {
											color: "#c08507"
										}
									}}
									component="a"
									href="https://smswithoutborders.com/"
									rel="noopener noreferrer"
								>
									{t("navbar.link")}
								</MenuItem>
								<MenuItem
									onClick={handleClose}
									sx={{
										"&:hover": {
											color: "#c08507"
										}
									}}
									component="a"
									href="https://blog.smswithoutborders.com/"
									rel="noopener noreferrer"
								>
									{t("navbar.link1")}
								</MenuItem>
								<MenuItem
									onClick={handleClose}
									sx={{
										"&:hover": {
											color: "#c08507"
										}
									}}
									component="a"
									href="https://relay.smswithoutborders.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("navbar.link2")}
								</MenuItem>
								<MenuItem
									onClick={handleClose}
									sx={{
										"&:hover": {
											color: "#c08507"
										}
									}}
									component="a"
									href="https://github.com/deku-messaging/Deku-SMS-Android"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("navbar.link3")}
								</MenuItem>
								<MenuItem
									onClick={handleClose}
									sx={{
										"&:hover": {
											color: "#c08507"
										}
									}}
									component="a"
									href="/privacy-policy"
									rel="noopener noreferrer"
								>
									{t("footer.privacyPolicy")}
								</MenuItem>
								<MenuItem
									sx={{
										"&:hover": {
											color: "#c08507"
										}
									}}
								>
									<LanguageSwitcher />
								</MenuItem>
							</Menu>
						</>
					) : (
						<>
							<MenuItem
								onClick={handleClose}
								sx={{
									fontSize: "1rem",
									"&:hover": {
										color: "#c08507"
									}
								}}
								component="a"
								href="https://smswithoutborders.com/"
								rel="noopener noreferrer"
							>
								{t("navbar.link")}
							</MenuItem>
							<MenuItem
								onClick={handleClose}
								sx={{
									fontSize: "1rem",
									"&:hover": {
										color: "#c08507"
									}
								}}
								component="a"
								href="https://blog.smswithoutborders.com/"
								rel="noopener noreferrer"
							>
								{t("navbar.link1")}
							</MenuItem>
							<MenuItem
								onClick={handleClose}
								sx={{
									fontSize: "1rem",
									"&:hover": {
										color: "#c08507"
									}
								}}
								component="a"
								href="https://relay.smswithoutborders.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								{t("navbar.link2")}
							</MenuItem>
							<MenuItem
								onClick={handleClose}
								sx={{
									fontSize: "1rem",
									"&:hover": {
										color: "#c08507"
									}
								}}
								component="a"
								href="https://github.com/deku-messaging/Deku-SMS-Android"
								target="_blank"
								rel="noopener noreferrer"
							>
								{t("navbar.link3")}
							</MenuItem>
							<MenuItem
								onClick={handleClose}
								sx={{
									fontSize: "1rem",
									"&:hover": {
										color: "#c08507"
									}
								}}
								component="a"
								href="/privacy-policy"
								rel="noopener noreferrer"
							>
								{t("footer.privacyPolicy")}
							</MenuItem>
							<MenuItem
								sx={{
									fontSize: "1rem"
								}}
							>
								<LanguageSwitcher />
							</MenuItem>
						</>
					)}
				</Toolbar>
			</AppBar>

			<div className="privacy-policy-container">
				<ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
			</div>
		</>
	);
};

export default PrivacyPolicy;
