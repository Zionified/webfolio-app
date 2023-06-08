import { css } from "@emotion/css"
import styled from "@emotion/styled"
import { mdiViewHeadline } from "@mdi/js"
import Icon from "@mdi/react"
import { useState } from "react"

const NavItem = styled.div`
    padding: 16px 16px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-top: 1px solid var(--color-divider); */
`
const MobileHeader = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleNavItemClick = (name: "about" | "experience" | "projects") => {
        const element = document.getElementById(name)
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 96,
                behavior: "smooth",
            })
        }
        setIsExpanded(false)
    }
    return (
        <>
            <div
                className={css`
                    display: flex;
                    justify-content: space-between;
                    padding: 8px 24px;
                    padding-right: 10px;
                    align-items: center;
                    font-size: 30px;
                    background-color: var(--background-color-header);
                    color: var(--text-color-bold);
                    position: fixed;
                    top: 0;
                    width: 100%;
                    height: 64px;
                    box-sizing: border-box;
                    z-index: 100;
                    @media (min-width: 1024px) {
                        display: none;
                    }
                `}
            >
                <div
                    onClick={() => {
                        setIsExpanded(false)
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }}
                    className={css`
                        cursor: pointer;
                    `}
                >
                    Zixuan Zheng
                </div>
                <span
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={css`
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    `}
                >
                    <Icon path={mdiViewHeadline} size={2} />
                </span>
            </div>
            {/* {isExpanded && ( */}
            <div
                className={css`
                    height: ${isExpanded ? "158px" : "0px"};
                    transition: height;
                    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                    transition-duration: 0.15s;
                    overflow: hidden;
                    position: fixed;
                    top: 64px;
                    width: 100%;
                    background-color: var(--background-color-header);
                    z-index: 100;

                    @media (min-width: 1024px) {
                        display: none;
                    }
                `}
            >
                <NavItem onClick={() => handleNavItemClick("about")}>
                    About
                </NavItem>
                <NavItem onClick={() => handleNavItemClick("experience")}>
                    Experiences
                </NavItem>
                <NavItem onClick={() => handleNavItemClick("projects")}>
                    Projects
                </NavItem>
            </div>
            {/* )} */}
        </>
    )
}

export default MobileHeader
