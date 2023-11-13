import RootLayout from '@/app/layout'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

import LayoutType from '@/types/layout'


export default function Layout({children}: LayoutType ) {
  return (
    <RootLayout>
      <Header />
      <main>{children}</main>      
      <Footer/>  
    </RootLayout>
  )
}