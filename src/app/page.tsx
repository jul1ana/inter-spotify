import Image from "next/image";
import { GoHomeFill, GoSearch } from "react-icons/go";
import { VscLibrary } from "react-icons/vsc";
import { TbChevronRight, TbChevronLeft } from "react-icons/tb";
import { ImPlay3 } from "react-icons/im";
import { CiMaximize1 } from "react-icons/ci";
import { MdComputer } from "react-icons/md";
import { HiOutlineQueueList } from "react-icons/hi2";
import { TbRepeat, TbMicrophone2, TbVolume2 } from "react-icons/tb";
import {
  IoIosSkipBackward,
  IoIosShuffle,
  IoIosSkipForward,
} from "react-icons/io";

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

          <section>
            <h1 className="mt-8 text-3xl font-semibold">Good Music</h1>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <a
                href="#"
                className="group flex items-center gap-4 bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/album.jpg"
                  width={104}
                  height={104}
                  alt="Capa do álbum da indústria musical Taylor Swift"
                />
                <strong>Red (Taylor´s Version)</strong>
                <button className="w-12 h-12 pl-1 ml-auto mr-8 flex items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible">
                  <ImPlay3 size={20} />
                </button>
              </a>
              <a
                href="#"
                className="group flex items-center gap-4 bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/album.jpg"
                  width={104}
                  height={104}
                  alt="Capa do álbum da indústria musical Taylor Swift"
                />
                <strong>Red (Taylor´s Version)</strong>
                <button className="w-12 h-12 pl-1 ml-auto mr-8 flex items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible">
                  <ImPlay3 size={20} />
                </button>
              </a>
              <a
                href="#"
                className="group flex items-center gap-4 bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/album.jpg"
                  width={104}
                  height={104}
                  alt="Capa do álbum da indústria musical Taylor Swift"
                />
                <strong>Red (Taylor´s Version)</strong>
                <button className="w-12 h-12 pl-1 ml-auto mr-8 flex items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible">
                  <ImPlay3 size={20} />
                </button>
              </a>
              <a
                href="#"
                className="group flex items-center gap-4 bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/album.jpg"
                  width={104}
                  height={104}
                  alt="Capa do álbum da indústria musical Taylor Swift"
                />
                <strong>Red (Taylor´s Version)</strong>
                <button className="w-12 h-12 pl-1 ml-auto mr-8 flex items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible">
                  <ImPlay3 size={20} />
                </button>
              </a>
              <a
                href="#"
                className="group flex items-center gap-4 bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/album.jpg"
                  width={104}
                  height={104}
                  alt="Capa do álbum da indústria musical Taylor Swift"
                />
                <strong>Red (Taylor´s Version)</strong>
                <button className="w-12 h-12 pl-1 ml-auto mr-8 flex items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible">
                  <ImPlay3 size={20} />
                </button>
              </a>
              <a
                href="#"
                className="group flex items-center gap-4 bg-white/5 rounded overflow-hidden hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/album.jpg"
                  width={104}
                  height={104}
                  alt="Capa do álbum da indústria musical Taylor Swift"
                />
                <strong>Red (Taylor´s Version)</strong>
                <button className="w-12 h-12 pl-1 ml-auto mr-8 flex items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible">
                  <ImPlay3 size={20} />
                </button>
              </a>
            </div>
          </section>

          <section>
            <h2 className="mt-8 text-2xl font-semibold">
              Made for Juliana Dantas
            </h2>

            <div className="grid grid-cols-8 gap-4 mt-4">
              <a
                href="#"
                className="bg-white/5 flex flex-col gap-1 p-3 rounded-md hover:bg-white/10"
              >
                <Image
                  src="/red.jpg"
                  className="w-full"
                  width={120}
                  height={120}
                  alt="Imagem da cantora Taylor Swift"
                />
                <strong className="font-semibold">Daily TS</strong>
                <span className="text-sm text-zinc-500">
                  Taylor Swift and more
                </span>
              </a>

              <a
                href="#"
                className="bg-white/5 flex flex-col gap-1 p-3 rounded-md hover:bg-white/10"
              >
                <Image
                  src="/red.jpg"
                  className="w-full"
                  width={120}
                  height={120}
                  alt="Imagem da cantora Taylor Swift"
                />
                <strong className="font-semibold">Daily TS</strong>
                <span className="text-sm text-zinc-500">
                  Taylor Swift and more
                </span>
              </a>

              <a
                href="#"
                className="bg-white/5 flex flex-col gap-1 p-3 rounded-md hover:bg-white/10"
              >
                <Image
                  src="/red.jpg"
                  className="w-full"
                  width={120}
                  height={120}
                  alt="Imagem da cantora Taylor Swift"
                />
                <strong className="font-semibold">Daily TS</strong>
                <span className="text-sm text-zinc-500">
                  Taylor Swift and more
                </span>
              </a>

              <a
                href="#"
                className="bg-white/5 flex flex-col gap-1 p-3 rounded-md hover:bg-white/10"
              >
                <Image
                  src="/red.jpg"
                  className="w-full"
                  width={120}
                  height={120}
                  alt="Imagem da cantora Taylor Swift"
                />
                <strong className="font-semibold">Daily TS</strong>
                <span className="text-sm text-zinc-500">
                  Taylor Swift and more
                </span>
              </a>

              <a
                href="#"
                className="bg-white/5 flex flex-col gap-1 p-3 rounded-md hover:bg-white/10"
              >
                <Image
                  src="/red.jpg"
                  className="w-full"
                  width={120}
                  height={120}
                  alt="Imagem da cantora Taylor Swift"
                />
                <strong className="font-semibold">Daily TS</strong>
                <span className="text-sm text-zinc-500">
                  Taylor Swift and more
                </span>
              </a>
            </div>
          </section>
        </main>
      </div>

      <footer className="py-3 px-6 flex items-center justify-between bg-zinc-800 border-t border-zinc-700">
        <div className="flex items-center gap-3">
          <Image
            src="/red.jpg"
            width={58}
            height={58}
            alt="Imagem da cantora Taylor Swift"
          />

          <div className="flex flex-col">
            <strong className="font-medium">22 (Taylor´s Version)</strong>
            <span className="text-sm text-zinc-400">Taylor Swift</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-5">
            <IoIosShuffle size={20} color="#71717a" />
            <IoIosSkipBackward size={20} color="#e4e4e7" />

            <button className="w-8 h-8 pl-1 flex items-center justify-center rounded-full bg-zinc-200 text-black">
              <ImPlay3 size={20} />
            </button>

            <IoIosSkipForward size={20} color="#e4e4e7" />
            <TbRepeat color="#71717a" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 w-96 rounded-full bg-zinc-600">
              <div className="h-1 w-40 rounded-full bg-zinc-200"></div>
            </div>
            <span className="text-xs text-zinc-400">3:31</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <TbMicrophone2 size={18} />
          <HiOutlineQueueList size={18} />
          <MdComputer size={18} />
          <div className="flex items-center gap-2">
            <TbVolume2 size={18} />
            <div className="h-1 w-24 rounded-full bg-zinc-600">
              <div className="h-1 w-10 rounded-full bg-zinc-200"></div>
            </div>
          </div>
          <CiMaximize1 size={16} />
        </div>
      </footer>
    </div>
  );
}
