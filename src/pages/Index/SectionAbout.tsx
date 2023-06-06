import { css } from "@emotion/css"
import { abouts } from "@/mock/about"

const SectionAbout = () => {
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
                            if (part.url) {
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
                                        onClick={() => window.location.href=part.url!}
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
