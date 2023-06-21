import { css } from "@emotion/css"
import { useEffect, useState } from "react"
import * as api from "@/requests"
import { About } from "@/types"

const SectionAbout = () => {
    // TODO: 判断链接是#开头还是http开头

    const [abouts, setAbouts] = useState<About[][]>([])
    const refreshAbouts = async () => {
        const value = await api.getMapping("ABOUT")
        const lines = value
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line)
        const abouts = lines.map((line) => {
            const parts: About[] = []
            const matches = Array.from(
                line.matchAll(
                    /(\[([^\]]+)\]\((((http:\/\/)|(https:\/\/)|#)([^)]+))\))/g
                )
            )
            let index = 0
            for (let match of matches) {
                // console.log(match)
                parts.push({
                    text: line.substring(index, match.index!),
                    type: "text",
                })
                parts.push({
                    text: match[2],
                    target: match[3],
                    type: match[3].startsWith("#") ? "anchor" : "url",
                })
                index = match.index! + match[0].length
            }
            if (index < line.length) {
                parts.push({
                    text: line.substring(index, line.length),
                    type: "text",
                })
            }
            return parts
        })
        setAbouts(abouts)
    }

    useEffect(() => {
        refreshAbouts()
    }, [setAbouts])

    const scrollByElementId = (elementId: string, offset?: number) => {
        offset = offset ? offset : -96
        let element = document.getElementById(elementId)
        if (element) {
            window.scrollTo({
                top: element.offsetTop + offset,
                behavior: "smooth",
            })
        }
    }

    return (
        <div
            className={css`
                p {
                    margin: 0;
                }
                p + p {
                    margin-top: 1rem;
                }
            `}
        >
            {abouts.map((paragraph, idx) => {
                return (
                    <p key={idx}>
                        {paragraph.map((part, idx) => {
                            if (part.type && part.target) {
                                const onClick = part.type === "anchor" ? () => {
                                    scrollByElementId(part.target!.substring(1), -50)
                                } : (
                                    part.type === "url" ? () => {
                                        window.location.href=part.target!
                                    } : undefined
                                )
                                return (
                                    <span
                                        key={idx}
                                        className={css`
                                            color: var(--text-color-bold);
                                            font-family: var(--font-family-bold);
                                            font-weight: 900;
                                            cursor: pointer;
                                            :hover {
                                                color: var(
                                                    --text-color-primary
                                                );
                                            }
                                        `}
                                        onClick={onClick}
                                    >
                                        {part.text}
                                    </span>
                                )
                            }
                            return part.text
                        })}
                    </p>
                )
            })}
        </div>
    )
}

export default SectionAbout
