"use-client"

import { FC, useState } from 'react'
import Button, { buttonVarients } from './ui/Button';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn('google')
    } catch(error: any){ 
      // toast({
      //   title: 'error sigining in',
      //   message: 'please try again',
      //   type: 'error'
      // })
      toast.error('message', error.message);
    }
  }
  return <Button onClick={signInWithGoogle} className={buttonVarients({variant: 'ghost', size: 'default'})} isLoading={isLoading}>Sgin In</Button>
}

export default SignInButton