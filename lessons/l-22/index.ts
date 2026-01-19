
type StatusType = 'pending' | 'success' | 'reject';

// type CodeType = 200 | 400 | 500

let str:StatusType = 'pending';

let num:string = '201'

const bool:boolean = !1

str = 'success';
str = 'reject';

type UserType = {
  firstName: string
  age?: number
}

const obj:UserType = {
  firstName: 'Alex',
};


console.log(obj.age);


obj.age = 2342


type PostKeysType = 'title'|'description'|'date'|'count'

type PostType = Record<string, unknown>

const post:PostType = {
  title: 'dwadaw',
  description: 'dwadwadawdawdaw',
  date: '24:34:34',
  count: 24324,
  isReaded: false,
}

if (post.title && typeof post.title === 'string') {
  post.title
}

if (post.title && typeof post.title === 'number') {
  post.title
}

const arr:UserType[] = [obj, obj, obj];

arr.forEach(user => {
  user.firstName
});


type CommentType = {
  comment: string | number
}

const comment:CommentType = {
comment: 'dawdwa'
}

const sumComment = +comment.comment + +comment.comment

interface IUser {
  firstName: string,
  lastName: string,
  age: number
}

const user:IUser ={
  firstName: 'Alex',
  lastName: 'Smith',
  age: 25,
}


interface IEmployee extends IUser {
  jobName: string,
  jobAddress: string,
}

const employee:IEmployee = {
  firstName: 'Alex',
  lastName: 'Smith',
  age: 25,
  jobAddress: '',
  jobName: '',
}

type EmployeeType = UserType & {
  jobName: string,
  jobAddress: string,
}

const emp:EmployeeType = {
  firstName: '',
  age: 23,
  jobAddress: '',
  jobName: ''
}




type User2Type = {
  firstName: string
  age?: number
}


const myUser:UserType = {
  firstName: 'dawda',
  age: 54,
}


function getName(user:User2Type) {
  
}

getName(myUser)


const post1:{
  title: string
  description: string
} = {
  title: 'Title',
  description: 'dwadaw'
}




const langs = [
  {
    label: 'Казахский',
    code: 'kk',
  },
  {
    label: 'Английский',
    code: 'en',
  },
  {
    label: 'Русский',
    code: 'ru',
  },
] as const;

type CodeType = typeof langs[number]['code'];


type RoleType = 'ADMIN' | 'MODERATOR' | 'USER'
type AddressType = {
  zip?: number,
  country: string,
  city: string,
}

type PersonType = {
  firstName: string,
  lastName: string,
  age: number | null,
  role: RoleType,
  address: AddressType
}

const person:PersonType = {
  firstName: '',
  lastName: '',
  age: null,
  role: 'ADMIN',
  address: {
    country: '',
    city: '',
  }
}

