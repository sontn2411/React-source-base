import { Outlet, Link } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 font-sans'>
      <header className='bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <h1 className='text-xl font-bold text-indigo-600 dark:text-indigo-400'>
              My App
            </h1>
            <nav className='flex gap-4 ml-6'>
              <Link
                to='/'
                className='text-gray-600 dark:text-gray-300 hover:text-indigo-600 font-medium'
              >
                Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Render child components based on Route */}
        <Outlet />
      </main>
    </div>
  )
}
