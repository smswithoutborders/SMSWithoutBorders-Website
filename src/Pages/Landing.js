import { Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import { FaCircleChevronRight, FaGithub, FaStar } from "react-icons/fa6";
import Faqs from "../Components/FAQS";
import { motion } from "framer-motion";
import Events from "../Components/Events";

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
								fontSize: { md: "80px", xs: "55px" }
							}}
						>
							Beyond Messaging,{" "}
							<Typography
								variant="h2"
								sx={{
									fontWeight: 700,
									fontSize: { md: "80px", xs: "55px" }
								}}
								className="messaging-text"
							>
								{" "}
								Building Freedom.
							</Typography>
						</Typography>{" "}
						<Typography
							variant="h5"
							sx={{
								px: { md: 35, xs: 2 },
								py: { md: 10, xs: 2 },
								textAlign: "center",
								opacity: "70%"
							}}
						>
							We develop tools that advocate for internet freedom and free expression globally
							because we believe communication should be secure, unrestricted, and empowering for
							all.
						</Typography>
					</motion.div>
				</Box>
			</Box>
			{/* About */}

			{/*  */}
			<Box
				sx={{
					py: { md: 8, xs: 8 },
					px: { md: 0, xs: 4 }
				}}
			>
				<Grid
					container
					justifyContent="center"
					alignItems="center"
					columnSpacing={4}
					rowSpacing={4}
				>
					<Grid md={6} xs={12}>
						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							<Box component="img" src="/luther.png" sx={{ width: { md: "100%", xs: "100%" } }} />
						</motion.div>
					</Grid>
					<Grid md={6} xs={12}>
						<Typography
							component="blockquote"
							variant="h6"
							sx={{ px: { md: 15, xs: 3 }, py: 3, fontWeight: 600 }}
						>
							<span className="quote first">&quot;</span> Our lives begin to end the day we become
							silent about things that matter.<span className="quote">&quot;</span> - Martin Luther
							King Jr.
						</Typography>
						<Typography variant="h6" sx={{ px: { md: 15, xs: 2 }, opacity: "75%" }}>
							SMSWithoutBorders keeps the conversation going with secure messaging tools that
							empower your voice, anywhere.
						</Typography>
					</Grid>
				</Grid>
			</Box>
			{/*  */}
			{/* Sponsors */}
			<Box
				sx={{ bgcolor: "whitesmoke", color: "black", py: { md: 8, xs: 10 }, px: { md: 18, xs: 2 } }}
			>
				<Typography variant="h6" sx={{ opacity: "70%", pb: 2 }}>
					PARTNERS
				</Typography>
				<Typography variant="h5" sx={{ pb: 5, fontWeight: 600 }}>
					Heros that help keep us afloat
				</Typography>
				<Grid
					sx={{ px: { md: 35, xs: 1 } }}
					container
					direction="row"
					justifyContent="space-evenly"
					alignItems="center"
				>
					<Grid md={5} xs={6} component="a" href="https://www.opentech.fund/" target="_blank">
						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							<Box
								component="img"
								src="/OTF.png"
								sx={{ width: { md: "100%", xs: "100%" } }}
								alt="RelaySMS"
							/>
						</motion.div>
					</Grid>
					<Grid md={5} xs={6} component="a" href="https://internews.org/" target="_blank">
						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							<Box
								component="img"
								src="/Internews.png"
								sx={{ width: { md: "100%", xs: "100%" } }}
								alt="RelaySMS"
							/>
						</motion.div>
					</Grid>
				</Grid>
			</Box>
			{/* Project 1 */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ type: "spring", stiffness: 80, delay: 1 }}
			>
				<Box
					sx={{
						p: { md: 8, xs: 2 },

						pt: { md: 12, xs: 8 }
					}}
				>
					<Box sx={{ px: { md: 10, xs: 0 }, py: 2 }}>
						<Typography variant="h6" sx={{ opacity: "70%", pb: 2 }}>
							OUR TOOLS
						</Typography>
						<Typography variant="h5" sx={{ pb: 5, fontWeight: 600 }}>
							Our tools that aid offline communication
						</Typography>
					</Box>
					<Grid
						container
						justifyContent="flex-end"
						alignItems="center"
						columnSpacing={3}
						rowSpacing={3}
					>
						<Grid item md={4}>
							<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
								<Box
									component="img"
									src="/swobb.png"
									sx={{ width: { md: "100%", xs: "100%" } }}
									alt="RelaySMS"
								/>
							</motion.div>
						</Grid>
						<Grid item md={7} sx={{ pr: { md: 15, xs: 0 } }}>
							<Typography variant="h6" sx={{ fontWeight: 600, opacity: "70%" }}>
								RelaySMS (formerly SMSWOB)
							</Typography>
							<Typography variant="h4" sx={{ py: 4, fontWeight: 600 }}>
								Stay connected even with limited or unavailable internet access
							</Typography>
							<Typography
								variant="body1"
								sx={{
									opacity: "70%",
									pb: 4
								}}
							>
								RelaySMS is an open-source tool that enables you to communicate with various online
								services (such as Gmail, Twitter, and Telegram) using regular SMS text messages.
								This is particularly useful in situations where internet access is limited or
								unavailable.
							</Typography>

							<Button sx={{ color: "whitesmoke" }}>
								<Typography variant="body1" sx={{ opacity: "70%", pr: 2, textTransform: "none" }}>
									Learn More
								</Typography>
								<FaCircleChevronRight size="30px" />
							</Button>
						</Grid>
					</Grid>
				</Box>
			</motion.div>
			{/* Project 2 */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ type: "spring", stiffness: 80, delay: 1 }}
			>
				<Box
					sx={{
						p: { md: 8, xs: 2 },
						pt: { md: 0, xs: 7 },
						pb: { md: 12, xs: 8 }
					}}
				>
					<Grid container justifyContent="center" alignItems="center" rowSpacing={3}>
						<Grid item md={7} sx={{ pl: { md: 15, xs: 0 } }}>
							<Typography variant="h6" sx={{ fontWeight: 600, opacity: "70%" }}>
								Deku SMS
							</Typography>
							<Typography variant="h4" sx={{ py: 4, fontWeight: 600 }}>
								Feature-rich, open-source default SMS app Safeguarding Your SMS Communications with
								End-to-End Encryption
							</Typography>
							<Typography
								variant="body1"
								sx={{
									opacity: "70%",
									pb: 4
								}}
							>
								Deku SMS is a Feature-rich, open-source default SMS app designed to enhance your
								messaging experience while prioritizing your privacy and security. With Deku SMS,
								you can seamlessly send and receive end-to-end encrypted SMS messages, ensuring that
								your conversations remain confidential.
							</Typography>
							<Button sx={{ color: "whitesmoke" }}>
								<Typography variant="body1" sx={{ opacity: "70%", pr: 2, textTransform: "none" }}>
									Learn More
								</Typography>
								<FaCircleChevronRight size="30px" />
							</Button>
						</Grid>
						<Grid item md={5} justifyContent="flex-end" alignItems="end" ml="auto">
							<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
								<Box
									component="img"
									src="/dekuu.png"
									sx={{ width: { md: "80%", xs: "100%" }, borderRadius: 5 }}
									alt="RelaySMS"
								/>
							</motion.div>
						</Grid>
					</Grid>
				</Box>
			</motion.div>
			{/* Events */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ type: "spring", stiffness: 80, delay: 1 }}
			>
				<Box
					sx={{
						py: { md: 12, xs: 10 },
						bgcolor: "#032B43",
						px: { md: 17, xs: 2 }
					}}
				>
					<Events />
				</Box>
			</motion.div>
			{/* Donate */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ type: "spring", stiffness: 80, delay: 1 }}
			>
				<Box
					sx={{
						py: { md: 12, xs: 10 },
						bgcolor: "#496A81",
						px: { md: 17, xs: 2 }
					}}
				>
					<Typography variant="h6" sx={{ opacity: "70%", pb: 2 }}>
						SUPPORT
					</Typography>
					<Typography variant="h5" sx={{ pb: 5, fontWeight: 600 }}>
						Join the heroes empowering people with a means of communication.
					</Typography>
					<Grid
						container
						columnSpacing={3}
						rowSpacing={3}
						justifyContent="center"
						alignItems="center"
					>
						<Grid item md={5} xs={12}>
							<Box sx={{ pt: 5 }}>
								<Typography variant="body1" sx={{ opacity: "75%" }}>
									Your donations directly support those in need by providing them with communication
									access through our platform.
								</Typography>
								<Button
									size="large"
									className="cards"
									variant="contained"
									sx={{
										borderRadius: "30px",
										px: 4,
										mt: 2,
										textTransform: "none",
										bgcolor: "whitesmoke"
									}}
								>
									Donate
								</Button>
								<Typography variant="body1" sx={{ pt: 5, opacity: "75%" }}>
									Unable to provide financial support? You can still make a difference by starring
									our repositories on GitHub. <FaStar />
								</Typography>
								<Button
									size="large"
									className="cards"
									variant="contained"
									sx={{
										borderRadius: "30px",
										px: 4,
										mt: 2,
										textTransform: "none",
										bgcolor: "whitesmoke"
									}}
								>
									Github
									<FaGithub size="25px" style={{ marginLeft: "4px" }} />
								</Button>
							</Box>
						</Grid>
						<Grid item md={7} xs={12}>
							<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
								<Box
									component="img"
									src="/gitstar.png"
									sx={{ width: { md: "100%", xs: "100%" } }}
									alt="RelaySMS"
								/>
							</motion.div>
						</Grid>
					</Grid>
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
					sx={{
						py: { md: 12, xs: 10 },
						px: { md: 17, xs: 2 }
					}}
				>
					<Typography variant="h6" sx={{ opacity: "70%", pb: 2 }}>
						FAQS
					</Typography>
					<Typography variant="h5" sx={{ pb: 5, fontWeight: 600 }}>
						Frequently asked questions
					</Typography>

					<Box sx={{ py: 4 }}>
						<Faqs />
					</Box>
				</Box>
			</motion.div>
		</Box>
	);
}
