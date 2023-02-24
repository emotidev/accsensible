import 'kresco/styles/tailwind.css'

import * as React from 'react'
import { NavigationMenu, BaseLayout } from 'kresco/esm/src'
import { Poppins } from '@next/font/google'
import Link from 'next/link'

const poppins = Poppins ({
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin-ext'],
  variable: '--font-poppins'
})

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <BaseLayout className={poppins.variable}>
      <NavigationMenu.Root>
        <NavigationMenu.Item>
          <Link href="/" className="text-lg font-bold">
            Accsensible
          </Link>
        </NavigationMenu.Item>
        <div className="hidden md:flex space-x-4">
          <NavigationMenu.Item>
            <Link href="https://github.com/krshkun/accsensible">Github</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              Made with ❤️ by @krshkun
            </NavigationMenu.Trigger>
            <NavigationMenu.Content direction="bottom-right">
              <ul className="flex flex-col">
                <NavigationMenu.Link href="https://twitter.com/krshkun">
                  Twitter
                </NavigationMenu.Link>
                <NavigationMenu.Link href="https://github.com/krshkun">
                  GitHub
                </NavigationMenu.Link>
                <NavigationMenu.Link href="https://www.linkedin.com/in/krshkun/">
                  LinkedIn
                </NavigationMenu.Link>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </div>
        <div className="md:hidden">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Menu</NavigationMenu.Trigger>
            <NavigationMenu.Content direction="bottom-right">
              <ul className="flex flex-col space-y-2">
                <NavigationMenu.Link href="https://github.com/krshkun/accsensible">
                  View source code
                </NavigationMenu.Link>
                <ul className="flex flex-col px-2">
                  <h4 className="text-lg font-bold">
                    Made with ❤️ by @krshkun
                  </h4>
                  <NavigationMenu.Link href="https://twitter.com/krshkun">
                    Twitter
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href="https://github.com/krshkun">
                    GitHub
                  </NavigationMenu.Link>
                  <NavigationMenu.Link href="https://www.linkedin.com/in/krshkun/">
                    LinkedIn
                  </NavigationMenu.Link>
                </ul>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </div>
      </NavigationMenu.Root>
      {children}
    </BaseLayout>
  )
}
