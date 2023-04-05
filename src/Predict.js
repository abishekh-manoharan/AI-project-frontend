import {React, useState} from 'react';
import axios from 'axios'

function Predict(props) {
    const [name, setName] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(e.target.name.value);
        console.log('clicked')

        var form = new FormData();
        form.append('gender', e.target.gender.value)
        form.append('parental level of education', e.target.parentalLvl.value)
        form.append('race/ethnicity', e.target.race.value)
        form.append('lunch', e.target.lunch.value)
        form.append('test preparation course', e.target.test.value)
        form.append('reading score', e.target.reading.value)
        form.append('math score', e.target.math.value)

        const promise  = axios({
            method: "post",
            url: 'http://abimanoharan.pythonanywhere.com/',
            data: form,
            headers: {
                'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
            },
        })
        promise.then(response=>{            
            console.log(response.data)
        })


        // const response = await axios({
        //     method: 'post',
        //     url: 'http://abimanoharan.pythonanywhere.com/index',
        //     data: form,
        //     headers: {
        //         'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
        //     },
        // });
        
    }

    return (
        <div class="content">
            <p>prediction page</p>
            <form onSubmit={handleSubmit}>
                <input type='number' name="gender" value={1}></input>
                <input type='number' name="parentalLvl" value={2}></input>
                <input type='number' name="race" value={3}></input>
                <input type='number' name="lunch" value={4}></input>
                <input type='number' name="test" value={5}></input>
                <input type='number' name="reading" value={84}></input>
                <input type='number' name="math" value={79}></input>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default Predict;