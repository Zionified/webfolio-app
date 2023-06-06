import { css } from "@emotion/css"
import styled from "@emotion/styled"
import Nav from "./Nav"
import SocialLinks from "./SocialLinks"

const Title = styled.h1`
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-family: var(--font-family-bold);
    cursor: pointer;

    @media (min-width: 640px) {
        font-size: 3rem;
        line-height: 1;
    }
    color: var(--text-color-bold);
    letter-spacing: -0.025em;
    font-weight: 700;
    margin: 0;
`

const Subtitle = styled.h2`
    font-size: 1.125rem;
    line-height: 1.75rem;
    @media (min-width: 640px) {
        font-size: 1.25rem;
        line-height: 1.75rem;
    }
    color: var(--text-color-bold);
    letter-spacing: -0.025em;
    font-weight: 500;
    margin: 0;
    margin-top: 0.75rem;
`

const ShortIntro = styled.p`
    line-height: 1.5;
    max-width: 20rem;
    margin: 0;
    margin-top: 1rem;
`

const Header = () => {
    

    return (
        <header
            className={css`
                @media (min-width: 1024px) {
                    box-sizing: border-box;
                    padding-top: 6rem;
                    padding-bottom: 6rem;
                    flex-direction: column;
                    width: 50%;
                    height: 100vh;
                    display: flex;
                    top: 0;
                    position: sticky;
                    justify-content: space-between;
                }
            `}
        >
            <div>
                <Title>Zixuan Zheng</Title>
                <Subtitle>Computer Science student at Carnegie Mellon University</Subtitle>
                <ShortIntro>
                    I build accessible, inclusive products and digital
                    experiences for the web.
                </ShortIntro>
                <Nav></Nav>
            </div>
            <SocialLinks></SocialLinks>
        </header>
    )
}
export default Header
