import type { FallbackProps } from 'react-error-boundary'
import { AlertTriangle, RefreshCcw } from 'lucide-react'

export default function GlobalErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <div className='min-h-[400px] flex items-center justify-center p-4'>
      <div className='max-w-md w-full bg-red-50/50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/50 rounded-xl p-6 shadow-sm text-center'>
        <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-4'>
          <AlertTriangle className='w-6 h-6' />
        </div>

        <h2 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2'>
          Oops! Something went wrong
        </h2>

        <p className='text-sm text-gray-600 dark:text-gray-400 mb-4'>
          An unexpected error occurred. Please try again.
        </p>

        {/* Only show error details in dev environment for security */}
        {import.meta.env.DEV && (
          <div className='bg-white dark:bg-gray-800 rounded p-3 mb-4 text-left overflow-auto border border-red-100 dark:border-red-900/30'>
            <pre className='text-xs text-red-600 dark:text-red-400 font-mono'>
              {error instanceof Error ? error.message : String(error)}
            </pre>
          </div>
        )}

        <button
          onClick={resetErrorBoundary}
          className='inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900'
        >
          <RefreshCcw className='w-4 h-4' />
          <span>Try again</span>
        </button>
      </div>
    </div>
  )
}
