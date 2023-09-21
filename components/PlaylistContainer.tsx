import { PlaylistCard } from './PlaylistCard';

interface PlaylistContainer {
  title: string;
  data: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[];
}

const PlaylistContainer = ({ title, data }: PlaylistContainer) => {
  return (
    <section className='flex flex-col gap-4'>
      <div className='flex justify-between'>
        <span className='text-white font-bold text-xl'>{title}</span>
        <span className='text-sm text-spotify-gray3'>Show all</span>
      </div>
      <div className='flex justify-around'>
        {data.map((item) => {
          return (
            <PlaylistCard
              key={item.id}
              description={item.description}
              image={item.image}
              title={item.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export { PlaylistContainer };
