import React from "react";

function QuizCategories(props) {
    
    // Unpack props
    // const {
    //     quizCategoryItems = [],
    //     setQuizCategory,
    //     currentSubCategory,
    // } = props;

    // useEffect(() => {
    // }, [
    //     currentQuizCategory,
    //     currentSubCategory,
    //     setQuizCategory,
    //     setSubCategory,
    //     wordsSubCategories,
    //     timeSubCategories,
    //     numbersSubCategories,
    //     phrasesSubCategories
    // ]);

    // console.log("Current subcategory value: "+currentSubCategory);
    
    return (

        <div
            className="w-full flex flex-col items-center justify-center"
        >
            <div>
                QuizCategories
            </div>
            <div>
                All Categories
            </div>
        </div>

    //     <div className="w-full mt-4">
    //         <ul className="flex items-center justify-center">
    //             {quizCategoryItems.map((item) => (
    //                 <li
    //                     className={`flex bg-indigo-600 items-center justify-center p-2 mx-1 border rounded shadow text-zinc-100 w-1/4${currentSubCategory === item.name && "bg-indigo-500 border-violet-600"}`}
    //                     key={item.name}
    //                 >
    //                     <span onClick={() =>  {
    //                         setQuizCategory(item.name);
    //                     }
                            
    //                     }>
    //                         {item.name}
    //                     </span>
    //                 </li>
                
    //             ))}
    //         </ul>
    //     </div>
    );
}

export default QuizCategories;