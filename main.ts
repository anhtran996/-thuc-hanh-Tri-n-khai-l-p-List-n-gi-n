import {ArrayList} from "./ArrayList";
interface Post{
    title: string
}


let arraylist = new ArrayList<Post>()
arraylist.add({title: 'lap trinh ts'});
arraylist.add({title: 'lap trinh js'});
arraylist.add({title: 'lap trinh code gym'});

console.log(arraylist.container)