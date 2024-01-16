import { GoogleService } from './../../google.service';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { GetServiceService } from '../../service/get-service.service';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog   } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-arboles',
  standalone: true,
  imports: [FooterComponent,CommonModule,MatIconModule,ReactiveFormsModule],
  templateUrl: './arboles.component.html',
  styleUrl: './arboles.component.scss',
})
export class ArbolesComponent {
  //instanciamos la variable que va almacenar la respuesta del servicio
  listaArboles : any = [];
  imgArbol : string = "";
  listImg: any [] = [];
  i: number = 0;
  cantImg : number = 0;
  form :FormGroup;
  constructor(private get:GetServiceService,private map : GoogleService,public dialog: MatDialog
    ,private fb:FormBuilder, private p:PostService){

      //validamos los cambios sufridos en el formulario
    this.form = this.fb.group({
      textarea: ['', Validators.required],
      ArbolSelect_: ['', Validators.required],
    });
    //al construirse el sitio le indicamos los servicios que debera llamar
    this.get.getArboles().subscribe((res:any)=>{
      this.listaArboles = res;
      if(this.listaArboles[0] !== undefined){
        const e = this.listaArboles[0];
        let idArbol = e.arbol_id;
        let idUbi   = e.ubicacion_id;
        this.ObtenerImagenes(Number(idArbol));
        this.ObtenerCoordenadas(Number(idUbi));
        this.form.patchValue({ArbolSelect_ : idArbol});
      }
    });
  }

  //funcion de obtener imagenes y la cant de la misma
  async ObtenerImagenes(id:number){
    this.get.getImg(id).subscribe((res:any)=>{
      this.cantImg=0;
        this.i = 0;
        this.listImg = [];
      res.forEach((element: any) => {
        this.cantImg++;
        this.listImg.push(element.url_foto);
      });
      this.imgArbol= this.listImg[this.i];
    });
  }

  //funcion de obtencion de coordenadas por ubicacion
  async ObtenerCoordenadas(idUbicacion:number){
     this.get.getCoordenadas(idUbicacion).subscribe((res:any)=>{
        //llammos al servicio de googlemap y le entregamos los datos
        this.map.initMap(Number(res[0].latitud),Number(res[0].longitud))
      });
  }

  //funcion para comportamiento de img siguiente
  nextImg(){
    this.i = this.i+1;
    if(this.i < this.cantImg){
      this.imgArbol= this.listImg[this.i];
    }
    else{
      this.i = 0;
      this.imgArbol= this.listImg[this.i];
    }
  }

  //funcion para comportamiento de img previa
  prevImg(){
    this.i = this.i-1;
    if(this.i > 0 && this.i <= this.cantImg){
      this.imgArbol= this.listImg[this.i];
    }
    else{
      this.i = 0;
      this.imgArbol= this.listImg[this.i];
    }
  }

  //funcion al cambiar el select y con ello cambiar imaganes y mapa
  cambiarArbol(event:any){
    this.openDialog('1ms', '1ms');
    var a = event.target.value;
    try{
      //obtencion de imagen(es) y entrega(r) la(s) url a la array para entregar despues al element img
      this.ObtenerImagenes(Number(a));
       this.get.getIdUbi(Number(a)).toPromise().then((res:any)=>{
        if(res !== undefined){
          this.ObtenerCoordenadas(res[0].ubicacion_id).then((res)=>{
            //cerramos el dialog si llega una respuesta
            setTimeout(()=>{this.dialog.closeAll()},1000);
          });
        }
      });
      setTimeout(()=>{this.dialog.closeAll()},1000);
    }
    catch(e){
      this.dialog.closeAll();
      alert(e)
    }
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      position: { top: '15%' }, //margin top de la posicion que tendra el modal
      //backdropClass: 'modalDialog', //que se asemeje al modal de boostrap
      disableClose: true,
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  //envio del formulario
  enviar(){
    if(this.form.invalid){
      alert('Comentario Obligatorio!!');
    }
    else{
      let idArb = this.form.value.ArbolSelect_;
      let comment = this.form.value.textarea;
      const item = {id:idArb,comm:comment};
      this.p.postComentar(item).subscribe((res)=>{
        console.log(res);
      });
    }
  }

}
