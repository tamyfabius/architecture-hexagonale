import {Observable} from 'rxjs';
import {PokemonCard} from '../../domain/models/pokemon-card.model';
import {PokemonSearchCriteria} from '../../domain/models/pokemon-search-criteria.model';

export abstract class PokemonCardPort {
  abstract getPokemonCards(): Observable<PokemonCard[]>;

  abstract getPokemonCard(): Observable<PokemonCard>;

  abstract searchPokemonCards(criteria: PokemonSearchCriteria): Observable<PokemonCard[]>;
}
