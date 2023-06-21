import { css } from "@emotion/css";
import SectionTitle from "./SectionTitle";
import { ReactNode } from "react";

type Props = {
    id?: string,
    children?: ReactNode
}

const SectionContainer = ({id, children}: Props) => {
    return <section id={id} className={css`
    margin-bottom: 4rem;
    scroll-margin-top: 4rem;

    @media (min-width: 768px) {
        margin-bottom: 6rem;
    }

    @media (min-width: 1024px) {
        scroll-margin-top: 6rem;
        margin-bottom: 9rem;
    }
    `}>
        {children}
    </section>
}

SectionContainer.Title = SectionTitle

export default SectionContainer