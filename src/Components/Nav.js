import { Typography, Box, Button, IconButton } from "@mui/material";
import React from "react";
import { FaGithub } from "react-icons/fa6";

export default function Nav() {
	return (
		<Box
			component="nav"
			sx={{
				display: { md: "flex", xs: "none" },
				justifyContent: "space-between",
				py: 2,
				mx: 5
			}}
		>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Typography
					component="a"
					href="/"
					variant="h6"
					sx={{ marginLeft: "8px", fontWeight: 600, textDecoration: "none", color: "white" }}
				>
					SMSWithoutBorders
				</Typography>
			</Box>
			<Box sx={{ display: "flex" }}>
				<Box
					sx={{
						display: "flex",

						borderRadius: 7,

						px: 2,
						justifyItems: "space-between"
					}}
				>
					<Button
						component="a"
						href="https://github.com/smswithoutborders"
						target="_blank"
						rel="noopener noreferrer"
						sx={{
							mx: 3,
							textTransform: "none",
							color: "whitesmoke",
							fontSize: "18px"
						}}
					>
						RelaySMS
					</Button>
					<Button
						component="a"
						href="https://github.com/deku-messaging"
						target="_blank"
						rel="noopener noreferrer"
						sx={{
							mx: 3,
							textTransform: "none",
							color: "whitesmoke",
							fontSize: "18px"
						}}
					>
						Deku SMS
					</Button>
					<Button
						component="a"
						href="https://blog.smswithoutborders.com/"
						target="_blank"
						rel="noopener noreferrer"
						sx={{
							mx: 3,
							textTransform: "none",
							color: "whitesmoke",
							fontSize: "18px"
						}}
					>
						Blogs
					</Button>

					<IconButton
						component="a"
						href="https://github.com/smswithoutborders"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub />
					</IconButton>
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
						bgcolor: "whitesmoke"
					}}
				>
					Donate
				</Button>
			</Box>
		</Box>
	);
}
