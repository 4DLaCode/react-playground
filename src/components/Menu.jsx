import MenuItem from "./MenuItem";

import "./Menu.scss";

export default function Menu({ styleName })
{
    return (
        <ul className={ `menu is-style-${styleName}` }>
            <MenuItem label="Item 1" />
            <MenuItem label="Item 2" />
            <MenuItem label="Item 3" />
            <MenuItem label="Item 4" />
        </ul>
    )
}