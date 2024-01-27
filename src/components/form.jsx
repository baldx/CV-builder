import { useState } from 'react'
import CreateOption from './topOption';

const inputLength = 30;
const dateLength = 10;
const descriptionLength = 200;

function CreateForm({
    type, name, result, startDate, endDate, location, description, number, email,
    setFullName, fullName, setFullEmail, fullEmail, setFullNumber, fullNumber, setLocationPersonal,
    locationPersonal, school, setSchool, degree, setDegree, startSchool, setStartSchool, endSchool,
    setEndSchool, locationSchool, setLocationSchool, setDescription1, description1
}) {

    const [isClicked, setIsClicked] = useState(false);
    const [isSubmittedBtn, setIsSubmittedBtn] = useState('Submit')

    function handleClick(e) {
        setIsClicked(!isClicked);
        e.preventDefault();
    }

    const dynamicStyle = {
        filter: isClicked ? 'blur(8px)' : 'none'
      };

    const submitBtnStyle = {
        display: isClicked ? 'block' : 'none',
    };

    const handleClickSubmit = () => {
        setIsSubmittedBtn((prevValue) => (prevValue === 'Submit' ? 'Edit' : 'Submit'));
    };

    if (startDate || endDate) {
        return (
            <form className={type} onSubmit={handleClick}>
                <div className="blur" style={dynamicStyle}>
                <div className="form-title">{type}</div>
                    <label htmlFor={name}>
                        {name}
                        <input type="text" name={name} id={name} placeholder={"Enter " + name} value={school} onChange={e => setSchool(e.target.value)} maxLength={inputLength}></input>
                    </label>
                    <label htmlFor={result}>
                        {result}
                        <input type="text" name={result} id={result} placeholder={"Enter " + result} value={degree} onChange={e => setDegree(e.target.value)}  maxLength={inputLength} />
                    </label>
                    <label htmlFor={startDate}>
                        Start date
                        <input type="text" name={startDate} id={startDate} placeholder={"Enter " + startDate + " date"} value={startSchool} onChange={e => setStartSchool(e.target.value)} maxLength={dateLength} />
                    </label>
                    <label htmlFor={endDate}>
                        End date
                        <input type="text" name={endDate} id={endDate} placeholder={"Enter " + endDate + " date"} value={endSchool} onChange={e => setEndSchool(e.target.value)} maxLength={dateLength}/>
                    </label>
                    <label htmlFor={location}>
                        Location
                        <input type="text" name={location} id={location} placeholder={"Enter " + location} value={locationSchool} onChange={e => setLocationSchool(e.target.value)} maxLength={inputLength}/>
                    </label>
                    <label htmlFor={description}>
                        Description 
                        <textarea name={description} id={description} cols="30" rows="10" value={description1} onChange={e => setDescription1(e.target.value)} maxLength={descriptionLength}></textarea>
                    </label>
                </div>
                    <button type="submit" className="submit" onClick={handleClickSubmit}>
                        {isSubmittedBtn}
                    </button>
            </form>
        )
    } else {
        return (
            <>
                <form className={type} onSubmit={handleClick}>
                    <div className="blur" style={dynamicStyle}>
                    <div className="form-title">{type}</div>
                        <label htmlFor={name}>
                            {name}
                            <input type="text" name={name} id={name} placeholder={"Enter " + name} value={fullName} onChange={e => setFullName(e.target.value)} maxLength={inputLength}/>
                        </label>
                        <label htmlFor={email}>
                            {email}
                            <input type="text" name={email} id={email} placeholder={"Enter " + email} value={fullEmail} onChange={e => setFullEmail(e.target.value)} maxLength={inputLength}/>
                        </label>
                        <label htmlFor={number}>
                            Number
                            <input type="text" name={number} id={number} placeholder={"Enter " + number} value={fullNumber} onChange={e => setFullNumber(e.target.value)} maxLength={inputLength}/>
                        </label>
                        <label htmlFor={location}>
                            Location
                            <input type="text" name={location} id={location} placeholder={"Enter " + location} value={locationPersonal} onChange={e => setLocationPersonal(e.target.value)} maxLength={inputLength}/>
                        </label>
                    </div>
                    <button type="submit" className="submit" onClick={handleClickSubmit}>
                        {isSubmittedBtn}
                    </button>
                </form>
            </>
        )
    }
}

export default function Forms() {

    const initialState = {
        fullName: 'Johnny Cena',
        fullEmail: 'JohnnyCena@gmail.com',
        fullNumber: '+4662651951',
        locationPersonal: 'Växjö',

        school: 'Thoren framtid',
        degree: 'Gymnasieexamen',
        startSchool: '08/07/22',
        endSchool: '13/06/25',
        locationSchool: 'Växjö',

        company: 'ICA',
        position: 'Cahsier',
        startCompany: '28/01/21',
        endCompany: '03/04/21',
        locationCompany: 'Växjö',

        descriptionSchool: '',
        descriptionCompany: 'I had hours during peak times and i my work consisted in taking cashing out customers products. Worked during school break',
    }

    const [fullName, setFullName] = useState(initialState.fullName);
    const [fullEmail, setFullEmail] = useState(initialState.fullEmail);
    const [fullNumber, setFullNumber] = useState(initialState.fullNumber);
    const [locationPersonal, setLocationPersonal] = useState(initialState.locationPersonal);

    const [school, setSchool] = useState(initialState.school);
    const [degree, setDegree] = useState(initialState.degree);
    const [startSchool, setStartSchool] = useState(initialState.startSchool)
    const [endSchool, setEndSchool] = useState(initialState.endSchool)
    const [locationSchool, setLocationSchool] = useState(initialState.locationSchool)
    
    const [company, setCompany] = useState(initialState.company);
    const [position, setPosition] = useState(initialState.position);
    const [startCompany, setStartCompany] = useState(initialState.startCompany)
    const [endCompany, setEndCompany] = useState(initialState.endCompany)
    const [locationCompany, setLocationCompany] = useState(initialState.locationCompany)
    
    const [descriptionSchool, setDescriptionSchool] = useState(initialState.descriptionSchool);
    const [descriptionCompany, setDescriptionCompany] = useState(initialState.descriptionCompany);

    const handleReset = () => {
        setFullName(initialState.fullName);
        setFullEmail(initialState.fullEmail);
        setFullNumber(initialState.fullNumber);
        setLocationPersonal(initialState.locationPersonal);
        setSchool(initialState.school);
        setDegree(initialState.degree);
        setStartSchool(initialState.startSchool);
        setEndSchool(initialState.endSchool);
        setLocationSchool(initialState.locationSchool);
        setCompany(initialState.company);
        setPosition(initialState.position);
        setStartCompany(initialState.startCompany);
        setEndCompany(initialState.endCompany);
        setLocationCompany(initialState.locationCompany);
        setDescriptionSchool(initialState.descriptionSchool);
        setDescriptionCompany(initialState.descriptionCompany);
    }

    const handleClear = () => {
        setFullName('');
        setFullEmail('');
        setFullNumber('');
        setLocationPersonal('');
        setSchool('');
        setDegree('');
        setStartSchool('');
        setEndSchool('');
        setLocationSchool('');
        setCompany('');
        setPosition('');
        setStartCompany('');
        setEndCompany('');
        setLocationCompany('');
        setDescriptionSchool('');
        setDescriptionCompany('');
    }

    return (
        <>
            <div className="forms">
                <div className="top">
                    <CreateOption type="clear" innerText="Clear" clickEvent={handleClear}/>
                    <CreateOption type="example" innerText="Load Example" clickEvent={handleReset}/>
                </div>
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
                        <div className="start">{startSchool} &nbsp;</div>
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
                        <div className="start">{startCompany} &nbsp;</div>
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