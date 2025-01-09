import React from "react";

function VerbCard({ language, currentCard }) {
    const conjugations = currentCard.conjugations;

    return (
        <div className="flex flex-col items-center justify-center h-full w-full text-xl font-medium">
            {language === "English" ? (
                <p className="my-3 text-3xl">{currentCard.englishText}</p>
            ) : (
                <>
                    <div className="h-1/2 align-baseline flex justify-end text-6xl">
                       {/* Use ruby for Kanji and Furigana */}
                       {currentCard.furiganaPairs.map((pair, index) => (
                        <ruby className="self-center" key={index}>
                            {pair.base}
                            {pair.furigana && (
                                <rt className="text-md mb-1">{pair.furigana}</rt>
                            )}
                        </ruby>
                        ))}
                        <ruby className="self-center text-6xl pt-10">
                            {currentCard.kanaText}
                        </ruby>
                    </div>

                    {/* Conjugation Table */}
                    <div className="w-full max-w-2xl h-1/2 border border-gray-300 rounded-lg shadow-md bg-white overflow-x-auto">
                        <table className="table-auto w-full text-left text-gray-700">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-2 py-2 text-sm sm:text-base font-bold">
                                        Form
                                    </th>
                                    <th className="px-4 py-2 text-sm sm:text-base font-bold">
                                        Kana
                                    </th>
                                    <th className="px-4 py-2 text-sm sm:text-base font-bold">
                                        Romaji
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Regular", "regular"],
                                    ["Polite", "polite"],
                                    ["Past (Reg.)", "pastRegular"],
                                    ["-Te", "teForm"]
                                ].map(([label, key], index) => (
                                    <tr
                                        key={key}
                                        className={`${
                                            index % 2 === 0
                                                ? "bg-gray-50"
                                                : "bg-white"
                                        }`}
                                    >
                                        <td className="px-2 py-2 text-base sm:text-base font-medium break-words">
                                            {label}
                                        </td>
                                        <td className="px-4 py-2 text-base sm:text-base font-bold break-words">
                                            {conjugations?.[key]?.kana || "—"}
                                        </td>
                                        <td className="px-4 py-2 text-base sm:text-base italic break-words">
                                            {conjugations?.[key]?.romaji || "—"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
}

export default VerbCard;
