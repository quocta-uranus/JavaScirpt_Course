function Validator (formSelector){

    function getParent(element,selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    
    }
    var formRules = { };
    // Quy ước tạo rule:
    // - nếu có lỗi thì return lại `error message`
    // - nếu không có lỗi thì return `undefined`
    var validatorRules = {
        required: function (value) {
            return value ? undefined : 'vui lòng nhập trường này';
        },
        email: function (value) {
              var regex= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            return regex.test (value) ? undefined : 'vui lòng nhập email !';
        },
        min: function (min) {
            return function (value) {
             
            return value.length >= min ? undefined : `vui lòng nhập ít nhất ${min} ký tự !`;
        }
        },
        
    };
    // Lấy ra form element trong DOM theo formSelector
    var formElement = document.querySelector(formSelector);

    //chỉ xử lý khí có element trong DOM
    if(formElement) {
        var inputs= formElement.querySelectorAll('[name][rules]');  
        for(var input of inputs) {

            var rules = input.getAttribute('rules').split('|');
            for(var rule of rules) {
                var ruleInfo;
                var isRuleHasValue = rule.includes(':');
                if(isRuleHasValue) { 
                     ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }

                var ruleFunc = validatorRules[rule];

                if (isRuleHasValue){
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }                   
                if(Array.isArray(formRules[input.name])){
                    formRules[input.name].push(ruleFunc);
                } else {

                    formRules[input.name] = [ruleFunc];
                }
            }

            // lắng nghe sự kiện để validate (blur, change,...)
            input.onblur = handleValidate;
            input.oninput = handleClearError;
           
        }
        //hàm thực hiện validate
        function handleValidate(event) {
            var rules = formRules[event.target.name];
            var errorMessage;
           rules.find(function(rule) {
                     errorMessage =  rule(event.target.value);
                     return errorMessage;
                });
                // nếu có lỗi thì hiện thị ra UI
                if (errorMessage ) {
                    var formGroup = getParent(event.target,'.form-group');
                   if(formGroup) {
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    if (formMessage) {
                        formMessage.innerText = errorMessage;
                        
                        
                    }
                   }
                }   
                return !errorMessage;
                
        }
            function handleClearError(event) {
                var formGroup = getParent(event.target,'.form-group');
                if (formGroup.classList.contains('invalid')) {
                    formGroup.classList.remove('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    if (formMessage) {
                        formMessage.innerText = '';
                    }
                 }
            }
           // console.log(formRules);
    }
    //Xử lý hành vi submit form
    formElement.onsubmit = function (event) { 
        event.preventDefault();  


         var inputs= formElement.querySelectorAll('[name][rules]');  
         var isValid = true;
        for(var input of inputs) {
           if( !handleValidate({ target: input }) ) {
                isValid = false;
           }

        }

        // khi không có lỗi thì submit form
        if (isValid) {
            formElement.submit();
           
        }
    }
   // console.log(formElement);
}
