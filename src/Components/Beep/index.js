import { Button } from 'antd';
import axios from 'axios';

export default function Beep() {
    const url = "https://0f395f0895fa.dev.weblet.io/devices/cmd";

    async function clickBeep() {

        let header = new Headers();
        header.append('Authorization', 'Bearer 75db66b2ad2721a780d7beb747bc1e38ed79a2ed');

        fetch(url, { method: "POST", headers: header, body: '{"to":"ui.cmd.beep", "data":{"on":1000}}' });


    }

    const clickBeepAxios = async () => {
        const response = await axios.post(
            url,
            {
                "to": "ui.cmd.beep", "data": { "on": 1000 }
            },
            {
                headers: {
                    "Authorization": "Bearer 75db66b2ad2721a780d7beb747bc1e38ed79a2ed"
                }
            })

        console.log(response.data)
    }

    const clickPrint = async () => {
        const response = await axios.post(
            url,
            {
                "to": "conout.stat.screen", "data": "POLLA"
            },
            {
                headers: {
                    "Authorization": "Bearer 75db66b2ad2721a780d7beb747bc1e38ed79a2ed"
                }
            })

        console.log(response.data)
    }

    function getDatos() {

        // const url = "https://0f395f0895fa.dev.weblet.io/devices/cmd";
        // let headers = new Headers();

        // headers.append('Authorization', 'Bearer 75db66b2ad2721a780d7beb747bc1e38ed79a2ed');

        // screen_text = banner.slice(0, 16) + "Last key: " + lastkey
        // pubsub.publish("conout.stat.screen", screen_text, { "sticky": true })

        // fetch(url, { method: "POST", headers: headers, body: '{"to":"conout.stat.screen"}' });


    }

    return (
        <div>
            <Button type="primary" onClick={clickBeep}>Pitar</Button>
            <Button type="primary" onClick={clickBeepAxios}>Pita Axios</Button>
            <Button type="primary" onClick={clickPrint}>PINGA</Button>

            <Button type="primary" onClick={getDatos}>GET DATOS</Button>

        </div>
    );

}