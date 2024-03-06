import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

export const dataResolver = (route: ActivatedRoute) => {
  return of('hello from resolver');
};
