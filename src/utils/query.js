async function POST(url,params,isJson){
  if(isJson == undefined){isJson = false};
  return request( url,merge({
    method: 'POST',
    body:isJson?JSON.stringify(params):FormdataWrapper(params),
  },isJson?merge(jsonConf,cookieTrue):cookieTrue),rapFlag);
}

async function GET(url,params){
  return request( url + `?${qs.stringify(params)}`,merge({
    method: 'GET',
  },cookieTrue));
}