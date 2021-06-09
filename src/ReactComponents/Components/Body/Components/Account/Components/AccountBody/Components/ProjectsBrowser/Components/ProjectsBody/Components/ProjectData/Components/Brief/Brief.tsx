import React, {FC} from "react";
import style from "./Brief.module.scss";
import {Questions} from "../../../../../../../../../../../FillOrderQuestions/FillOrderQuestions";
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {TitleComponent} from "../Title/TitleComponent";
import DnsIcon from '@material-ui/icons/Dns';
import {BriefProps} from "./Brief.types";

export const Brief:FC<BriefProps> = () => {
    return <section className={style.ProjectName}>
        <Accordion>
            <AccordionSummary
                component={'div'}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <TitleComponent titleIcon={<DnsIcon/>} titleText={'Бриф'}/>
            </AccordionSummary>
            <AccordionDetails>
                <Questions displayOnly={false}/>
            </AccordionDetails>
        </Accordion>
    </section>
};

