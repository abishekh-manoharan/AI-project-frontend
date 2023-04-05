import {React, useState} from 'react';
import axios from 'axios'

function Predict(props) {
    const [prediction, setPrediction] = useState('No Prediction Made.')

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
            setPrediction(response.data.prediction)
        })
    }

    return (
        <div class="content">
            <h1>Predict The Writing Test Score</h1>
            <form onSubmit={handleSubmit}>
                <div class="predictionParam">
                    <label for="gender">Gender:</label><br/>
                    <select type='number' name="gender">
                        <option  value={0}>female</option>
                        <option  value={1}>male</option>
                    </select>
                </div>

                <div class="predictionParam">
                    <label for="race">Ethnicity:</label><br/>
                    <select type='number' name="race">
                        <option  value={0}>group A</option>
                        <option  value={1}>group B</option>
                        <option  value={2}>group C</option>
                        <option  value={3}>group D</option>
                        <option  value={4}>group E</option>                
                    </select>
                </div>

                <div class="predictionParam">
                    <label for="parentalLvl">Parental Education Level:</label><br/>
                    <select type='number' name="parentalLvl">
                        <option  value={0}>Associate's Degree</option>
                        <option  value={1}>Bachelor's Degree</option>
                        <option  value={2}>High School</option>
                        <option  value={3}>Master's Degree</option>
                        <option  value={4}>Some College</option>                
                        <option  value={5}>Some High School</option>                
                    </select>
                </div>

                <div class="predictionParam">
                    <label for="lunch">Lunch:</label><br/>
                    <select type='number' name="lunch">
                        <option  value={0}>Free/Reduced</option>
                        <option  value={1}>Standard</option>                
                    </select>
                </div>

                <div class="predictionParam">
                    <label for="test">Test Preparation Course:</label><br/>
                    <select type='number' name="test">
                        <option  value={0}>Completed</option>
                        <option  value={1}>None</option>                
                    </select>
                </div>

                <div class="predictionParam">
                    <label for="reading">Reading Test Score:  </label>
                    <input type='number' min={0} max={100} name="reading"></input>
                </div>

                <div class="predictionParam">
                    <label for="math">Math Test Score:  </label>
                    <input type='number' min={0} max={100} name="math"></input>
                </div>
                    <button type="submit">Predict</button>
            </form>

            <div id="prediction">
                {prediction}
            </div>
        </div>
    );
}

export default Predict;