import React from 'react';
import { Header } from "../Header";
import { TilesContainer } from "../TilesContainer";
import { Footer } from "../Footer";

export function Dashboard() {
    return (
        <div className="dashboard">
            <Header label="Dashboard" />
            <TilesContainer />
            <Footer />
        </div>
    );
}
