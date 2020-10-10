import React, {Component} from "react";
import { withRouter } from 'next/router'
import DoctorConsultation from "../containers/consultation";
import HairLossQuestionnaire from '../containers/hairLoss';
import LifestyleQuestionnaire from "../containers/lifestyle";
import Photos from "../containers/photos";

import {CONSULTATION_DOCTOR, CONSULTATION_QUESTIONNAIRE_HAIR_LOSS, CONSULTATION_QUESTIONNAIRE_LIFESTYLE, CONSULTATION_PHOTOS} from "../constants/pathConstants";


class Consultation extends Component {


    render() {
        const {asPath, query} = this.props.router;
        const {tab} = query;
        return (
            <div>
                {asPath === CONSULTATION_DOCTOR && <DoctorConsultation/>}
                {asPath === CONSULTATION_QUESTIONNAIRE_HAIR_LOSS && <HairLossQuestionnaire/>}
                {asPath === CONSULTATION_QUESTIONNAIRE_LIFESTYLE && <LifestyleQuestionnaire/>}
                {asPath === CONSULTATION_PHOTOS && <Photos/>}
            </div>
        );
    }
}

export default withRouter(Consultation);
