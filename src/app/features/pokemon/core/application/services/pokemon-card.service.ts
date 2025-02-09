import {PokemonCardPort} from '../ports/pokemon-card.port';
import {Observable} from 'rxjs';
import {PokemonCard} from '../../domain/models/pokemon-card.model';
import {PokemonSearchCriteria} from '../../domain/models/pokemon-search-criteria.model';
import {PokemonCardRepositoryPort} from '../ports/pokemon-card-repository.port';
import {GetPokemonCardsUsecase} from '../usecases/get-pokemon-cards.usecase';
import {SearchPokemonCardsUsecase} from '../usecases/search-pokemon-cards.usecase';
import {GetPokemonCardUsecase} from '../usecases/get-pokemon-card.usecase';

export class PokemonCardService implements PokemonCardPort {

  private getPokemonCardsUsecase: GetPokemonCardsUsecase;
  private getPokemonCardUsecase: GetPokemonCardUsecase;
  private searchPokemonCardsUsecase: SearchPokemonCardsUsecase;

  constructor(pokemonRepositoryAbstract: PokemonCardRepositoryPort) {
    this.getPokemonCardsUsecase = new GetPokemonCardsUsecase(pokemonRepositoryAbstract);
    this.getPokemonCardUsecase = new GetPokemonCardUsecase(pokemonRepositoryAbstract);
    this.searchPokemonCardsUsecase = new SearchPokemonCardsUsecase(pokemonRepositoryAbstract);
  }

  getPokemonCards(): Observable<PokemonCard[]> {
    return this.getPokemonCardsUsecase.execute();
  }

  getPokemonCard(): Observable<PokemonCard> {
    return this.getPokemonCardUsecase.execute();
  }

  searchPokemonCards(criteria: PokemonSearchCriteria): Observable<PokemonCard[]> {
    return this.searchPokemonCardsUsecase.execute(criteria);
  }
}
