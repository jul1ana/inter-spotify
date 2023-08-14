import Image from "next/image";
import { GoHomeFill, GoSearch } from "react-icons/go";
import { VscLibrary } from "react-icons/vsc";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div></div>

          <nav>
            <ul className="space-y-4">
              <li>
                <a
                  href=""
                  className="flex items-center gap-3 text-sm font-semibold"
                >
                  <GoHomeFill size={24} />
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex items-center gap-3 text-sm font-semibold"
                >
                  <GoSearch size={24} />
                  Search
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex items-center gap-3 text-sm font-semibold"
                >
                  <VscLibrary size={24} />
                  Your Library
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="flex-1 p-6">main</main>
      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
