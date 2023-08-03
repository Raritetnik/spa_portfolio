const AboutPage = () => {
    return(
        <div className="block">
            <div className="flex-col container lg:mx-auto px-20 flex lg:flex-row lg:justify-between md:text-center">
                <div className="img_about rounded d-block sm:pb-3 md:mb-6 lg:mr-10">
                    <img src="https://i.ibb.co/FWWGLxL/coding-gif-designs-themes-templates-and-downloadable-graphic-elements-on-dribbble.gif"
                    alt="About icon"
                    style={{ width: 500, height: 350, objectFit: 'cover', objectPosition: "50%"}}
                    className='rounded-lg mx-auto' />
                </div>
                <div className="about md:flex-col md:justify-center text-center max-w-none lg:max-w-md lg:text-left">
                    <h2 className="text-green-600 text-xl font-bold mb-3">À propos de moi</h2>
                    <h3 className="mb-3 font-bold text-xl">Concepteur et Programmeur de Sites WEB</h3>
                    <p className="font-mono">En tant que développeur Full Stack junior, je possède un large éventail de compétences en programmation et conception. Mon expertise se concentre sur la création de sites Web réactifs offrant une expérience utilisateur fluide et immersive. Je suis passionné par l'écriture de code propre et optimisé, et je suis constamment à la recherche de nouvelles technologies pour améliorer mes compétences. Mon objectif est de contribuer à des projets excitants et d'apporter ma créativité pour créer des expériences en ligne exceptionnelles. J'ai hâte de faire partie de votre équipe et de relever de nouveaux défis en tant que développeur Full Stack.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;