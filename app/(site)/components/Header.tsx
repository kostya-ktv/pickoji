"use client";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-y-3">
      <div className="flex gap-x-2 text-3xl font-bold">
        <span>Pickoji</span>
        <span>🚀</span>
      </div>
      <span className="text-center">
        An emoji search tool, made with <strong>Next JS & TailwindCSS</strong>.
      </span>
    </div>
  );
};
export default Header;
