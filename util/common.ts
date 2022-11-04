export const _sortingObject = (objParam: any) =>
  Object.keys(objParam)
    .sort()
    .reduce((obj, key) => ((obj[key] = objParam[key]), obj), {});

export const handleOnchange = (text: string, input: string, setInputs: Function) => {
  setInputs((prevState: any) => ({ ...prevState, [input]: text }));
};
export const handleError = (error: string | null, input: string, setErrors: Function) => {
  setErrors((prevState: any) => ({ ...prevState, [input]: error }));
};
