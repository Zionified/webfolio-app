import Section from "@/components/Section"
import SectionProject from "./SectionProject"
import type { Project } from "@/types"
import { useEffect, useState } from "react"
import * as api from "@/requests"

const SectionProjects = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const refreshProjects = async () => {
        setProjects(await api.listProjects())
    }

    useEffect(() => {
        refreshProjects()
    }, [setProjects])

    return (
        <Section id="projects">
            <Section.Title>PROJECTS</Section.Title>
            {projects.map(project => {
                    return (
                        <SectionProject key={project.id} {...project}></SectionProject>
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
        </Section>
    )
}

export default SectionProjects
