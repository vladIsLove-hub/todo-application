import { dragAddClass, dragRemoveClass} from "./drop.utils";

export class Drag_Drop{
    static dragItemClassName = '.reminder'
            
    constructor(){
        this.categorys = document.querySelectorAll('.category__item')
    }
    
    moving(){
        this.categorys.forEach(category => {
            category.addEventListener('dragover', (event) => {
                event.preventDefault()
                const $activeElem = document.querySelector('.selected')
                const $currentElem = event.target
                if($currentElem.classList.contains('category__item')){
                    return
                }
                const isMoveble = $activeElem !== $currentElem && $currentElem.classList.contains('reminder')
                
                if(isMoveble){
                    return
                }
                console.log('Active elem', $activeElem)
                console.log('Current elem', $currentElem)
                const $nextElem = ($currentElem === $activeElem.nextElementSibling) ?
                    $currentElem.nextElementSibling : $currentElem
                category.insertBefore($activeElem, $nextElem)
            })
        })
    }

    move(...events){
        document.addEventListener('mouseover', (evt) => {
            if(evt.target.hasAttribute('data-reminder')){
                const remindersDOMCollection = document.querySelectorAll('.reminder') || []
                remindersDOMCollection.forEach(dragItem => {
                    events.forEach(event => {
                        dragItem.addEventListener(event, (ev) => {
                            const elClassList = ev.target.classList

                            switch(event){
                                case 'dragstart':
                                    dragAddClass(elClassList, 'hide')
                                    break
                                case 'dragend': 
                                    dragRemoveClass(elClassList, 'hide')
                                    break
                            }
                        })
                    })
                })
            }
        })
    }
}

