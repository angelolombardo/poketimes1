import React from 'react'

const Rainbow = (WrappedComponent) => { 

const colours = ['red','pink','orange','blue', 'green','yellow'];
const randomColour = colours[Math.floor(Math.random()*5)] //floor is used to get rid of the decimals


const className = randomColour + '-text' // piink-text, blue-text, etc...

return (props) =>{
    return(
        <div className={className}>  {/* class name is from the css thingy */}
            <WrappedComponent{...props}/> 
            
        </div> 
        
    )
    
}
}

export default Rainbow