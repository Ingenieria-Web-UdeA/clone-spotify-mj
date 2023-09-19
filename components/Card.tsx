import { Button } from './Button';

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
}

const Card = ({ title, description, buttonText }: CardProps) => {
  return (
    <div className='flex flex-col bg-dark-gray items-start p-4 rounded-lg gap-3'>
      <span className='font-semibold text-lg'>{title}</span>
      <span className='text-md'>{description}</span>
      <Button type='secondary' text={buttonText} />
    </div>
  );
};

export { Card };
