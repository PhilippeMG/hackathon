import axios from 'axios';
import { useEffect, useState } from 'react';
import LocationsContext from '.';



export default function Esp32Provider({ children }) {
    const [reles, setRele] = useState({ "1": 0, "2": 0, "3": 0, "4": 0 });

    useEffect(async () => {
        estadosRele();
        //convertData();

    }, [])
    const [datos, setDatos] = useState(0);

    // Cambiar el DeviceID por el de tu dispositivo
    function reverse(s) {
        return s.split("").reverse().join("");
    }
    function convertToBinary1(number) {
        let num = number;
        let binary = (num % 2).toString();
        //console.log(binary)
        for (; num > 1;) {
            num = parseInt(num / 2);
            binary = (num % 2) + (binary);
        }
        // console.log("number: ", number, " binary: ", binary);
        let dato = binary + "";
        let valor = reverse(dato).split("")
        setRele({ "1": valor[0], "2": valor[1], "3": valor[2], "4": valor[3] })

        // console.log("reles: ", reles)


    }

    const url = "https://0f395f0895fa.dev.weblet.io/devices/cmd";
    //const url = "https://aeb6232329ac39.dev.weblet.io/devices/cmd";

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
                "to": "io.cmd.put_out", "data": { "set": datos }
            },
            {
                headers: {
                    "Authorization": "Bearer 75db66b2ad2721a780d7beb747bc1e38ed79a2ed"
                }
            })
        convertData();

        //  convertToBinary1(response.data.result.data)

        //convertToBinary1(response.data.result.data)
        // convertData();
    }
    const activarRele = (n) => {
        // let n = 2

        switch (n) {
            case 1:
                setRele({ "1": 1, "2": reles["2"], "3": reles["3"], "4": reles["4"] });
                break;
            case 2:
                setRele({ "1": reles["1"], "2": 1, "3": reles["3"], "4": reles["4"] });
                break;
            case 3:
                setRele({ "1": reles["1"], "2": reles["2"], "3": 1, "4": reles["4"] });
                break;
            case 4:
                setRele({ "1": reles["1"], "2": reles["2"], "3": reles["3"], "4": 1 });
                break;
        }
        // clickOnRele();
    }
    const desactivarRele = (n) => {
        // let n = 2
        switch (n) {
            case 1:
                setRele({ "1": 0, "2": reles["2"], "3": reles["3"], "4": reles["4"] });
                break;
            case 2:
                setRele({ "1": reles["1"], "2": 0, "3": reles["3"], "4": reles["4"] });
                break;
            case 3:
                setRele({ "1": reles["1"], "2": reles["2"], "3": 0, "4": reles["4"] });
                break;
            case 4:
                setRele({ "1": reles["1"], "2": reles["2"], "3": reles["3"], "4": 0 });
                break;
        }
        // clickOffRele();
    }
    const clickOffRele = async () => {

        const response = await axios.post(
            url,
            {
                "to": "io.cmd.put_out", "data": { "clr": datos }
            },
            {
                headers: {
                    "Authorization": "Bearer 75db66b2ad2721a780d7beb747bc1e38ed79a2ed"
                }
            })
        // convertToBinary1(response.data.result.data)
        console.log(response.data)
        estadosRele();
        // convertData();
    }
    const convertData = () => {
        console.log(reles)
        let information = "" + reles["4"] + reles["3"] + reles["2"] + reles["1"]
        console.log(information)
        setDatos(parseInt(information, 2))
        console.log("convertData: ", datos)
    }
    const estadosRele = async () => {
        const response = await axios.post(
            url,
            {
                "to": "io.cmd.put_out", "data": {}
            },
            {
                headers: {
                    "Authorization": "Bearer 75db66b2ad2721a780d7beb747bc1e38ed79a2ed"
                }
            })
        convertToBinary1(response.data.result.data)
        // console.log("estado rele:  ", response.data)
    }

    const printScreen = async () => {
        //    getStreamData();

    }


    return (
        <LocationsContext.Provider value={{ clickBeepAxios, clickOnRele, clickOffRele, printScreen, reles, activarRele, desactivarRele }}>
            {children}
        </LocationsContext.Provider>
    );

}
