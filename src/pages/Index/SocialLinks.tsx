import { css } from "@emotion/css"
import styled from "@emotion/styled"
import Icon from "@mdi/react"
import { mdiGithub, mdiInstagram, mdiTwitter, mdiLinkedin } from "@mdi/js"

const Contact = styled.a`
    font-size: 0.75rem;
    line-height: 1rem;
    margin-right: 1.25rem;
    color: var(--text-color-fade);

    .icon {
        cursor: pointer;
        :hover {
            color: var(--text-color-bold);
        }
    }
`

const SocialLinks = () => {
    return (
        <div
            className={css`
                align-items: center;
                display: flex;
                margin: 0;
                margin-top: 2rem;
                margin-left: 0.25rem;
            `}
        >
            <Contact href="https://github.com/Zionified">
                <Icon className="icon" path={mdiGithub} size={1.2} />
            </Contact>
            {/* <Contact>
                <Icon className="icon" path={mdiInstagram} size={1.2} />
            </Contact> */}
            {/* <Contact>
                <Icon className="icon" path={mdiTwitter} size={1.2} />
            </Contact> */}
            <Contact href="https://www.linkedin.com/in/zixuan-zheng-03">
                <Icon className="icon" path={mdiLinkedin} size={1.2} />
            </Contact>
        </div>
    )
}

export default SocialLinks
