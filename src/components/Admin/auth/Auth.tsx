import React, {MouseEventHandler} from "react";
import Button from "@components/Button/Button";
import {loginUser} from "@/requests/auth.request";

export default function Auth() {
    const onClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.preventDefault();
        const login = document.getElementById("login") as HTMLInputElement;
        const password = document.getElementById("password") as HTMLInputElement;
        login?.classList.remove("border-danger");
        password?.classList.remove("border-danger");

        if (login.value.trim() == "") {
            login?.classList.add("border-danger");
            return;
        }

        if(password.value.trim() == "") {
            password?.classList.add("border-danger");
            return;
        }

        loginUser(login.value, password.value)
            .then((res) => {
                sessionStorage.setItem("access_token", res.data.access_token);
                window.location.href = "/admin";
            })
            .catch(() => {
                login?.classList.add("border-danger");
                login.value = "";
                password?.classList.add("border-danger");
                password.value = "";
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 mx-auto my-5">
                    <form className="form d-flex justify-content-center align-items-center flex-column text-center">
                        <h2 className="display-5 fw-bold m-3">Админка</h2>
                        <input className="form-control m-3 form-send__input p-3" type="text" name="name" id="login"
                            required placeholder="Логин:"/>
                        <input className="form-control m-3 form-send__input p-3" type="password" name="password"
                            id="password" required placeholder="Пароль:"/>

                        <Button to="/admin" onClick={onClick} value="Войти" color="turquoise"/>
                    </form>
                </div>
            </div>
        </div>
    );
}
