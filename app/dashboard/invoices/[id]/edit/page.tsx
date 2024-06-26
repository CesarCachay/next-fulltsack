// vendors
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// components
import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

// utils
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Edit Invoice Page',
};

export default async function Page({ params }: { params: { id: string } }) {
  // get id by params
  const id = params.id;

  // parallel fetch
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
