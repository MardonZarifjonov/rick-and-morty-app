import { Character } from 'declarations';
import { useQuery } from 'react-query';
import { getSingleCharacter } from 'services/characters';

export function useCharacterView(id: Character['id']) {
  const { isLoading, isFetching, isError, data } = useQuery({
    queryKey: ['character', 'view'],
    queryFn: () => getSingleCharacter(id),
  });

  return {
    loading: isLoading || isFetching,
    isError,
    character: data,
  };
}
