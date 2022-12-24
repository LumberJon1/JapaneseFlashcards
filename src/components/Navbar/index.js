import React from "react";

function Navbar() {

    // Navbar menu items
    const menuItems = [
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
    ];

    return (
        <div>
            "Here are some words"
            <ul>
                {menuItems.map((item) => (
                    <li
                        className="flex bg-slate-700 items-center justify-center p-2 border rounded shadow text-zinc-100"
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