import React   from 'react';

const TOCItem = ({ itemData }) => {
    return (
        <li key={ itemData.key }>
            {itemData.type} Level {itemData.level}
        </li>
    )
}

export default TOCItem