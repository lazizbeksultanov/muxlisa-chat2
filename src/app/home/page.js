"use client"

import FakeData from "@/components/fakeData";
import {Providers} from "@/store/Providers";
import VoiceRecorder from "@/components/VoiceRecorder";
import {useGetUsersQuery} from "@/services/UserService";

export default function Home() {

    const {data, error, isLoading} = useGetUsersQuery()
    console.log(data)

    return (
        <main className="h-full bg-white">
            <div className={"h-full relative"}>
                <div>
                    {isLoading ? "Loading..." : data.map(item => <div key={item?.id}>{item?.name}</div>)}
                </div>
                <div
                    className="fixed max-w-[50%] bottom-0 right-0 left-0 lg:ml-32 sm:mx-6 lg:mr-8 mb-4 translate-x-1/2">
                    <div className="flex items-start space-x-4">
                        <div className="min-w-0 flex-1">
                            <VoiceRecorder/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}