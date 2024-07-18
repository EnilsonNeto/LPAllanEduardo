function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };
  
    const serviceId = "service_8vaqjnb";
    const templateId = "template_o55qkfa";
  
    emailjs.send(serviceId, templateId, params)
      .then(function(response) {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        alert("Mensagem enviada com sucesso!, por favor aguarde...");
      }, function(error) {
        console.log("FAILED...", error);
      });
  }
  
  (function(){
    emailjs.init("ilik8t_o7hFtZbVBH");
  })();