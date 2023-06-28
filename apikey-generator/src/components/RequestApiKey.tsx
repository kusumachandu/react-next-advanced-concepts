import { FC, FormEvent, useState } from 'react'
import { toast } from './ui/Toast';
import { createApiKey } from '@/helpers/create-api-key';
import { Key } from 'lucide-react';
import LargeHeading from './ui/LargeHading';
import Paragraph from './ui/Paragraph';
import CopyButton from './CopyButton';
import { Input } from './ui/Input';
import Button from './ui/Button';

const RequestApiKey: FC = ({}) => {

  const [isCreating, setIsCreating] = useState(false);
  const [apiKey, setApiKey] = useState<string | null>(null);

  const createNewApiKey = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCreating(true);

    try {
      const generatedApiKey = await createApiKey()
      setApiKey(generatedApiKey);
    } catch (error) {

      if(error instanceof Error) {
        toast({
          title: 'Error',
          message: error.message,
          type: 'error',
        });
        return;
      }
      toast({
        title: "Error",
        message: "something went wrong",
        type: "error",
      })
    } finally {
      setIsCreating(false);
    }
  }

  return <div className='text-slate-900 dark:text-slate-100 container md:max-w-2xl'>
    <div className='flex flex-col gap-6 items-center'>
      <Key className='mx-auto h-12 w-12 text-gray-400' />
      <LargeHeading>Request your api key</LargeHeading>
      <Paragraph>you haven&apos;t requested an api key yet</Paragraph>
    </div>
    <form onSubmit={createNewApiKey} className='mt-6 sm:flex sm:items-center' action="#">
      <div className='relative rounded-md shadow-md sm:min-w-0 sm:flex-1'>
        {apiKey ? (
          <>
            <CopyButton valueToCopy={apiKey} type='button' className="absolute inset-y-0 right-0 animate-in fade-in duration-300" />
          </>
        ) : null}
        <Input value={apiKey ?? ''} readOnly placeholder='Requedst an APi Key to display here' />
      </div>
      <div className='mt-3 sm:mt-0 flex justify-center sm:ml-4 sm:flex-shrink-0'>
        <Button isLoading={isCreating}>Request Key</Button>
      </div>
    </form>
  </div>
}

export default RequestApiKey