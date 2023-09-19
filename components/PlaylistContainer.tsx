import { PlaylistCard } from './PlaylistCard';

interface PlaylistContainer {
  title: string;
}

const PlaylistContainer = ({ title }: PlaylistContainer) => {
  return (
    <section className='flex flex-col gap-4'>
      <div className='flex justify-between'>
        <span className='text-white font-bold text-xl'>{title}</span>
        <span className='text-sm text-spotify-gray3'>Show all</span>
      </div>
      <div className='flex'>
        <PlaylistCard
          title={`Today's Top Hits`}
          description='Jung Kook is on top of the Hottest 50!'
        />
      </div>
    </section>
  );
};

export { PlaylistContainer };
