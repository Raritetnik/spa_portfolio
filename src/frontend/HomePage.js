import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const HomePage = () => {
    return(
        <div className="container d-flex justify-content-between align-items-center">
            <div style={{ maxWidth: 400}} className='d-block home__text'>
                <h1 className="pb-3">Front-End et Back-End Développeur</h1>
                <p>Bonjour, je m'appelle Mykhaylo Kuzmin et je suis concepteur et programmeur de sites web.
                    Je suis d'origine ukrainienne et j'habite actuellement à Montréal, au Canada.</p>
                <small>
                    <BsGithub
                    size={30}
                    style={{ marginRight:20, cursor: "pointer"}}/>
                    <BsLinkedin
                    size={30}
                    style={{ marginRight:20, cursor: "pointer"}}/>
                </small>
            </div>
            <div className="">
                <img src="https://cdn-icons-png.flaticon.com/512/1995/1995515.png" style={{ width: 400, height: 400}}/>
            </div>
        </div>
    );
}

export default HomePage;