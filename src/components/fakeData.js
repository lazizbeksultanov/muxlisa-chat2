"use client"

import { useDispatch, useSelector } from "react-redux";
import { useGetUsersQuery } from "@/services/UserService";

function FakeData () {
    const {data} = useGetUsersQuery()
    console.log(data)
    // const {value} = useSelector(state => state.counterReducer)
    //
    // console.log(value)

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