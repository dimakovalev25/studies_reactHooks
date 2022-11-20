import {useEffect, useState} from "react";
import {Container} from "react-bootstrap";

const Slider = (props) => {

    const [slide, setSlide] = useState(4);
    const [autoplay, setAutoplay] = useState(false);

    function changeSlide(i) {
        // setSlide(slide + i);
        setSlide(slide => slide + i);

    }

    function toggleAutoplay() {
        setAutoplay(!autoplay);
    }

    function logging() {
        // console.log('log')
    }

    useEffect(() => {
        console.log('use eff');
        document.title = `Slide: ${slide}`;
        window.addEventListener('click', logging);
        return () => {
            window.removeEventListener('click', logging);
        }
    }, [slide]);

    useEffect(() =>{
        console.log('autoplay!')
    },[autoplay])

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100"
                     src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                     alt="slide"/>
                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}
                </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}
                    >Prev
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}
                    >Next
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}
                    >toggle autoplay
                    </button>
                </div>
                <br/>
            </div>
        </Container>
    )
}

export default Slider;