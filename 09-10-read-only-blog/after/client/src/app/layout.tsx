import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Basic Title"
}


const RootLayout = ({ children }: {
  children: Readonly<ReactNode>
}) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
export default RootLayout