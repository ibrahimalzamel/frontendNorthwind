import { Pipe, PipeTransform } from '@angular/core';
import { Porduct } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Porduct[], filterText: string): Porduct[] {
    filterText = filterText? filterText.toLocaleLowerCase():""
    
    return filterText?value
    .filter((p:Porduct)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }

}
