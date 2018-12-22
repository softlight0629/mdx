import { JSEncrypt } from 'jsencrypt';

const pubkey = `
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCfwyOyncSrUTmkaUPsXT6UUdXx
TQ6a0wgPShvebfwq8XeNj575bUlXxVa/ExIn4nOUwx6iR7vJ2fvz5Ls750D051S7
q70sevcmc8SsBNoaMQtyF/gETPBSsyWv3ccBJFrzZ5hxFdlVUfg6tXARtEI8rbIH
su6TBkVjk+n1Pw/ihQIDAQAB
-----END PUBLIC KEY-----`;

const encrypt = new JSEncrypt();
encrypt.setPublicKey(pubkey);

// 计算出服务器和本地时间的差值，本地时间比服务器时间快 ${diff}ms
const clientTimestamp = Date.now();
const serverTimestamp = window.appData.timestamp;
const diff = clientTimestamp - serverTimestamp;

export default (input) => {
  if (!input) return input;
  // 本地时间减去 ${diff} ms 为当前的服务端时间 (clientNow - clientStart + serverStart)
  const timestamp = Date.now() - diff;
  input = `${timestamp}:${input}`;
  return encrypt.encrypt(input, 'base64');
};