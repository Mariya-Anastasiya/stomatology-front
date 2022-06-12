import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "@components/Footer/Footer";

import "./App.scss";
import Navbar from "@components/Navbar/Navbar";
import TopHeaderPanel from "@components/Header/TopHeaderPanel/TopHeaderPanel";
import Divider from "@components/Divider/Divider";
import Burger from "@components/Burger/Burger";
import MainPage from "@/pages/MainPage";
import PricesPage from "@/pages/PricesPage";
import SpecialistsPage from "@/pages/SpecialistsPage";
import ReviewsPage from "@/pages/ReviewsPage";
import AuthPage from "@/pages/AuthPage";
import EntityFormPage from "@/pages/EntityFormPage";
import AdminPage from "@/pages/AdminPage";
import AboutUsPage from "@/pages/AboutUsPage";
import ThanksForNewEntityPage from "@/pages/ThanksForNewEntityPage";
import ThanksForReviewPage from "@/pages/ThanksForReviewPage";
import RedirectToMain from "@/pages/RedirectToMain";

function App() {
    return (
        <div>
            <BrowserRouter>
                <TopHeaderPanel/>
                <Divider/>
                <Navbar/>
                <Burger/>
                <Routes>
                    <Route path="*" element={<RedirectToMain />}/>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/reviews" element={<ReviewsPage/>}/>
                    <Route path="/about" element={<AboutUsPage/>}/>
                    <Route path="/newEntity" element={<EntityFormPage/>}/>
                    <Route path="/thanksForReview" element={<ThanksForReviewPage/>}/>
                    <Route path="/thanksForNewEntity" element={<ThanksForNewEntityPage/>}/>
                    <Route path="/productsAndPrices" element={<PricesPage/>}/>
                    <Route path="/specialists" element={<SpecialistsPage/>}/>
                    <Route path="/auth" element={<AuthPage/>}/>
                    <Route path="/admin" element={<AdminPage/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>

        </div>
    );
}

export default App;
