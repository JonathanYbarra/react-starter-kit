import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { MiddlewareAPI, Middleware, PayloadAction, Action } from '@reduxjs/toolkit';
import { type FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
// import router from 'router';

export const apiErrorMiddleware: Middleware =
  (_api: MiddlewareAPI) => (next) => (action: Action) => {
    if (
      isRejectedWithValue(action) &&
      action.type === 'api/executeQuery/rejected'
    ) {
      const apiAction = action as PayloadAction<FetchBaseQueryError>;
      if (apiAction.payload.status === 401) {
        // router.navigate(URL.ERROR_401);
      }

      if (apiAction.payload.status === 404) {
        // router.navigate(URL.ERROR_404);
      }

      if (apiAction.payload.status === 500) {
        // router.navigate(URL.ERROR_500);
      }
    }

    return next(action);
  };
