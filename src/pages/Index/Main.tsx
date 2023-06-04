import { css } from "@emotion/css"

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
            `}
        >
            Main
        </main>
    )
}
export default Main
