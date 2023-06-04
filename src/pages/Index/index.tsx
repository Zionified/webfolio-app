import Container from "@/components/Container"
import ContentContainer from "./ContentContainer"
import Header from "./Header"
import Main from "./Main"

const Index = () => {
    return (
        <Container>
            <ContentContainer>
                <Header></Header>
                <Main></Main>
            </ContentContainer>
        </Container>
    )
}

export default Index