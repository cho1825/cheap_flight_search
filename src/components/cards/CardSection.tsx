import React from "react";
import PopularPlaceCards from "./PopularPlaceCards.tsx";
import PopularSearchCards from "./PopularSearchCards.tsx";
import TipsCard from "./TipsCard.tsx";

interface CardSectionProps {

}


const CardSection: React.FC<CardSectionProps> = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PopularPlaceCards/>
            <PopularSearchCards/>
            <TipsCard/>
        </div>
    )
}

export default CardSection;