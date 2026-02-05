import { expect, test } from 'vitest'
import { Counter } from './sum.js'
import {userEvent} from '@testing-library/user-event';

test("Deve renderizar o valor inicial")