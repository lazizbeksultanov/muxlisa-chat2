import RecorderControls from "@/components/recorder-controls";
import RecordingsList from "@/components/recordings-list";
import useRecorder from "@/hooks/useRecorder";

export default function VoiceRecorder() {
    const {recorderState, ...handlers} = useRecorder();
    const {audio} = recorderState;

    console.log(handlers)

    return (
        <>
            <RecorderControls recorderState={recorderState} handlers={handlers}/>
            <RecordingsList audio={audio}/>
        </>
    );
}