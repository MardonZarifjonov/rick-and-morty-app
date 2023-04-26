import { InputProps } from 'components/shared/input';
import { CharacterListResponse } from 'declarations';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { getAllCharacters } from 'services/characters';
import { useDebounceValue } from './useDebouncedValue';

export function useCharactersList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    parseInt(searchParams.get('page') || '1', 10)
  );
  const [name, setName] = useState(searchParams.get('name') || '');
  const debouncedName = useDebounceValue(name);

  const { isLoading, isFetching, isError, data } =
    useQuery<CharacterListResponse>({
      queryKey: ['character', 'list', page, debouncedName],
      queryFn: () => getAllCharacters({ page, name: debouncedName }),
      keepPreviousData: true,
    });

  const handleSearchParams = () => {
    const params: { page?: string; name?: string } = {};

    if (name && name !== '') {
      params.name = name;
      setPage(1);
    }

    if (page) {
      params.page = String(page);
    }

    setSearchParams(params);
  };

  const handleNameChange: InputProps['onChange'] = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    handleSearchParams();
  }, [page, debouncedName]);

  return {
    loading: isLoading || isFetching,
    isError,
    page,
    setPage,
    data,
    name,
    handleNameChange,
  };
}
