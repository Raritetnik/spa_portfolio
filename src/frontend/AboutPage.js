const AboutPage = () => {
    return(
        <div className="block">
            <div className="container md:mx-auto px-20 flex justify-between">
                <div className="img_about rounded d-block">
                    <img src="https://i.ibb.co/FWWGLxL/coding-gif-designs-themes-templates-and-downloadable-graphic-elements-on-dribbble.gif"
                    alt="About icon"
                    style={{ width: 500, height: 350, objectFit: 'cover', objectPosition: "50%"}}
                    className='rounded-lg mx-auto' />
                </div>
                <div className="about" style={{ maxWidth: 500}}>
                    <h2 className="text-green-600 text-xl font-bold mb-3">ABOUT ME</h2>
                    <h3 className="mb-3 font-bold text-xl">Concepteur et Programmeur de Sites WEB</h3>
                    <p className="font-mono">En tant que développeur Front-End et Back-End junior, je possède un arsenal impressionnant de compétences en HTML, CSS, JavaScript, React, Bootstrap, Laravel, PHP, Java, Rest API et SCSS. J'excelle dans la conception et la maintenance de sites Web réactifs offrant une expérience utilisateur fluide. Mon expertise réside dans la création d'interfaces dynamiques et engageantes en écrivant un code propre et optimisé et en utilisant des outils et techniques de développement de pointe. Je fait, également, partie du groupe qui prospère dans la collaboration avec des équipes pluridisciplinaires pour produire des applications Web exceptionnelles.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;