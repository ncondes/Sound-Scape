import { AuthModal } from './components/auth'
import { Header } from './components/header'
import { Introduction } from './components/introduction'
import { SongList } from './components/SongList'

function App() {
   return (
      <>
         <Header />
         <AuthModal />
         <Introduction />
         <SongList />
      </>
   )
}

export default App
