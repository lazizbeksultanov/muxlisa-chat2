"use client"

import { useDispatch, useSelector } from "react-redux";

function FakeData () {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.chat.data).data

    return(
        <div>
            {selector.map((item, index) => (
                // eslint-disable-next-line react/jsx-key
                <div key={index} className="block">{item.name}</div>
            ))}
        </div>
    )
}

export default FakeData;