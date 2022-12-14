import {Component, useState, useEffect, useCallback, useMemo} from 'react';
import {Container} from 'react-bootstrap';

const calcValue = () => {
    console.log('render!')
    return Math.random() * (5 - 1) + 1;
}

const getImg = () => {
    console.log('fetch')
    return [
        'https://www.10mest.com/photos/france-paris-eiffel-tower-and-trocadero-gardens-1280x720.jpg',
        'https://www.svoiludi.ru/images/tb/13019/v-parij-na-vyhodnye-tur-14583028966974_w990h1000.jpg'
    ]
}


const countTotal = (num) => {
    console.log('count');
    return num + 10
}

const SliderNew = (props) => {

    const [slide, setSlide] = useState(0);
    const [toggle, setToggle] = useState(false);

    function changeSlide(i) {
        // setSlide(slide + i);
        setSlide(slide => slide + i)
    }
    function toggleAutoplay() {
        setToggle(!toggle);
    }
    function reset() {
        setSlide(slide => slide * 0)
    }
    function random() {
        setSlide(Math.random() * (5 - 1) + 1)
    }

    useEffect(() => {
        // console.log('useEffect')
        document.title = `slide: ${slide}`
    }, [slide])

    // const total = countTotal(slide);
    const total = useMemo(() => {
        return countTotal(slide)
    }, [slide])

    return (
        <Container>
            <div className="slider w-50 m-auto">

                {/*{*/}
                {/*    getImg().map((url, i) => {*/}
                {/*        return (*/}
                {/*            <img className="d-block w-100"*/}
                {/*                 key={i}*/}
                {/*                 src={url}*/}
                {/*                 alt="slide"/>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}

                <Slide getImg={getImg}/>


                <div className="text-center mt-5">Active slide {slide}<br/> {toggle ? 'auto' : null}

                </div>
                <div className="text-center mt-5">Total slide {total}<br/> {toggle ? 'auto' : null}

                </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1

                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1

                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay

                    </button>

                    <button
                        className="btn btn-primary me-2"
                        onClick={random}>random

                    </button>

                    <button
                        className="btn btn-primary me-2"
                        onClick={reset}>reset

                    </button>
                </div>
            </div>
        </Container>
    )
}

const Slide = ({getImg}) => {
    const [img, setImg] = useState([]);

    useEffect(() => {
        setImg(getImg())
    }, [getImg])

    return (
        <>
            {img.map((url, i) =>
                <img className="d-block w-100"
                     key={i}
                     src={url}
                     alt="slide"/>
            )}
        </>
    )
}


export default SliderNew;
