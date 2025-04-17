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

export interface TezAccordionProps extends MUIAccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<TezAccordionProps> = ({ title, children, ...props }) => {
  return (
    <MUIAccordion {...props}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle1">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </MUIAccordion>
  );
};
