import React, { useRef } from 'react';
import ThirdComponent from './ThirdComponent';

const SecondComponent = props => {
    const childRef = useRef();
    const itemClicked = item => {
        if (item === 'Edit') {
            childRef.current.editHandler()
        } else {
            childRef.current.deleteHandler()
        }
    }
    return (
        <div id="myDropdown" className="dropdown-content">
            {props.menuItem.map((item,index) => (
                <a key={index} onClick={itemClicked.bind(this, item)}>{item}</a>
            ))}
            <ThirdComponent ref={childRef} />
        </div>
    )
}
export default SecondComponent;