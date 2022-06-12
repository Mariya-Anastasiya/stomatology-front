import config from "@/config";
import showDescriptionHelper from "@/helpers/showDescription.helper";
import React, {useEffect, useState} from "react";
import {Property} from "@/requests/property.request";

interface CardProps {
    actionId: string,
    description: string,
    imageName?: string,
    productId: number,
    name: string,
    property?: Property[],
    minPrice: number,
    minSizeCard?: number

}
export default function Card(props: CardProps) {

    const [isMore, setMore] = useState(false);
    const description = props.description.slice(0, 100);
    const isShowMore = props.description.length > description.length;
    const descriptionId = `${props.actionId}Description${props.productId}`;
    const buttonId = `${props.actionId}Button${props.productId}`;
    const priceListId = `priceList${props.productId}`;
    const nameArray = props.name?.split(" ");

    useEffect(() => {
        setMore(false);
    }, []);

    const myRef = React.createRef<HTMLDivElement>();
    const name = (
        <div>
            <h3 className="m-0 p-0 text-center">{ nameArray?.slice(0, -1)?.join(" ") }</h3>
            <h3 className="m-0 mb-2 p-0 text-center">{ nameArray?.pop() }</h3>
        </div>
    );
    return (
        <div className="col" ref={myRef} key={`${props.actionId}${props.productId}`} onClick={() => {
            if (myRef !== null || isMore) {
                window.scrollTo(0, myRef.current?.offsetTop as number);
            }

        }}>

            <div className={`card shadow-sm ${ isMore ? "h-100" : ""}`} style={{minHeight: props?.minSizeCard}}>
                <div className="card-body d-flex flex-column">

                    { props.imageName ?
                        <div className="d-flex justify-content-center">
                            <img className="card-img-top eurodent-thumb-img"  src={`${config.imageUrl}${props.imageName}/`}
                                alt=""/>
                        </div> :
                        null }
                    { props.name && name }
                    <p className="card-text" id={descriptionId}>
                        { isShowMore ? description + "..." : props.description }
                    </p>
                    { props.actionId == "price" ?
                        <ul className="list-group list-group-flush d-none" id={priceListId}>
                            { props.property?.map(({id, name, price}) => {
                                return <li key={`${props.actionId}PropertyPrice${id}`} className="list-group-item d-flex">
                                    <div className="w-75 d-flex text-start align-items-center">{ name }</div>
                                    <div className="w-25 d-flex text-center text-md-end align-items-center eurodent-text-turquoise">{Number(price) + Number(props?.minPrice)} руб.</div>
                                </li>;
                            }) }
                        </ul> :
                        null }
                    <div className="card-text d-flex justify-content-center align-content-center my-2">
                        {<button  type="button" className="btn button button-background-turquoise" id={buttonId} onClick={(e) => {
                            setMore(!isMore);
                            showDescriptionHelper(descriptionId, buttonId, description, props.description, priceListId);
                        }} >Подробнее</button> }
                    </div>
                </div>
            </div>
        </div>
    );
}
