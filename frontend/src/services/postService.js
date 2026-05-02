import api from './api';

export const fetchPosts = (params = {}) => {
  return api.get('/posts/', { params });
};

export const fetchPostBySlug = (slug) => {
  return api.get(`/posts/${slug}/`);
};
