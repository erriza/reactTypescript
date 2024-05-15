import { Diaire } from "../../types"
interface Props {
    diaires: Diaire[]
}

const Diaries = (props: Props) => {

    return(
        <>
            <h1>Diary Entries</h1>
            {
                props.diaires.map((diarie, id) => (
                    <div key={id}>
                        <p><strong>{diarie.date}</strong></p>
                        <p>visibility: {diarie.visibility}</p>
                        <p>weather: {diarie.weather}</p>   
                        <hr></hr>
                    </div>
                ))
            }
        </>
    )
}

export default Diaries