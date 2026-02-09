import {trackPromise} from 'react-promise-tracker';
import qs from 'querystring';

function validJson(str) {
	try {
		return JSON.parse(str);
	} catch (e) {
		return false;
	}
}

class FetchError extends Error {
	constructor(message, status, url){
		super();
		
		this.name = "Fetch";
		this.message = message;
		this.status = status;
		this.url = url;
	}
}

class ValidationError extends Error {
	constructor(errors, status, url){
		super();
		
		this.name = "ValidationError";
		this.message = errors[errors[0].message];
		this.errors = errors;
		this.status = status;
		this.url = url;
	}
}

export async function POST(url, data, headers = {}) {
  try {
    var respond = await trackPromise(
      fetch(url, {
        method: 'POST',
        body: qs.stringify(data),
        headers: {
          // 'Content-Type': 'application/json;charset=UTF-8',
          'Content-Type': 'application/x-www-form-urlencoded',
          // Accept: 'application/json, text/plain, */*',
          'Cache-Control': 'no-cache',
          ...headers,
        },
      }),
    );

    let text = await respond.text();
    let json = validJson(text);
    
    if (respond.ok) {
      return JSON.parse(text);
    } else if (respond.status === 422 || json.error?.details) {
      const { details } = json.error;
      throw new ValidationError(details, respond.status, url);
    } else if (json.error) {
      const { message } = json.error;
      throw new FetchError(message, respond.status, url);
    } else {
      throw new FetchError(json.message, respond.status, url);
    }
  } catch (err) {
    throw err;
  }
}


export async function GET(url, body = {}, headers = {}){
	try{
		const query = qs.stringify(body);

		var respond = await trackPromise(fetch(`${url}?${query}`,{
			method:"GET",
			headers:{
				'Content-Type':"application/json;charset=UTF-8",
				"Accept":"application/json, text/plain, */*",
				"Cache-Control":"no-cache",
				...headers
			}
		}));
		
		let text = await respond.text();
		let json = validJson(text);
		
    if (respond.ok) {
      return JSON.parse(text);
    } else if (respond.status === 422 || json.error?.details) {
      const { details } = json.error;
      throw new ValidationError(details, respond.status, url);
    } else if (json.error) {
      const { message } = json.error;
      throw new FetchError(message, respond.status, url);
    } else {
      throw new FetchError(json.message, respond.status, url);
    }
	} catch(err) {
		throw err;
	}
}