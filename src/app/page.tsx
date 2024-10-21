export default function Home() {
  return (
    <div className="w-full h-full min-h-screen py-[6em] px-[2em] hero">
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5vw] font-normal -tracking-wider text-white max-[900px]:text-[10vw]">
        Index{" "}
        <sup className="relative -top-[20px] left-[10px] max-[900px]:text-[4vw]">
          (01)
        </sup>
      </h1>
    </div>
  );
}
