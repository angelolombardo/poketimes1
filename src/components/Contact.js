import React from 'react'

const Contact = (props) => {  //if we add props router sends some functions that can be used

    // setTimeout(() => {
    //     props.history.push('/about') //after 2 seconds it wil redirect to contact
    // }, 2000)
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam neque dicta in aut placeat natus sint obcaecati beatae! Atque temporibus voluptas incidunt saepe nemo repudiandae itaque molestias tempore aliquid? Officia!</p>
        </div>
    )
}

export default Contact