import MenuLinks from "./MenuLinks";

const Navbar = () => {
  return (
    <>
      <nav className="bg-slate-800 text-white flex justify-between items-center px-12 py-3">
        <h1 className="text-2xl font-bold">Logo</h1>

        <MenuLinks />
      </nav>
    </>
  );
};

export default Navbar;
