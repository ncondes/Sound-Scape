import { AuthModal } from '@/components/auth/AuthModal'
import { Header } from '@/components/header/Header'
import { useCheckout } from '@/hooks'
import { AppRouter } from '@/router/AppRouter'

function App () {
  const { isLoading } = useCheckout()

  return (
    <>
      {!isLoading
        ? (
          <>
            <Header />
            <AuthModal />
            <AppRouter />
          </>
          )
        : null}
    </>
  )
}

export default App
