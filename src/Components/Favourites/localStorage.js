const getSavedProperty = () =>{
    const savedProperty = localStorage.getItem('property');
    if(savedProperty){
        return JSON.parse(savedProperty);
    }
    return [];
}
const removeFromSaved = (id) =>{
    id = parseInt(id);
    const savedProperty = getSavedProperty();
    const updateSavedProperty = savedProperty.filter(propertyId => propertyId !== id);
    localStorage.setItem('property',JSON.stringify(updateSavedProperty));
}


const saveProperty = id =>{
    id = parseInt(id);
    const storedProperty = getSavedProperty();
    const exist = storedProperty.find(bookId => bookId === id);
    if(!exist){
        storedProperty.push(id);
        localStorage.setItem('property',JSON.stringify(storedProperty));
    }
}
const checkSavedProperty = id =>{
    id = parseInt(id);
    const storedProperty = getSavedProperty();
    console.log(storedProperty)
    const exist = storedProperty.find(bookId => bookId === id);
    if(exist)
    {
        return true;
    }
    else
    {
        return false;
    }

}
export {saveProperty, getSavedProperty,removeFromSaved,checkSavedProperty};