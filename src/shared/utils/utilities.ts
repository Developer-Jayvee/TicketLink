
export const setParamsData = (data : string) => {
    return data.replace(' ','+');
}

export const ucFirst = (data : string) => {
    return data.charAt(0).toUpperCase() + data.slice(1);
}