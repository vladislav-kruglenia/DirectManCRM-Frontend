import style from "./Brief.module.scss";
import React from "react";
import {Questions} from "../../../../../../FillOrderQuestions/FillOrderQuestions";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export let Brief = () => {
    return <div className={style.ProjectName}>


        <Accordion>
            <AccordionSummary
                component={'div'}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant={"h6"}>Просмотреть бриф</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Questions displayOnly={true}/>
            </AccordionDetails>
        </Accordion>
    </div>
};

