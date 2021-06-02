import React from 'react';
import './style.css'
class Registration extends React.Component {
    render() {
        return (
            <div >
                <form className='form' name="uploadForm" encType="multipart/form-data">
                    <input type="text"  placeholder="Name"/>
                    <input type="text"  placeholder="Email"/>
                    <input type="text"  placeholder="Password"/>
                    <input type="text"  placeholder="Enter password"/>
                    <input type="button" value="Registration" />
                </form>
            </div>
        )
    }
}

export default Registration