import { FC } from 'react'
import { Metadata } from 'next';
import LargeHeading from '@/components/ui/LargeHading';
import Paragraph from '@/components/ui/Paragraph';
import DocumentationTabs from '@/components/DocumentationTabs';

import 'simplebar-react/dist/simplebar.min.css'

export const metaData: Metadata = {
  title: 'Similarity api | Documentation',
  description: 'Free and open source text similarity API'
}

const index: FC = ({}) => {
  return <div className='container max-w-7xl mx-auto'>
    <div className='flex flex-col items-center justify-center gap-6'>
      <LargeHeading className=''>Making a request</LargeHeading>
      <Paragraph>api/v1/similarity</Paragraph>

      <DocumentationTabs />
    </div>
  </div>
}

export default index