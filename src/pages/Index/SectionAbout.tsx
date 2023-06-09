import { css } from "@emotion/css"
import { abouts } from "@/mock/about"

const SectionAbout = () => {
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
                                    scrollByElementId(part.target!, -50)
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
                                            font-weight: 800;
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
