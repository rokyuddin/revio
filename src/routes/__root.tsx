import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'
import appCss from '../styles.css?url'
import type { QueryClient } from '@tanstack/react-query'

import { Link } from '@tanstack/react-router'
import { FileQuestion, Home, ArrowLeft } from 'lucide-react'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Revio - AI Customer Review Analysis' },
      { name: 'description', content: 'Turn customer feedback into competitive advantage with AI-powered review analysis.' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function NotFound() {
  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-8 p-4 rounded-3xl bg-slate-900 shadow-2xl border border-slate-800 animate-bounce">
        <FileQuestion className="w-16 h-16 text-cyan-500" />
      </div>
      <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">404 - Lost in the Feedback?</h1>
      <p className="text-slate-400 text-lg max-w-md mb-10">
        We couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-cyan-600/20"
        >
          <Home className="w-5 h-5" />
          Go Home
        </Link>
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-2xl transition-all border border-slate-800"
        >
          <ArrowLeft className="w-5 h-5" />
          Go Back
        </button>
      </div>
    </div>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#020617] antialiased">
        {children}
        <TanStackDevtools
          config={{ position: 'bottom-right' }}
          plugins={[
            {
              name: 'TanStack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
