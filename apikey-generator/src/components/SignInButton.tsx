"use-client"

import { FC, useState } from 'react'
import Button, { buttonVarients } from './ui/Button';
import { signIn } from 'next-auth/react';
import { toast } from './ui/Toast';

interface SignInButtonProps {
  onSubmit: () => void;
  isLoading: boolean;
}

const SignInButton: FC<SignInButtonProps> = ({onSubmit, isLoading}) => {

  // const signInWithGoogle = async () => {
  //   setIsLoading(true);

  //   try {
  //     await signIn('google')
  //   } catch(error: any){ 
  //     toast({
  //       title: 'Error Signingn In',
  //       message: 'please try again later',
  //       type: 'error',
  //     })
  //   }
  // }
  return <Button onClick={onSubmit} className={buttonVarients({variant: 'ghost', size: 'default'})} isLoading={isLoading}>Sgin In</Button>
}

export default SignInButton