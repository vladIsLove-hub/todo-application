import { Task } from "../Task";
import { dragOver, dragStart } from "./drop.utils";

export class Drag_Drop extends Task{
    static dragItemClassName = '.reminder'

    constructor(categorySelector){
        super(categorySelector)
        this.dragItems = document.querySelectorAll(Drag_Drop.dragItemClassName) || []
    }
    
    moving(){
        this.categorys.forEach(category => {
            category.addEventListener('dragover', dragOver)
        })
    }

    moveStart(){
        console.log(this.dragItems)
        this.dragItems.forEach(dragItem => {
            console.log(dragItem)
            dragItem.addEventListener('dragstart', (event) => {
                event.target.classList.add('hide')
                debugger
            })
        })
    }
}