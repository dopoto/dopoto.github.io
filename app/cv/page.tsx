import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 md:space-y-5">
        <h1 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          My CV
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400"></p>
      </div>
      <div className="container flex flex-col gap-4 py-12">
        <span>Download the latest version of my CV, in PDF format.</span>

        <Link
          className="w-[140px] rounded-md bg-gray-500 p-4 text-center text-white"
          href="/static/pdf//static/pdf/CV-Dorin-Potorac-Front-End-Developer-2025-06-27.pdf"
          download={true}
        >
          Download
        </Link>
      </div>
    </div>
  )
}
