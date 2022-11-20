import button from "bootstrap/js/src/button";
import {useState, useEffect} from 'react';

const UseStateConverter = (props) => {

    const [carrensyCorsis, setCarrensyCoursis] = useState({
        "source": "BYN",
        "quotes": {
            "BYNEUR": 0.383031,
            "BYNUSD": 0.396264,
            "BYNRUB": 25.396264
        }
    })
    const [amountEntered, setAmountEntered] = useState()
    const [courseUSD, setCourseUSD] = useState ();
    const [courseEUR, setCourseEUR] = useState ();
    const [courseRUB, setCourseRUB] = useState ();

    const getResource = async () => {
        var myHeaders = new Headers();
        myHeaders.append("apikey", "WXtKsRARMsVcMXrvfd1cd9o3Tknk7xrZ");

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        let response = await fetch("https://api.apilayer.com/currency_data/live?source=BYN&currencies=EUR%2C%20USD", requestOptions)
            .then(response => response.text())
            .then(result => result)
            .catch(error => console.log('error', error));

        console.log(response);
        return response;

    }

    function changeCourse(response) {
        setCourseUSD(carrensyCorsis.quotes.BYNUSD)
        setCourseEUR(carrensyCorsis.quotes.BYNEUR)
        setCourseRUB(carrensyCorsis.quotes.BYNRUB)
    }

    function setAmount (e) {
        setAmountEntered(e.target.value)
    }

    return (
        <div>
            <strong>Валютный калькулятор белорусского рубля!<br/> Введите сумму!</strong> <br/>
            <input
                onChange={setAmount}
                onInput={changeCourse}
                type="number"></input><br/>
            <strong>Ваша сумма бел.руб: {amountEntered}</strong><br/>
            <button>в Долларах</button>
            <strong>:{amountEntered * courseUSD}</strong><br/>
            <button>в Евро</button>
            <strong>:{amountEntered * courseEUR}</strong><br/>
            <button>в Российских рублях</button>
            <strong>:{amountEntered * courseRUB}</strong><br/>
            <button
                // onClick={getResource}
                // onClick={changeCourse}
            >Обновить курсы и пересчитать!</button>
        </div>
    )
}

export default UseStateConverter;