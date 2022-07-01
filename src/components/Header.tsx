import { List, X } from "phosphor-react";
import { Dispatch, SetStateAction } from "react";
import { Logo } from "./Logo";

interface HeaderProps {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export function Header({ openMenu, setOpenMenu }: HeaderProps) {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <Logo size={window.innerWidth < 1024 ? "167" : "237"} />
      <div className="flex items-center absolute right-2">
        <button
          className="md:visible lg:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <X size={32} color="#00875F" />
          ) : (
            <List size={32} color="#00875F" />
          )}
        </button>
      </div>
    </header>
  );
}
