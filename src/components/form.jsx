import { useState } from 'react'
import CreateButtons from './topOption';

function PersonalInfo ({name, email, phone, address}) {
    return (
        <>
            <header>
                <div className="name">{name}</div>
                <div className="personal-other">
                    <div className="email">{email}</div>
                    <div className="phone">{phone}</div>
                    <div className="address">{address}</div>
                </div>
            </header>
        </>
    )
}

function CreateForm({type, name, result, startDate, endDate, location, description, number, email}) {
    
    const [fullName, setFullName] = useState('asdadökjasdö');
    const [fullEmail, setFullEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    


    function handleInputChange (e) {
        setFullName(e.target.value);
    }

    if (startDate || endDate) {
        return (
            <>
            <form className={type}>
            <div className="form-title">{type}</div>
                <label htmlFor={name}>
                    {name}
                    <input type="text" name={name} id={name} placeholder={"Enter " + name} value={fullName} onChange={handleInputChange}></input>
                </label>
                <label htmlFor={result}>
                    {result}
                    <input type="text" name={result} id={result} placeholder={"Enter " + result}/>
                </label>
                <label htmlFor={startDate}>
                    Start date
                    <input type="text" name={startDate} id={startDate} placeholder={"Enter " + startDate + " date"}/>
                </label>
                <label htmlFor={endDate}>
                    End date
                    <input type="text" name={endDate} id={endDate} placeholder={"Enter " + endDate + " date"}/>
                </label>
                <label htmlFor={location}>
                    Location
                    <input type="text" name={location} id={location} placeholder={"Enter " + location}/>
                </label>
                <button type="submit" className="submit">
                    Submit
                </button>
            </form>
            </>
        )
    } else {
        return (
            <>
            <form className={type}>
            <div className="form-title">{type}</div>
                <label htmlFor={name}>
                    {name}
                    <input type="text" name={name} id={name} placeholder={"Enter " + name} value={fullName} onChange={event => setFullName(event.target.value)}></input>
                </label>
                <label htmlFor={email}>
                    {email}
                    <input type="text" name={email} id={email} placeholder={"Enter " + email}/>
                </label>
                <label htmlFor={number}>
                    Number
                    <input type="text" name={number} id={number} placeholder={"Enter " + number}/>
                </label>
                <label htmlFor={location}>
                    Location
                    <input type="text" name={location} id={location} placeholder={"Enter " + location}/>
                </label>
                <button type="submit" className="submit">
                    Submit
                </button>
            </form>
            </>
        )
    }

}

export default function Forms() {
    return (
        <>
            <div className="forms">
                <CreateButtons />
                <CreateForm type="Personal" name="Name" email="Email" number="Number" location="location"/>
                <CreateForm type="Education" name="School" result="Degree" startDate="Start" endDate="End" location="location" />
                <CreateForm type="Experience" name="Company" result="Position" startDate="Start" endDate="End" location="location" />
            </div>

            <div className="CV">
                <PersonalInfo name={"dsad"}/>
            </div>
        </>
    )
}