"use client";
import "../styles/cv.css";
import { useState } from "react";
import Header from "./Header";
import Navbar from "./NavBar";
import Footer from "./Footer";

export default function CV() {
    const [lang, setLang] = useState(false);

    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <div className="cv-container">
                <div className="cv">
                    <div className="lang-btn">
                        <button onClick={() => setLang(true)}>ENGLISH</button>
                        <button onClick={() => setLang(false)}>SWEDISH</button>
                    </div>
                    {!lang ? (
                        <img src="/images/CV-swe.jpg" alt="" />
                    ) : (
                        <img src="/images/CV-eng.jpg" alt="" />
                    )}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
