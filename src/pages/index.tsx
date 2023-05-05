import Image from "next/image";
import { Logos } from "@/components/Logos";
import { ProfileImage } from "@/components/ProfileImage";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-gray-800 to-black flex justify-center items-center">
      <div className="bg-white p-10 rounded-xl w-3/5">
        <div className="flex flex-row justify-start">
          <div className="p-10 border-2 border-black rounded-xl mr-10">
            <ProfileImage />
          </div>

          <div>
            <div className="flex flex-col justify-between h-full">
              <div>
                <div>
                  <div className="text-5xl text-gray-500 uppercase">
                    Cameron Gray
                  </div>
                  <div className="text-5xl text-gray-500 uppercase">
                    Full Stack Developer
                  </div>
                </div>

                <div className="border-t border-gray-200 my-5"></div>

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
