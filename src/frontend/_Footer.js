import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom'

const iconStyle = {
    marginRight:20, cursor: "pointer", color: "white"
}

const _Footer = () => {
    return(
        <footer className="bg-gray-800" style={{padding: '3rem'}}>
            <div className='container flex justify-between'>
                <div className="">
                    <h5 style={{color: "white"}}>Copyright © 2023. All rights are reserved</h5>
                </div>
                <small className='flex '>
                        <Link to='https://github.com/Raritetnik'><BsGithub
                        size={30}
                        style={iconStyle}/></Link>
                        <Link to='https://www.linkedin.com/in/raritetnik/'><BsLinkedin
                        size={30}
                        style={iconStyle}/></Link>
                    </small>
            </div>
        </footer>
    );
}

export default _Footer;