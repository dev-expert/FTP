var createno = 1;
var create = () => {

    document.write(`<input type="text" placeholder="email address" id="email_address${createno}" required>`);
    createno++;
    document.write(getElementById('email_address1').value);

}
document.write(getElementById('email_address1').value);