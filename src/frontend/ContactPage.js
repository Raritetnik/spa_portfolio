import { BsTelephone, BsMailbox, BsPinMap } from 'react-icons/bs';
import { useState } from 'react';
const ContactPage = () => {

    const [nom, setNom] = useState('')
    const [contact, setContact] = useState('')
    const [titre, setTitre] = useState(0)
    const [message, setMessage] = useState("")

    const saveMessage = (e) =>  {
        e.preventDefault();
        const saveIt = async () => {
            const res = await fetch(`https://mk-json-server.vercel.app/message`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({nom, contact, titre, message})
            })
            const data = await res.json()
            return data;
        };
        saveIt();
    }

    return(
        <div className="block">
            <div className="container md:mx-auto px-20">
                <div className='w-full hidden flex-col items-center'>
                    <h2 className="text-green-600 text-2xl font-bold m-2 pb-5">Contactez-moi</h2>
                    <form className='w-full lg:w-2/3 flex flex-col mb-8' onSubmit={saveMessage}>
                        <div className='w-full flex mb-4 gap-x-4'>
                            <input type="text" placeholder='Nom complet' className='w-full border-2 border-green-600 py-2 px-2 rounded-md'
                                onChange={e => setNom(e.target.value)} disabled/>
                            <input type="text" placeholder='Courriel ou Téléphone' className='w-full  border-2 border-green-600 py-2 px-2 rounded-md'
                                onChange={e => setContact(e.target.value)} disabled/>
                        </div>
                        <input type="text" className='py-2 px-2 mb-4 border-2 border-green-600 rounded-md' placeholder='Sujet de contacte'
                            onChange={e => setTitre(e.target.value)} disabled/>
                        <textarea cols="30" rows="10" className='p-2 mb-4 border-2 border-green-600 rounded-md' placeholder='Votre message'
                            onChange={e => setMessage(e.target.value)} disabled></textarea>
                        <input type="submit" value='Envoyer le message'
                            className='px-4 py-2 mx-auto w-200 border-2 border-green-600 rounded-full hover:bg-green-600 hover:text-white'/>
                    </form>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between">
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