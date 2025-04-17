// Accordion component - to be implemented
import React from 'react';
import {
  Accordion as MUIAccordion,
  AccordionSummary,
  AccordionDetails,
  AccordionProps as MUIAccordionProps,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionProps extends MUIAccordionProps {
  summary: string;
}

const Accordion: React.FC<AccordionProps> = ({
  summary,
  children,
  ...props
}) => {
  return (
    <MUIAccordion {...props}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </MUIAccordion>
  );
};

export default Accordion;
