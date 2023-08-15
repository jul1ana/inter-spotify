import Image from "next/image";
import { TbChevronRight, TbChevronLeft } from "react-icons/tb";
import { ImPlay3 } from "react-icons/im";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

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

      <Footer />
    </div>
  );
}
