import styled from "@emotion/styled"

const Shader = styled.div`
    display: none;

    @media (min-width: 1024px) {
        cursor: pointer;
        display: block;
        left: -1.5rem;
        right: -1.5rem;
    }

    border-radius: 0.375rem;
    z-index: 0;
    top: -1rem;
    bottom: -1rem;
    position: absolute;
    left: -1rem;
    right: -1rem;

    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow, transform,
        filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow, transform,
        filter, backdrop-filter;
    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow, transform,
        filter, backdrop-filter, -webkit-backdrop-filter;

    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
`

export default Shader