'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

export type Lang =
    | 'en' | 'ro(' | 'pl' | 'pt' | 'it' | 'es' | 'de' | 'fr'
  | 'ru' | 'bg' | 'hu' | 'ar' | 'zh'