type LogoProps = {
  scrolled: boolean;
};

export default function Logo({ scrolled }: LogoProps) {
  return (
    <div
      className={`absolute transition-all duration-300 left-1/2 -translate-x-1/2 top-2 ${
        scrolled ? "-translate-y-full opacity-0" : ""
      }`}
    >
      <h1 className="flex justify-center text-7xl font-bold">H</h1>
    </div>
  );
}
