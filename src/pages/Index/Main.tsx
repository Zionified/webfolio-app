import { css } from "@emotion/css"
import styled from "@emotion/styled"
import SectionAbout from "./SectionAbout"
import SectionExperience from "./SectionExp"
import Icon from "@mdi/react"
import { mdiArrowRight } from "@mdi/js"
import SectionProject from "./SectionProject"
import { experiences } from "@/mock/experiences"
import { projects } from "@/mock/projects"

const SectionContainer = styled.section`
    margin-bottom: 4rem;
    scroll-margin-top: 4rem;

    @media (min-width: 768px) {
        margin-bottom: 6rem;
    }

    @media (min-width: 1024px) {
        scroll-margin-top: 6rem;
        margin-bottom: 9rem;
    }
`
const Main = () => {
    return (
        <main
            className={css`
                padding-top: 6rem;
                @media (min-width: 1024px) {
                    padding-top: 6rem;
                    padding-bottom: 6rem;
                    width: 50%;
                }
                line-height: 1.625;
            `}
        >
            <SectionContainer id="about">
                <SectionAbout></SectionAbout>
            </SectionContainer>
            <SectionContainer id="experience">
                {experiences.map((experience, idx) => {
                    return (
                        <SectionExperience key={idx} {...experience}></SectionExperience>
                    )
                })}
                <div
                    className={css`
                        margin-top: 3rem;
                        color: var(--text-color-bold);
                        cursor: pointer;
                        line-height: 1.25;
                        font-weight: 600;
                        align-items: center;
                        display: inline-flex;

                        :hover {
                            .resume-text {
                                border-bottom: 1px solid
                                    var(--text-color-primary);
                            }

                            .resume-icon {
                                left: 0.3rem;
                            }
                        }
                    `}
                >
                    <span className="resume-text" onClick={() => window.location.href = "/resume.pdf"}>View Full Résumé</span>
                    <Icon
                        path={mdiArrowRight}
                        size={0.65}
                        className={
                            css`
                                transition-property: all;
                                transition-timing-function: cubic-bezier(
                                    0.4,
                                    0,
                                    0.2,
                                    1
                                );
                                transition-duration: 0.15s;
                                flex-shrink: 0;
                                width: 1rem;
                                height: 1rem;
                                display: inline-block;
                                margin-left: 0.25rem;
                                vertical-align: middle;
                                left: 0;
                                position: relative;
                            ` + " resume-icon"
                        }
                    />
                </div>
            </SectionContainer>
            <SectionContainer id="projects">
                {projects.map((project, idx) => {
                    return (
                        <SectionProject key={idx} {...project}></SectionProject>
                    )
                })}
                {/* <div
                    className={css`
                        margin-top: 3rem;
                        color: var(--text-color-bold);
                        cursor: pointer;
                        line-height: 1.25;
                        font-weight: 600;
                        align-items: center;
                        display: inline-flex;

                        :hover {
                            .project-archive-text {
                                border-bottom: 1px solid
                                    var(--text-color-primary);
                            }

                            .project-archive-icon {
                                transform: translateX(0.3rem);
                            }
                        }
                    `}
                >
                    <span className="project-archive-text">View Project Archive</span>
                    <Icon
                        path={mdiArrowRight}
                        size={0.65}
                        className={
                            css`
                                transition-property: transform;
                                transition-timing-function: cubic-bezier(
                                    0.4,
                                    0,
                                    0.2,
                                    1
                                );
                                transition-duration: 0.15s;
                                flex-shrink: 0;
                                width: 1rem;
                                height: 1rem;
                                display: inline-block;
                                margin-left: 0.25rem;
                                vertical-align: middle;
                            ` + " project-archive-icon"
                        }
                    />
                </div> */}
            </SectionContainer>
        </main>
    )
}
export default Main
