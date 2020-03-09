import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { LiveUpdateService } from 'src/app/shared/services/live-update.service';
import { DatadaseHandlerService } from 'src/app/shared/services/datadase-handler.service';
import { CountryService } from 'src/app/shared/services/location/country.service';

@Component({
  selector: 'app-psp-list',
  templateUrl: './psp-list.component.html',
  styleUrls: ['./psp-list.component.scss']
})
export class PspListComponent implements OnInit {
  displayedColumns = ['id', 'name', 'city', 'address', 'email', 'action'];
  dataSource: MatTableDataSource<User>;
  modalOption: NgbModalOptions = {};
  isLoading = true;
   userId:number;
  users: User[] = [];
  countries:{};
  confirmResut: any;
  statusChanged = false;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  constructor(private modalService: NgbModal,
    private auth: AuthService,
    private router: Router,
    private _userService: UserService,
    private _liveUpdateService: LiveUpdateService,
    private _dbHandler: DatadaseHandlerService,
    private _countryService:CountryService
  ) {
    this._liveUpdateService.getUpdate().subscribe(success => { this.getPOS() });
    this.getPOS();
  }
  ngOnInit() {
    if (!this.auth.isUserLoggedIn()) {
      this.router.navigate(['/login']);
    }
   this.getCountries();
  }
  getPOS() {
    this._userService.getAllPSPs().subscribe((success: any) => {
      this.isLoading = false;
      this.users = success.success;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => { this.isLoading = false; });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  onSelect(id)
    {
      console.log(id)
      console.log(this.countries);
    }
    getCountries() { this._countryService.getCountryData().subscribe(data => { this.countries = data 
    }) }
 /* open(content,id:number){
    this.userId=id;
  
   // console.log(id);
      //this.modalOption.backdrop = 'static';
      //this.modalOption.keyboard = false;
      //this.modalOption.windowClass = 'edit-modal right  animated fadeInRight';
      this.modalService.open(content, this.modalOption)
        .result.then((result) => { this._userService.userValue(id).subscribe(success =>{
          //console.log(id);
        });
      
     }, (reason) => {
          console.log('Err!', reason);
        });
    } */
    
  confirm(content,id) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
      .result.then((result) => {
        this.confirmResut = `Closed with: ${result}`;
        this._userService.deleteUser(id).subscribe(success => {
          alert(" delete psp Successfully");
          this._liveUpdateService.setUpdate("Delete");
        });
      }, (reason) => {
        this.confirmResut = `Dismissed with: ${reason}`;
      });
  }
  statuApprove(id) {
    this._userService.status(id).subscribe(success => {
      this.statusChanged = true;
      this._liveUpdateService.setUpdate('status');
    });
  }
  cretaeDB(id) {
    this._dbHandler.createPOSDB(id).subscribe(data=>{
      console.log("Ok");
    })
  }
}
