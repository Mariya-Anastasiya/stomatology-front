import React, {MouseEventHandler} from "react";
import Button from "@components/Button/Button";
import {createReview} from "@/requests/review.request";
import {isRussianLetters} from "@/helpers/regex.helper";

function ReviewsForm() {
    const errorText = (htmlElement: HTMLInputElement | HTMLTextAreaElement, errorMessage: string) => {
        htmlElement?.classList.add("border-danger");
        htmlElement.placeholder = errorMessage;
        htmlElement.value = "";
    }
    const onClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
        const reviewFioElement = document.getElementById("reviewFio") as HTMLInputElement;
        const reviewContentElement = document.getElementById("reviewContent") as HTMLTextAreaElement;
        const reviewFio = (reviewFioElement)?.value;
        const reviewContent = (reviewContentElement)?.value;
        const notSpaceReviewFio = reviewFio.trim();
        const notSpaceReviewContent = reviewContent.trim();
        reviewFioElement?.classList.remove("border-danger");
        reviewContentElement?.classList.remove("border-danger");

        if (!isRussianLetters(notSpaceReviewFio) || notSpaceReviewFio.length < 5
        ) {
            errorText(reviewFioElement, "Некорректное имя");
            e.preventDefault();
            return;
        }

        if (notSpaceReviewContent.length < 15) {
            errorText(reviewContentElement, "отзыв должен содержать не менее 15 символов");
            e.preventDefault();
            return;
        }

        createReview({
            fullName: reviewFio,
            estimation: 3,
            description: reviewContent
        });
    };

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-12">
                    <form
                        className="form d-flex justify-content-center align-items-center flex-column text-center w-100">
                        <h2 className="display-5 fw-bold m-3">Оставить отзыв</h2>
                        <input className="form-control m-3 form-send__input p-3" type="text" name="review"
                            id="reviewFio" required placeholder="Ваше ФИО:"/>
                        <textarea className="form-control m-3 form-send__input p-3" name="review" id="reviewContent"
                            required placeholder="Отзыв:"/>
                    </form>
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <Button onClick={onClick} to="/thanksForReview" value="Оставить отзыв" color="turquoise"/>
                </div>
            </div>
        </div>
    );
}

export default ReviewsForm;
