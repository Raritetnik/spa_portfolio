import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return(
        <section className="block">
            <div className="container md:mx-auto px-20 flex justify-between items-center mt-10">
                <div style={{ maxWidth: 400}} className='d-block'>
                    <h1 className="text-3xl font-black pb-4">Front-End et Back-End Développeur</h1>
                    <p className="text-gray-500 pb-4 font-mono">Bonjour, je m'appelle Mykhaylo Kuzmin et je suis concepteur et programmeur de sites web.
                        Je suis d'origine ukrainienne et j'habite actuellement à Montréal, au Canada.</p>
                    <small className='flex '>
                        <Link to='https://github.com/Raritetnik'><BsGithub
                        size={30}
                        style={{ marginRight:20, cursor: "pointer"}}/></Link>
                        <Link to='https://www.linkedin.com/in/raritetnik/'><BsLinkedin
                        size={30}
                        style={{ marginRight:20, cursor: "pointer"}}/></Link>
                    </small>
                </div>
                <div className="">
                    <img src="https://cdn-icons-png.flaticon.com/512/1995/1995515.png" style={{ width: 400, height: 400}}/>
                </div>
            </div>
        </section>
    );
}

export default HomePage;