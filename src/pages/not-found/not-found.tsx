import Header from 'components/layout/header';
import Footer from 'components/layout/footer';
import Error from 'components/shared/error';
import Container from 'components/layout/container';

export function NotFound() {
  return (
    <>
      <Header />
      <Container>
        <Error />
      </Container>
      <Footer />
    </>
  );
}
