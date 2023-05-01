"use client"

import { useDispatch, useSelector } from "react-redux";

function FakeData () {
    const {value} = useSelector(state => state.counterReducer)

    console.log(value)

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