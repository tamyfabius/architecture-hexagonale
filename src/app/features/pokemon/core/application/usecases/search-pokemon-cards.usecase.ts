import {PokemonCardRepositoryPort} from '../ports/pokemon-card-repository.port';
import {PokemonSearchCriteria} from '../../domain/models/pokemon-search-criteria.model';
import {Observable} from 'rxjs';
import {PokemonCard} from '../../domain/models/pokemon-card.model';

export class SearchPokemonCardsUsecase {

  private pokemonRepositoryAbstract: PokemonCardRepositoryPort;

  constructor(pokemonRepositoryAbstract: PokemonCardRepositoryPort) {
    this.pokemonRepositoryAbstract = pokemonRepositoryAbstract;
  }

  execute(criteria: PokemonSearchCriteria): Observable<PokemonCard[]> {
    return this.pokemonRepositoryAbstract.getAll()
  }
}
