import { css } from "@emotion/css"
import styled from "@emotion/styled"
import { mdiArrowTopRight, mdiStar, mdiTrayArrowDown } from "@mdi/js"
import Icon from "@mdi/react"
import ImgCourseCard from "@/assets/images/course-card.webp"

const ProjectShader = styled.div`
    display: none;

    @media (min-width: 1024px) {
        cursor: pointer;
        display: block;
        left: -1.5rem;
        right: -1.5rem;
    }

    border-radius: 0.375rem;
    z-index: 0;
    top: -1rem;
    bottom: -1rem;
    position: absolute;
    left: -1rem;
    right: -1rem;

    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow, transform,
        filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow, transform,
        filter, backdrop-filter;
    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow, transform,
        filter, backdrop-filter, -webkit-backdrop-filter;

    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
`

const IMG = styled.img`
    color: transparent;
    @media (min-width: 640px) {
        grid-column: span 2 / span 2;
        order: 1;
    }
    margin-top: 0.4rem;
    border: 2px solid var(--color-img-border);
    border-radius: 0.25rem;
    max-width: 100%;
    height: 48px;
    /* height: auto; */
    vertical-align: middle;
    width: 200px;
    aspect-ratio: auto 200 / 48;
    overflow: clip;
`

const Content = styled.div`
    @media (min-width: 640px) {
        grid-column: span 6 / span 6;
        order: 2;
    }
    z-index: 10;
`

const ProjectLink = styled.a`
    color: var(--text-color-bold);
    line-height: 1.25;
    font-weight: 500;
    font-size: 1rem;
    align-items: baseline;
    display: inline-flex;
`

const ProjectName = styled.span`
    @media (min-width: 1024px) {
        display: block;
    }
    border-radius: 0.25rem;
`

const ProjectDescription = styled.p`
    line-height: 1.5;
    font-size: 0.875rem;
    margin: 0;
    margin-top: 0.5rem;
`

const Tags = styled.div`
    flex-wrap: wrap;
    display: flex;
    margin-top: 0.5rem;
`

const Tag = styled.span`
    margin-top: 0.5rem;
    margin-right: 0.375rem;
    color: var(--text-color-primary);
    background-color: var(--background-color-primary);
    line-height: 1.25rem;
    font-weight: 500;
    font-size: 0.75rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    border-radius: 9999px;
    align-items: center;
    display: flex;
`

const Status = styled.div`
    margin-top: 0.5rem;
    display: inline-flex;
    align-items: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--text-color-bold);
`

type Props = {
    title: string
    descriptions: string[]
    image: string
    starCount?: number
    installCount?: number
    tags?: string[]
}

const SectionProject = ({
    title,
    descriptions,
    image,
    starCount,
    installCount,
    tags,
}: Props) => {
    return (
        <div
            className={css`
                cursor: pointer;
                margin-bottom: 3rem;
                @media (min-width: 640px) {
                    gap: 2rem;
                    grid-template-columns: repeat(8, minmax(0, 1fr));
                }

                @media (min-width: 768px) {
                    gap: 1rem;
                }

                transition-property: all;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                transition-duration: 0.15s;

                padding-bottom: 0.25rem;
                display: grid;
                position: relative;

                border-radius: 0.375rem;

                :hover {
                    opacity: 1 !important;

                    .projectImg {
                        border: 2px solid var(--color-img-border-hover);
                    }
                    .shader {
                        background-color: var(--background-color-fade);
                    }

                    .title {
                        color: var(--text-color-primary);
                    }

                    .title-icon {
                        left: 0.25rem;
                        bottom: 0.25rem;
                    }
                }
            `}
        >
            <ProjectShader className="shader"></ProjectShader>
            <IMG src={image} className="projectImg"></IMG>
            <Content>
                <ProjectLink>
                    <ProjectName className="title">
                        {title}
                        <Icon
                            path={mdiArrowTopRight}
                            size={0.6}
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
                                    bottom: 0;
                                    position: relative;
                                ` + " title-icon"
                            }
                        />
                    </ProjectName>
                </ProjectLink>
                <ProjectDescription>
                    {descriptions.length &&
                        descriptions.map((description, idx) => {
                            return <p key={idx}>{description}</p>
                        })}
                </ProjectDescription>
                {(starCount || installCount) && (
                    <div
                        className={css`
                            display: flex;
                        `}
                    >
                        {starCount && (
                            <Status>
                                <Icon
                                    path={mdiStar}
                                    className={css`
                                        width: 0.75rem;
                                        height: 0.75rem;
                                        margin-right: 0.25rem;
                                    `}
                                />
                                {starCount}
                            </Status>
                        )}
                        {installCount && (
                            <Status>
                                <Icon
                                    path={mdiTrayArrowDown}
                                    className={css`
                                        margin-left: 0.5rem;
                                        width: 1rem;
                                        height: 1rem;
                                        margin-right: 0.25rem;
                                    `}
                                />
                                {installCount >= 1000
                                    ? `${(installCount / 1000).toFixed(1)}k+`
                                    : installCount}{" "}
                                Installs
                            </Status>
                        )}
                    </div>
                )}
                {tags && tags.length && (
                    <Tags>
                        {tags.map((tag, idx) => {
                            return <Tag key={idx}>{tag}</Tag>
                        })}
                    </Tags>
                )}
            </Content>
        </div>
    )
}

export default SectionProject
