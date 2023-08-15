import { GoHomeFill, GoSearch } from "react-icons/go";
import { VscLibrary } from "react-icons/vsc";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      <nav className="mt-7">
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

      <nav className="mt-7 pt-7 border-t border-zinc-800">
        <ul className="space-y-2">
          <li>
            <a href="">Playlist 1</a>
          </li>

          <li>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 1
            </a>
          </li>

          <li>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 1
            </a>
          </li>

          <li>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 1
            </a>
          </li>

          <li>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 1
            </a>
          </li>

          <li>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 1
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
