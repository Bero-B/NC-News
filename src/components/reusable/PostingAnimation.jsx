import Lottie from "lottie-react";
import PostingAnimationFile from "../../../PostingAnimationFile.json"

export default function PostingAnimation() {
    return (
        <div>
            <Lottie id="posting" animationData={PostingAnimationFile} loop={true} />
        </div>
    )
}