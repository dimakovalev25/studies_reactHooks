import {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';


// class Slider extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }
//
//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }
//
//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }
//
//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }


const Slider = (props) => {

    const [slider, setSlider] = useState(0);
    const [autoplay, setAutoplay] = useState(null);

    const changeSlide = (i) => {
        setSlider(slider + i)
        // setSlider(slider => slider + i)
    }

    const toggleAutoplay = () => {
        setAutoplay(!autoplay)
    }

    const resetSlide = () => {
        setSlider(slider => slider * 0)
    }

    const randomSlide = () => {
        setSlider(slider => slider = (Math.round(Math.random() * (10 - 1) + 1)))
    }

    useEffect(() => {
        document.title = `slide: ${slider}`;
        console.log('useEffect');

        window.addEventListener('click', logging);

        return () => {
            window.removeEventListener('click', logging);
        }

    }, [slider])

    function logging() {
        console.log('logging!');
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100"
                     src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                     alt="slide"/>
                <div className="text-center mt-5">Active slide: {slider} <br/>
                    {autoplay ? 'auto' : null}

                </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}
                    >-1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}
                    >+1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => randomSlide()}
                    >random
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => resetSlide()}
                    >reset
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}
                    >
                        toggle autoplay
                    </button>
                </div>
            </div>
        </Container>
    )
}


const UpdateSlider = () =>  {

    const [slider, setSlider] = useState(true);

    return (
        <>

            <button
                onClick={() => setSlider(!slider)}
            >Click
            </button>

            {slider ? <Slider/> : null}

        </>
    )
}

export default UpdateSlider;

