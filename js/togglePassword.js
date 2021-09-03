
function togglePasswordVisibility(element, input) {

    input = _(input);

    const type = input.getAttribute('type') === 'text' ? 'password' : 'text';
    const className = element.getAttribute('class') === 'far fa-eye-blocked' ? 'far fa-eye' : 'far fa-eye-blocked';

    input.setAttribute('type', type);
    element.setAttribute('class', className)


}

_("togglePassword").addEventListener('click', function () {
    togglePasswordVisibility(this, 'userpagePasswordInput')
});