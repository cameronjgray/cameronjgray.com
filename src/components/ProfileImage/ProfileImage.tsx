export function ProfileImage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src="/headshot.webp" className="w-[30rem] rounded-full"></img>

      <div className="grid grid-cols-3 gap-2 mt-3">
        <a href="https://www.linkedin.com/in/cameronjgray47/" target="_blank"><img src="/linkedin.webp" alt="LinkedIn logo" className="w-10 h-10 cursor-pointer"></img></a>
        <a href="mailto: this@cameronjgray.com"><img src="/mail.webp" alt="Email logo" className="w-10 h-10 cursor-pointer"></img></a>
        <a href="https://github.com/cameronjgray" target="_blank"><img src="/gh.webp" alt="Github logo" className="w-10 h-10 cursor-pointer"></img></a>
      </div>
    </div>
  );
}
