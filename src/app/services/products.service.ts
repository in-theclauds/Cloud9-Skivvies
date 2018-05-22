import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';




@Injectable()
export class ProductlistService {

  constructor(private myHttp: Http) { }

  getAllProducts() {
    return this.myHttp.get('http://localhost:3000')
    .map((responseFromApi) => responseFromApi.json())
  }

  getOneProduct(theID){
    return this.myHttp.get(`http://localhost:3000/${theID}`)
    .map((responseFromApi) => responseFromApi.json())
  }


  deleteProduct(id){
    const body = {};
    return this.myHttp.post(`http://localhost:3000/task/delete/${id}`, body)
    .map((responseFromApi) => responseFromApi.json())
  }


  createNewProduct(theWholeProductObject){
    return this.myHttp.post(`http://localhost:3000/products`, theWholeProductObject)
    .map((responseFromApi) => responseFromApi.json())
  }


  updateProduct(theID, theUpdates){
    return this.myHttp.post(`http://localhost:3000/task/update/${theID}`, theUpdates)
    .map((responseFromApi) => responseFromApi.json())
  }


}