import axios from "axios";
import config from "@/config";

export const loginUser = async (userName: string, password: string) => {
    return await axios
        .post(`${config.url}/auth/login`, {
            userName: userName,
            password: password
        });
};
