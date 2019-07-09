import React from 'react';
import './App.css';
import { MyForm } from './BasicV2';

function App() {
  return (
    <div className="App">

<div class="jumbotron">
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <h3>React + Formik - Form Validation</h3>
                    <MyForm/>
                </div>
            </div>
        </div>
    </div>
      
    </div>
  );
}

export default App;
