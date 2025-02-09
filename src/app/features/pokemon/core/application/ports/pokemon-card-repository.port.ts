import {Observable} from 'rxjs';
import {PokemonCard} from '../../domain/models/pokemon-card.model';

export abstract class PokemonCardRepositoryPort {
  abstract getAll(): Observable<PokemonCard[]>;

  abstract get(): Observable<PokemonCard>;
}
