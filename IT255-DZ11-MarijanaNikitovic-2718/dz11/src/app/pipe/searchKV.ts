import {Pipe} from 'angular2/core';
@Pipe({
    name: 'SearchPipeKV'
})
export class SearchPipeKV {

    transform (value, [queryString]) {
        if (value==null) {
            return null;
        }
        console.log('transform');
        return value.filter(item=>item.naziv_model.toUpperCase().indexOf(queryString.toUpperCase()) !== -1);

    }


}
