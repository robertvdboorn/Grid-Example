import { registerUniformComponent } from "@uniformdev/canvas-react";
import Grid from "./Grid";
import Card from "./Card";

registerUniformComponent({
    type: 'grid',
    component: Grid,
});

registerUniformComponent({
    type: 'card',
    component: Card
});