import NavbarDesktop from "./navbarDesktop";
import NavbarMobile from "./navbarMobile";

function Navbar() {
  return (
    <nav className="w-full h-full">
        <NavbarDesktop />

        <NavbarMobile />
    </nav>
  );
};

export default Navbar;
