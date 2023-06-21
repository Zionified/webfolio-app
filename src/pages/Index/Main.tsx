import { css } from "@emotion/css"
import SectionExperiences from "./SectionExperiences"
import SectionProjects from "./SectionProjects"
import SectionAbouts from "./SectionAbouts"

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
            <SectionAbouts />
            <SectionExperiences />
            <SectionProjects />
        </main>
    )
}
export default Main
