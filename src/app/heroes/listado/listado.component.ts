import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent{

 heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Superman','Capitan America'];
 heroeBorrado: string='';
 
 borrarHeroe(){
  // console.log ('borrando' + ' ' + this.heroeBorrado);
  this.heroeBorrado = this.heroes.shift() || '';

 }
}


