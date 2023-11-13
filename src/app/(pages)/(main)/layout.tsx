import RootLayout from '@/app/layout'
import Header from '@/components/layout/header'

import LayoutType from '@/types/layout'


export default function Layout({children}: LayoutType ) {
  return (
    <RootLayout>
      <Header />
      <main>{children}</main>      
    </RootLayout>
  )
}