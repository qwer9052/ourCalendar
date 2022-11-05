import axios from 'axios';
import * as U from './asyncStorage';
import * as L from '../store/actions';
import { Token } from '../type/token';
import { navigationRef } from './navigationService';

export let serverUrl = 'http://192.168.0.9';

export let postServerPort = ':8100';
export let userServerPort = ':8080';

export let userBackServerUrl = serverUrl + userServerPort;
export let postBackServerUrl = serverUrl + postServerPort;

const intercepterReq = () => async (config: any) => {
  config.headers['Content-Type'] = 'application/json;';
  return config;
};

const jwtIntercepterReq = () => async (config: any) => {
  const token = await getToken();
  config.headers['Content-Type'] = 'application/json;';
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
};
const jwtIntercepterRes = () => async (error: any) => {
  //403 일경우 토큰 재요청
  if (error.response && error.response.status === 403) {
    console.log('403 권한 없음 로그아웃');
    //로그아웃 처리 필요
  } else {
    return Promise.reject(error);
  }
};

export const axiosInstance = axios.create({
  baseURL: `${userBackServerUrl}/v1`,
});

axiosInstance.interceptors.request.use(intercepterReq(), (err) => {
  return Promise.reject(err);
});

export const axiosJwtInstance = axios.create({
  baseURL: `${userBackServerUrl}/v1`,
});

axiosJwtInstance.interceptors.request.use(jwtIntercepterReq(), (err) => {
  return Promise.reject(err);
});

axiosJwtInstance.interceptors.response.use((response) => response, jwtIntercepterRes());

export function logout() {
  U.writeToStorage(
    'token',
    JSON.stringify({
      accessToken: {
        token: '',
        expiredIn: 0,
      },
      refreshToken: {
        token: '',
        expiredIn: 0,
      },
    }),
  );
  const currentRouteName = navigationRef?.current?.getCurrentRoute();
  if (currentRouteName) {
    if (currentRouteName.name != 'Landing') {
      navigationRef.reset({ routes: [{ name: 'Landing' }] });
    }
  } else {
    navigationRef.reset({ routes: [{ name: 'Landing' }] });
  }
}

export function getToken() {
  return new Promise(function (resolve, reject) {
    U.readFromStorage('token')
      .then(async (value) => {
        const storageToken = JSON.parse(value);
        const myRefreshToken = storageToken.refreshToken.token;
        let nowDate = new Date();
        let expiredInAccess = new Date(storageToken.accessToken.expiredIn);
        expiredInAccess.setMinutes(expiredInAccess.getMinutes() - 1);
        let expiredInRefresh = new Date(storageToken.refreshToken.expiredIn);
        expiredInRefresh.setDate(expiredInRefresh.getDate());
        if (nowDate.getTime() > expiredInAccess.getTime()) {
          //토큰만료
          console.log('엑세스 토큰만료');
          if (nowDate.getTime() > expiredInRefresh.getTime()) {
            //리프레시 토큰 만료
            //로그아웃
            console.log('리프레시 토큰 만료');
            logout();
          } else {
            //엑세스 토큰 만료
            axios
              .get(userBackServerUrl + '/v1/user/jwt/login', {
                headers: {
                  Authorization: `Bearer ${myRefreshToken}`,
                },
              })
              .then(async (req) => {
                console.log('엑세스 토큰 재발행');
                const { accessToken, refreshToken } = req.data;

                let token: Token = {
                  accessToken: accessToken,
                  refreshToken: refreshToken,
                };
                U.writeToStorage('token', JSON.stringify(token)).then(() => {
                  resolve(accessToken.token);
                });
              })
              .catch(() => logout());
          }
        } else {
          resolve(storageToken.accessToken.token);
        }
      })
      .catch((e) => {
        console.log('getToken 로직 오류');
        //logout();
        reject(e);
      });
  });
}
