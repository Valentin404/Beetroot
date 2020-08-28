const setValue = {
    text: v => v,
    number: v=> v,
    checbox: v=>v,
    email: v=>v,
    textarea: v=>v,
    password: v=>v,
    number: v=> v,

}
const setFormObj = (data, fn) => ({target}) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    return fn({...data, [target.name]: setValue[target.name](value)})
}