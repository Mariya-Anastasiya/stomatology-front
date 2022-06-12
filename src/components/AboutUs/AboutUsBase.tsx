import React from "react";
import Text from "@components/Text/Text";
import config from "@/config";

export default function AboutUsBase() {
    return (
        <div>
            <h2 className="text-center">О нас</h2>
            <Text value={`Вас приветствует стоматологическая клиника «${config.companyName}»!`}/>

            <Text value={`«${config.companyName}» - динамично развивающаяся клиника в области стоматологических услуг.`}/>
            <Text value="Мы рады предложить вам широкий спектр услуг по самым выгодным ценам."/>
            <Text value="Вот уже несколько лет наша компания занимает уверенные
                позиции на рынке и предоставляет только самые современные решения,
                позволяя нашим клиентам делать заказы через сайт."/>
        </div>
    );
}
