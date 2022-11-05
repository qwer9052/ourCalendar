import { del, postType } from './enum';
import { User } from './user';

export type Post = {
  postId: number;
  title: string;
  content: string;
  creDt: string;
  postType: postType;
  del: del;
  user: User;
};
