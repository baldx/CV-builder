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


function CreateForm({
    type, name, result, startDate, endDate, location, description, number, email,
    setFullName, fullName, setFullEmail, fullEmail, setFullNumber, fullNumber, setLocationPersonal,
    locationPersonal
}) {

    if (startDate || endDate) {
        return (
            <form className={type}>
                <div className="form-title">{type}</div>
                    <label htmlFor={name}>
                        {name}
                        <input type="text" name={name} id={name} placeholder={"Enter " + name} ></input>
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
        )
    } else {
        return (
            <>
                <form className={type}>
                <div className="form-title">{type}</div>
                    <label htmlFor={name}>
                        {name}
                        <input type="text" name={name} id={name} placeholder={"Enter " + name} value={fullName} onChange={e => setFullName(e.target.value)} />
                    </label>
                    <label htmlFor={email}>
                        {email}
                        <input type="text" name={email} id={email} placeholder={"Enter " + email} value={fullEmail} onChange={e => setFullEmail(e.target.value)}/>
                    </label>
                    <label htmlFor={number}>
                        Number
                        <input type="text" name={number} id={number} placeholder={"Enter " + number} value={fullNumber} onChange={e => setFullNumber(e.target.value)}/>
                    </label>
                    <label htmlFor={location}>
                        Location
                        <input type="text" name={location} id={location} placeholder={"Enter " + location} value={locationPersonal} onChange={e => setLocationPersonal(e.target.value)}/>
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

    const [fullName, setFullName] = useState('Johnny Cena');
    const [fullEmail, setFullEmail] = useState('JohnnyCena@gmail.com');
    const [fullNumber, setFullNumber] = useState('+4662651951');
    const [locationPersonal, setLocationPersonal] = useState('Zimbabwe');

    return (
        <>
            <div className="forms">
                <CreateButtons />
                <CreateForm type="Personal" name="Name" email="Email" number="Number" location="location" setFullName={setFullName} fullName={fullName} setFullEmail={setFullEmail} fullEmail={fullEmail} setFullNumber={setFullNumber} fullNumber={fullNumber} locationPersonal={locationPersonal} setLocationPersonal={setLocationPersonal}/>
                <CreateForm type="Education" name="School" result="Degree" startDate="Start" endDate="End" location="location" />
                <CreateForm type="Experience" name="Company" result="Position" startDate="Start" endDate="End" location="location" description="description" />
            </div>

            <div className="CV">
            <header>
                <div className="name">{fullName}</div>
                <div className="personal-other">
                    <div className="email">{fullEmail}</div>
                    <div className="phone">{fullNumber}</div>
                    <div className="address">{locationPersonal}</div>
                </div>
            </header>
            </div>
        </>
    )
}