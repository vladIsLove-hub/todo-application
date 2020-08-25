export function dragAddClass(itemCLassList, addClassName = ''){
    setTimeout(() => {
        itemCLassList.add(addClassName)
        itemCLassList.add('selected')
    }, 0)
}

export function dragRemoveClass(itemCLassList, addClassName = ''){
    setTimeout(() => {
        itemCLassList.remove(addClassName)
        itemCLassList.remove('selected')
    }, 0)
}


