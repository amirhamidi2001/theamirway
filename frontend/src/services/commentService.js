import api from './api';

export const fetchCommentsByPost = (postId) => {
  return api.get('/comments/', { params: { post: postId } });
};

export const createComment = (data) => {
  return api.post('/comments/', data);
};
