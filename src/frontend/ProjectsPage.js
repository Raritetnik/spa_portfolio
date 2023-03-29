import { BsGithub } from 'react-icons/bs';
import { FaShare } from 'react-icons/fa';
import { useState, useEffect } from 'react'


const ProjectsPage = () => {
    const [liste, setListe] = useState((<></>));

    useEffect(()=>  {
        const getProjects = async () => {
            const data = await fetchProjets();
            showProjects(data);
        }
        getProjects();
        console.log('Call twice');
    }, []);

    const showProjects = (data) => {
        console.log(data);
        setListe(data.map((projet, i) => (<CarteProjet carteInfo={projet} key={i}/>)));
    }

    const fetchProjets = async () => {
        const res = await fetch(`https://mk-json-server.vercel.app/projets`)
        const data = await res.json()
        return data;
    };

    return(
        <div className="block">
            <header className="container md:mx-auto px-20">
                <h2 className="text-green-600 text-2xl font-bold m-2 pb-5" >Projets Personnels</h2>
                <div className='grid gap-10'>
                    {liste}
                </div>
            </header>
        </div>
    );
}


const CarteProjet = ({carteInfo}) => {
    return (
        <article className="border-2 border-green-600 rounded-md lg:grid lg:grid-cols-5 lg:gap-2 p-10">
            <header className='flex justify-center col-span-3'>
                <img src={carteInfo.urlImage}
                style={{ maxHeight: 250, objectFit: 'cover', objectPosition: "50%"}}
                className="card-img-left" alt="" />
            </header>
            <main className='col-span-2'>
                <div className="">
                    <h5 className="card-title text-lg pb-3">{carteInfo.title}</h5>
                    <p className="card-text font-mono">{carteInfo.description}</p>
                    {(carteInfo.tags).map((tag, i) => (<button className={tagClass} key={i} disabled>{tag}</button>) )}
                    <br className='mb-5'/>
                    <a href={carteInfo.urlGit} className={btnClass}>GitHub<BsGithub
                    size={30}
                    style={{cursor: "pointer"}}
                    className='inline-block ml-2 p-0.5' /></a>
                    <a href={carteInfo.urlDemo} className={btnClass}>Live Demo<FaShare
                    size={30}
                    style={{cursor: "pointer"}}
                    className='inline-block ml-2 p-0.5'/></a>
                </div>
            </main>
        </article>
    );
}

const btnClass = "bg-transparent hover:bg-green-600 text-green-600 font-bold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded mx-2"

const tagClass = "bg-transparent text-gray-700 font-semibold py-2 px-4 drop-shadow m-2"
export default ProjectsPage;
