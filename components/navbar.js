import { useState } from 'react'
import Link from 'next/link'

function NavLink({ to, children }) {
    return <Link href={to}>
        <a className={`mx-4 text-white`}>
            {children}
        </a>
    </Link>

}

function MobileNav({ open, setOpen }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-emerald-400 transform z-50 ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-emerald-500 h-20 "> {/*logo container*/}
                <Link href="/">
                    <a className="text-xl font-semibold text-white" >Ecogroovi</a>
                </Link>
            </div>
            <div className="flex flex-col ml-4">
                <Link href="/#background-mob">
                    <a className="text-xl font-medium my-4 text-white" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                        Background
                    </a>
                </Link>

                <Link href="/#target">
                    <a className="text-xl font-medium my-4 text-white" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                        Target
                    </a>
                </Link>
                <Link href="/#features">
                    <a className="text-xl font-medium my-4 text-white" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                        Features
                    </a>
                </Link>

                <Link href="/#services">
                    <a className="text-xl font-medium my-4 text-white" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                        Services
                    </a>
                </Link>

                {/* <Link href="/terms">
                    <a className="text-xl font-medium my-4 text-white" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                        Term & Conditions
                    </a>
                </Link> */}

            </div>
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter bg-emerald-400 px-4 py-4 h-20 items-center ">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-3/12 flex items-center">
                <Link href="/">
                    <a className="text-2xl font-semibold text-white">Ecogroovi</a>
                </Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/#background">
                        Background
                    </NavLink>
                    <NavLink to="/#target">
                        Target
                    </NavLink>
                    <NavLink to="/#features">
                        Features
                    </NavLink>
                    <NavLink to="/#services">
                        Services
                    </NavLink>
                    {/* <NavLink to="/terms">
                        Term & Conditions
                    </NavLink> */}
                </div>
            </div>
        </nav>
    )
}