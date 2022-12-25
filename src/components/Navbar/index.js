import React, {useEffect, useState} from "react";
import QuizCategories from "../QuizCategories";

function Navbar() {

    // Navbar menu items
    const [menuItems] = useState([
        {
            name: "Library", 
            link: ""
        },
        {
            name: "Quiz", 
            link: ""
        },
        {
            name: "Home", 
            link: ""
        }
    ]);

    // Define number to dynamically adjust category button sizes
    const buttonWidth = menuItems.length;

    // Direct vDOM to re-render changes to selected category
    const [currentCategory, setCurrentCategory] = useState(menuItems[0]);
    useEffect(() => {
        
    }, [currentCategory]);

    return (
        <div className="w-full">
            "Here are some words"
            <ul className="flex items-center">
                {menuItems.map((item) => (
                    <li
                        onClick={() => {setCurrentCategory(item.name)
                            console.log("name: "+item.name);
                            console.log("current category: "+currentCategory);
                        }}
                        /* Conditionally add the "Active" class so long as the item name matches currentCategory.*/
                        className={`flex bg-slate-700 items-center justify-center p-2 border rounded shadow text-zinc-100 w-1/${buttonWidth} ${currentCategory.name === item.name && "navActive"}`}
                        key={item.name}
                        >
                        {item.name}
                    </li>
                
                ))}
            </ul>
        </div>
    );
}

export default Navbar;