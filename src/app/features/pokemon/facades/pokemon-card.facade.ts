import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PokemonSearchForm} from '../core/domain/models/pokemon-search-form.model';
import {inject, Injectable} from '@angular/core';
import {PokemonSearchCriteria} from '../core/domain/models/pokemon-search-criteria.model';
import {PokemonCardPort} from '../core/application/ports/pokemon-card.port';
import {Observable} from 'rxjs';
import {PokemonCard} from '../core/domain/models/pokemon-card.model';

@Injectable()
export class PokemonCardFacade {
  private readonly pokemonCardPort: PokemonCardPort = inject(PokemonCardPort);

  getPokemonCards(): Observable<PokemonCard[]> {
    return this.pokemonCardPort.getPokemonCards();
  }

  getSearchPokemonCardForm(): FormGroup<PokemonSearchForm> {
    new FormGroup({});
    return inject(FormBuilder).group<PokemonSearchForm>({
      searchTerm: new FormControl(null, [Validators.required]),
    });
  }

  getPokemonSearchCriteria(): PokemonSearchCriteria {
    return {
      term: this.getSearchPokemonCardForm().get('searchTerm')?.value ?? ''
    } as PokemonSearchCriteria;
  }

  searchPokemonCards(criteria: PokemonSearchCriteria): Observable<PokemonCard[]> {
    return this.pokemonCardPort.searchPokemonCards(criteria);
  }
}
