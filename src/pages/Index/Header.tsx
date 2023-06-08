import { css } from "@emotion/css"
import styled from "@emotion/styled"
import Nav from "./Nav"
import SocialLinks from "./SocialLinks"
import imgHead from "@/assets/images/headImg.jpeg"
import Tag from "@/components/Tag"
import SkillsScreen from "./SkillsScreen"

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
                <img
                    src={imgHead}
                    className={css`
                        display: block;
                        width: 300px;
                        height: 300px;
                        margin-top: 10px;
                        @media (min-width: 1024px) {
                            display: none;
                        }
                    `}
                    alt="Zixuan Zheng"
                ></img>
                <Title
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                    className={css`
                        display: none;
                        @media (min-width: 1024px) {
                            display: flex;
                            align-items: center;
                        }
                    `}
                >
                    Zixuan Zheng
                    <img
                        src={imgHead}
                        className={css`
                            display: none;
                            @media (min-width: 1024px) {
                                border-radius: 65px;
                                border: 2px solid var(--text-color-fade);
                                display: inline-block;
                                width: 130px;
                                height: 130px;
                                margin-left: 20px;
                            }
                        `}
                        alt="Zixuan Zheng"
                    ></img>
                </Title>
                <Subtitle>
                    Computer Science student at Carnegie Mellon University
                </Subtitle>
                <ShortIntro>
                    Full stack developer and machine learning enthusiast
                </ShortIntro>
                <Nav></Nav>
            </div>
            <SkillsScreen></SkillsScreen>
            {/* <div
                className={css`
                    padding-right: 70px;
                `}
                id="skills-screen"
            >
                
                <Tag>
                    <Tag.Item>Python</Tag.Item>
                    <Tag.Item>Java</Tag.Item>
                    <Tag.Item>C</Tag.Item>
                    <Tag.Item>React</Tag.Item>
                    <Tag.Item>Typescript</Tag.Item>
                    <Tag.Item>Vue</Tag.Item>
                    <Tag.Item>Django</Tag.Item>
                    <Tag.Item>Tensorflow</Tag.Item>
                    <Tag.Item>HTML</Tag.Item>
                    <Tag.Item>CSS</Tag.Item>
                    <Tag.Item>Standard ML</Tag.Item>
                    <Tag.Item>NLP</Tag.Item>
                    <Tag.Item>Blender</Tag.Item>
                    <Tag.Item>React</Tag.Item>
                    <Tag.Item>React</Tag.Item>
                    <Tag.Item>React</Tag.Item>
                </Tag>
            </div> */}
            <SocialLinks></SocialLinks>
        </header>
    )
}
export default Header
