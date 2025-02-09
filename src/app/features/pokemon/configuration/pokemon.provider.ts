import {EnvironmentProviders, Provider} from '@angular/core';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeng/themes/aura';
import {pokemonCardPortImplFactory} from './pokemon.factory';
import {PokemonCardPort} from '../core/application/ports/pokemon-card.port';
import {PokemonCardRepositoryPort} from '../core/application/ports/pokemon-card-repository.port';
import {PokemonCardMockRespository} from '../infrastructure/repositories/pokemon-card-mock.respository';
import {PokemonCardFacade} from '../facades/pokemon-card.facade';

export const primengProviders: Provider | EnvironmentProviders = providePrimeNG({
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false,
      cssLayer: true
    }
  },
  ripple: true,
});

export const pokemonOutputPortProvider: Provider | EnvironmentProviders = {
  provide: PokemonCardRepositoryPort,
  useClass: PokemonCardMockRespository,
};
export const pokemonInputPortProvider: Provider | EnvironmentProviders = {
  provide: PokemonCardPort,
  useFactory: pokemonCardPortImplFactory,
  deps: [PokemonCardRepositoryPort],
};

export const pokemonProviders: Array<Provider> = [
  pokemonOutputPortProvider,
  pokemonInputPortProvider,
  PokemonCardFacade,
];
