import logo from "../../assets/LOGO_VECTOR.svg";

function Header() {
  return (
    <>
      <div className="absolute top-0 right-0 bottom-0 left-0 z-[25] backdrop-blur-xl bg-[rgba(0,0,0,0.25)]">
        <img src={logo} />
      </div>
    </>
  );
}

export default Header;
