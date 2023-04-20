"use client"

import { formatMinutes, formatSeconds } from "@/utils/format-time"
import "./styles.css";
import {MicrophoneIcon, PaperAirplaneIcon} from "@heroicons/react/24/outline";
import {useRef} from "react";

export default function RecorderControls({ recorderState, handlers }) {
    const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
    const { startRecording, saveRecording, cancelRecording } = handlers;
    const textRef = useRef(null)

    function TextEdit() {
        textRef.current.addEventListener('input', autoResize, false)

        function autoResize() {
            textRef.current.style.height = 'auto';
            textRef.current.style.height = textRef.current.scrollHeight + 'px';
        }
    }

    return (
        <>
            <form action="#" className="relative flex">
                {initRecording ?
                    <div className={"flex w-full"}>
                        <div className="w-full flex justify-between items-center">
                            <div className="flex items-center">
                                {initRecording && <div className="recording-indicator"></div>}
                                <span>{formatMinutes(recordingMinutes)}</span>
                                <span>:</span>
                                <span>{formatSeconds(recordingSeconds)}</span>
                            </div>
                            {initRecording && (
                                <div className="cancel-button-container">
                                    <button className="cancel-button text-sm text-indigo-600 font-medium cursor-pointer" title="Cancel recording" onClick={cancelRecording}>
                                        Cancel
                                    </button>
                                </div>
                            )}
                            <div></div>
                        </div>
                    </div> :
                    <div
                        className="w-full overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                        <label htmlFor="comment" className="sr-only">
                            Add your comment
                        </label>
                        <textarea
                            rows={1}
                            name="comment"
                            id="comment"
                            className="block w-full resize-none min-h-[30px] max-h-[100px] border-0 bg-transparent text-gray-900 pr-24 placeholder:text-gray-400 focus:ring-0 sm:py-1.5 sm:text-sm sm:leading-6"
                            placeholder="Ask me question"
                            defaultValue={''}
                            ref={textRef}
                            onInput={TextEdit}
                        />
                    </div>
                }
                <div className="bottom-0 top-0 right-0 flex items-center mx-3">
                    {initRecording ? (
                        <button
                            className="group inline-flex items-center rounded-md bg-indigo-600 px-2 py-2 text-sm font-semibold text-white shadow-sm transition-colors border border-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            title="Save recording"
                            type="button"
                            disabled={recordingSeconds === 0}
                            onClick={saveRecording}
                        >
                            <PaperAirplaneIcon className="h-4 w-4 leading-none font-black" />
                        </button>
                    ) : (
                        <button
                            className="group inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-white shadow-sm transition-colors border border-gray-300 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            title="Start recording"
                            type="button"
                            onClick={startRecording}>
                            <MicrophoneIcon className="h-4 w-4 text-gray-400 leading-none font-black group-hover:text-indigo-600" />
                        </button>
                    )}
                </div>
            </form>
        </>
    );
}