'use client';

import { useFormState } from 'react-dom';
import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createInvoice } from '@/app/lib/actions';
import CustomerFormItem from '@/app/ui/invoices/customerFormItem';
import AmountFormItem from '@/app/ui/invoices/amountFormItem';
import StatusFormItem from '@/app/ui/invoices/statusFormItem';
import FormMessage from '@/app/ui/invoices/formMessage';

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createInvoice, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <CustomerFormItem
          customers={customers}
          errors={state.errors?.customerId}
        />

        {/* Invoice Amount */}
        <AmountFormItem errors={state.errors?.amount} />

        {/* Invoice Status */}
        <StatusFormItem errors={state.errors?.status} />

        <FormMessage message={state.message} />
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
}
