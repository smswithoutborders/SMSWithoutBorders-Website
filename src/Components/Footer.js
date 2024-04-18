import { Box, Typography, Grid, Divider, IconButton } from "@mui/material";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
	return (
		<>
			<Box component="footer" sx={{ bgcolor: "black", color: "white", p: 3, px: { md: 8, xs: 2 } }}>
				<Box sx={{ display: "flex", px: { md: 4, xs: 2 }, py: { md: 1, xs: 1 } }}>
					<Typography variant="body1" sx={{ pt: 1, pr: 3 }}>
						Follow us
					</Typography>
					<IconButton>
						<FaXTwitter size="20px" />
					</IconButton>
					<IconButton>
						{" "}
						<FaFacebook size="20px" />{" "}
					</IconButton>

					<IconButton>
						{" "}
						<FaLinkedin size="20px" />{" "}
					</IconButton>

					<IconButton>
						{" "}
						<FaGithub size="20px" />{" "}
					</IconButton>

					<IconButton>
						{" "}
						<FaYoutube size="20px" />{" "}
					</IconButton>
				</Box>
				<Divider />
				<Box>
					<Grid container sx={{ py: { md: 2, xs: 2 } }}>
						<Grid item md={6} xs={6}>
							<Typography variant="h6" sx={{ fontWeight: 600, px: { md: 3, xs: 2 } }}>
								SMSWithoutBorders
							</Typography>
						</Grid>
						<Grid item md={6} xs={12}>
							<Box sx={{ display: { md: "flex", xs: "block" } }}>
								<Typography variant="body1" sx={{ p: 2 }}>
									Blogs
								</Typography>
								<Typography variant="body1" sx={{ p: 2 }}>
									RelaySMS
								</Typography>
								<Typography variant="body1" sx={{ p: 2 }}>
									Deku SMS
								</Typography>
								<Typography variant="body1" sx={{ p: 2 }}>
									Developers
								</Typography>
								<Typography variant="body1" sx={{ p: 2 }}>
									© 2024 SMSWithoutBorders
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	);
}
