import {Pipe} from 'angular2/core';
@Pipe({
    name: 'SearchPipe'
})
export class SearchPipe {

    transform (value, [queryString]) {
        if (value==null) {
            return null;
        }
        console.log('transform');
        return value.filter(item=>item.broj_sedista.toUpperCase().indexOf(queryString.toUpperCase()) !== -1);
    }
}
