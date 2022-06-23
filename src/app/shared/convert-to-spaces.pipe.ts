import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'ConvertToSpaces' //this name is used as a reference in the html
})

//when implementing interface we have to use all the methods inside of it 
export class ConvertToSpacesPipe implements PipeTransform{
  transform(value: string,character:string):string {
      return value.replace(character,' ');
  }
}