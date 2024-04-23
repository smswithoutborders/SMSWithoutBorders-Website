import { Grid, Typography, Box, IconButton, Button } from "@mui/material";
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
								fontSize: { md: "80px", xs: "50px" }
							}}
						>
							The Private Part of SMS{" "}
							<Typography
								variant="h2"
								sx={{
									fontWeight: 700,
									fontSize: { md: "80px", xs: "50px" }
								}}
								className="messaging-text"
							>
								{" "}
								Messaging
							</Typography>
						</Typography>{" "}
						<Typography
							variant="h6"
							sx={{
								px: { md: 35, xs: 2 },
								py: { md: 10, xs: 2 },
								textAlign: "center",
								opacity: "70%"
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim purus eu nunc
							ullamcorper, vel convallis ante tincidunt. Vivamus lacinia, lacus nec tristique
							bibendum, velit libero consequat purus, ut finibus ex lectus eget nisi. Nulla
							facilisi.
						</Typography>
					</motion.div>
				</Box>
			</Box>
			{/* About */}

			{/*  */}
			<Box
				sx={{
					py: { md: 8, xs: 2 }
				}}
			>
				<Box component="img" src="/luther.png" sx={{ width: { md: "60%", xs: "100%" } }} />
			</Box>
			{/*  */}
			<Box
				sx={{
					p: { md: 8, xs: 2 }
				}}
			>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ type: "spring", stiffness: 60, delay: 1 }}
				>
					<Typography variant="h4" sx={{ py: 4, px: { xs: 2, md: 35 } }}>
						We are nerds building solutions and creating a voice for everyone through SMS messaging
						(with really cool tech).
					</Typography>

					<Typography
						variant="h6"
						sx={{
							px: { md: 35, xs: 2 },
							py: { md: 4, xs: 4 },
							opacity: "70%"
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim purus eu nunc
						ullamcorper, vel convallis ante tincidunt. Vivamus lacinia, lacus nec tristique
						bibendum, velit libero consequat purus, ut finibus ex lectus eget nisi. Nulla facilisi.
					</Typography>
				</motion.div>
			</Box>
			<Box sx={{ bgcolor: "whitesmoke" }}>
				<Grid
					sx={{ px: { md: 35, xs: 1 } }}
					container
					direction="row"
					justifyContent="space-evenly"
					alignItems="center"
				>
					<Grid md={3} xs={6}>
						<Box
							component="img"
							src="/OTF.png"
							sx={{ width: { md: "100%", xs: "100%" } }}
							alt="RelaySMS"
						/>
					</Grid>
					<Grid md={3} xs={6}>
						<Box
							component="img"
							src="/Internews.png"
							sx={{ width: { md: "100%", xs: "100%" } }}
							alt="RelaySMS"
						/>
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
						bgcolor: "#1B1E27",
						py: { md: 12, xs: 8 }
					}}
				>
					<Grid container justifyContent="flex-end" alignItems="center" columnSpacing={3}>
						<Grid item md={4}>
							<Box
								component="img"
								src="/swobb.png"
								sx={{ width: { md: "100%", xs: "100%" } }}
								alt="RelaySMS"
							/>
						</Grid>
						<Grid item md={7} sx={{ pr: { md: 15, xs: 0 } }}>
							<Typography variant="h6" sx={{ fontWeight: 600, opacity: "70%" }}>
								RelaySMS
							</Typography>
							<Typography variant="h4" sx={{ py: 4, fontWeight: 600 }}>
								SMS messaging app with end to end encyption and other mind blowing features
							</Typography>
							<Typography
								variant="body1"
								sx={{
									opacity: "70%",
									pb: 4
								}}
							>
								The platform enables users with a smartphone to communicate with online third-party
								platforms using SMS messages. A typical use-case of the platform is sending out
								emails from platforms such as Gmail accounts. This becomes a useful tool in cases
								where access to the internet is limited or completely unavailable.
							</Typography>

							<IconButton>
								<FaCircleChevronRight size="35px" />
							</IconButton>
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

						py: { md: 12, xs: 8 }
					}}
				>
					<Grid container justifyContent="center" alignItems="center">
						<Grid item md={7} sx={{ pl: { md: 15, xs: 0 } }}>
							<Typography variant="h6" sx={{ fontWeight: 600, opacity: "70%" }}>
								Deku SMS
							</Typography>
							<Typography variant="h4" sx={{ py: 4, fontWeight: 600 }}>
								SMS messaging app with end to end encyption and other mind blowing features
							</Typography>
							<Typography
								variant="body1"
								sx={{
									opacity: "70%",
									pb: 4
								}}
							>
								The platform enables users with a smartphone to communicate with online third-party
								platforms using SMS messages. A typical use-case of the platform is sending out
								emails from platforms such as Gmail accounts. This becomes a useful tool in cases
								where access to the internet is limited or completely unavailable.
							</Typography>
							<IconButton>
								<FaCircleChevronRight size="35px" />
							</IconButton>
						</Grid>
						<Grid item md={5} justifyContent="flex-end" alignItems="end" ml="auto">
							<Box
								component="img"
								src="/dekuu.png"
								sx={{ width: { md: "80%", xs: "100%" }, borderRadius: 5 }}
								alt="RelaySMS"
							/>
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
						py: { md: 12, xs: 6 },
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
            py: { md: 12, xs: 6 },
            bgcolor: "#496A81",
            px: { md: 17, xs: 2 },
          }}
        >
          <Typography variant="h6" sx={{ opacity: "70%" }}>
            Support
          </Typography>
          <Typography variant="h5" sx={{ py: 5, fontWeight: 600 }}>
            Pay for one or maybe two SMS's today
          </Typography>
          <Grid
            container
            columnSpacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={5} xs={12}>
              <Box sx={{ pt: 5 }}>
                <Typography variant="body1">
                  Your donations helps us send messages of those who really need
                  to communicate using our platform.
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
                    bgcolor: "whitesmoke",
                  }}
                >
                  Donate
                </Button>
                <Typography variant="body1" sx={{ py: 5 }}>
                  Don't have the ability to support financially? You can still
                  help by staring our repos on github <FaStar />
                </Typography>
                <Button
                  size="large"
                  className="cards"
                  variant="contained"
                  sx={{
                    borderRadius: "30px",
                    px: 4,
                    textTransform: "none",
                    bgcolor: "whitesmoke",
                  }}
                >
                  Github
                  <FaGithub size="25px" style={{ marginLeft: "4px" }} />
                </Button>
              </Box>
            </Grid>
            <Grid item md={7} xs={12}>
              <Box
                component="img"
                src="/gitstar.png"
                sx={{ width: { md: "100%", xs: "100%" } }}
                alt="RelaySMS"
              />
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
						p: { md: 12, xs: 2 },
						px: { md: 17, xs: 2 }
					}}
				>
					<Typography variant="h6" sx={{ opacity: "70%" }}>
						FAQS
					</Typography>
					<Typography variant="h5" sx={{ py: 5, fontWeight: 600 }}>
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
