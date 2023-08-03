import {BsLinkedin, BsGithub} from 'react-icons/bs';

import {Link} from 'react-router-dom';

const HomePage = () => {

  return (
    <section className="block">
        <div
          className="container mx-auto px-20 flex flex-col items-center mt-16 lg:flex-row lg:justify-between">
            <article style={{
              maxWidth: 400
              }} className='d-block relative'>
              <h1 className="text-3xl font-black pb-4">Front-End et Back-End Développeur</h1>
              <p className="text-gray-500 pb-4 font-mono">Je m'appelle Mykhaylo Kuzmin, je suis concepteur et programmeur de sites web. Je suis originaire d'Ukraine et j'habite actuellement à Montréal, au Canada.</p>
              <small className='flex '>
                <Link to='https://github.com/Raritetnik'><BsGithub
                  size={30}
                  style={{
                    marginRight: 20,
                    cursor: "pointer"
                  }}/></Link>
                <Link to='https://www.linkedin.com/in/raritetnik/'><BsLinkedin
                  size={30}
                  style={{
                    marginRight: 20,
                    cursor: "pointer"
                  }}/></Link>
              </small>
            </article>
        <div className="mt-5 object-cover">
          {/*<img src="https://cdn-icons-png.flaticon.com/512/1995/1995515.png" style={{ width: 400, height: 400}}/>*/}
          <img
            src="./assets/profile_img_2.jpg"
            className='animate-pulse object-cover'
            style={{
            width: 400,
            height: 400,
            objectPosition: '50% 70%',
            animation: 'wave-block 5s linear infinite',
            border: '2px solid var(--color__title)'
          }} alt='Profile'/>
        </div>
      </div>
    </section>
  );
}

export default HomePage;