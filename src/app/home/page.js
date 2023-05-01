"use client"

import FakeData from "@/components/fakeData";
import {Providers} from "@/store/Providers";
import {useSelector} from "react-redux";
import VoiceRecorder from "@/components/VoiceRecorder";

export default function Home() {

    return (
        <main className="h-full bg-white">
            <Providers>
                <div className={"h-full relative"}>
                    <div>
                        <FakeData />
                        <h1>HelloHelloHello</h1>
                    </div>
                    <div
                        className="fixed max-w-[50%] bottom-0 right-0 left-0 lg:ml-32 sm:mx-6 lg:mr-8 mb-4 translate-x-1/2">
                        <div className="flex items-start space-x-4">
                            <div className="min-w-0 flex-1">
                                <VoiceRecorder />
                            </div>
                        </div>
                    </div>
                </div>
            </Providers>
        </main>
    )
}