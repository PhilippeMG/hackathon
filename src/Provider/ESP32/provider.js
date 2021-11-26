import axios from 'axios';
import LocationsContext from '.';


export default function Esp32Provider({ children }) {
    const url = "https://0f395f0895fa.dev.weblet.io/devices/cmd";

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

    const clickOnRele = async () => {
        const response = await axios.post(
            url,
            {
                "to": "io.cmd.put_out", "data": { "set": 2048 }
            },
            {
                headers: {
                    "Authorization": "Bearer 75db66b2ad2721a780d7beb747bc1e38ed79a2ed"
                }
            })

        console.log(response.data)
    }

    const clickOffRele = async () => {
        const response = await axios.post(
            url,
            {
                "to": "io.cmd.put_out", "data": { "clr": 2048 }
            },
            {
                headers: {
                    "Authorization": "Bearer 75db66b2ad2721a780d7beb747bc1e38ed79a2ed"
                }
            })

        console.log(response.data)
    }


    return (
        <LocationsContext.Provider value={{ clickBeepAxios, clickOnRele, clickOffRele }}>
            {children}
        </LocationsContext.Provider>
    );

}
