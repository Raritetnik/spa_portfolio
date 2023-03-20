import { BsGithub } from 'react-icons/bs';
import { FaShare } from 'react-icons/fa';
const ProjectsPage = () => {
    return(
        <div className="block">
            <div className="container md:mx-auto px-20">
                <h2 className="text-green-600 text-2xl font-bold m-2 pb-5" >Projets Personnels</h2>
                <div className='grid gap-10'>
                    <CarteProjet titre="Location Voiture" />
                    <CarteProjet titre="COINBASE" />
                    <CarteProjet titre="Base de Données École" />
                </div>
            </div>
        </div>
    );
}


const CarteProjet = ({titre, description}) => {
    return (
        <div className="border-2 border-green-600 rounded-md lg:grid lg:grid-cols-5 lg:gap-2 p-10">
            <div className='flex justify-center col-span-3'>
                <img src="https://cdn-icons-png.flaticon.com/512/1085/1085795.png"
                style={{ maxHeight: 250, objectFit: 'cover', objectPosition: "50%"}}
                class="card-img-left" alt="" />
            </div>
            <div className='col-span-2'>
                <div class="card-body">
                    <h5 class="card-title text-lg pb-3">{titre}</h5>
                    <p class="card-text font-mono">A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
                    <button className={tagClass} disabled>React JS</button>
                    <br className='mb-5'/>
                    <a href="#" className={btnClass}>GitHub<BsGithub
                    size={30}
                    style={{cursor: "pointer"}}
                    className='inline-block ml-2 p-0.5' /></a>
                    <a href="#" className={btnClass}>Live Demo<FaShare
                    size={30}
                    style={{cursor: "pointer"}}
                    className='inline-block ml-2 p-0.5'/></a>
                </div>
            </div>
        </div>
    );
}

const btnClass = "bg-transparent hover:bg-green-600 text-green-600 font-bold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded mx-2"

const tagClass = "bg-transparent text-gray-700 font-semibold py-2 px-4 drop-shadow mx-2"
export default ProjectsPage;