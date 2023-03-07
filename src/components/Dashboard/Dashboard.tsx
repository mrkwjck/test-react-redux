import React from "react";
import { Header } from "../Header";
import { TilesContainer } from "../TilesContainer";
import { Footer } from "../Footer";
import { CalculatorForm } from "../CalculatorForm/CalculatorForm";

export function Dashboard() {
    return (
        <div className="dashboard">
            <Header label="Dashboard" />
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <TilesContainer />
                </div>
                <div className="row m-0">
                    <CalculatorForm />
                </div>
            </div>
            <Footer />
        </div>
    );
}
