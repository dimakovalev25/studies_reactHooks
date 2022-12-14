import button from "bootstrap/js/src/button";
import {Component} from "react";
import Course from "./A";

class Carrensy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            carrency: {
                "source": "BYN",
                "quotes": {
                    "BYNEUR": 0.383031,
                    "BYNUSD": 0.396264,
                    "BYNRUB": 24.396264,
                }
            },
            amountEntered: 0,
        }
    }


    Course = new Course();

    updateData = () => {
        this.Course
            .getResource()
            // .then(response => console.log(response))
            .then(response => {
                this.setState({
                    data: response
                })
            })
    }

    amountEnteredcheck = (e) => {
        console.log(e.target.value)
        this.setState({
            amountEntered: e.target.value
        })
    }

    render() {
        const courseUER = this.state.carrency.quotes.BYNEUR;
        const courseUSD = this.state.carrency.quotes.BYNUSD;
        const courseRUB = this.state.carrency.quotes.BYNRUB;
        const amountEntered = this.state.amountEntered;
        console.log(amountEntered);

        return (

            <div>
            <strong>Валютный калькулятор белорусского рубля!<br/> Введите сумму!</strong> <br/>
                <input
                    onChange={this.amountEnteredcheck}
                    type="number"></input><br/>
                <strong>Ваша сумма {amountEntered} бел.руб</strong><br/>
                <button>в Долларах</button>
                <strong>:{Math.round(amountEntered * courseUSD)}</strong><br/>
                <button>в Евро</button>
                <strong>:{Math.round(amountEntered * courseUER)}</strong><br/>
                <button>в Российских рублях</button>
                <strong>:{Math.round(amountEntered * courseRUB)}</strong>
        </div>)
    }
}

export default Carrensy;




// class Course {
//
//     getResource = async () => {
//         var myHeaders = new Headers();
//         myHeaders.append("apikey", "WXtKsRARMsVcMXrvfd1cd9o3Tknk7xrZ");
//
//         var requestOptions = {
//             method: 'GET',
//             redirect: 'follow',
//             headers: myHeaders
//         };
//
//         let response = await fetch("https://api.apilayer.com/currency_data/live?source=BYN&currencies=EUR%2C%20USD", requestOptions)
//             .then(response => response.text())
//             .then(result => result)
//             .catch(error => console.log('error', error));
//
//         // console.log(response);
//         return response;
//
//     }
//
// }

