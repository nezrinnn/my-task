import React from 'react'
import './Form.css'
const Form = () => {


const myForm =()=>{
    alert("Gonderildi");

}
    
    return (
        <div className='div'>
            <form onSubmit={myForm}>
            <label>Ad</label><br />
            <input type='text' required/><br />
            <label>Soyad</label><br />
            <input type="text" required/><br />
            <label>Telefon</label><br />
            <input type='number' required/><br />
            <label>Email</label><br />
            <input type='email' required /><br />
            <label>Serh</label><br/>
            <input type='text' required /><br/>
            <button >Gonder</button>
            </form>
        </div>
    );
    }


export default Form