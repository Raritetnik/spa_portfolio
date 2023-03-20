import { BsTelephone, BsMailbox, BsPinMap } from 'react-icons/bs';

const ContactPage = () => {
    return(
        <div className="block">
            <div className="container md:mx-auto px-20">
                <h2 className="text-green-600 text-2xl font-bold m-2 pb-5">Contactez-moi</h2>
                <div className="lg:grid lg:grid-cols-3 flex-row">
                    <div className="col-4 flex mb-4">
                        <BsPinMap
                        size={65}
                        className='border p-2 border-green-600 rounded-2xl'/>
                        <div className='px-4'>
                            <h4 className='text-lg font-bold'>Localisation</h4>
                            <p>Montréal, QC, Canada</p>
                        </div>
                    </div>
                    <div className="col-4 flex mb-4">
                    <BsMailbox
                        size={65}
                        className='border p-2 border-green-600 rounded-2xl'/>
                        <div className='px-4'>
                            <h4 className='text-lg font-bold'>Courriel</h4>
                            <p>mkodarenko@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-4 flex mb-4">
                        <BsTelephone
                        size={65}
                        className='border p-2 border-green-600 rounded-2xl'/>
                        <div className='px-4'>
                            <h4 className='text-lg font-bold'>Téléphone</h4>
                            <p>(438) 680 - 1683</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;