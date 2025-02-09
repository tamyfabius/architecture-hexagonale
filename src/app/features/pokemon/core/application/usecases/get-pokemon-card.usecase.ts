import {PokemonCardRepositoryPort} from '../ports/pokemon-card-repository.port';
import {PokemonCard} from '../../domain/models/pokemon-card.model';
import {Observable} from 'rxjs';

export class GetPokemonCardUsecase {

  private pokemonRepositoryAbstract: PokemonCardRepositoryPort;

  constructor(pokemonRepositoryAbstract: PokemonCardRepositoryPort) {
    this.pokemonRepositoryAbstract = pokemonRepositoryAbstract;
  }

  execute(): Observable<PokemonCard> {
    return this.pokemonRepositoryAbstract.get();
  }
}
