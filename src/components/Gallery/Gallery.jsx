import React from "react";
import { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";

export default function Gallery() {

    const [active, setActive] = useState(false);
    const [imageSource, setImageSource] = useState('');

    return(

        <section className="gallery">
            <div className="product">
                {/* <img src="./images/gallery/pro2.jpg" alt="" className="photo" /> */}
                <div className="hover_img" onClick={() => {setImageSource("./images/gallery/pro2.jpg"); setActive(!active); console.log(imageSource)}}>
                    <img src="./images/eye.png" alt="" className="eye" />
                </div>
            </div>
            <div className="product">
                {/* <img src="./images/gallery/photo.jpg" alt="" className="photo horizontal" /> */}
                <div className="hover_img" onClick={() => {setImageSource("./images/gallery/photo.jpg"); setActive(!active)}}>
                    <img src="./images/eye.png" alt="" className="eye" />
                </div>
            </div>
            <div className="product">
                {/* <img src="./images/gallery/pro3.jpg" alt="" className="photo" /> */}
                <div className="hover_img" onClick={() => {setImageSource("./images/gallery/pro3.jpg"); setActive(!active)}}>
                    <img src="./images/eye.png" alt="" className="eye" />
                </div>
            </div>
            <div className="product">
                {/* <img src="./images/gallery/photo2.jpg" alt="" className="photo horizontal" /> */}
                <div className="hover_img" onClick={() => {setImageSource("./images/gallery/photo2.jpg"); setActive(!active)}} >
                    <img src="./images/eye.png" alt="" className="eye"/>
                </div>
            </div>
            <div className="product">
                {/* <img src="./images/gallery/pro5.jpg" alt="" className="photo" /> */}
                <div className="hover_img" onClick={() => {setImageSource("./images/gallery/pro5.jpg"); setActive(!active)}}>
                    <img src="./images/eye.png" alt="" className="eye" />
                </div>
            </div>
            <div className="product">
                {/* <img src="./images/gallery/pro6.jpg" alt="" className="photo" /> */}
                <div className="hover_img" onClick={() => {setImageSource("./images/gallery/pro6.jpg"); setActive(!active)}}>
                    <img src="./images/eye.png" alt="" className="eye" />
                </div>
            </div>
            <div className="product">
                {/* <img src="./images/gallery/pro7.jpg" alt="" className="photo" /> */}
                <div className="hover_img" onClick={() => {setImageSource("./images/gallery/pro7.jpg"); setActive(!active)}}>
                    <img src="./images/eye.png" alt="" className="eye" />
                </div>
            </div>
            <div className="product">
                {/* <img src="./images/gallery/photo1.jpg" alt="" className="photo horizontal" /> */}
                <div className="hover_img" onClick={() => {setImageSource("./images/gallery/photo1.jpg"); setActive(!active)}}>
                    <img src="./images/eye.png" alt="" className="eye" />
                </div>
            </div>
            {active ? <ImageModal active={active} setActive={setActive} imageSource={imageSource} /> : ''}
            <div className="btn_catalog"><a href="https://online.anyflip.com/hafjc/cewe/mobile/" className="catalog_link">Больше нашей косметики</a></div>
        </section>

    )
}