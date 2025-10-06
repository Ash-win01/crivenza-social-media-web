import NavButton from "./Navbutton";

export default function NavBar() {
    const navItems = ["Home", "About us", "Privacy", "Guidelines", "Contact us", "Login", "Register"];
    return(
        <div className="flex flex-row  gap-[20px] items-center justify-center h-[70px] bg-white">
         {navItems.map((item, index) => (
                      <NavButton key={index} label={item} />
                    ))}
        </div>
    );
}