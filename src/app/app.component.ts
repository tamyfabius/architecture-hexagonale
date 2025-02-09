import {Component} from '@angular/core';
import {PokemonComponent} from './features/pokemon/views/containers/pokemon/pokemon.component';

@Component({
  selector: 'app-root',
  imports: [
    PokemonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
}
