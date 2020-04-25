/**
 *
 * @author Francesco Arcieri  (http://francescoarcieri.it)
 * @license MIT
 */

   function sendEmail(name, email) {

     var templateParams = {
       name: name,
       email: email
     };
     console.log(templateParams);

     if (!isValidEmail(email)){
          $('#notValidEmailModal').modal();
       }

     else {
     //console.log("sending email")
     emailjs.send('amazon_ses', 'template_fgCg7fyE', templateParams)
         .then(function(response) {
            //console.log('SUCCESS!', response.status, response.text);
            $('#sentEmailModal').modal()
         }, function(error) {
            console.log('FAILED...', error);
         });
   }
 }

   function isValidEmail(input_to_validate){
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input_to_validate)){
    return (true)
    }
   return (false)
   }
