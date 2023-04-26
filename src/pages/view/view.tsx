import Container from 'components/layout/container';
import Footer from 'components/layout/footer';
import Header from 'components/layout/header';
import Error from 'components/shared/error';
import Loader from 'components/shared/loader';
import { useCharacterView } from 'hooks';
import { useNavigate, useParams } from 'react-router-dom';
import Tag from 'components/shared/tag';
import Button from 'components/shared/button';
import { useMemo } from 'react';
import styles from './styles.module.scss';
import { ViewElement } from './view.element';

export function View() {
  const { id } = useParams();
  const idNumber = Number(id);
  const navigate = useNavigate();
  const { loading, character, isError } = useCharacterView(idNumber);
  const episodeNumbers = useMemo(
    () =>
      character?.episode
        ?.map((url) => {
          const episodeUrl = url?.split('/') || '';

          return episodeUrl[episodeUrl.length - 1];
        })
        .join(', '),
    [character?.episode]
  );

  return (
    <>
      <Header />
      <Container>
        {loading && <Loader />}
        {isError && <Error title='Invalid character' />}
        {!loading && !isError && (
          <div className={styles.View}>
            <Button onClick={() => navigate(-1)}>Go back</Button>
            <ViewElement label='Name:' element={character?.name} />
            <ViewElement
              label='Picture:'
              element={
                <img
                  src={character?.image}
                  alt={`character ${character?.name}`}
                />
              }
            />

            <ViewElement label='Type:' element={character?.type} />
            <ViewElement label='Origin:' element={character?.origin?.name} />
            <ViewElement
              label='Location:'
              element={character?.location?.name}
            />

            <ViewElement label='Species:' element={character?.species} />
            <ViewElement label='Episodes numbers:' element={episodeNumbers} />

            <ViewElement
              label='Status:'
              element={<Tag title={character?.status} />}
              hideExtraBorder
            />

            {/* <ViewElement label='Type:' element={character?.episodes} /> */}
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
}
