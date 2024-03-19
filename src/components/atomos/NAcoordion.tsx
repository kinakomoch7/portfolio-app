import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Props = {
  summary: string,
  detail: string
}

export const NAcoordion = (props: Props) => {

  const { summary, detail } = props;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >{summary}</AccordionSummary>
      <AccordionDetails sx={{ whiteSpace: 'pre-line' }}>{detail}</AccordionDetails>
    </Accordion>
  )
}
