import Container from "@/components/Container"
import ContentContainer from "./ContentContainer"
import Header from "./Header"
import Main from "./Main"
import MobileHeader from "./MobileHeader"
import { css } from "@emotion/css"

const Index = () => {
    return (
        <>
            <MobileHeader></MobileHeader>
            <Container
                className={css`
                    margin-top: 20px;
                    @media (min-width: 1024px) {
                        margin-top: 0;
                    }
                `}
            >
                <ContentContainer>
                    <Header></Header>
                    <Main></Main>
                </ContentContainer>
            </Container>
        </>
    )
}

export default Index
