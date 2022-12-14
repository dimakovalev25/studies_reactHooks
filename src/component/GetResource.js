
class Course {

    getResource = async () => {
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

        // console.log(response);
        return response;

    }

}

export default Course;