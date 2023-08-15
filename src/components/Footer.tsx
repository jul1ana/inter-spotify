import Image from "next/image";
import { MdComputer } from "react-icons/md";
import { CiMaximize1 } from "react-icons/ci";
import { HiOutlineQueueList } from "react-icons/hi2";
import { TbMicrophone2, TbRepeat, TbVolume2 } from "react-icons/tb";
import { ImPlay3 } from "react-icons/im";
import {
  IoIosShuffle,
  IoIosSkipBackward,
  IoIosSkipForward,
} from "react-icons/io";

export function Footer() {
  return (
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
  );
}
