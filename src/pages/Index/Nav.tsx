import { css } from "@emotion/css"
import styled from "@emotion/styled"
import { ReactNode, useEffect } from "react"
import type { MouseEventHandler } from "react"

type NavProps = {
    children?: ReactNode
}

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
    const scrollByElementId = (elementId: string) => {
        var element = document.getElementById(elementId)
        if (element) {
            window.scrollTo({
                'top': element.offsetTop-96,
                'behavior': 'smooth'
            })
        }
    }

    useEffect(() => {
        const handleScroll = (e: any) => {
            console.log(e.target.body)
        }
        window.addEventListener("scroll", handleScroll, true)
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
            <Nav.Item onClick={() => scrollByElementId("about")}>
                ABOUT
            </Nav.Item>
            <Nav.Item onClick={() => scrollByElementId("experience")}>
                EXPERIENCE
            </Nav.Item>
            <Nav.Item onClick={() => scrollByElementId("projects")}>
                PROJECTS
            </Nav.Item>
        </nav>
    )
}

export default Nav
Nav.Item = NavItem
