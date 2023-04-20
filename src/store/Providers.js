import {Provider} from "react-redux";
import {store} from "@/store/index";

export function Providers({ children }) {
    return <Provider store={store}>{children}</Provider>
}