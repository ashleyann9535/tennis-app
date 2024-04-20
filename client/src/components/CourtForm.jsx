import { useState } from 'react'
import axios from 'axios';

const CourtForm = () => {
    const [name, setName] = useState('');
    
    //handle submitted form
    const onSubmitHandler = e => {
        //prevent default
        e.preventDefault();
        //make request to add a court
        axios.post('http://localhost:8000/api/courts', {
            name, //shortcut for name: name
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => console.log(err))
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Court Name: </label>
                <input type="text" onChange={e => setName(e.target.value)} />
            </p>
            <input type="submit" />
        </form>
    )

}
export default CourtForm;