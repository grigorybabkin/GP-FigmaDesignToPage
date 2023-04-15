import React from "react";
import { NavBar } from "./components/NavBar";
import { RecommendedTopics } from "./components/RecommendedTopics";
import { DeveloperWay } from "./components/DeveloperWay";
import { TopicCatalog } from "./components/TopicCatalog";

function App() {
    return (
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                <RecommendedTopics/><br/>
                <DeveloperWay/><br/>
                <TopicCatalog/><br/>
            </main>
        </>
    )
}

export default App
