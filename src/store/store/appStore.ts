import { create } from 'zustand';

import { immer } from 'zustand/middleware/immer';

import { AppStoreState } from './types';
import { createThemeSlice } from '../slice';

export const appStore = create<AppStoreState>()(
  immer((...api) => ({
    Theme: createThemeSlice(...api),
  })),
);
