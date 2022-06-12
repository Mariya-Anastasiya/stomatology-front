import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import routes from "@/routes/index";

export default function Burger() {
    return (
        <div>
            <button
                className="burger-button d-flex d-xl-none burger justify-content-center align-items-center icon icon-background-turquoise"
                data-bs-toggle="modal"
                data-bs-target="#burgerModal"
            >
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <div
                className="modal fade"
                id="burgerModal"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <ul className="row list-group list-group-horizontal list-unstyled d-flex justify-content-center flex-column flex-md-row">
                                
                                { routes.map(({ to, name }) => 
                                    <li key={`routeTo${to}`} data-bs-dismiss="modal" className="col-12 col-md-4 nav-item list-group-item text-center border-0">
                                        <Link to={to} className="nav-link px-3 eurodent-nav-link">{ name }</Link>
                                    </li>
                                ) }
                            </ul>
                        </div>
                        <div className="modal-footer  d-flex justify-content-center align-items-center">
                            <button
                                data-bs-dismiss="modal"
                                type="button"
                                className="btn button button-background-turquoise"
                            >
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
