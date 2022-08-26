import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"




const SlickCustom = () => {
    const SlideEle = [
        { id: 1, h2: 'Recycled Denim Collection', p: '시크한 스타일과 소프트 애슬레저, 뉴트럴 컬러의 니트나 가디건과 같은 업그레이드된 베이직 아이템의 유행을 타지 않는 타임리스 스타일을 살펴보세요.' },
        { id: 2, h2: 'However You Move', p: '시크한 스타일과 소프트 애슬레저, 뉴트럴 컬러의 니트나 가디건과 같은 업그레이드된 베이직 아이템의 유행을 타지 않는 타임리스 스타일을 살펴보세요.' },
        { id: 3, h2: 'New in:Autumn Tailoring', p: '시크한 스타일과 소프트 애슬레저, 뉴트럴 컬러의 니트나 가디건과 같은 업그레이드된 베이직 아이템의 유행을 타지 않는 타임리스 스타일을 살펴보세요.' },
        { id: 4, h2: 'However You Move', p: '시크한 스타일과 소프트 애슬레저, 뉴트럴 컬러의 니트나 가디건과 같은 업그레이드된 베이직 아이템의 유행을 타지 않는 타임리스 스타일을 살펴보세요.' },
    ];


    const s1 = useRef();
    const [num, setNum] = useState();
    useEffect(() => {
        setNum(0)
    }, [])

    const set = {
        arrows: false,
        afterChange: idx => { setNum(idx) },
        autoplay: true,

    }

    return (
        <>
            <section className="MainSection">
                <Slider ref={s1}{...set} className="MainVisual">
                    {
                        SlideEle.map((itm, idx) => <figure
                            key={itm.id}
                            className={`itm0${idx + 1} ${idx == num ? 'on' : ''}`}
                        >
                            <div className="slogan">
                                <h2>{itm.h2}</h2>
                                <p>{itm.p}</p>
                                <a href="#!" onClick={(e => e.preventDefault())}>See All The Looks</a>
                            </div>

                        </figure>)
                    }
                </Slider>

                <div className="num">
                    {num + 1} / {SlideEle.length}
                </div>

                <div className="slideArrow">
                    <i className="xi-arrow-left" onClick={() => (s1.current.slickPrev())}></i>
                    <i className="xi-arrow-right" onClick={() => (s1.current.slickNext())}></i>
                </div>


                <ul className="slideDot">
                    {
                        SlideEle.map((dot, idx) => <li
                            key={dot.id}
                            onClick={() => s1.current.slickGoTo(idx)}
                            className={idx == num ? 'on' : ''}
                        >{dot.id}</li>)
                    }
                </ul>
            </section>
        </>

    )
}

export default SlickCustom;