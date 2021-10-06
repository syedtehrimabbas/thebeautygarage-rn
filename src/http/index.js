export const BASE_API_URL = "https://thebeautygarage.pk/api/";
export const BASE_IMAGE_URL = "https://thebeautygarage.pk/assets/images/";
// export const BASE_IMAGE_URL = "https://cdn.matchelitemuslim.com/storage/";
let endPoints = {
  home: {
    productsByType: "products/",
    brands: "brands",
    category: "category/",
    sliders: "sliders",
    subCategory: "sub-category/",
    productDetails: "product/",
    allCategories: "categories",
  },
};

class Http {
  getAbsoluteUrl = (endPoint) => {
    // console.log("End Point=> " + endPoint + "\nUrl=> ", BASE_API_URL);
    console.log("RequestURL=> " + BASE_API_URL + endPoint);
    return BASE_API_URL + endPoint;
  };

  getAbsoluteImageUrl = (image) => {
    if (image === "image" || image === "" || image === undefined || image === null)
      return "https://alliancebjjmn.com/wp-content/uploads/2019/07/placeholder-profile-sq.jpg";
    else
      return BASE_IMAGE_URL + image;
  };

  _productByType(type, callBack) {
    const url = this.getAbsoluteUrl(`${endPoints.home.productsByType}${type}`);
    this.getHttpRequest(url, callBack);
  }


  _brands(callBack) {
    const url = this.getAbsoluteUrl(endPoints.home.brands);
    this.getHttpRequest(url, callBack);
  }

  _allCategories(callBack) {
    const url = this.getAbsoluteUrl(endPoints.home.allCategories);
    this.getHttpRequest(url, callBack);
  }

  _productByCatId(category_id, callBack) {
    const url = this.getAbsoluteUrl(`${endPoints.home.category}${category_id}`);
    this.getHttpRequest(url, callBack);
  }

  _productBySubCatId(sub_category_id, callBack) {
    const url = this.getAbsoluteUrl(`${endPoints.home.subCategory}${sub_category_id}`);
    this.getHttpRequest(url, callBack);
  }

  _productDetailsById(id, callBack) {
    const url = this.getAbsoluteUrl(`${endPoints.home.productDetails}${id}`);
    this.getHttpRequest(url, callBack);
  }

  _homeSliders(callBack) {
    const url = this.getAbsoluteUrl(endPoints.home.sliders);
    this.getHttpRequest(url, callBack);
  }

  postCall(formData, callBack) {
    const url = this.getAbsoluteUrl(endPoints.home.productsByType);
    this.postHttpRequest(url, formData, callBack, false);
  }

  postHttpRequest(url, formData, callBack, authRequired) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Accept", "application/json");
    this.httpRequest(xhr, formData, callBack);
  }

  getHttpRequest(url, callBack) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    this.httpRequest(xhr, new FormData(), callBack);
  }

  httpRequest = (xhr, formData, callBack) => {

    xhr.onload = async () => {
      try {
        const response = JSON.parse(xhr.response);
        console.log("Response=> Start");
        console.log("Response", response);
        console.log("Response=> END");
        callBack(response.status === 200, response);
      } catch (e) {
        const response = xhr.response;
        callBack(true, response);
      }
    };
    xhr.onerror = e => {
      console.log("Error", e);
      callBack(false, e.message);
    };
    xhr.ontimeout = e => {
      console.log(e, "upload timeout");
      callBack(false, e.message);
    };

    xhr.send(formData);
  };
}

const HttpService = new Http();
export default HttpService;
