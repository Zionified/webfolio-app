import Section from "@/components/Section"
import { css } from "@emotion/css"
import { mdiArrowRight } from "@mdi/js"
import Icon from "@mdi/react"
import { useEffect, useState } from "react"
import SectionExperience from "./SectionExperience"
import * as api from "@/requests"
import type { Experience } from "@/types"

const SectionExperiences = () => {
    const [experiences, setExperiences] = useState<Experience[]>([])

    const refreshExperiences = async () => {
        setExperiences(await api.listExperiences())
    }

    useEffect(() => {
        refreshExperiences()
    }, [setExperiences])
    
    return (
        <Section id="experience">
            <Section.Title>EXPERIENCE</Section.Title>
            {experiences.map(experience => {
                return (
                    <SectionExperience
                        key={experience.id}
                        {...experience}
                    ></SectionExperience>
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
                            border-bottom: 1px solid var(--text-color-primary);
                        }

                        .resume-icon {
                            left: 0.3rem;
                        }
                    }
                `}
            >
                <span
                    className="resume-text"
                    onClick={() => (window.location.href = "/resume.pdf")}
                >
                    View Full Résumé
                </span>
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
        </Section>
    )
}
export default SectionExperiences
