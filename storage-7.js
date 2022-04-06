const addToStorage = () => {
    const inputId = document.getElementById('id-storage');
    const id = inputId.value;
    const inputvalue = document.getElementById('value-storage');
    const values = inputvalue.value;

    localStorage.setItem(id, values);
    inputId.value = '';
    inputvalue.value = '';

}