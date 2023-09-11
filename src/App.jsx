import { AuthModal } from '@/components/auth/AuthModal'
import { Header } from '@/components/header/Header'
import { useCheckout } from '@/hooks'
import { AppRouter } from '@/router/AppRouter'
import { Alert } from './components/alert/Alert'

function App() {
  const { isLoading } = useCheckout()

  return (
    <>
      {!isLoading ? (
        <>
          <Header />
          <AuthModal />
          <AppRouter />
          <Alert />
        </>
      ) : null}
    </>
  )
}

export default App
