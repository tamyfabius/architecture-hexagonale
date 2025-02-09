import {BaseCard} from '../../../domain/models/base-card.model';
import {SearchCriteria} from '../../../domain/models/search-criteria.model';
import {Observable} from 'rxjs';

export abstract class CardOutputPort<T extends BaseCard, U extends SearchCriteria = SearchCriteria> {
  abstract getCards(): Observable<T[]>;

  abstract search(criteria: U): Observable<T[]>;
}
