// import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador.component";
// import { HeroeComponent } from "./heroe/heroe.component";
// import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations: [
        ContadorComponent,
    ],
    exports: [
        ContadorComponent,
    ]
})




export class ContadorModule {}