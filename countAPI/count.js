define(function(){

    function countFactory(settings){
       
        count.$inject = ['global', 'done'];
        return {name:'countAPI', script:{play:count}};

        function count(global, done){
            var globalKey = 'globalKey' in settings ? settings.globalKey : '$globalKey';
            var url = 'https://api.countapi.xyz/hit/{{ns}}/{{key}}'
                .replace('{{ns}}', settings.namespace)
                .replace('{{key}}', settings.key);

            var xhr = new XMLHttpRequest();
            xhr.open('GET',url);
            xhr.responseType = 'json';
            xhr.onload = function() {
                global[globalKey] = this.response.value;
                done();
            }
            xhr.send();
        }
    }
    return countFactory;
});
