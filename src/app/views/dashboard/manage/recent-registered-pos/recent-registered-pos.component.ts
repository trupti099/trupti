import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recent-registered-pos',
  templateUrl: './recent-registered-pos.component.html',
  styleUrls: ['./recent-registered-pos.component.scss']
})
export class RecentRegisteredPosComponent implements OnInit {


  displayedColumns = ['name', 'city','address'];
  dataSource: MatTableDataSource<UserData>;
  modalOption: NgbModalOptions = {};
  constructor(private modalService:NgbModal) { 
    const users: UserData[] = [];
    for (let i = 1; i <= 5; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
  }

 
}
  
  const NAMES = ['Kalavad Rd', 'Yagnik Rd', 'Gondal Rd', '150ft Ring Rd', 'Sadhuvashvani Rd'];
  const CITY = ['Rajkot', 'Rajkot', 'Rajkot', 'Rajkot', 'Rajkot', 'Rajkot',
    'Rajkot', 'Rajkot', 'Rajkot', 'Rajkot', 'Rajkot', 'Rajkot',
    'Rajkot', 'Rajkot', 'Rajkot', 'Rajkot', 'Rajkot', 'Rajkot', 'Rajkot'];
  const ADDRESS = ['1001 Corporate Levels Nr. Ayodhya Chowk 150 ft. Ring Road', '1001 Corporate Levels Nr. Ayodhya Chowk 150 ft. Ring Road', '1001 Corporate Levels Nr. Ayodhya Chowk 150 ft. Ring Road', '1001 Corporate Levels Nr. Ayodhya Chowk 150 ft. Ring Road', '1001 Corporate Levels Nr. Ayodhya Chowk 150 ft. Ring Road', '1001 Corporate Levels Nr. Ayodhya Chowk 150 ft. Ring Road',
    '1001 Corporate Levels Nr. Ayodhya Chowk 150 ft. Ring Road', '1001 Corporate Levels Nr. Ayodhya Chowk 150 ft. Ring Road', '1001 Corporate Levels Nr. Ayodhya Chowk 150 ft. Ring Road', '1001 Corporate Levels Nr. Ayodhya Chowk 150 ft. Ring Road', '1001 Corporate Levels Nr. Ayodhya Chowk 150 ft. Ring Road', '1001 Corporate Levels Nr. Ayodhya Chowk 150 ft. Ring Road',
    '1001 Corporate Levels Nr. Ayodhya Chowk 150 ft. Ring Road', '1001 Corporate Levels Nr. Ayodhya Chowk 150 ft. Ring Road', '1001 Corporate Levels Nr. Ayodhya Chowk 150 ft. Ring Road', '1001 Corporate Levels Nr. Ayodhya Chowk 150 ft. Ring Road', '1001 Corporate Levels Nr. Ayodhya Chowk 150 ft. Ring Road', '1001 Corporate Levels Nr. Ayodhya Chowk 150 ft. Ring Road', '1001 Corporate Levels Nr. Ayodhya Chowk 150 ft. Ring Road'];
  
  export interface UserData {
    name: string;
    city: string;
    address: string;
  }
  



function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
  
  const city=CITY[Math.round(Math.random() * (CITY.length - 1))]
  const address = ADDRESS[Math.round(Math.random() * (ADDRESS.length - 1))]
   return {
    // id: id.toString(),
    name: name,
    city: city,
    address: address,
  };
}