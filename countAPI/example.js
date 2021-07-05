define(['managerAPI','https://cdn.jsdelivr.net/gh/minnojs/minno-plugins@1/countAPI/count.js'], function(Manager, count){

	var API = new Manager();

	API.addSequence([
        count({namespace: 'ez.implicit', key:'countAPI.example'}),
        {
            type: 'setValue',
            variableName: 'condition',
            fn: function(global){ return API.getGlobal().$countAPI % 2 ? 'questFirst' : 'testFirst'; },
            post: true // save condition to server
        },
        {
            mixer: 'branch',
            conditions: [ {compare: 'global.condition', to: 'questFirst', DEBUG:true} ],
            data: [
                {type:'message', template:'Questionaire', keys: ' '},
                {type:'message', template:'Test', keys: ' '}
            ],
            elseData: [
                {type:'message', template:'Test', keys: ' '},
                {type:'message', template:'Questionaire', keys: ' '}
            ]
        }
    ]);

	return API.script;
});


