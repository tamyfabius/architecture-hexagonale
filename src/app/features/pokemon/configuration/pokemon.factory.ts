import {PokemonCardRepositoryPort} from '../core/application/ports/pokemon-card-repository.port';
import {PokemonCardService} from '../core/application/services/pokemon-card.service';

export function pokemonCardPortImplFactory(
  pokemonCardRepositoryPort: PokemonCardRepositoryPort
): PokemonCardService {
  return new PokemonCardService(pokemonCardRepositoryPort);
}
