import { css } from "@emotion/css"
import styled from "@emotion/styled"
import Icon from "@mdi/react"
import { mdiArrowTopRight } from "@mdi/js"

const ExperienceShader = styled.div`
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

const Header = styled.header`
    @media (min-width: 640px) {
        grid-column: span 2 / span 2;
    }
    color: var(--text-color-fade);
    text-transform: uppercase;
    letter-spacing: 0.025em;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1rem;
    padding-top: 0.5rem;
    margin-bottom: 0.5rem;
    z-index: 10;
`

const Content = styled.div`
    grid-column: span 6 / span 6;
    z-index: 10;
`

const TitleLink = styled.a`
    color: var(--text-color-bold);
    line-height: 1.25;
    font-weight: 500;
    font-size: 1rem;
    align-items: baseline;
    display: inline-flex;
`

const RoleAndCompany = styled.span`
    @media (min-width: 1024px) {
        display: block;
    }
    border-radius: 0.25rem;
`

const JobTitle = styled.div`
    font-size: 16px;
    color: var(--text-color-fade);
    line-height: 1.375;
    font-weight: 500;
`

const JobDescription = styled.div`
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

type Props = {
    range: string
    roles: string[]
    company: string
    descriptions: string[]
    tags: string[]
}

const SectionExperience = ({
    range,
    roles,
    company,
    descriptions,
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
            <ExperienceShader className="shader"></ExperienceShader>
            <Header>{range}</Header>
            <Content>
                <TitleLink>
                    <RoleAndCompany className="title">
                        {roles && roles.length ? `${roles[0]} · ${company}` : company}
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
                    </RoleAndCompany>
                </TitleLink>
                {roles &&
                    roles.length &&
                    roles
                        .filter((_, idx) => idx > 0)
                        .map((role, idx) => {
                            return <JobTitle key={idx}>{role}</JobTitle>
                        })}
                <JobDescription>
                    {descriptions.length &&
                     descriptions.map((description, idx) => {
                        return (
                            <p key={idx}>{description}</p>
                        )
                     })}
                </JobDescription>
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

export default SectionExperience
