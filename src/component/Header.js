import React, {useState} from 'react';
import Button from './button'


 const Header = (props) => {

    return (
        <header className='header'>
         <h1>{props.title}</h1>
         <Button color={props.color}  Click={props.Click}/>

        </header>
    )
   
}


// css in js
//  const headingStyle = {
//         color: 'red'
//     }
export default Header;