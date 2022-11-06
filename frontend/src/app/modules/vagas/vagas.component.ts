import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVaga } from './model/IVaga';
import { VagaService } from './service/vaga.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {
  
  searchIcon: string = 'assets/icons/search.svg';
  vagas: IVaga[] = [];

  constructor(
    private vagaService: VagaService,
    private route: ActivatedRoute
  ) {
    
    const queryParams = this.route.snapshot.queryParamMap;
    const pesquisa = queryParams.get('pesquisa')?.toLowerCase();

    this.findVagas(pesquisa);
  }

  ngOnInit(): void {
  }

  findVagas(pesquisa: any) {
    this.vagaService.findVagas(pesquisa).subscribe(
      vagas => this.vagas = vagas
    );
  }

  showVagas() {
    console.log(this.vagas);
  }

}
