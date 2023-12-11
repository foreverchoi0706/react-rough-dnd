import { type PointerEvent } from "react";

declare global {
    type DragAndDropHandler = (dragIndex: number, dropIndex: number) => void;
    type DnDContext =  {
        onPointerDown?: (e: PointerEvent<HTMLLIElement>, index: number) => void;
    }
}