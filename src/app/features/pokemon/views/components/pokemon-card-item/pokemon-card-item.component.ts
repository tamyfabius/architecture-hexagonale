import {Component, input, InputSignal} from '@angular/core';
import {PokemonCard} from '../../../core/domain/models/pokemon-card.model';
import {Card} from 'primeng/card';

@Component({
  selector: 'app-pokemon-card-item',
  imports: [Card],
  templateUrl: './pokemon-card-item.component.html',
  styleUrl: './pokemon-card-item.component.scss',
  standalone: true
})
export class PokemonCardItemComponent {
  pokemon: InputSignal<PokemonCard> = input.required<PokemonCard>();
}
