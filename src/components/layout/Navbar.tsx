"use client";

import authApi from "@/services/auth/auth.api";
import Link from "next/link";
import { useRouter } from "next/navigation";

type NavbarProps = {
  loggedUsername?: string;
};

const Navbar = ({ loggedUsername }: NavbarProps) => {
  const router = useRouter();

  const logout = async () => {
    await authApi.logout();
    router.push("/login");
    router.refresh();
  };

  return (
    <header className="w-full">
      <nav className="  flex justify-between w-full bg-pink-500 text-white p-2 mb-2">
        <Link href="/explore">
          <div className="px-4 py-1">LOGO </div>
        </Link>
        {loggedUsername && (
          <div>
            <button className="button-secondary" onClick={() => logout()}>
              Cerrar sesión
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
