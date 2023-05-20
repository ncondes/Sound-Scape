import { AuthModal } from './components/auth'
import { Header } from './components/header'
import { useCheckout } from './hooks'
import { AppRouter } from './router/AppRouter'

function App() {
   const { isLoading } = useCheckout()

   return (
      <>
         {!isLoading ? (
            <div className="flex flex-col h-screen">
               <Header />
               <AuthModal />
               <AppRouter />
            </div>
         ) : null}
      </>
   )
}

export default App
