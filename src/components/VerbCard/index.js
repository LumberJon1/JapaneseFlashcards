import React from "react";

function VerbCard({ language, currentCard }) {
    const conjugations = currentCard.conjugations;

    return (
        <div className="flex flex-col items-center justify-center h-full w-full text-xl font-bold">
            {language === "English" ? (
                <p className="my-3">{currentCard.englishText}</p>
            ) : (
                <>
                    <p className="my-3 text-3xl">{currentCard.kanjiText}</p>
                    <p className="my-3 text-xl">{currentCard.kanaText}</p>
                    <p className="my-3 text-lg italic">{currentCard.romaji}</p>

                    {/* Conjugation Table */}
                    <div className="w-full max-w-2xl border border-gray-300 rounded-lg shadow-md bg-white mt-6 overflow-x-auto">
                        <table className="table-auto w-full text-left text-gray-700">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-2 py-2 text-sm sm:text-base font-bold">
                                        Form
                                    </th>
                                    <th className="px-4 py-2 text-sm sm:text-base font-bold">
                                        Kanji
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
                                    ["Past (Regular)", "pastRegular"],
                                    ["Te-Form", "teForm"]
                                ].map(([label, key], index) => (
                                    <tr
                                        key={key}
                                        className={`${
                                            index % 2 === 0
                                                ? "bg-gray-50"
                                                : "bg-white"
                                        }`}
                                    >
                                        <td className="px-2 py-2 text-sm sm:text-base font-medium break-words">
                                            {label}
                                        </td>
                                        <td className="px-4 py-2 text-sm sm:text-base break-words">
                                            {conjugations?.[key]?.kanji || "—"}
                                        </td>
                                        <td className="px-4 py-2 text-sm sm:text-base break-words">
                                            {conjugations?.[key]?.kana || "—"}
                                        </td>
                                        <td className="px-4 py-2 text-sm sm:text-base italic break-words">
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
