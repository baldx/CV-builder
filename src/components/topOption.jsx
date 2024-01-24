import { useState } from 'react'

function CreateOption({type, innerText, clickEvent}) {
    return (
        <>
            <button className={type + ' ' + 'option'} onClick={clickEvent}>{innerText} </button>
        </>
    )
}

export default function CreateButtons () {
    return (
        <>
        <section className="top">
            <CreateOption type="clear" innerText="Clear" />
            <CreateOption type="example" innerText="Load Example" />
        </section>
            
        </>
    )
}