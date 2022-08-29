import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterestado'
})
export class FilterestadoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultTask = [];
    for(const task of value){
      if(task.estado == arg){
         resultTask.push(task);
      };
    };
    return resultTask;
  }

}
