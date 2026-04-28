import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ErrorBoundary } from 'react-error-boundary'
import { router } from '@/routes'
import GlobalErrorFallback from '@/components/GlobalErrorFallback'
import '@/styles/App.css'

// Initialize QueryClient with default configs
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Disable automatic refetch on window focus
      retry: 1, // Number of retries when API fails
    },
  },
})

function App() {
  return (
    <ErrorBoundary fallbackRender={GlobalErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default App
