import { Task } from "./Task";
import {oneIndexCell, twoIndexCell, threeIndexCell, fourIndexCell} from './constants/constCellIndex'

export class LocalStorageItem extends Task{
    constructor(ONE_CELL, TWO_CELL, THREE_CELL, FOUR_CELL){
        super('.category__item')
        this.ONE_CELL = ONE_CELL
        this.TWO_CELL = TWO_CELL
        this.THREE_CELL = THREE_CELL
        this.FOUR_CELL = FOUR_CELL
    }
    
    addItemsFromLocalStore(arr = [], index){
        arr.map(item => {
            this.categorys[index].insertAdjacentHTML('beforeend', item)
        })
    }
    
    pasteItemsFromLocalStore(){
        let type = +this.select.value

        switch(type){
            case 1: 
                this.addItemsFromLocalStore(this.ONE_CELL, oneIndexCell)
                
            case 2:
                this.addItemsFromLocalStore(this.TWO_CELL, twoIndexCell)
                
            case 3:
                this.addItemsFromLocalStore(this.THREE_CELL, threeIndexCell)
                
            case 4:
                this.addItemsFromLocalStore(this.FOUR_CELL, fourIndexCell)
                break
        }
    }
    
}