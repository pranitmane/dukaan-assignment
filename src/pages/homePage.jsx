import {Link} from 'react-router-dom';
export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="text-Black30 fixed bottom-4 p-4">
            <p>
            Hello I'm <a className='hover:text-Blue underline' target='blank' href="https://twitter.com/pranitbmane">Pranit</a>,  
            </p>
            <p>
            As a third year Computer Engineering student I am looking for Internship role, and what better place to work than with the amazing team at <a className='underline hover:text-Blue' target='blank' href="https://mydukaan.io">Dukaan</a>, It would be a great learning experience for me to work on real life challenges.
            </p>
            </div>
            <div className='flex flex-row gap-2'>
                <p>Visit</p>
            <Link className='text-Blue underline' to="/payments">Payments</Link>
            </div>
        </div>
    )
}