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
			<Typography variant="h6" sx={{ color: "whitesmoke", opacity: "70%", pb: 2 }}>
				JOIN US AT UPCOMING EVENTS
			</Typography>
			<Typography variant="h5" sx={{ pb: 5, color: "whitesmoke", fontWeight: 600 }}>
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
							JUNE
						</Typography>
						<Typography variant="h2" sx={{ color: "black", fontWeight: 400 }}>
							18
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
							<Typography variant="body1">AFKANERD SONAC STREET</Typography>
							<Typography variant="h6" sx={{ py: 2, fontWeight: 600 }}>
								Internal Infosession (Getting to know Deku SMS)
							</Typography>
							<Typography variant="body1">11:00 a.m. - 2: 00 p.m. </Typography>
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
							JUNE 18 11:00 a.m. - 2: 00 p.m.{" "}
						</Typography>
						<Typography variant="h6" sx={{ py: 2, fontWeight: 600 }}>
							Internal Infosession (Getting to know Deku SMS)
						</Typography>
						<Typography variant="body1" sx={{ opacity: "70%" }}>
							{" "}
							<FaLocationDot /> AFKANERD SONAC STREET{" "}
						</Typography>
						<Typography variant="h6" sx={{ py: 2 }}>
							Eager to learn more about Deku SMS? Wondering how it diverges from standard SMS
							messaging platforms and what functionalities it offer? Join our internal information
							session to gain a deeper understanding.
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
							JUNE
						</Typography>
						<Typography variant="h2" sx={{ color: "whitesmoke", fontWeight: 400 }}>
							29
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
							<Typography variant="body1">GOOGLE MEET</Typography>
							<Typography variant="h6" sx={{ py: 2, fontWeight: 600 }}>
								Intro to encryption in both RelaySMS and Deku SMS apps
							</Typography>
							<Typography variant="body1">4:00 p.m. - 6: 00 p.m. </Typography>
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
							JUNE 10 4:00 p.m. - 6: 00 p.m.{" "}
						</Typography>
						<Typography variant="h6" sx={{ py: 2, fontWeight: 600 }}>
							Intro to encryption in both RelaySMS and Deku SMS apps
						</Typography>
						<Typography variant="body1" sx={{ opacity: "70%" }}>
							{" "}
							<FaLocationDot /> GOOGLE MEET{" "}
						</Typography>
						<Typography variant="h6" sx={{ py: 2 }}>
							Passionate about understanding the nuances of encryption, including its workings,
							implementation, and fundamentals? Then this online session is tailor-made for you.
							Gain insights from industry experts, the developers behind SMSWithoutBorders, as they
							unravel the intricacies of encryption tools within the platform.
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
