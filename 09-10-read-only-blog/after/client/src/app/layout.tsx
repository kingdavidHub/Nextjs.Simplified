import { Metadata } from "next";
import { ReactNode } from "react";
import "./styles.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Readonly Blog",
};

const RootLayout = ({ children }: { children: Readonly<ReactNode> }) => {
  return (
    <html lang="en">
      <body>
        <nav className="top-nav">
          <div className="nav-text-large">My App</div>
          <ul className="nav-list">
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/users">Users</Link>
            </li>
            <li>
              <Link href="/todos">Todos</Link>
            </li>
          </ul>
        </nav>
        <div className="container">{children}</div>
      </body>
    </html>
  );
};
export default RootLayout;
