'use client';

const FormMessage = ({ message }: { message?: string | null | undefined }) => {
  if (!message) return null;
  return (
    <div id="form-error" aria-live="polite" aria-atomic="true">
      <p className="mt-2 text-sm text-red-500">{message}</p>
    </div>
  );
};

export default FormMessage;
