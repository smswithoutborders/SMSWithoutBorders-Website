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
            display: expanded ? "block" : "none",
          },
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim purus eu nunc ullamcorper, vel convallis ante tincidunt.
            Vivamus lacinia, lacus nec tristique bibendum, velit libero
            consequat purus, ut finibus ex lectus eget nisi. Nulla facilisi.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            How many sub projects are in SMSWithoutBorders
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim purus eu nunc ullamcorper, vel convallis ante tincidunt.
            Vivamus lacinia, lacus nec tristique bibendum, velit libero
            consequat purus, ut finibus ex lectus eget nisi. Nulla facilisi.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim purus eu nunc ullamcorper, vel convallis ante tincidunt.
            Vivamus lacinia, lacus nec tristique bibendum, velit libero
            consequat purus, ut finibus ex lectus eget nisi. Nulla facilisi.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            SMSWithoutBorders apk
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim purus eu nunc ullamcorper, vel convallis ante tincidunt.
            Vivamus lacinia, lacus nec tristique bibendum, velit libero
            consequat purus, ut finibus ex lectus eget nisi. Nulla facilisi.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            SMSWithoutBorders Gateway clients
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim purus eu nunc ullamcorper, vel convallis ante tincidunt.
            Vivamus lacinia, lacus nec tristique bibendum, velit libero
            consequat purus, ut finibus ex lectus eget nisi. Nulla facilisi.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
