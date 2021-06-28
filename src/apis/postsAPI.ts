import axiosInstance from '../utils/axiosInstance';

const postsAPI = {
  getPosts: async () => {
    const res = await axiosInstance.get('/posts');
    return res.data;
  },
  getOnePost: async (id:string) => {
    const res = await axiosInstance.get(`/posts/${id}`);
    return res.data;
  },
};

export default postsAPI;
