import {Observable} from 'rxjs';
import {CardOutputPort} from '../ports/secondary/card-output.port';
import {BaseCard} from '../../domain/models/base-card.model';
import {SearchCriteria} from '../../domain/models/search-criteria.model';

export class CardSearchUseCase<T extends BaseCard, S extends SearchCriteria> {
  private apiCardGateway: CardOutputPort<T, S>;

  constructor(apiCardGateway: CardOutputPort<T, S>) {
    this.apiCardGateway = apiCardGateway;
  }

  search(criteria: S): Observable<T[]> {
    return this.apiCardGateway.search(criteria);
  }
}
