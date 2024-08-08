import Lottie from "lottie-react";
import DeleteAnimationFile from "../../../DeleteAnimationFile.json"
export default function DeleteAnimation() {
    return (
        <div >
            <Lottie id="deleting" animationData={DeleteAnimationFile} loop={true} />
        </div>
    )
}