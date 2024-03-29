//fonts
// import {Sora} from '@next/font/google'
import { Sora } from 'next/font/google'

//font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

//components
import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'


const Layout = ({ children }) => {
  return (
    <div className={'page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative'}>
      <div className='page bg-black/30 bg-cover bg-no-repeat'>
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
