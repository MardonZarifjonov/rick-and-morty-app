import {
  Character,
  CharacterListParams,
  CharacterListResponse,
} from 'declarations';
import { api } from 'services';

export async function getAllCharacters({
  name,
  page = 1,
}: CharacterListParams) {
  let params = '';

  if (name) {
    params += `?name=${name}`;
  }

  if (page) {
    params += params.includes('?') ? `&page=${page}` : `?page=${page}`;
  }

  const characters = await api.get<CharacterListResponse>(
    `/character/${params}`
  );

  return characters.data;
}

export async function getSingleCharacter(id: Character['id']) {
  const characters = await api.get<Character>(`/character/${id}`);

  return characters.data;
}
