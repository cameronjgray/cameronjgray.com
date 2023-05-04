export function ProfileImage() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="h-72 w-72 bg-orange-500 rounded-full"></div>

      <div className="grid grid-cols-3 gap-5 mt-3">
        <img src="/linkedin.png" alt="LinkedIn logo" className="w-12 h-12 cursor-pointer"></img>
        <img src="/mail.png" alt="Email logo" className="w-12 h-12 cursor-pointer"></img>
        <img src="/gh.png" alt="Github logo" className="w-12 h-12 cursor-pointer"></img>
      </div>
    </div>
  );
}
