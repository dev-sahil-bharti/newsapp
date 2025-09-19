import React, { Component } from 'react'
import loading from './loading.gif'
const Spinner = () => {

    return (
        <div className='container d-flex justify-content-center'>
            <img src={loading} alt='Loading'></img>
        </div>
    )

}

export default Spinner
