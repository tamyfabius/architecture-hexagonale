import {PokemonCardRepositoryPort} from '../../core/application/ports/pokemon-card-repository.port';
import {Observable, of} from 'rxjs';
import {electricPokemon1, PokemonCard, waterPokemonr1} from '../../core/domain/models/pokemon-card.model';

export class PokemonCardHttpRepository extends PokemonCardRepositoryPort {
  pokemons: PokemonCard[] = [
    electricPokemon1,
    waterPokemonr1
  ];

  getAll(): Observable<PokemonCard[]> {
    return of(this.pokemons);
  }

  get(): Observable<PokemonCard> {
    return of(this.pokemons[0]);
  }
}
