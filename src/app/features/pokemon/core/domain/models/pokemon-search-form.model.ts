import {FormControl} from '@angular/forms';

export interface PokemonSearchForm {
  searchTerm: FormControl<string | null>;
}
