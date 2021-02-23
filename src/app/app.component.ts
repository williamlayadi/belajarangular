import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  hasil = 100;
  a =0;
  b=0;
  item = {
    nama:"Jeruk" , harga:5000,satuan:"kg",
  }

  itemArray = [
    {nama:"Jeruk" , harga:5000,satuan:"kg"},
    {nama:"Apel" , harga:15000,satuan:"kg"}
  ]

  tampil : boolean = false;

  tulisanOPEN:String;

  OPEN(){
    this.tulisanOPEN = "Toko dibuka";
    alert("HALO")
  }

  values =""
  onKey(event:any){
    this.values += event.target.value +"|";
  }


}
