"use client";
import "../styles/cv.css";
import { useState } from "react";
import Header from "./Header";
import Navbar from "./NavBar";
import Footer from "./Footer";
import Image from "next/image";
import { useEffect } from "react";

export default function CV() {
    const [lang, setLang] = useState(false);

    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <div className="cv-container">
                <div className="cv">
                    {/* <div className="lang-btn">
                        <button onClick={() => setLang(true)}>ENGLISH</button>
                        <button onClick={() => setLang(false)}>SWEDISH</button>
                    </div>
                    {!lang ? (
                        <Image
                            className="cv-img"
                            src="/images/CV-swe.jpg"
                            alt="CV in Swedish"
                            width="500"
                            height="700"
                        />
                    ) : (
                        <Image
                            className="cv-img"
                            src="/images/CV-eng.jpg"
                            alt="CV in English"
                            width="500"
                            height="700"
                        />
                    )} */}

                    <div className="lang-btn">
                        <a href="/cv-eng.pdf" target="_blank">
                            English
                        </a>
                        <a href="/cv-swe.pdf" target="_blank">
                            Swedish
                        </a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
