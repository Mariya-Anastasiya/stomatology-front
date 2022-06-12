import React from "react";
import AboutUsBase from "@components/AboutUs/AboutUsBase";
import Text from "@components/Text/Text";
import config from "@/config";

function AboutUs() {
    return (
        <div className="container p-5 d-flex justify-content-center flex-column">

            <AboutUsBase/>

            <Text value={`За годы успешной работы компания «${config.companyName}» приобрела бесценный опыт,
                о чем свидетельствуют лестные отзывы наших клиентов.`}/>

            <Text value="В случае если у Вас возникли вопросы при записи на приём,
                Вы всегда можете обратиться в наш справочный центр по телефону
                или воспользовавшись онлайн-консультантом на сайте."/>
        </div>
    );
}

export default AboutUs;
