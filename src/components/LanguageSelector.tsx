import React from "react";

const LanguageSelector: React.FC<null> = () => {
    return (
        <button type="button" role="combobox" aria-controls="radix-«R9rb»" aria-expanded="false"
                aria-autocomplete="none" dir="ltr" data-state="closed"
                className="flex h-10 items-center justify-between rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-32 bg-white/90 backdrop-blur-sm"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-globe h-4 w-4 mr-2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
            </svg>
            <span style={{pointerEvents:"none"}}>한국어</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
            </svg>
        </button>

    )
}

export default LanguageSelector;