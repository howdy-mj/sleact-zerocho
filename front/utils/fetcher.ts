import axios from 'axios';

// withCredentials: 백, 프론트 간의 쿠키 매핑
// withCredentials는 get에서 두 번째 인자, post에서는 세 번째 인자
const fetcher = (url: string) => axios.get(url, { withCredentials: true }).then((response) => response.data);

export default fetcher;
