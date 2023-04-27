// "use client"

// import {useDispatch, useSelector} from "react-redux";
// import VoiceRecorder from "@/components/VoiceRecorder";
// import { decrement, increment, reset } from "@/slices/counterSlice";

// export default async function Home() {
//     // const req = await getMainAxios().get("/api/voices")
//     // const data = await req.data
//     // store.dispatch(setData(data))
    

// // const count = useSelector(state => state.counterReducer.value)
// // const dispatch = useDispatch();

//     return (
//         <main className="h-full bg-white">
//                 <div className={"h-full relative"}>
//                     <div>
//                         {/* <h1>{count}</h1> */}
//                         {/* <button onClick={() => dispatch(increment())}>+</button>
//                         <button onClick={() => dispatch(decrement())}>-</button>
//                         <button onClick={() => dispatch(reset())}>reset</button> */}
//                     </div>
//                     <div
//                         className="fixed max-w-[50%] bottom-0 right-0 left-0 lg:ml-32 sm:mx-6 lg:mr-8 mb-4 translate-x-1/2">
//                         <div className="flex items-start space-x-4">
//                             <div className="min-w-0 flex-1">
//                                 <VoiceRecorder/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//         </main>
//     )
// }

"use client";


import { decrement, increment, reset } from "@/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const count = useSelector((state) => console.log(state));
  const dispatch = useDispatch();

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button
          onClick={() => dispatch(decrement())}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </main>
  );
}