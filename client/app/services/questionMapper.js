class questionMapper {
    constructor(question) {
        this.question = this.flatProps(question);
    }

    flatProps(object) {
        for(const prop in object) {
            if(typeof object[prop] == 'object' && !Array.isArray(object[prop])) {
                for(const key in object[prop]) {
                    object[key] = prop[key]
                }
                delete object[prop];
            }
        }
        return object;
    }

    getFieldsForQuestion() {
        var _this = this;
        var fields = [];
        for(const key in _this.question) {
            var field = {
                controller: '',
                value: '',
                title: '',
                toelichting: '',
                key: ''
            }
            switch(key) {
                case 'id':
                case 'titel':
                case 'tekst':
                case 'disclaimertekst':
                    field.controller = 'text',
                    field.value = _this.question[key],
                    field.title = key,
                    field.toelichting = `Vul de ${key} in`,
                    field.key = key
                    break;
                case 'verplicht':
                case 'tonen':
                case 'van_toepassing_bij_labels':
                case 'niet_van_toepassing_bij_labels':
                case 'van_toepassing_bij_verzekeringen':
                case 'niet_van_toepassing_bij_verzekeringen':
                    field.controller = 'radio',
                    field.value = _this.question[key],
                    field.title = key,
                    field.toelichting = `Vul de ${key} in`,
                    field.key = key
                    break;
                case 'vraagtype':
                    field.controller = 'dropdown',
                    field.values = [
                        'GESLOTEN_1',
                        'OPEN_1'
                    ],
                    field.title = key,
                    field.toelichting = `Vul de ${key} in`,
                    field.key = key 
                    break; 
                case 'control':
                    field.controller = 'dropdown',
                    field.values = [
                        'KALENDER',
                        'RADIOBUTTON_2K',
                        'TEKST',
                        'BUTTON',
                        'LABEL'
                    ],
                    field.title = key,
                    field.toelichting = `Vul de ${key} in`,
                    field.key = key 
                    break;
                case 'dialoogstap':
                    field.controller = 'dropdown',
                    field.values = [
                        'GEBEURTENIS'
                    ],
                    field.title = key,
                    field.toelichting = `Vul de ${key} in`,
                    field.key = key 
                    break; 
            }
            if(field.controller != "") { 
                fields.push(field);
            }
        }
        return fields;
    }
}

export default questionMapper;