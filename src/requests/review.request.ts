import axios from "axios";
import config from "@/config";

interface ReviewBody {
    fullName: string,
    estimation: number,
    description: string
}

export const getReviews = async () => {
    const request = await axios.get(`${config.url}/feedbacks`);
    return request.data.slice(0, 3);
};

export const createReview = async (review: ReviewBody) => {
    return await axios.post(`${config.url}/feedbacks`, review);
};
