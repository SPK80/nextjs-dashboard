'use client';

import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateInvoice } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import CustomerFormItem from '@/app/ui/invoices/customerFormItem';
import AmountFormItem from '@/app/ui/invoices/amountFormItem';
import StatusFormItem from '@/app/ui/invoices/statusFormItem';
import FormMessage from '@/app/ui/invoices/formMessage';

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const initialState = { message: null, errors: {} };
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  const [state, dispatch] = useFormState(updateInvoiceWithId, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <CustomerFormItem
          customers={customers}
          errors={state.errors?.customerId}
          defaultValue={invoice.customer_id}
        />

        {/* Invoice Amount */}
        <AmountFormItem
          errors={state.errors?.amount}
          defaultValue={invoice.amount}
        />

        {/* Invoice Status */}
        <StatusFormItem
          errors={state.errors?.status}
          defaultValue={invoice.status}
        />

        <FormMessage message={state.message} />
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Invoice</Button>
      </div>
    </form>
  );
}
