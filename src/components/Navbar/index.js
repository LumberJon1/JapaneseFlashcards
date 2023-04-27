import React from "react";

function Navbar(props) {
    // Unpack props
    const {
        menuItems = [],
        setCurrMenuItem,
        currentMenuItem,
        buttonWidth,
        setQuizBegun
    } = props;

    function handleCategoryClick() {
        setQuizBegun(false);
    }

    return (
        <div className="w-full fixed z-30 top-0">
            <ul className="flex items-center justify-center">
                {menuItems.map((item) => (
                    <li
                        onClick={() => {
                            setCurrMenuItem(item.name);
                            handleCategoryClick();
                        }}
                        /* Conditionally add the "Active" class so long as the item name matches currentCategory.*/
                        className={`flex bg-slate-700 mx-1 items-center justify-center p-2 border rounded shadow text-zinc-100 w-1/${buttonWidth} ${currentMenuItem.name === item.name && "navActive"}`}
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