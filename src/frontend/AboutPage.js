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
                    <p className="font-mono">En tant que développeur Front-End et Back-End junior, je possède un arsenal impressionnant de compétences en HTML, CSS, JavaScript, React, Next.JS, Node.JS, Bootstrap, Laravel, PHP, Java, RESTful API, Tailwind CSS et SCSS. J'excelle dans la conception et la maintenance de sites Web réactifs offrant une expérience utilisateur fluide. Mon expertise réside dans la création d'interfaces dynamiques et engageantes en écrivant un code propre et optimisé et en utilisant des outils et techniques de développement de pointe. Je fait, également, partie du groupe qui prospère dans la collaboration avec des équipes pluridisciplinaires pour produire des applications Web exceptionnelles.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;