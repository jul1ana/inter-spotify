import Image from "next/image";
import { GoHomeFill, GoSearch } from "react-icons/go";
import { VscLibrary } from "react-icons/vsc";
import { TbChevronRight, TbChevronLeft } from "react-icons/tb";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
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
                <a
                  href=""
                  className="text-sm text-zinc-400 hover:text-zinc-100"
                >
                  Playlist 1
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="text-sm text-zinc-400 hover:text-zinc-100"
                >
                  Playlist 1
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="text-sm text-zinc-400 hover:text-zinc-100"
                >
                  Playlist 1
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="text-sm text-zinc-400 hover:text-zinc-100"
                >
                  Playlist 1
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="text-sm text-zinc-400 hover:text-zinc-100"
                >
                  Playlist 1
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="space-x-4">
            <button className="p-1 rounded-full bg-black/40">
              <TbChevronLeft size={19} />
            </button>

            <button className="p-1 rounded-full bg-black/40">
              <TbChevronRight size={19} />
            </button>
          </div>

          <h1 className="mt-8 text-3xl font-semibold">Good Music</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="flex items-center gap-4 bg-white/10 rounded overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum da indústria musical Taylor Swift"
              />
              <strong>Red (Taylor´s Version)</strong>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 bg-white/10 rounded overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum da indústria musical Taylor Swift"
              />
              <strong>Red (Taylor´s Version)</strong>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 bg-white/10 rounded overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum da indústria musical Taylor Swift"
              />
              <strong>Red (Taylor´s Version)</strong>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 bg-white/10 rounded overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum da indústria musical Taylor Swift"
              />
              <strong>Red (Taylor´s Version)</strong>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 bg-white/10 rounded overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum da indústria musical Taylor Swift"
              />
              <strong>Red (Taylor´s Version)</strong>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 bg-white/10 rounded overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do álbum da indústria musical Taylor Swift"
              />
              <strong>Red (Taylor´s Version)</strong>
            </a>
          </div>
        </main>
      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
