import Lottie from "lottie-react";
import NotFoundError from "../../../NotFoundError.json"
export default function NotFoundAnimation() {
    return (
        <div className="not-found-container">
            <Lottie id="not-found" animationData={NotFoundError} loop={true} />
        </div>
    )
}