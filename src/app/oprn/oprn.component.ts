import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-oprn',
  templateUrl: './oprn.component.html',
  styleUrls: ['./oprn.component.scss']
})
export class OprnComponent implements OnInit{

  title!: string;
  description!: string;
  createdDate!: Date;
  tuto!: number;
  imageUrl!: string;
  text!:string;

  ngOnInit() {
    this.title = "Ceci est un test";
    this.description="Ceci est un cours Angular";
    this.createdDate= new Date();
    this.tuto = 3;
    this.text="cliquer";
    this.imageUrl ="https://www.editions-delcourt.fr/sites/default/files/styles/bandeau_s/public/2020-06/blagues-de-toto-bandeau.jpg?h=bf654dbc&itok=ob5QejyB";
  }
  onAddTuto(){
    if (this.text==="cliquer"){
    this.tuto++;
    this.text="decliquer";
    }else{
      this.tuto--;
      this.text="cliquer";
    }

  }
}
