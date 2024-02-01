import { FC } from 'react';
import { CustomerField } from '@/app/lib/definitions';
import Image from 'next/image';

const Customer: FC<{ data: CustomerField }> = ({ data }) => {
  if (!data) return null;
  return (
    <div className="flex items-center">
      {data.image_url && (
        <Image
          src={data.image_url}
          alt={`${data.name}'s profile picture`}
          className="mr-4 rounded-full"
          width={32}
          height={32}
        />
      )}
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold md:text-base">
          {data.name}
        </p>
        {data.email && (
          <p className="hidden text-sm text-gray-500 sm:block">{data.email}</p>
        )}
      </div>
    </div>
  );
};

export default Customer;
