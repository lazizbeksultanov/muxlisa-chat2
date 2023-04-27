"use client"

import VoiceR from "@/app/home/getData";
import getMainAxios from "@/utils/axios";
import {store} from "@/store";
import {setData} from "@/store/slices/chatSlice";
import FakeData from "@/components/fakeData";
import {Providers} from "@/store/Providers";
import {useSelector} from "react-redux";

export default async function Home() {

    return (
        <main className="h-full bg-white">
            <Providers>
                <div className={"h-full relative"}>
                    <div>
                        <FakeData />
                    </div>
                    <div
                        className="fixed max-w-[50%] bottom-0 right-0 left-0 lg:ml-32 sm:mx-6 lg:mr-8 mb-4 translate-x-1/2">
                        <div className="flex items-start space-x-4">
                            <div className="min-w-0 flex-1">
                                <VoiceR/>
                            </div>
                        </div>
                    </div>
                </div>
            </Providers>
        </main>
    )
}