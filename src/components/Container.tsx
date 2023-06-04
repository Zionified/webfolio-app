import styled from "@emotion/styled"

const Container = styled.div`
    max-width: 1280px;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;

    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    @media (min-width: 768px) {
        padding-top: 5rem;
        padding-bottom: 5rem;
        padding-left: 3rem;
        padding-right: 3rem;
    }
    
    @media (min-width: 1024px) {
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 6rem;
        padding-right: 6rem;
    }

    
`

export default Container
