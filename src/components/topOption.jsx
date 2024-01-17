import { useState } from 'react'

function CreateOption({type, innerText}) {
    return (
        <>
            <button className={type + ' ' + 'option'}>{innerText}</button>
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