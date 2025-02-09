import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {PokemonCardItemComponent} from '../pokemon-card-item/pokemon-card-item.component';
import {PokemonCard} from '../../../core/domain/models/pokemon-card.model';

@Component({
  selector: 'pokemon-card-list',
  imports: [
    PokemonCardItemComponent
  ],
  templateUrl: './pokemon-card-list.component.html',
  styleUrl: './pokemon-card-list.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardListComponent {
  pokemonCards = input.required<PokemonCard[]>();
}
