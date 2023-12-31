import { FC, useState } from 'react'
import Button, { buttonVarients } from './ui/Button'
import { signOut } from 'next-auth/react';
import { toast } from './ui/Toast';

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch(error: any){ 
      toast({
        type:'error',
        title: 'error signing out',
        message: error,
      })
    }

  }
  return (
    <Button onClick={handleSignOut} isLoading={isLoading} className={buttonVarients({ variant: 'ghost', size: 'default'})}>Sign Out</Button>
  )
}

export default SignOutButton