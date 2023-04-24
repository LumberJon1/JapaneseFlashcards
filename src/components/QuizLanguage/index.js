import React from "react";

function QuizLanguage(props) {

    // Take props from higher level component to use in language order
    const {
        language,
        setLanguage
    } = props;


    // Handle language and click functionality/state
    function handleLanguageClick() {
        console.log("Clicked the language button");
        if (language === "English") {
            setLanguage("Japanese");
        }
        else {
            setLanguage("English");
        }
    }

    return (

        <div className="h-24 mt-3 mb-1 w-full flex flex-col items-center justify-around">
            
            <p
                className="text-center text-sm font-bold text-zinc-300"
            >
                Showing Cards in
            </p>
            <div className="flex items-center justify-evenly w-full h-8">
                <p className={language === "English" ? "text-lg font-bold text-amber-400"
                    : "text-lg font-bold text-zinc-300"}>
                    English
                </p>
                <div className="w-1/2 bg-zinc-300 rounded my-2 relative h-full">
                    <button
                        className={language === "English" ? "p-2 absolute inset-y-0 w-1/2 flex flex-col items-center justify-center h-full rounded shadow bg-violet-500 text-zinc-100 font-bold text-lg left-0"
                        : "p-2 absolute inset-y-0 w-1/2 flex flex-col items-center justify-center h-full rounded shadow bg-violet-500 text-zinc-100 font-bold text-lg right-0"}
                        onClick={handleLanguageClick}
                    >
                    Switch
                    </button>
                </div>
                <p className={language === "Japanese" ? "text-lg font-bold text-amber-400"
                    : "text-lg font-bold text-zinc-300"}>
                    Japanese
                </p>
            </div>
        </div>

    )

}

export default QuizLanguage;