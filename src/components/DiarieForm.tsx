import { useState } from "react";
import { createDiarie } from "../services/diariesService";
import { Diaire } from "../../types";
import axios from "axios";

type Props = {
    onAddDiarie: (newDiarie: Diaire) => void
}
const DiaireForm = ({ onAddDiarie }: Props) => {

    const [newDate, setNewDate] = useState('');
    const [newVisibility, setNewVisibility] = useState('');
    const [newWeather, setNewWeather] = useState('');
    const [newComment, setnewComment] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const diarieCreation = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        const newDiarieEntry = {
            date: newDate,
            weather: newWeather,
            visibility: newVisibility,
            comment: newComment
        };
        console.log('toAdd', newDiarieEntry)
        try {
            const createdDiarie = await createDiarie(newDiarieEntry);
            if(createdDiarie) {
                onAddDiarie(createdDiarie);
                setNewDate('');
                setNewVisibility('');
                setNewWeather('');
                setnewComment('');
                setErrorMessage('');
            } 
        } catch(error) {
            if(axios.isAxiosError(error)) {
                if(error.response?.data) {
                    console.log('if', error.response.data)
                    setErrorMessage(`Error ${error.response.data}`);
                    setTimeout(() => {
                        setErrorMessage('')
                    }, 4000)
                }
            } else {
                console.error("error creatin diary", error);
                setErrorMessage('An unexpected error ocurred');
                setTimeout(() => {
                    setErrorMessage('')
                }, 3000)
            }
        }
    }
        // createDiarie(newDiarieEntry).then(data => {
        //     onAddDiarie(data);
        //     setNewDate('');
        //     setNewVisibility('');
        //     setNewWeather('');
        //     setnewComment('');
        // })

    const error = {
        color: "red",
        padding: ".5rem",
        margin: "0.5rem"
    }
    return(
        <div>
            <h1>Add new entry</h1>
            {errorMessage && <div style={error}>{errorMessage}</div>}
            <form onSubmit={diarieCreation}>
                <div>
                    <label>
                        date
                        <input
                            type="date"
                            value={newDate}
                            onChange={(event) => setNewDate(event.target.value)}
                    />
                    </label>
                </div>
                <div>
                    <label>
                        Visibility | 
                        great
                        <input
                            type="radio"
                            name="visibility"        
                            value="great"
                            onChange={() => setNewVisibility("great")}
                    />
                    good
                    <input
                            type="radio"
                            name="visibility"        
                            value="good"
                            onChange={() => setNewVisibility("good")}
                    />
                    ok
                    <input
                            type="radio"
                            name="visibility"        
                            value="ok"
                            onChange={() => setNewVisibility("ok")}
                    />
                    poor
                    <input
                            type="radio"
                            name="visibility"        
                            value="poor"
                            onChange={() => setNewVisibility("poor")}
                    />
                    </label>
                </div>

                <div>
                    <label>
                        Weather | 
                        sunny
                        <input
                            type="radio"
                            name="weather"        
                            value="sunny"
                            onChange={() => setNewWeather("sunny")}
                    />
                    rainy
                    <input
                            type="radio"
                            name="weather"        
                            value="rainy"
                            onChange={() => setNewWeather("rainy")}
                    />
                    cloudy
                    <input
                            type="radio"
                            name="weather"        
                            value="cloudy"
                            onChange={() => setNewWeather("cloudy")}
                    />
                    stormy
                    <input
                            type="radio"
                            name="weather"        
                            value="stormy"
                            onChange={() => setNewWeather("stormy")}
                    />
                    windy
                    <input
                            type="radio"
                            name="weather"        
                            value="windy"
                            onChange={() => setNewWeather("windy")}
                    />
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        comment
                        <input          
                        value={newComment}
                        onChange={(event) => setnewComment(event.target.value)}
                    />
                    </label>
                </div>
            <button style={{margin: "10px"}} type='submit'>add</button>      
            </form>      
      </div>
    )
}

export default DiaireForm;