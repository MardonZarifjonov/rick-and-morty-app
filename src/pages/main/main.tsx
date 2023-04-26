import Container from 'components/layout/container';
import Loader from 'components/shared/loader';
import Pagination from 'components/shared/pagination';
import { useCharactersList } from 'hooks';
import Header from 'components/layout/header';
import Footer from 'components/layout/footer';
import Input from 'components/shared/input';
import Error from 'components/shared/error';
import { MainCard } from './main.card';

import styles from './styles.module.scss';

export function Main() {
  const { loading, isError, page, setPage, data, name, handleNameChange } =
    useCharactersList();

  return (
    <>
      <Header>
        <Input
          type='text'
          placeholder='Type character name'
          value={name}
          onChange={handleNameChange}
        />
      </Header>
      <Container className={styles.Main}>
        {loading && <Loader />}
        {isError && <Error title='Character not found' hideButton />}
        {!loading && !isError && (
          <div className={styles.CharacterList}>
            {data?.results?.map(
              (character) =>
                character && (
                  <MainCard key={character?.id} character={character} />
                )
            )}
          </div>
        )}
      </Container>
      <Footer>
        <Pagination
          currentPage={page}
          onPageChange={setPage}
          totalCount={data?.info?.count}
          isError={isError}
          loading={loading}
        />
      </Footer>
    </>
  );
}
