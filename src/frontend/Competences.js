import { FaReact, FaHtml5, FaCss3Alt, FaPhp, FaJava, FaNodeJs, FaBootstrap, FaWordpress, FaFigma, FaVuejs } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { TbApi } from 'react-icons/tb'
import { SiTailwindcss, SiNextdotjs, SiMysql, SiAdobe, SiMicrosoftoffice, SiCsharp } from 'react-icons/si'

export default function Competences() {
    const icons = [
        [<FaHtml5 size={40} className='p-1 hover:text-white'/>, 'HTML5'],
        [<FaCss3Alt size={40} className='p-1 hover:text-white'/>, 'CSS3'],
        [<SiTailwindcss size={40} className='p-1 hover:text-white' />, 'Tailwind CSS'],
        [<FaBootstrap size={40} className='p-1 hover:text-white' />, 'Bootstrap'],
        [<IoLogoJavascript size={40} className='p-1 hover:text-white' />, 'JavaScript'],
        [<FaNodeJs size={40} className='p-1 hover:text-white' />, 'Node JS'],
        [<FaReact size={40} className='p-1 hover:text-white' />, 'React JS'],
        [<SiNextdotjs size={40} className='p-1 hover:text-white' />, 'Next JS'],
        [<FaVuejs size={40} className='p-1 hover:text-white' />, 'Vue JS'],
        [<FaPhp size={40} className='p-1 hover:text-white' />, 'PHP'],
        [<TbApi size={40} className='p-1 hover:text-white' />, 'RESTful API'],
        [<FaJava size={40} className='p-1 hover:text-white' />, 'Java'],
        [<FaWordpress size={40} className='p-1 hover:text-white' />, 'WordPress'],
        [<FaFigma size={40} className='p-1 hover:text-white' />, 'Figma'],
        [<SiAdobe size={40} className='p-1 hover:text-white' />, 'Adobe Products'],
        [<SiMicrosoftoffice size={40} className='p-1 hover:text-white' />, 'Microsoft Office'],
        [<SiMysql size={40} className='p-1 hover:text-white' />, 'MySQL'],
        [<SiCsharp size={40} className='p-1 hover:text-white' />, 'С#'],
      ]
    const coin = (icon, i) => {
        return(
        <div className='relative medaillon' key={i}>
            <div className="relative p-1 border-2 rounded-full border-green-600 hover:bg-green-600" >{icon[0]}</div>
            <p className='info absolute top-14 left-0 text-center' style={{ width: "100px", transform: 'translateX(-25%)' }}>{icon[1]}</p>
        </div>
        );
    }

    return (
        <div className='flex flex-col justify-center items-center mx-7'>
            <header className="container md:mx-auto text-center">
                <h2 className="text-green-600 text-2xl font-bold m-2" >Compétences</h2>
            </header>
            <main className='p-15 my-5 gap-4 gap-y-14 flex flex-wrap justify-center'>
                {icons.map((icon, i) => (coin(icon, i))) }
            </main>
        </div>
    );
}