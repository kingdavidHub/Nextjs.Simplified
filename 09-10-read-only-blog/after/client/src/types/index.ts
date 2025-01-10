export interface TodoProps {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: number;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  }
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

export interface UserPostsProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}