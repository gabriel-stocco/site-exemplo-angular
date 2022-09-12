import { Component, OnInit} from '@angular/core';
import { ApiServiceService } from 'src/app/api-rick-and-morty/service/api-service.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent implements OnInit {

  characters: Array<any> = []

  constructor(private apiCard: ApiServiceService) { }

  ngOnInit(): void {
    this.getCard()
  }
  
  getCard(pag: number = 1){
    this.characters.splice(0, this.characters.length);
    this.apiCard.getCardService(pag).subscribe(result => {
      this.characters = result.results
    })
  }

}
