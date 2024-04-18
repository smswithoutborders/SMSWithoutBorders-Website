import { Box, Card, Grid, Typography, Modal, Button } from "@mui/material";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Events() {
	const [open, setOpen] = useState(false);
	const [more, setMore] = useState(false);

	const handleOpenFirst = () => {
		setOpen(true);
	};

	const handleCloseFirst = () => {
		setOpen(false);
	};

	const handleOpenSecond = () => {
		setMore(true);
	};

	const handleCloseSecond = () => {
		setMore(false);
	};

	return (
		<Box>
			<Typography variant="h6" sx={{ color: "whitesmoke", opacity: "70%" }}>
				JOIN US AT UPCOMING EVENTS
			</Typography>
			<Typography variant="h5" sx={{ py: 5, color: "whitesmoke", fontWeight: 600 }}>
				Attend events hosted by SMSWithoutBorders, both online and onsite.
			</Typography>

			<Grid container columnSpacing={8} rowSpacing={8}>
				<Grid item md={4} xs={12} sx={{ px: { md: 0, xs: 2 } }}>
					<Card
						onClick={handleOpenFirst}
						sx={{
							bgcolor: "whitesmoke",
							p: 3,
							borderRadius: 5
						}}
					>
						<Typography variant="body1" sx={{ color: "black", px: 1 }}>
							APR
						</Typography>
						<Typography variant="h2" sx={{ color: "black", fontWeight: 400 }}>
							17
						</Typography>
						{/*  */}
						<Box
							sx={{
								bgcolor: "#011a29",
								p: 2,
								mt: 8,
								borderRadius: 2,
								color: "white"
							}}
						>
							<Typography variant="body1">YOUTUBE LIVE</Typography>
							<Typography variant="h6" sx={{ py: 2, fontWeight: 600 }}>
								Intro to encryption in both RelaySMS and Deku SMS apps
							</Typography>
							<Typography variant="body1">10:00 a.m. - 1: 00 p.m. </Typography>
						</Box>
					</Card>
				</Grid>
				{/* Modal 1 */}
				<Modal open={open} onClose={handleCloseFirst}>
					<Box
						className="modal"
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							width: 400,
							color: "whitesmoke",
							boxShadow: 24,
							p: 4
						}}
					>
						<Typography variant="body1" sx={{ opacity: "70%", mt: 5 }}>
							APRIL 17 10:00 a.m. - 1: 00 p.m.{" "}
						</Typography>
						<Typography variant="h6" sx={{ py: 2, fontWeight: 600 }}>
							Intro to encryption in both RelaySMS and Deku SMS apps
						</Typography>
						<Typography variant="body1" sx={{ opacity: "70%" }}>
							{" "}
							<FaLocationDot /> YOUTUBE LIVE{" "}
						</Typography>
						<Typography variant="h6" sx={{ py: 2 }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim purus eu nunc
							ullamcorper, vel convallis ante tincidunt. Vivamus lacinia, lacus nec tristique
							bibendum, velit libero consequat purus, ut finibus ex lectus eget nisi. Nulla
							facilisi.
						</Typography>
						<Button
							variant="contained"
							size="large"
							sx={{ borderRadius: 5, bgcolor: "whitesmoke", color: "black" }}
							onClick={handleCloseFirst}
						>
							RSVP
						</Button>
					</Box>
				</Modal>

				{/*  */}
				<Grid item md={4} xs={12}>
					<Card
						onClick={handleOpenSecond}
						sx={{
							bgcolor: "#020b10",
							p: 3,

							borderRadius: 5
						}}
					>
						<Typography variant="body1" sx={{ color: "whitesmoke", px: 1 }}>
							AUG
						</Typography>
						<Typography variant="h2" sx={{ color: "whitesmoke", fontWeight: 400 }}>
							10
						</Typography>
						{/*  */}
						<Box
							sx={{
								bgcolor: "whitesmoke",
								p: 2,
								mt: 8,
								borderRadius: 2,
								color: "black"
							}}
						>
							<Typography variant="body1">AFKANERD SONAC STREET</Typography>
							<Typography variant="h6" sx={{ py: 2, fontWeight: 600 }}>
								Intro to encryption in both RelaySMS and Deku SMS apps
							</Typography>
							<Typography variant="body1">10:00 a.m. - 1: 00 p.m. </Typography>
						</Box>
					</Card>
				</Grid>

				{/* Modal 2 */}
				<Modal open={more} onClose={handleCloseSecond}>
					<Box
						className="modal"
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							width: 400,
							color: "whitesmoke",
							boxShadow: 24,
							p: 4
						}}
					>
						<Typography variant="body1" sx={{ opacity: "70%", mt: 5 }}>
							AUGUST 10 10:00 a.m. - 1: 00 p.m.{" "}
						</Typography>
						<Typography variant="h6" sx={{ py: 2, fontWeight: 600 }}>
							Intro to encryption in both RelaySMS and Deku SMS apps
						</Typography>
						<Typography variant="body1" sx={{ opacity: "70%" }}>
							{" "}
							<FaLocationDot /> AFKANERD INFOTECH, SONAC STREET, BAMENDA, CAMEROON.{" "}
						</Typography>
						<Typography variant="h6" sx={{ py: 2 }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim purus eu nunc
							ullamcorper, vel convallis ante tincidunt. Vivamus lacinia, lacus nec tristique
							bibendum, velit libero consequat purus, ut finibus ex lectus eget nisi. Nulla
							facilisi.
						</Typography>
						<Button
							variant="contained"
							size="large"
							sx={{ borderRadius: 5, bgcolor: "whitesmoke", color: "black" }}
							onClick={handleCloseSecond}
						>
							RSVP
						</Button>
					</Box>
				</Modal>

				{/*  */}
			</Grid>
		</Box>
	);
}
