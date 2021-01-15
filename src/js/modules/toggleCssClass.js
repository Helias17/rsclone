export default (element, className) => {
    element.classList.toggle(className);
    return false;
}