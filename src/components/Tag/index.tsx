import { css } from "@emotion/css"
import Tag from "./Tag"
import type { ReactNode } from "react"

type Props = {
    children?: ReactNode
}

const Tags = ({children}: Props) => {
    return (
        <div
            className={css`
                flex-wrap: wrap;
                display: flex;
                margin-top: 0.5rem;
            `}
        >
            {children}
        </div>
    )
}

Tags.Item = Tag

export default Tags