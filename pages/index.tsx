import { Navbar } from '@/components/Navbar';
import { PlaylistContainer } from '@/components/PlaylistContainer';
import { Sidebar } from '@/components/Sidebar';

const Home = () => {
  return (
    <div className='bg-black h-screen flex text-white'>
      <Sidebar />
      <main className='w-full p-2 h-full flex flex-col'>
        <Navbar />
        <div className='px-5 py-1 bg-gradient-to-br from-spotify-gray2 to-spotify-black4 h-full flex flex-col rounded-md gap-6'>
          <PlaylistContainer title='Spotify Playlists' />
          <PlaylistContainer title='Focus' />
        </div>
        <footer></footer>
      </main>
    </div>
  );
};

export default Home;
