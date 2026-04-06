import { createContext } from 'react';
import type { UserContextType } from '@/entities/user/model/types.ts';
import { DEFAULT_USER_CONTEXT } from '@/entities/user/model/user-default-values.ts';

export const UserContext = createContext<UserContextType>(DEFAULT_USER_CONTEXT);
