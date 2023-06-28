"use client";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-y-3">
      <div className="flex gap-x-2 text-3xl font-bold">
        <span>Emoji Search </span>
        <span>🚀</span>
      </div>
      <span>An emoji tool made with Next JS.</span>
    </div>
  );
};
export default Header;
