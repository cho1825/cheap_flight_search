import TripTypeToggle from "./TripTypeToggle.tsx";
import LocationSelector from "./LocationSelector.tsx";
import DateSelector from "./DateSelector.tsx";
import PassengersSelector from "./PassengersSelector.tsx";
import SearchButton from "./SearchButton.tsx";


const SearchSection: React.FC<null> = () => {



    return (
        <>
            <div className="rounded-lg bg-card text-card-foreground max-w-4xl mx-auto shadow-2xl border-0 bg-white">
                <div className="flex flex-col space-y-1.5 p-6 text-center pb-6">
                    <div className="tracking-tight text-2xl font-bold text-gray-800">항공권 검색</div>
                    <div className="text-sm text-gray-600">원하는 여행 조건을 선택하고 최적의 항공권을 찾아보세요</div>
                </div>
                <div className="p-6 pt-0 space-y-6">
                    <TripTypeToggle/>
                    <LocationSelector/>
                    <DateSelector/>
                    <PassengersSelector/>
                    <SearchButton/>
                </div>
            </div>
        </>
    )

}

export default SearchSection;