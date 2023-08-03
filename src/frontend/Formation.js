const Formation = () => {
    return(
        <div className="block">
            <main className='flex-col container lg:mx-auto px-20 flex lg:flex-row lg:justify-between md:text-center gap-7 items-center'>
                <div className='w-full lg:max-w-2xl'>
                    <header className="container md:mx-auto">
                        <h2 className="text-green-600 text-2xl font-bold m-2 text-left" >Formation</h2>
                    </header>
                    <div className='border-b-2 py-2 border-green-600'>
                        <div key="" className='w-full text-md font-bold text-left'>
                            <span className='px-7'>AEC</span>
                            <span className='px-7 self-end'>Conception et programmation des sites WEB</span>
                        </div>
                        <div key="" className='w-full flex justify-between font-mono text-gray-600'>
                            <span className='px-7'>Cégep de Maisonneuve, Montréal</span>
                            <span className='px-7'>02.2022 - 06.2023</span>
                        </div>
                    </div>

                    <div className='border-b-2 py-2 border-green-600'>
                        <div key="" className='w-full text-left text-md font-bold '>
                            <span className='px-7'>DEC</span>
                            <span className='px-7 self-end'>Développement d’application WEB et mobile</span>
                        </div>
                        <div key="" className='w-full flex justify-between font-mono text-gray-600'>
                            <span className='px-7'>Collège de Rosemont, Montréal </span>
                            <span className='px-7'>01.2018 – 06.2021</span>
                        </div>
                    </div>

                    <div className='py-2'>
                        <div key="" className='w-full text-left text-md font-bold'>
                            <span className='px-7'>DES</span>
                            <span className='px-7 self-end'>Études générales</span>
                        </div>
                        <div key="" className='w-full flex justify-between font-mono text-gray-600'>
                            <span className='px-7'>École Marie-Anne, Montréal </span>
                            <span className='px-7'>01.2016 – 08.2017</span>
                        </div>
                    </div>
                </div>
                <div className="img_about rounded d-block">
                    <img src="https://cdn-icons-png.flaticon.com/512/4696/4696777.png"
                    alt="About icon"
                    style={{ width: 400, height: 400, objectFit: 'contain', objectPosition: "50%"}}
                    className='rounded-lg mx-auto' />
                </div>
            </main>
        </div>
    );
}
export default Formation;