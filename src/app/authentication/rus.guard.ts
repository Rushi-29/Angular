import { CanActivateFn } from '@angular/router';

export const rusGuard: CanActivateFn = (route, state) => {
  return true;
};
