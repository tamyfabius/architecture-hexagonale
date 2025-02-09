import {BaseCard} from '../../../domain/models/base-card.model';
import {Observable} from 'rxjs';
import {SearchCriteria} from '../../../domain/models/search-criteria.model';

export abstract class CardInputPort<T extends BaseCard = BaseCard, S extends SearchCriteria = SearchCriteria> {
  abstract getCards(): Observable<T[]>;

  abstract onSearch(criteria: S): void;
}
