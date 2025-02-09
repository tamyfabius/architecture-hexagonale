import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {SearchBarComponent} from '../../../../../shared/components/search-bar/search-bar.component';
import {PokemonCardFacade} from '../../../facades/pokemon-card.facade';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'pokemon-card-search',
  imports: [SearchBarComponent],
  templateUrl: './pokemon-card-search.component.html',
  styleUrl: './pokemon-card-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [
    PokemonCardFacade,
  ],
})
export class PokemonCardSearchComponent {
  form = input.required<FormGroup>();
  searchPokemonCards = output<void>();

  onSearchPokemonCard(): void {
    this.searchPokemonCards.emit();
  }
}
