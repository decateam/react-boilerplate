import React   from 'react';

const TOCItem = ({ itemData }) => {
    return (
        <li className={"toc-item toc-level-"+itemData.level} key={ itemData.key }>
            {itemData.type} Level {itemData.level}
        </li>
    )
}

export default TOCItem