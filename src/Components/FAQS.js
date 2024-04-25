import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import { Box } from "@mui/material";

export default function Faqs() {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpansion = () => {
		setExpanded((prevExpanded) => !prevExpanded);
	};

	return (
		<Box>
			<Accordion
				expanded={expanded}
				onChange={handleExpansion}
				slots={{ transition: Fade }}
				slotProps={{ transition: { timeout: 400 } }}
				sx={{
					"& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
					"& .MuiAccordionDetails-root": {
						display: expanded ? "block" : "none"
					}
				}}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1-content"
					id="panel1-header"
				>
					<Typography variant="body1" sx={{ fontWeight: 700 }}>
						Is SMSWithoutBorders an open source project?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Yes SMSWithoutBorders is open source, we believe communication should be secure,
						unrestricted, and empowering for all.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
}
