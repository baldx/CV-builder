import { useState } from 'react'

export default function CreateOption({type, innerText, clickEvent}) {
    return (
        <>
            <button className={type + ' ' + 'option' } onClick={clickEvent}>{innerText} </button>
        </>
    )
}