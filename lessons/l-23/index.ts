


// let test:any = 24;

// test = 'dwadaw'

// test.toLowerCase();

type UserType = {
  firstName: string,
  lastName: string,
};

const user = {
  firstName: 'Alex',
  lastName: 'Smith',
}

function getName(user:UserType):string {
  return ''
}

function getMyName(user:UserType):void {

}

type UserActions = {
  getName: () => string
}

const wdawdw:UserActions = {
  getName: () => {
    return ''
  }
}

const wdwadaw = getName(user);



function getMessage(message:string):never {
  throw new Error(message);
}


function test<T>(value: T):T {
  return value
}

function getUniqueValues<T, K extends keyof T>(
  arr: T[],
  key: K
): T[K][] {
  return [...new Set(arr.map(item => item[key]))];
}

type MockUserType = {
  name: string,
  age: number,
}

const arr:MockUserType[] = [
// const arr:Array<MockUserType> = [
  {
    name: 'Alex',
    age: 25,
  },
  {
    name: 'John',
    age: 20,
  },
  {
    name: 'Alex',
    age: 27,
  },
  {
    name: 'Will',
    age: 25,
  }
];


const uniq_names = getUniqueValues(arr, 'name') // ['Alex','John','Will']
const uniq_ages = getUniqueValues(arr, 'age') // [25,20,27]


export const el:HTMLButtonElement | null = document.querySelector('button');

function submit(event:SubmitEvent) {
  event.preventDefault();
}

