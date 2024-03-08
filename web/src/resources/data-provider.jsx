import { fetchAuthSession } from 'aws-amplify/auth';
import { post, get, put } from 'aws-amplify/api';

async function FetchPost(path, reqbody=null, apiName='PolicyEvalService') {
  var request = await ContructRequest(path, reqbody, apiName);
  const restOperation =  await post(request);
  const { body, statusCode } = await restOperation.response;
  return await body.json();
}

async function FetchPut(path, reqbody=null, apiName='PolicyEvalService') {
  var request = await ContructRequest(path, reqbody, apiName);
  const restOperation =  await put(request);
  const { body, statusCode } = await restOperation.response;
  return await body.json();
}

async function FetchGet(path, reqbody=null, apiName='PolicyEvalService') {
  var request = await ContructRequest(path, reqbody, apiName);
  const restOperation =  await get(request);
  const { body, statusCode } = await restOperation.response;
  return await body.json();
}

async function ContructRequest(path, reqbody, apiName) {
  return {
    apiName: apiName,
    path: path,
    options: {
      body: reqbody,
      headers: {
        Authorization: (await fetchAuthSession()).tokens?.idToken?.toString(),
        "x-api-key": process.env.REACT_APP_APIGATEWAY_API_KEY
      },
      queryParams: null
    }
  }
}

const ModerationCategories = [
  {
      name: "Explicit",
      items: [
          {name: "Explicit Nudity"},
          {name: "Explicit Sexual Activity"},
          {name: "Sex Toys"},
          {name: "Sexual Activity"},
          {name: "Illustrated Explicit Nudity"},
          {name: "Adult Toys"}
      ],
  },
  {
    name: "Non-Explicit Nudity of Intimate parts and Kissing",
    items: [
        {name: "Non-Explicit Nudity"},
        {name: "Obstructed Intimate Parts"},
        {name: "Kissing on the Lips"}
    ],
  },
  {
    name: "Swimwear or Underwear",
    items: [
        {name: "Female Swimwear or Underwear"},
        {name: "Male Swimwear or Underwear"},
    ],
  },
  {
    name: "Violence",
    items: [
        {name: "Weapons"},
        {name: "Graphic Violence"},
    ],
  },
  {
    name: "Visually Disturbing",
    items: [
        {name: "Death and Emaciation"},
        {name: "Crashes"},
    ],
  },
  {
    name: "Drugs & Tobacco",
    items: [
        {name: "Products"},
        {name: "Drugs & Tobacco Paraphernalia & Use"},
    ],
  },
  {
    name: "Alcohol",
    items: [
        {name: "Alcohol Use"},
        {name: "Alcoholic Beverages"},
    ],
  },
  {
    name: "Rude Gestures",
    items: [
        {name: "Middle Finger"},
    ],
  },
  {
    name: "Gambling",
    items: [],
  },
  {
    name: "Hate Symbols",
    items: [
        {name: "Nazi Party"},
        {name: "White Supremacy"},
        {name: "Extremist"},
    ],
  },
]

const ModerationCategoriesV61 = [
  {
      name: "Explicit Nudity",
      items: [
          {name: "Nudity"},
          {name: "Graphic Male Nudity"},
          {name: "Graphic Female Nudity"},
          {name: "Sexual Activity"},
          {name: "Illustrated Explicit Nudity"},
          {name: "Adult Toys"}
      ],
  },
  {
      name: "Suggestive",
      items: [
          {name: "Female Swimwear Or Underwear"},
          {name: "Male Swimwear Or Underwear"},
          {name: "Partial Nudity"},
          {name: "Barechested Male"},
          {name: "Revealing Clothes"},
          {name: "Sexual Situations"},
      ]
  },
  {
      name: "Violence",
      items: [
          {name: "Graphic Violence Or Gore"},
          {name: "Physical Violence"},
          {name: "Weapon Violence"},
          {name: "Weapons"},
          {name: "Self Injury"}
      ]
  },
  {
    name: "Visually Disturbing",
    items: [
        {name: "Emaciated Bodies"},
        {name: "Corpses"},
        {name: "Hanging"},
        {name: "Air Crash"},
        {name: "Explosions And Blasts"}
    ]
  },
  {
    name: "Rude Gestures",
    items: [
        {name: "Middle Finger"}
    ]
  },
  {
    name: "Drugs",
    items: [
        {name: "Drug Products"},
        {name: "Drug Use"},
        {name: "Pills"},
        {name: "Drug Paraphernalia"}
      ]
  },
  {
    name: "Tobacco",
    items: [
        {name: "Tobacco Products"},
        {name: "Smoking"}
    ]
  },
  {
    name: "Alcohol",
    items: [
        {name: "Drinking"},
        {name: "Alcoholic Beverages"}
      ]
  },
  {
    name: "Gambling",
    items: [
        {name: "Gambling"}
      ]
  },
  {
    name: "Hate Symbols",
    items: [
        {name: "Nazi Party"},
        {name: "White Supremacy"},
        {name: "Extremist"}
    ]
  }
]
export {FetchPost, FetchPut, FetchGet, ModerationCategories};