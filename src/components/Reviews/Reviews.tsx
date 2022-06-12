import React from "react";
import axios from "axios";
import config from "@/config";
import Cards from "@components/Card/Cards";

const getReviews = async () => {
    const request = await axios.get(`${config.url}/feedbacks`);
    return request.data.slice(0, 3);
};

function Reviews() {
    return (
        <Cards
            getItems={getReviews}
            id="review"
            title="Отзывы о нас"
            subTitle=""
        />
    );
}

export default Reviews;
