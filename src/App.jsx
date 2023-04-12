import { useSelector } from 'react-redux'
import { AuthModal } from './components/auth'
import { Header } from './components/header'

function App() {
   const showAuthModal = useSelector((state ) => state.modal.isOpen)
   console.log(modalLayout)
   return (
      <>
         <Header />
         {showAuthModal && <AuthModal />}
      </>
   )
}

export default App
