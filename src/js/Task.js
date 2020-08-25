import {ToDo} from './ToDo'
import {getDefaultTaskElemts, getCreatedDate, lastElem, deleteArrayItem, hiddenItemText, chekingArrayLength} from './utils'
import {onePriority, twoPriority, threePriority, fourPriority} from './constants/constPriority'
import {oneIndexCell, twoIndexCell, threeIndexCell, fourIndexCell} from './constants/constCellIndex'

export class Task extends ToDo{
    constructor(categorySelector){
        super(...getDefaultTaskElemts())
        this.categorys = document.querySelectorAll(categorySelector) || []
        this.itemsTexts = document.querySelectorAll('.category__complitly') || []
    }

    getDateCreating(){
        let date = this.date.value
        let innerDate = date.split('-').reverse().join('.')
        return innerDate
    }

    getTimeCreating(){
        let time
        if(this.time.value !== '' || this.time.value !== null){
            time = this.time.value
            return time
        } else {
            return ''
        }
    }

    getNameCreating(){
        let name
        if(this.taskName.value){
            name = this.taskName.value
            return name
        }
        return name
    }

    getId(){
        let id = 'i' + new Date().getSeconds()*111
        return id
    }

    get toHTML(){
        return `
        <div 
        draggable="true"
        id="${this.getId()}"
        class="reminder reminder_indent"
        data-reminder="true"
        >
            <div class="reminder__datetime">
                <p class="reminder__date">
                    ${this.getDateCreating()}
                </p>
                <p class="reminder__time">
                    ${this.getTimeCreating()}
                </p>
            </div>
            <div class="reminder__notify reminder__notify_indent">
                <button data-btn-complete="true" id="${this.getId()}" class="reminder__btn"></button>
                <p class="reminder__name">
                    ${this.getNameCreating()}
                </p>
                <p class="reminder__dateCreated">
                    <i>
                        Дата создания: ${getCreatedDate()}
                    </i>
                </p>
                <p data-countdown-id="${this.getId()}" class="reminder__countdown">
                    00:${this.counter}
                </p>
                <button data-id="${this.getId()}" data-btn-edit="true" title="Изменить" class="reminder__edit"></button>
                <button data-id="${this.getId()}" data-btn-destroy="true" title="Удалить" class="reminder__destroy">&#10006;</button>
            </div>
        </div>
        `
    }

    addItemsFromArray(array, index){
        array.push(this.toHTML)
        this.categorys[index].insertAdjacentHTML('beforeend', lastElem(array))
    }

    addItemToLocalStore(cell, arrayPriority){
        localStorage.setItem(cell, JSON.stringify(arrayPriority))
    }

    addTask(){
        let type = +this.select.value

            switch(type){
                case 1:
                    hiddenItemText(this.itemsTexts, 0)
                    this.addItemsFromArray(onePriority, oneIndexCell)
                    this.addItemToLocalStore('ONE_CELL', onePriority)
                    break
                case 2:
                    hiddenItemText(this.itemsTexts, 1)
                    this.addItemsFromArray(twoPriority, twoIndexCell)
                    this.addItemToLocalStore('TWO_CELL', twoPriority)
                    break
                case 3:
                    hiddenItemText(this.itemsTexts, 2)
                    this.addItemsFromArray(threePriority, threeIndexCell)
                    this.addItemToLocalStore('THREE_CELL', threePriority)
                    break
                case 4:
                    hiddenItemText(this.itemsTexts, 3)
                    this.addItemsFromArray(fourPriority, fourIndexCell)
                    this.addItemToLocalStore('FOUR_CELL', fourPriority)
                    break
                default:
                    return ''
            }

    }

    deleteTask(){
        document.addEventListener('click', (event) =>{
            if(event.target.hasAttribute('data-btn-destroy')){
                    let item = document.getElementById(`${event.target.dataset.id}`)
                    item.parentNode.removeChild(item)
                    deleteArrayItem(onePriority, 'ONE_CELL')
                    deleteArrayItem(twoPriority, 'TWO_CELL')
                    deleteArrayItem(threePriority, 'THREE_CELL')
                    deleteArrayItem(fourPriority, 'FOUR_CELL')
            }
        })
    }

    completeTask(){
        document.addEventListener('click', (event) => {
            if(event.target.hasAttribute('data-btn-complete')){
                let counter = 10
                const button = event.target
                button.disabled = true
                button.classList.add('reminder__btn-complete')
                let item = document.getElementById(`${event.target.id}`)
                item.classList.add('reminder-complete')
                const countdown = item.querySelector('.reminder__countdown')
                countdown.style.display = 'block'
                countdown.innerHTML = '00:10'
                setInterval(() => {
                    countdown.innerHTML = `00:${counter--}`
                }, 1000)
                const deleteBtn = item.querySelector('.reminder__destroy')
                setTimeout(() => {
                    deleteBtn.click()
                }, 11000)
                const taskName = button.nextElementSibling
                taskName.classList.add('reminder__name-complete')
            }
        })
    }

    textItemComplitly(){
        const itemsTexts = document.querySelectorAll('.category__complitly') || []
    
        chekingArrayLength(onePriority, itemsTexts, 0)
        chekingArrayLength(twoPriority, itemsTexts, 1)
        chekingArrayLength(threePriority, itemsTexts, 2)
        chekingArrayLength(fourPriority, itemsTexts, 3)
    }
}

