import React from 'react';

function Home(props) {
    return (
        <div class = "content">
            <h1>Home</h1>
            <br/>
            <img width={500} src='https://www.pngkey.com/png/full/307-3077809_paper-clipart-grade-good-grade-clip-art.png'/>
            <br/><br/><br/>
            

            <div class="names"><strong>Abi Manoharan</strong> - 301165253</div>
            <div class="names"><strong>Lewis Merino</strong> - 822273553</div>
            <div class="names"><strong>Vinit Purohit</strong> - 301170869</div>
            
            <br/><br/> 

            <div id="description">
                This application predicts the writing test score of a student using a model trained on the following features: gender, race/ethnicity, parental level of education, lunch, math score, reading score, test preparation course. Click the "Predict" button on the navigation bar to begin.
            </div> 

            <br/><br/>
        </div>
    );
}

export default Home;