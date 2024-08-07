import Lottie from "lottie-react"
import ErrorAnimationFile from "../../../ErrorAnimationFile.json"

export default function ErrorAnimation(){
    return (
        <div>
            <Lottie id="error-animation" animationData={ErrorAnimationFile} loop={true} />
        </div>
    )
}