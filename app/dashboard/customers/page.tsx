import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import { fetchCustomers } from '@/app/lib/data';
import Customer from '@/app/ui/customer';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Customers',
};

const Page = async () => {
  const customers = await fetchCustomers(true);
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Customers
      </h1>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {customers.map((customer, index) => (
            <div
              key={customer.id}
              className={clsx(
                'flex flex-row items-center justify-between py-4',
                {
                  'border-t': index !== 0,
                },
              )}
            >
              <Customer data={customer} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
