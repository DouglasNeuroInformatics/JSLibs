import * as SheetPrimitive from '@radix-ui/react-dialog';

import { SheetContent } from './SheetContent';
import { SheetDescription } from './SheetDescription';
import { SheetFooter } from './SheetFooter';
import { SheetHeader } from './SheetHeader';
import { SheetTitle } from './SheetTitle';

export const Sheet = Object.assign(SheetPrimitive.Root, {
  Close: SheetPrimitive.Close,
  Content: SheetContent,
  Description: SheetDescription,
  Footer: SheetFooter,
  Header: SheetHeader,
  Portal: SheetPrimitive.Portal,
  Title: SheetTitle,
  Trigger: SheetPrimitive.Trigger
});
