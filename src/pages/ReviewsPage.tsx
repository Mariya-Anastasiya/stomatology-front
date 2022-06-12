import ReviewsForm from "@components/ReviewsForm/ReviewsForm";
import Form from "@components/Form/Form";
import React from "react";

export default function ReviewsPage() {
    window.scrollTo(0, 0);
    return (
        <div>
            <ReviewsForm/>
            <Form/>
        </div>
    );
}
