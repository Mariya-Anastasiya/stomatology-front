import axios from "axios";
import config from "@/config";

export const getSpecialists = async () => {
    const request = await axios.get(`${config.url}/specialists`);

    const specialists: any[] = [];

    for (let i = 0; i < request.data.length; i++) {
        const specialist = request.data[i];

        const specialistsRequest = await axios.get(`${config.url}/specialists/${specialist.id}`);

        specialists.push(specialistsRequest.data);
    }

    return specialists;
};
