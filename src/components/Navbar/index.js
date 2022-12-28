import React from "react";
import QuizCategories from "../QuizCategories";

function Navbar(props) {
    // Unpack props
    const {
        menuItems = [],
        setCurrMenuItem,
        currentMenuItem,
        buttonWidth
    } = props;

    return (
        <div className="w-full">
            "Here are some words"
            <ul className="flex items-center">
                {menuItems.map((item) => (
                    <li
                        onClick={() => {setCurrMenuItem(item.name)
                            console.log("name: "+item.name);
                            console.log("current category: "+currentMenuItem);
                        }}
                        /* Conditionally add the "Active" class so long as the item name matches currentCategory.*/
                        className={`flex bg-slate-700 items-center justify-center p-2 border rounded shadow text-zinc-100 w-1/${buttonWidth} ${currentMenuItem.name === item.name && "navActive"}`}
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