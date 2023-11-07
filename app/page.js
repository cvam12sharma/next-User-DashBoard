import Image from 'next/image'
import Header from './components/header'
import TopCards from './components/TopCards'
import BarChart from './components/BarChart'

import { RecentOrder } from './components/RecentOrder'

export default function Home() {
  return (
     <div className=' bg-gray-200  min-h-screen'>
    <Header/>
    <TopCards/>

    <div className='p-10 grid  mx-20 md:grid-cols-3 grid-cols-1 gap-4'>
      <BarChart/>
     <RecentOrder/>
    </div>
    </div>
    
  )
}
