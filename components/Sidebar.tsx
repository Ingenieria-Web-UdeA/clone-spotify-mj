import { IconLink } from './IconLink';
import {
  MdHomeFilled,
  MdSearch,
  MdOutlineSavedSearch,
  MdOutlineHome,
  MdVerticalSplit,
} from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { Card } from './Card';
import { SpotifyLogo } from './SpotifyLogo';

const Sidebar = () => {
  return (
    <aside className='w-[450px] p-2 flex flex-col gap-2'>
      <div className='dark-card flex flex-col gap-4'>
        <div className='px-1'>
          <SpotifyLogo />
        </div>
        <IconLink
          isActive
          text='Home'
          ActiveIcon={MdHomeFilled}
          InactiveIcon={MdOutlineHome}
        />
        <IconLink
          text='Search'
          ActiveIcon={MdOutlineSavedSearch}
          InactiveIcon={MdSearch}
        />
      </div>
      <div className='h-full dark-card flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 text-mid-gray hover:text-white hover:cursor-pointer'>
            <MdVerticalSplit className='text-2xl ' />
            <span className='font-semibold '>Your library</span>
          </div>
          <div className='hover:bg-slate-900 rounded-full p-1 cursor-pointer'>
            <AiOutlinePlus />
          </div>
        </div>
        <Card
          title='Create your first playlist'
          description='It`s easy, we`ll help you'
          buttonText='Create playlist'
        />
        <Card
          title='Let`s find some podcasts to follow'
          description='We`ll keep you updated on new episodes'
          buttonText='Browse podcasts'
        />
      </div>
    </aside>
  );
};

export { Sidebar };
