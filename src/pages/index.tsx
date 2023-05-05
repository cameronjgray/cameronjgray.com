import Image from "next/image";
import { Logos } from "@/components/Logos";
import { ProfileImage } from "@/components/ProfileImage";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-gray-800 to-black flex justify-center items-center font-mono">
      <div className="bg-white p-5 rounded-xl w-1/2">
        <div className="flex flex-row justify-start">
          <div className="p-5 border-2 border-black rounded-xl mr-10">
            <ProfileImage />
          </div>

          <div>
            <div className="flex flex-col justify-between h-full">
              <div>
                <div>
                  <div className="text-5xl">
                    Cameron Gray
                  </div>
                  <div className="text-2xl text-gray-500">
                    Full Stack Developer
                  </div>
                </div>

                <div className="border-t border-gray-200 mb-8 mt-1"></div>

                <div>
                  <Logos />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="border border-gray-300 text-center text-xl hover:bg-gray-300 rounded-md p-3">
                  Jobs
                </div>
                <div className="border border-gray-300 text-center text-xl hover:bg-gray-300 rounded-md p-3">
                  Projects
                </div>
                <div className="border border-gray-300 text-center text-xl hover:bg-gray-300 rounded-md p-3">
                  CV
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
