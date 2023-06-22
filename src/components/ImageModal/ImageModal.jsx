import React from "react";

export default function ImageModal({active, setActive, imageSource}) {

    console.log(imageSource);

    return(

        <div className={active ? "modal active" : "modal"} onClick={() => {setActive(false)}}>
            <div className={active ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
                <img src={imageSource} alt="" className="g_img" />
            </div>
        </div>

    )
}