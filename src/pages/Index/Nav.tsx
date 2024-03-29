import { css } from "@emotion/css"
import { ReactNode, useEffect, useState } from "react"
import type { MouseEventHandler } from "react"

type NavItemProps = {
    active?: boolean
    children?: ReactNode
    onClick?: MouseEventHandler<HTMLDivElement>
}

const NavItem = ({ active, children, onClick }: NavItemProps) => {
    return (
        <div className={`nav-item ${active ? "active" : ""}`} onClick={onClick}>
            <span className="nav-item-indicator"></span>
            <span className="nav-item-name">{children}</span>
        </div>
    )
}

const Nav = () => {
    const [activeNavName, setActiveNavName] = useState("about")

    const scrollByElementId = (elementId: "about" | "experience" | "projects") => {
        if (elementId === "about") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
            return
        }
        var element = document.getElementById(elementId)
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 96,
                behavior: "smooth",
            })
        }
    }

    useEffect(() => {
        const handleScroll = (e: any) => {
            const elements = ["projects", "experience", "about"]
                .map((id) => document.getElementById(id))
                .filter((element) => element)
                .map((element) => element!)
                .filter(
                    (element) => element.getBoundingClientRect().top - 140 <= 0
                )
            if (elements.length > 0) {
                setActiveNavName(elements[0].id)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })
    return (
        <nav
            className={css`
                display: none;
                @media (min-width: 1024px) {
                    display: block;
                    width: max-content;
                    margin-top: 4rem;
                }

                .nav-item {
                    cursor: pointer;
                    align-items: center;
                    padding-top: 0.75rem;
                    padding-bottom: 0.75rem;
                    display: flex;
                    .nav-item-indicator {
                        background-color: var(--color-indicator);
                        width: 2rem;
                        height: 1px;
                        margin-right: 1rem;
                        transition-property: all;
                        transition-timing-function: cubic-bezier(
                            0.4,
                            0,
                            0.2,
                            1
                        );
                        transition-duration: 0.15s;
                    }

                    .nav-item-name {
                        color: var(--text-color-fade);
                        letter-spacing: 0.1em;
                        font-weight: 700;
                        font-size: 0.75rem;
                        line-height: 1rem;
                    }

                    :hover {
                        .nav-item-indicator {
                            width: 4rem;
                            background-color: var(--text-color-bold);
                        }
                        .nav-item-name {
                            color: var(--text-color-bold);
                        }
                    }
                }

                .nav-item.active {
                    .nav-item-indicator {
                        width: 4rem;
                        background-color: var(--text-color-bold);
                    }

                    .nav-item-name {
                        color: var(--text-color-bold);
                    }
                }
            `}
        >
            <Nav.Item onClick={() => scrollByElementId("about")} active={activeNavName === "about"}>
                ABOUT
            </Nav.Item>
            <Nav.Item onClick={() => scrollByElementId("experience")} active={activeNavName === "experience"}>
                EXPERIENCE
            </Nav.Item>
            <Nav.Item onClick={() => scrollByElementId("projects")} active={activeNavName === "projects"}>
                PROJECTS
            </Nav.Item>
        </nav>
    )
}

export default Nav
Nav.Item = NavItem
