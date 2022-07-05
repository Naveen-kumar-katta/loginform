import { Link } from "react-router-dom";
import React,{useState} from 'react';
function Calculation() {
    const [rooms,setrooms] = useState(0)
    const [rating,setrating] = useState(0)
    const [value,setvalue] = useState('')
    const [message,setmessage] = useState('')
    let calcaptmnts = (event) => {
        event.preventDefault()

        if (rooms ===0 || rating === 0) {
            alert("Please enter valid values")
        } else {
            let value = (rooms * rating * rating)
            setvalue(value.toFixed(1))
        }
        console.log({value})
    }
    let imgSrc;
    if (value < 1) {
        imgSrc = null
    } else {
        if (value <= 25 && rating <3) {
            imgSrc = require('./stats.png')
        } else {
            imgSrc = require('./stats.png')
        }
    }
    let reload = () => {
        window.location.reload()
    }

    return (
        <form onSubmit={calcaptmnts}>
            <div>
                <img src={require('./rating.png')} alt=''></img>
            </div>
            <big><big><center><div><br/>
                <h2><font color="white">flat rental price calculator</font></h2>
            </div>
            <div>
                <label><font color="white">no of rooms(1-3):</font></label>
                <input value={rooms} onChange={(e) => setrooms(e.target.value)} />
            </div><br/>
            <div>
                <label><font color="white">area rating(1-5):</font></label>
                <input value={rating} onChange={(e) => setrating(e.target.value)} />
            </div><br/>
            <div>
                {/* <Link to='/output'> */}
                    <button type="submit">submit</button>
                {/* </Link> */}
            </div>
            <div>
                <h3><font color="white">Average Expected  Rent: {value * 1000}</font></h3>
                <p>{message}</p>
            </div>
            <div>
                <img src={imgSrc} alt=''></img>
            </div>
            </center></big></big>
        </form>
    )
}
// export const value=value;
export default Calculation;