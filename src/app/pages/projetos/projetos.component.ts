import { Component, NgModule, OnInit } from '@angular/core';
import { ProjetosService } from 'src/app/projetos.service';


@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})

export class ProjetosComponent implements OnInit {
[x: string]: any;

  repositorio: any[] = [];
  dadosUnicos: any[] = [];
  dataCount!: number;
  pagina: number = 1;

  constructor(private projetoService: ProjetosService){}

    ngOnInit() {
      this.projetoService.getProjeto().subscribe((data) => {; this.repositorio = data;});
      this.projetoService.getDataCount().subscribe(count => this.dataCount = count);

      // this.dadosUnicos = this.filterUniqueData(this.repositorio);

      // this.loadData();
      }


      // filterUniqueData(repositorio: any[]): any[] {
      //   return repositorio.filter((value, index, self) => self.findIndex(v => v.language === value.language) === index);

      // }

      // loadData() {
      //   this.projetoService.getPaginatedData(this.pagina, 5).subscribe(res => {
      //     this.repositorio = res.repositorio;
      //   });
      // }

      
      // filtrarLinguagens(language:string) {
      //   this.dadosFiltrados = this.repositorio.filter((data) => data.language === language);
      // } 

  }