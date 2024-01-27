import { css } from "@emotion/css"
import styled from "@emotion/styled"
import Icon from "@mdi/react"
import { mdiEmail, mdiGithub, mdiLinkedin } from "@mdi/js"

const Contact = styled.a`
    font-size: 0.75rem;
    line-height: 1rem;
    margin-right: 1.25rem;
    color: var(--text-color-fade);
`

const BrandIcon = styled(Icon)`
    cursor: pointer;
    color: var(--text-color);
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
                <BrandIcon
                    path={mdiGithub}
                    size={1.2}
                    className={css`
                        :hover {
                            color: var(--color-icon-github-hover);
                        }
                    `}
                />
            </Contact>
            {/* <Contact>
                <Icon className="icon" path={mdiTwitter} size={1.2} />
            </Contact> */}
            <Contact href="https://www.linkedin.com/in/zzheng3">
                <BrandIcon
                    path={mdiLinkedin}
                    size={1.2}
                    className={css`
                        :hover {
                            color: var(--color-icon-linkedin-hover);
                        }
                    `}
                />
            </Contact>
            <Contact href="mailto:zzheng3@andrew.cmu.edu">
                <BrandIcon
                    path={mdiEmail}
                    size={1.2}
                    className={css`
                        :hover {
                            color: var(--color-icon-mail-hover);
                        }
                    `}
                />
            </Contact>
        </div>
    )
}

export default SocialLinks
