export interface user {
  userId: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  pic: string;
  status: string;
  bio: string;
  interests: string;
  verified: boolean;
}

export interface post {
  postId: number;
  postText: string;
  likes: number;
}

export interface Profile {
  firstName: string;
  lastName: string;
  pic?: string;
  status?: string;
  bio?: string;
  interests?: string;
}
