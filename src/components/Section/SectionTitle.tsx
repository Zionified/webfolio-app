import styled from "@emotion/styled"

const SectionTitle = styled.div`
    display: block;
    @media (min-width: 768px) {
        padding-left: 3rem;
        padding-right: 3rem;
        margin-left: -3rem;
        margin-right: -3rem;
    }
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    margin-bottom: 1rem;
    z-index: 20;
    letter-spacing: 1.4px;
    color: var(--text-color-bold);
    font-weight: 700;
    @media (min-width: 1024px) {
        display: none;
    }
`

export default SectionTitle