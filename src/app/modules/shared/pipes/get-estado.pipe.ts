import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getEstado'
})
export class GetEstadoPipe implements PipeTransform {

  transform(estado?: boolean): string {
    if(estado){
      return "Completada";
    }else {
      return "Pendiente";
    }
  }

}
