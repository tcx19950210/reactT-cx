import { baseUrl, otherUrl } from "./env";
//import 'whatwg-fetch'

export default async (
  url = "",
  data = {},
  type = "GET",
  method = "fetch",
  flag = "1"
) => {
  type = type.toUpperCase();
  if (flag == "1") {
    url = baseUrl + url;
  } else {
    url = otherUrl + url;
  }

  if (type == "GET") {
    let dataStr = ""; //数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + "=" + data[key] + "&";
    });

    if (dataStr !== "") {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf("&"));
      url = url + "?" + dataStr;
    }
  }

  if (window.fetch && method == "fetch") {
    let requestConfig = {
      // credentials: 'include',
      method: type,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      },
      mode: "cors",
      cache: "no-cache"
    };

    if (type == "POST") {
      Object.defineProperty(requestConfig, "body", {
        value: JSON.stringify(data)
      });
    }

    try {
      const response = await fetch(url, requestConfig);
      if (typeof response !== "object") {
        return response;
      } else {
        const responseJson = await response.json();
        return responseJson;
      }
    } catch (error) {
      throw new Error(error);
    }
  } else {
    return new Promise((resolve, reject) => {
      let requestObj;
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest();
      } else {
        // requestObj = new ActiveXObject();
      }

      let sendData = "";
      if (type == "POST") {
        sendData = JSON.stringify(data);
      }

      requestObj.open(type, url, true);
      requestObj.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      requestObj.send(sendData);

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState == 4) {
          if (requestObj.status == 200) {
            let obj = requestObj.response;
            if (typeof obj !== "object" && obj !== "" && obj !== null) {
              obj = JSON.parse(obj);
            }
            resolve(obj);
          } else {
            reject(requestObj);
          }
        }
      };
    });
  }
};
