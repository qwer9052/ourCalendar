import { CommonActions } from '@react-navigation/native';

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

//뒤로가기 함수
export function goBack(propsNavigation: any) {
  // 페이지 interface props의 navigation을 파라미터로 사용해야함
  if (propsNavigation.canGoBack()) {
    propsNavigation.dispatch(CommonActions.goBack());
  } else {
    propsNavigation.reset({ routes: [{ name: 'Login' }] });
  }
}
