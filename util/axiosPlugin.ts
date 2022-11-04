import axios from 'axios';
import * as U from './asyncStorage';
import * as L from '../store/actions';

export let backServerUrl = 'http://192.168.0.9:8080';

export const axiosInstance = axios.create({
  baseURL: `${backServerUrl}/v1`,
});

axiosInstance.interceptors.request.use(
  async (config: any) => {
    config.headers['Content-Type'] = 'application/json;';
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export const axiosJwtInstance = axios.create({
  baseURL: `${backServerUrl}/v1`,
});

axiosJwtInstance.interceptors.request.use(
  async (config: any) => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NzQ5MzU5MiwiZXhwIjoxNjY3NDk1MzkyfQ.hz2Y9t6k6ccFTSacOtZHE4-rwtVx-mQ4aE_YLsffgDI';
    config.headers['Content-Type'] = 'application/json;';
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

axiosJwtInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    //403 일경우 토큰 재요청
    if (error.response && error.response.status === 403) {
      console.log('403 권한 없음 로그아웃');
      //로그아웃 처리 필요
    } else {
      return Promise.reject(error);
    }
  },
);

export const asyncGetAxios = (url: string) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(url)
      .then((res: any) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

export const asyncPostAxiosJwt = (url: string, param?: {}, errCallback?: Function) => {
  return new Promise((resolve, reject) => {
    axiosJwtInstance
      .post(url, param)
      .then((res: any) => {
        resolve(res);
      })
      .catch((err) => {
        if (errCallback) {
          errCallback(err);
        }
      });
  });
};

export const asyncGetAxiosJwt = (url: string, errCallback?: Function) => {
  return new Promise((resolve, reject) => {
    axiosJwtInstance
      .get(url)
      .then((res: any) => {
        resolve(res);
      })
      .catch((err) => {
        if (errCallback) {
          errCallback(err);
        }
      });
  });
};

export const asyncDeleteAxiosJwt = (url: string, param?: {}, errCallback?: Function) => {
  return new Promise((resolve, reject) => {
    axiosJwtInstance
      .delete(url, { data: param, withCredentials: true })
      .then((res: any) => {
        resolve(res);
      })
      .catch((err) => {
        if (errCallback) {
          errCallback(err);
        }
      });
  });
};
