import React from "react";

function NavBar() {
    const links = ["home", "about", "projects"];
    const updatedLinks = links.map((link) => ( <
        a key = { link }
        href = { `#` + link } > { link } < /a>
    ));

    return <nav > { updatedLinks } <
        /nav>;
}

export default NavBar;