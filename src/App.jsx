import { AuthModal } from './components/auth'
import { Header } from './components/header'
import { Introduction } from './components/introduction'
import { SongList } from './components/songs/list'
import { useCheckout } from './hooks/useCheckout'

function App() {
   const status = useCheckout()

   return (
      <>
         <Header />
         <AuthModal />
         <Introduction />
         {status === 'authenticated' ? <SongList /> : null}
      </>
   )
}

export default App
