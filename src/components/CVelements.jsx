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

function PastExperience ({startDate, endDate, location, type, result, description, name, position}) {
    return (
        <>
            <div className={type + "-top"}>{type}</div>
            <div className={type + "-bottom"}>
                <div className="left">
                    <div className="date">
                        <div className="start">{startDate}</div>
                        <span>&ThickSpace;-&ThickSpace;</span>
                        <div className="end">{endDate}</div>
                    </div>
                    <div className="location">{location}</div>
                </div>
                <div className="right">
                    <div className={type}>{name}</div>
                    <div className={result}>{position}</div>
                </div>
            </div>
        </>
    )
}


