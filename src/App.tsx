import TopVisualSection from "./components/TopVisualSection.tsx";
import SearchSection from "./components/search/SearchSection.tsx";
import CardSection from "./components/cards/CardSection.tsx";
import LanguageSelector from "./components/LanguageSelector.tsx";
import {useState} from "react";
import type {LanguageCode} from "./constants/language.ts";

function App() {

    function getInitialLanguage() {
        const lang = navigator.language || navigator.languages[0];
        if (lang.startsWith("ko")) return "ko";
        if (lang.startsWith("ja")) return "ja";
        if (lang.startsWith("zh")) return "zh";
        return "en";
    }


    const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>(getInitialLanguage());


    return (
        <>
            <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                <div className="absolute top-4 right-4 z-50">
                    <LanguageSelector/>
                </div>
                <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <TopVisualSection/>
                </div>
                <div className="container mx-auto px-4 -mt-8 relative z-30">
                    <SearchSection/>
                </div>
                <div className="container mx-auto px-4 py-16">
                    <CardSection/>
                </div>

            </div>
        </>
    )
}

export default App
