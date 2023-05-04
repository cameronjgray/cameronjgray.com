import Image from "next/image";
import { Logos } from "@/components/Logos";
import { ProfileImage } from "@/components/ProfileImage";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-gray-500 to-gray-900 flex justify-center items-center">
      <div className="bg-white p-10 rounded-xl shadow-xl border-2 border-gray-400 w-3/5">
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center text-2xl text-gray-500 uppercase">
            Cameron Gray
          </div>
          <div className="text-center text-2xl text-gray-500">|</div>
          <div className="text-center text-2xl text-gray-500 uppercase">
            Full Stack Developer
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-5">
          <Logos images={["/ts.png", "/react.png", "/node.png", "/jest.png", "git.png"]} />

          <ProfileImage />

          <Logos images={["/tux.jpg", "/sql.png", "/python.png", "/aws.png", "/php.png"]} />
        </div>

        <div className="grid grid-cols-3 gap-3 mt-5">
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
  );
}
