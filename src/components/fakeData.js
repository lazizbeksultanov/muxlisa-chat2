"use client"

import { useDispatch, useSelector } from "react-redux";

function FakeData () {
    const {title, data} = useSelector(state => state.chatReducer)

    console.log(title)
    console.log(data)

    return(
        <div>
            {/*{selector.map((item, index) => (*/}
            {/*    // eslint-disable-next-line react/jsx-key*/}
            {/*    <div key={index} className="block">{item.name}</div>*/}
            {/*))}*/}
        </div>
    )
}

export default FakeData;