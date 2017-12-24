export const arrayFilter = (array, fields, key) => {
    if (!array || array.length <= 0)
        return null;
    if (key === null || key === undefined)
        return array;
    if (!fields || fields.length <= 0)
        return array;
    return array.filter(function (item) {
        let fieldFlag = false;
        fields.some(function (field,index) {
            fieldFlag = item[field] && (item[field].toLowerCase().indexOf(key.toLowerCase()) !== -1)
            return fieldFlag;
           
        });

        return fieldFlag;
    });
}