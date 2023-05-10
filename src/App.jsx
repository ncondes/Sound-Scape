import { AuthModal } from './components/auth'
import { Header } from './components/header'
import { Introduction } from './components/introduction'
import { SongList } from './components/songs/list'
import { useCheckout } from './hooks'

function App() {
   const { status, isLoading } = useCheckout()
   return (
      <>
         {!isLoading ? (
            <>
               <Header />
               <AuthModal />
               <Introduction />
               {status === 'authenticated' ? <SongList /> : null}
            </>
         ) : null}
      </>
   )
}

export default App
