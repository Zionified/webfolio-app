import { css } from "@emotion/css"
import styled from "@emotion/styled"
import { ReactNode } from "react"

type NavProps = {
    children?: ReactNode
}

type NavPropsItem = {
    active?: boolean
    children?: ReactNode
}

const NavItem = ({ active, children }: NavPropsItem) => {
    return (
        <div className={`nav-item ${active ? "active" : ""}`}>
            <span className="nav-item-indicator"></span>
            <span className="nav-item-name">{children}</span>
        </div>
    )
}

const Nav = ({ children }: NavProps) => {
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
            {children}
        </nav>
    )
}

export default Nav
Nav.Item = NavItem
