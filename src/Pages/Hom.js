import React from "react";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import { styled } from "@mui/system";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main
}));

const Section = styled(Box)(({ theme }) => ({
	marginTop: theme.spacing(5),
	marginBottom: theme.spacing(5)
}));

const sectionTitleStyle = {
	marginBottom: 16
};

const Home = () => {
	return (
		<>
			{/* Header */}
			<CustomAppBar position="static">
				<Toolbar>
					<Typography variant="h6" sx={{ flexGrow: 1 }}>
						Smswithoutborders
					</Typography>
					<Typography variant="h6">SWOB</Typography>
				</Toolbar>
			</CustomAppBar>

			<Container
				sx={{
					bgcolor: "background.paper", // Add a background color to ensure it's visible
					border: "1px solid red", // Add a border to debug visibility
					padding: 2 // Add padding for spacing
				}}
			>
				{/* About Us Section */}
				<Section>
					<Typography variant="h4" gutterBottom style={sectionTitleStyle}>
						About Us
					</Typography>
					<Typography variant="body1" paragraph>
						We are a leading company in our industry with a commitment to providing exceptional
						products and services. Our team is dedicated to maintaining a high standard of quality
						and excellence in all that we do. We believe in continuous growth and innovation,
						ensuring that we stay ahead in the market. Our mission is to deliver unparalleled value
						to our customers, and our vision is to be the foremost choice for clients looking for
						top-notch solutions.
					</Typography>
				</Section>

				{/* Other Sections */}
				{/* Add your other sections here */}
			</Container>
		</>
	);
};

export default Home;
