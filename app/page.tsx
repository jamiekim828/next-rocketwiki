import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <img
          src='https://media.istockphoto.com/id/1346401654/photo/space-shuttle-rocket-launch-in-the-clouds-with-stars-to-outer-space-space-on-background-sky.jpg?b=1&s=170667a&w=0&k=20&c=efBuuK2j-j7MI3DhlYO5W4ytMjfEDLpZDrvOmmW7v90='
          alt='home'
        />
        <div className='text-slate-700 font-bold text-4xl text-center my-5'>
          Search fast from RocketWiki
        </div>
      </div>
    </main>
  );
}
