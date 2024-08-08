import Lottie from "lottie-react";
import DeleteAnimationFile from "../../../DeleteAnimationFile.json"
export default function DeleteAnimation() {
    return (
        <div className="delete-container">
            <Lottie id="deleting" animationData={DeleteAnimationFile} loop={true} />
        </div>
    )
}