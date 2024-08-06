import Lottie from "lottie-react"
import LoadingAnimation from "../../../LoadingAnimation.json"
export default function Loading() {
    return (
        <div>
            <Lottie id="loading" animationData={LoadingAnimation} loop={true} />
        </div>
    )
}