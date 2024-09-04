import { useState } from "react";

function Form()
{
    const[formdata, setFormdata] = useState({
        fullname: "",
        email: "",
        contact: "",
        address: ""
    });
    const[isVisible, setIsvisible] = useState(false);

    function getValue() {
           
        setIsvisible(true);
    }
   function handleInput (name,e)
   {
    setFormdata({...formdata, [name] : e.target.value })
    console.log(formdata);
   }
    return(
        <div className="form" onSubmit={getValue}>
            <h2>Registration Form</h2>
           <div>
           <label for="name">Name:</label>
           <input name={"fullname"} type="text" onChange={(e) => {handleInput('fullname', e)}}/>
           </div>

           <div>
            <label for="email">Email:</label>
            <input name={"email"} type="email" onChange={(e) => {handleInput('email',e)}}/>
           </div>

           <div>
            <label for="contact">Contact number: </label>
            <input name={"contact"} type="number"  onChange={(e) => {handleInput('contact',e)}}/>
           </div>

           <div>
            <label for="address">Address:</label>
            <input name={"address"} type="address" onChange={(e) => {handleInput('address',e)}}/>
          </div>

          <div>
            <input type="submit" onClick={getValue}/>
          </div>


        {isVisible && <div className="view-data">
            <h3>Your entries:</h3>
            <p>Name: {formdata.fullname}</p>
            <p>Email: {formdata.email}</p>
            <p>Contact no: {formdata.contact}</p>
            <p>Address: {formdata.address}</p>
        </div>}
        </div>
    );
}

export default Form;