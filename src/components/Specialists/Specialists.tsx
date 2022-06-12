import React, {useEffect, useState} from "react";
import {getSpecialists} from "@/requests/specialist.request";
import Specialist from "@components/Specialists/Specialist";
import Cards from "@components/Card/Cards";

export default function Specialists() {

    return (
        <Cards
            getItems={getSpecialists}
            id="specialist"
            title="Наши специалисты"
            subTitle=""
        />
    );

}
