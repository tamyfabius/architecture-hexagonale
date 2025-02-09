import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {PokemonCardFacade} from '../../../facades/pokemon-card.facade';
import {PokemonSearchCriteria} from '../../../core/domain/models/pokemon-search-criteria.model';
import {PokemonCardSearchComponent} from '../../components/pokemon-card-search/pokemon-card-search.component';
import {PokemonCardListComponent} from '../../components/pokemon-card-list/pokemon-card-list.component';
import {pokemonProviders} from '../../../configuration/pokemon.provider';

@Component({
  selector: 'pokemon-container',
  imports: [
    PokemonCardSearchComponent,
    PokemonCardListComponent
  ],
  providers: [
    ...pokemonProviders
  ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PokemonComponent {
  private readonly pokemonFacade = inject(PokemonCardFacade);
  searchPokemonCardForm = this.pokemonFacade.getSearchPokemonCardForm();
  pokemonCards = toSignal(this.pokemonFacade.getPokemonCards(), {
    initialValue: []
  });

  onSearchPokemonCard(): void {
    console.log('Search PokemonCard');
    const criteria: PokemonSearchCriteria = this.pokemonFacade.getPokemonSearchCriteria();
    console.log(criteria);
    this.pokemonFacade.searchPokemonCards(criteria);
  };
}
