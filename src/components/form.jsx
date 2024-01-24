import { useState } from 'react'
import CreateButtons from './topOption';

function click () {
    console.log("test");
}

function CreateForm({
    type, name, result, startDate, endDate, location, description, number, email,
    setFullName, fullName, setFullEmail, fullEmail, setFullNumber, fullNumber, setLocationPersonal,
    locationPersonal, school, setSchool, degree, setDegree, startSchool, setStartSchool, endSchool,
    setEndSchool, locationSchool, setLocationSchool, setDescription1, description1
}) {

    if (startDate || endDate) {
        return (
            <form className={type}>
                <div className="form-title">{type}</div>
                    <label htmlFor={name}>
                        {name}
                        <input type="text" name={name} id={name} placeholder={"Enter " + name} value={school} onChange={e => setSchool(e.target.value)}></input>
                    </label>
                    <label htmlFor={result}>
                        {result}
                        <input type="text" name={result} id={result} placeholder={"Enter " + result} value={degree} onChange={e => setDegree(e.target.value)}/>
                    </label>
                    <label htmlFor={startDate}>
                        Start date
                        <input type="text" name={startDate} id={startDate} placeholder={"Enter " + startDate + " date"} value={startSchool} onChange={e => setStartSchool(e.target.value)}/>
                    </label>
                    <label htmlFor={endDate}>
                        End date
                        <input type="text" name={endDate} id={endDate} placeholder={"Enter " + endDate + " date"} value={endSchool} onChange={e => setEndSchool(e.target.value)}/>
                    </label>
                    <label htmlFor={location}>
                        Location
                        <input type="text" name={location} id={location} placeholder={"Enter " + location} value={locationSchool} onChange={e => setLocationSchool(e.target.value)}/>
                    </label>
                    <label htmlFor={description}>
                        Description 
                        <textarea name={description} id={description} cols="30" rows="10" value={description1} onChange={e => setDescription1(e.target.value)}></textarea>
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

    const [school, setSchool] = useState('Thoren framtid');
    const [degree, setDegree] = useState('Some degree');
    const [startSchool, setStartSchool] = useState('08/07/23')
    const [endSchool, setEndSchool] = useState('present')
    const [locationSchool, setLocationSchool] = useState('Zambia')
    
    const [company, setCompany] = useState('ICA');
    const [position, setPosition] = useState('Waiter');
    const [startCompany, setStartCompany] = useState('28/01/21')
    const [endCompany, setEndCompany] = useState('03/04/21')
    const [locationCompany, setLocationCompany] = useState('Angola')
    
    const [descriptionSchool, setDescriptionSchool] = useState('');
    const [descriptionCompany, setDescriptionCompany] = useState('');

    return (
        <>
            <div className="forms">
                <CreateButtons clickEvent={click()} />
                <CreateForm type="Personal" name="Name" email="Email" number="Number" location="location" setFullName={setFullName} fullName={fullName} setFullEmail={setFullEmail} fullEmail={fullEmail} setFullNumber={setFullNumber} fullNumber={fullNumber} locationPersonal={locationPersonal} setLocationPersonal={setLocationPersonal}/>
                <CreateForm type="Education" name="School" result="Degree" startDate="Start" endDate="End" location="location" setSchool={setSchool} school={school} setDegree={setDegree} degree={degree} startSchool={startSchool} setStartSchool={setStartSchool} endSchool={endSchool} setEndSchool={setEndSchool}  locationSchool={locationSchool} setLocationSchool={setLocationSchool} description1={descriptionSchool} setDescription1={setDescriptionSchool}/>
                <CreateForm type="Experience" name="Company" result="Position" startDate="Start" endDate="End" location="location" description="description" school={company} setSchool={setCompany} setDegree={setPosition} degree={position} startSchool={startCompany} setStartSchool={setStartCompany} endSchool={endCompany} setEndSchool={setEndCompany}  locationSchool={locationCompany} setLocationSchool={setLocationCompany} description1={descriptionCompany} setDescription1={setDescriptionCompany}/>
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
            

            <div className="education-top">Education</div>
            <div className="education-bottom">
                <div className="left">
                    <div className="date">
                        <div className="start">{startSchool}</div>
                        <span> - </span>
                        <div className="end">{endSchool}</div>
                    </div>
                    <div className="location">{locationSchool}</div>
                </div>
                <div className="right">
                    <div className="school">{school}</div>
                    <div className="degree">{degree}</div>
                    <div className="description">{descriptionSchool}</div>
                </div>
            </div>

            <div className="experience-top">Experience</div>
            <div className="experience-bottom">
                <div className="left">
                    <div className="date">
                        <div className="start">{startCompany}</div>
                        <span> - </span>
                        <div className="end">{endCompany}</div>
                    </div>
                    <div className="location">{locationCompany}</div>
                </div>
                <div className="right">
                    <div className="company">{company}</div>
                    <div className="position">{position}</div>
                    <div className="description">{descriptionCompany}</div>
                </div>
            </div>
            </div>
        </>
    )
}