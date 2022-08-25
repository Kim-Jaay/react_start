import { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"

const SyncSlick = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);


    return (
        <>
            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} >
                <div>A</div>
                <div>B</div>
                <div>C</div>
            </Slider>
            <hr />
            <Slider asNavFor={nav1} ref={(slider2) => setNav2(slider2)} >
                <div>A</div>
                <div>B</div>
                <div>C</div>
            </Slider>
        </>
    )
}
export default SyncSlick;