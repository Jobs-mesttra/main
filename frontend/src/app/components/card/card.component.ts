import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() cargo: any;
  @Input() linkVaga: any;
  @Input() empresa: any;
  @Input() nivelVaga: any;
  @Input() detalheVaga: any;
  @Input() localidade: any;
  @Input() dataPublicacao: any;

}
