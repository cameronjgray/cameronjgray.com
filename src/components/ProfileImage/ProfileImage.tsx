export function ProfileImage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src="/headshot.webp" className="md:w-[30rem] w-60 rounded-full" alt="Image of Cameron"></img>

      <div className="grid grid-cols-3 gap-2 mt-3">
        <a href="https://www.linkedin.com/in/cameronjgray47/" target="_blank"><img src="/linkedin.webp" alt="LinkedIn logo" className="2xl:w-10 2xl:h-10 w-8 h-8 cursor-pointer"></img></a>
        <a href="mailto: this@cameronjgray.com"><img src="/mail.webp" alt="Email logo" className="2xl:w-10 2xl:h-10 w-8 h-8 cursor-pointer"></img></a>
        <a href="https://github.com/cameronjgray" target="_blank"><img src="/gh.webp" alt="Github logo" className="2xl:w-10 2xl:h-10 w-8 h-8 cursor-pointer"></img></a>
      </div>
    </div>
  );
}
