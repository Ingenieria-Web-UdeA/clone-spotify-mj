import Image from 'next/image';

interface PlaylistCardProps {
  title: string;
  description: string;
}

const PlaylistCard = ({ title, description }: PlaylistCardProps) => {
  return (
    <div className='flex flex-col bg-spotify-black-5 rounded-md w-[192px] p-4 gap-2 hover:cursor-pointer hover:bg-spotify-gray-4'>
      <Image
        className='rounded-md'
        src='/images/tth.jpg'
        height={160}
        width={160}
        alt='Playlist image'
      />
      <span className='text-white font-semibold'>{title}</span>
      <span className='text-mid-gray'>{description}</span>
    </div>
  );
};

export { PlaylistCard };
