import { Tabs } from '@radix-ui/react-tabs'
import { FC } from 'react'
import { TabsContent, TabsList, TabsTrigger } from './ui/Tabs'
import SimpleBar from 'simplebar-react';
import Code from './Code';
import { nodejs, python } from '@/helpers/documentation-code';

const DocumentationTabs: FC = ({}) => {
  return <main className='max-w-2xl w-full'>
    <Tabs defaultValue='nodejs' className='max-w-2xl w-full'>
      <TabsList>
        <TabsTrigger value='nodejs'>Node JS</TabsTrigger>
        <TabsTrigger value='python'>Python</TabsTrigger>
      </TabsList>
      <TabsContent value='nodejs'>
        <SimpleBar>
          <Code animated code={nodejs} show={true} language={'javascript'} />
        </SimpleBar>
      </TabsContent>
      <TabsContent value='python'>
        <SimpleBar>
          <Code animated code={python} show={true} language={'python'} />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  </main>
}

export default DocumentationTabs